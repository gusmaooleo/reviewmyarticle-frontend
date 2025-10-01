"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { Input } from "@/components/ui/scn-input";
import { UserService } from "@/lib/user/user.service";
import { ILoginForm, LoginSchema } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginForm() {
  const methods = useForm<ILoginForm>({
    resolver: zodResolver(LoginSchema),
    mode: "onTouched",
  });
  const userService = new UserService();
  const router = useRouter();

  const submitForm = methods.handleSubmit(
    async (data) => {
      const success = await userService.logInUser(data);
      if (success) {
        toast.success("Login realizado com sucesso!", {
          onAutoClose: () => router.push("/articles"),
        });
      }
    },
    (errors) => {
      toast.error(
        "Erro ao realizar login, verifique os dados passados no formulário e tente novamente."
      );
    }
  );

  return (
    <div className="h-full bg-(--background) lg:rounded-r-3xl shadow-xl w-full">
      <div className="flex flex-col px-[6rem] lg:py-[10rem] py-[5rem] gap-[38px] items-center">
        <div className="flex w-full justify-start">
          <h1 className="font-bold text-3xl text-(--default-dark)">Login</h1>
        </div>
        <Image
          src={"/login-vector-abstract.svg"}
          alt="login-vector-abstract"
          width={400}
          height={300}
        />
        <FormProvider {...methods}>
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="login">Email</Label>
            <Input
              type="email"
              id="login"
              {...methods.register("login")}
              placeholder="mail@exemplo.com"
            />
            {methods.formState.errors.login && (
              <p className="text-red-500 text-xs">
                {String(methods.formState.errors.login.message)}
              </p>
            )}
          </div>

          <div className="grid w-full items-center gap-3">
            <Label htmlFor="password">Senha</Label>
            <PasswordInput id="password" {...methods.register("password")} />
            {methods.formState.errors.password && (
              <p className="text-red-500 text-xs">
                {String(methods.formState.errors.password.message)}
              </p>
            )}
            <div className="flex w-full justify-end">
              <Link href={"/forgot-password"} className="underline">
                Esqueci a senha
              </Link>
            </div>
          </div>

          <Button onClick={submitForm} className="w-fit font-medium">
            Entrar
          </Button>
        </FormProvider>

        <div className="flex flex-col gap-3 items-center">
          <h1>Ou se ainda não possui conta</h1>
          <Link
            href={"/subscribe"}
            className="underline text-(--primary-light-blue)"
          >
            Inscrever-me
          </Link>
        </div>
      </div>
    </div>
  );
}
