
export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">Menu Logado</header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}