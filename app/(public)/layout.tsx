import GradientCanvas from "@/components/canvas/GradientCanvas";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GradientCanvas>{children}</GradientCanvas>;
}
