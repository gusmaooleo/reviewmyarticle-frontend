import GradientCanvas from "@/components/canvas/GradientCanvas";
import Image from "next/image";

export default function Home() {
  return (
    <GradientCanvas>
      <div className="absolute top-[0px] left-[0px] m-2">
        <Image src={'/logo-icon.svg'} alt="logo" width={50} height={100} />
      </div>
      <div className="flex w-full h-full items-center justify-center">
        <div>asdasd</div>
      </div>
    </GradientCanvas>
  );
}
