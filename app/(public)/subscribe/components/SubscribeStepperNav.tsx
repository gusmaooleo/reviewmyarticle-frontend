"use client";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { Check, LoaderCircleIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { AddressPayment, PersonalData, Confirmation } from "./steps";
import { SubscribeForm, SubscribeSchema } from "@/types/subscribe-form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateStep } from "@/lib/subscribe/subscribe.helpers";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { fileToBase64 } from "@/lib/utils/fileToBase64";
import { UserService } from "@/lib/user/user.service";

type ISteps = {
  title: string;
  component: React.ReactNode;
};

export default function SubscribeStepperNav({
  congressToSubscribe,
}: {
  congressToSubscribe: number;
}) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const router = useRouter();
  const userService = new UserService();

  const methods = useForm<SubscribeForm>({
    resolver: zodResolver(SubscribeSchema),
    mode: "onTouched",
    defaultValues: {
      isReviewer: false,
      country: "Brasil",
    },
  });

  const onNext = async () => {
    console.log(currentStep);
    console.log(methods.getValues());
    const ok = await validateStep(currentStep as 1 | 2 | 3, methods);
    console.log(ok);
    if (ok) setCurrentStep((s) => Math.min(s + 1, 3));
  };

  const submitForm = methods.handleSubmit(
    async (data) => {
      const image = await fileToBase64(data.profilePic.file);
      data.profilePic = image;
      await userService.createUser(data, congressToSubscribe);
      toast.success("Inscrição feita com sucesso!");
      router.push("/review")
    },
    (errors) => {
      console.log(errors);
      toast.error("Erro ao realizar inscrição", {
        description:
          "Verifique se todos os campos foram preenchidos corretamente.",
      });
    }
  );

  const steps: ISteps[] = [
    { title: "Dados pessoais", component: <PersonalData /> },
    { title: "Endereço e pagamento", component: <AddressPayment /> },
    { title: "Confirmação", component: <Confirmation /> },
  ];

  return (
    <FormProvider {...methods}>
      <Stepper
        value={currentStep}
        // onValueChange={setCurrentStep}
        indicators={{
          completed: <Check className="size-4" />,
          loading: <LoaderCircleIcon className="size-4 animate-spin" />,
        }}
        className="flex flex-col gap-[6rem] h-full"
      >
        {/* Navigation component - switch between 3 pre-seted steps */}
        <StepperNav>
          {steps.map((step, index) => (
            <StepperItem
              key={index}
              step={index + 1}
              className="relative flex-1 items-start"
            >
              <StepperTrigger className="flex flex-col gap-2.5">
                <StepperIndicator className="text-white bg-(--default-dark) data-[state=completed]:bg-(--primary-light-blue)">
                  {index + 1}
                </StepperIndicator>
                <StepperTitle>{step.title}</StepperTitle>
              </StepperTrigger>

              {steps.length > index + 1 && (
                <StepperSeparator
                  className="
                    bg-(--default-dark) 
                    absolute top-3 inset-x-0 left-[calc(50%+0.875rem)] m-0 
                    group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] 
                    group-data-[orientation=horizontal]/stepper-nav:flex-none 
                    group-data-[state=completed]/step:bg-(--primary-light-blue)"
                />
              )}
            </StepperItem>
          ))}
        </StepperNav>

        {/* Main content - forms etc. */}
        <StepperPanel className="text-sm h-full">
          {steps.map((step, index) => (
            <StepperContent
              key={index}
              value={index + 1}
              className="flex items-center justify-center"
            >
              {step.component}
            </StepperContent>
          ))}
        </StepperPanel>

        {/* Footer - previous <-> next buttons */}
        <div className="flex items-center justify-between gap-2.5">
          <Button
            variant="outline"
            type="button"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 1}
          >
            Anterior
          </Button>
          {currentStep === steps.length ? (
            <Button type="button" onClick={submitForm}>
              Finalizar
            </Button>
          ) : (
            <Button type="button" variant="outline" onClick={onNext}>
              Próximo -&gt;
            </Button>
          )}
        </div>
      </Stepper>
    </FormProvider>
  );
}
