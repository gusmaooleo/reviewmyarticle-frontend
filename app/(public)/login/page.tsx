import { TopLeftCornerIcon } from "@/components/greetings/TopLeftCornerIcon";
import LoginForm from "./components/LoginForm";
import LoginAbstracts from "./components/Abstracts";

export default function LoginPage() {
  return (
    <>
      <TopLeftCornerIcon />
      <div className="flex flex-row w-full h-full items-center justify-start overflow-hidden">
        <LoginForm />
        <LoginAbstracts />
      </div>
    </>
  );
}
