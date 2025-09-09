import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-[650px] h-full bg-(--background) lg:rounded-r-3xl shadow-xl">
      <div className="flex flex-col px-[6rem] py-[10rem] gap-[38px] items-center">
        <div className="flex w-full justify-start">
          <h1 className="font-bold text-3xl text-(--default-dark)">Login</h1>
        </div>
        <Image
          src={"/login-vector-abstract.svg"}
          alt="login-vector-abstract"
          width={400}
          height={300}
        />
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="mail@exemplo.com" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Senha</Label>
          <Input type="password" id="email" />
          <div className="flex w-full justify-end">
            <Link href={"/forgot-password"} className="underline">
              Esqueci a senha
            </Link>
          </div>
        </div>

        <Button className="w-fit font-medium">Entrar</Button>

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
