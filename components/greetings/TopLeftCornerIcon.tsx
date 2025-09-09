import logo from '@/public/logo-icon.svg';
import Image from "next/image";

export function TopLeftCornerIcon() {
  return (
    <div className="absolute top-[0px] left-[0px] m-2">
      <Image src={logo} alt="logo" width={45} height={100} />
    </div>
  );
}
