import GradientCanvas from "@/components/canvas/GradientCanvas";
import { TopLeftCornerIcon } from "@/components/greetings/TopLeftCornerIcon";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GradientCanvas>
      <TopLeftCornerIcon />
      {children}
    </GradientCanvas>
  );
}
