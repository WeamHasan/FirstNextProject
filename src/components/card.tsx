

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="
      w-full bg-rose-100 
      border border-gray-200 rounded-lg
      shadow-sm hover:shadow-lg
      transition-all duration-300 ease-in-out
      p-4 md:p-6 lg:p-8
      my-3 md:my-4 lg:my-5
      overflow-hidden
      flex flex-col
      min-h-[120px] md:min-h-[150px] lg:min-h-[180px]">
        <div className="flex flex-col flex-1 gap-2 md:gap-3 lg:gap-4">
          {children}
        </div>
      </div>
    );
}