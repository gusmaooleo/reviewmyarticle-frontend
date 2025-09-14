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
import { useState } from "react";
import AddressPayment from "./steps/AddressPayment";
import Confirmation from "./steps/Confirmation";
import PersonalData from "./steps/PersonalData";

type ISteps = {
  title: string;
  component: React.ReactNode;
};

const steps: ISteps[] = [
  { title: "Dados pessoais", component: <PersonalData /> },
  { title: "Endereço e pagamento", component: <AddressPayment /> },
  { title: "Confirmação", component: <Confirmation /> },
];

export default function SubscribeStepperNav() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const submitForm = () => {
    console.log("sdalkdlask");
  };

  return (
    <Stepper
      value={currentStep}
      onValueChange={setCurrentStep}
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
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Anterior
        </Button>
        <Button
          variant={currentStep === steps.length ? "default" : "outline"}
          onClick={() =>
            currentStep === steps.length
              ? submitForm()
              : setCurrentStep((prev) => prev + 1)
          }
        >
          {currentStep === steps.length ? "Finalizar" : "Próximo ->"}
        </Button>
      </div>
    </Stepper>
  );
}
