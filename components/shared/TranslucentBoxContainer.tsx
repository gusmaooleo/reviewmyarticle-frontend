export function TranslucentBoxContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="
      col-span-12
      md:col-span-6 md:col-start-4
      lg:col-span-4 lg:col-start-5
      flex flex-col gap-4 h-[100vh] sm:h-[780px] 
      bg-(--background)/80 sm:rounded-2xl shadow-lg 
      py-20 sm:py-4 p-4"
    >
      {children}
    </div>
  );
}
