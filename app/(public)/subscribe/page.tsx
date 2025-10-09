import { TranslucentBoxContainer } from "@/components/shared/TranslucentBoxContainer";
import SubscribeStepperNav from "./components/SubscribeStepperNav";
import { redirect } from "next/navigation";


export default async function SubscribePage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams
  if (!id) {
    redirect("/congress")
  }
  
  const congressId = parseInt(id);
  if (typeof congressId !== "number") {
    redirect("/congress");
  }

  return (
    <TranslucentBoxContainer>
      <SubscribeStepperNav congressToSubscribe={congressId} />
    </TranslucentBoxContainer>
  );
}
