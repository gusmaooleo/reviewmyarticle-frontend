import GradientCanvas from "@/components/canvas/GradientCanvas";
import { TopLeftCornerIcon } from "@/components/greetings/TopLeftCornerIcon";
import { Button } from "@/components/ui/button";
import login_vector from '@/public/image-login-greetings.svg';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <GradientCanvas>
      <TopLeftCornerIcon />
      <div className="flex flex-col w-full h-full items-center justify-center gap-4 px-5">
        <div className="relative flex w-[320px] h-[400px]">
          <Image src={login_vector} alt="login-vector" fill={true} />
        </div>
        <h1 className="text-center font-semibold text-xl text-(--darkgray)">Inscreva-se para o ReviewMyArticle!</h1>
        <Link href='/congress'>
          <Button variant={'light'}>Iniciar -&gt;</Button>
        </Link>
        <div className="text-lg text-center font-semibold">
          <p className="text-(--darkgray)">Ou se já possui cadastro</p>
          <Link href={'/login'} className="text-(--primary-light-blue)">
            <p className="underline">Entrar</p>
          </Link>
        </div>
      </div>
    </GradientCanvas>
  );
}
