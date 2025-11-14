

export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
} : {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = true;

    
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div className="flex gap-4 mt-4">
                <div className="flex flex-col">
                    <div className="">{users}</div>
                    <div className="">{revenue}</div>
                </div>
                <div className="flex flex-1">{notifications}</div>
            </div>
            
        </div>
    ) : (
        login
    )
}



