

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center 
        m-10 p-50 
        border-1 border-solid border-[#ddd] 
        shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
            {children}
        </div>
    )
}