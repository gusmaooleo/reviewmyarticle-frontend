export default function SubscribeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12 w-full h-full gap-4 items-center justify-center">
      {children}
    </div>
  );
}
