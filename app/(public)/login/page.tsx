import LoginForm from "./components/LoginForm";
import LoginAbstracts from "./components/Abstracts";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-12 min-h-screen w-full overflow-hidden">
      <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 flex">
        <LoginForm />
      </div>
      <div className="hidden md:block md:col-span-6 lg:col-span-6 xl:col-span-8">
        <LoginAbstracts />
      </div>
    </div>
  );
}
