export function TranslucentBoxContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="
      col-span-12
      md:col-span-10 md:col-start-2
      lg:col-span-10 lg:col-start-2
      xl:col-span-6 xl:col-start-4
      flex flex-col gap-4 h-[100vh] sm:h-fit 
      bg-(--background)/50 sm:rounded-2xl shadow-lg backdrop-blur-md
      py-20 sm:py-6 p-6"
    >
      {children}
    </div>
  );
}
