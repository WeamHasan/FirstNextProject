

export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications
} : {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {
    return (
        <div>
            <div>{children}</div>
            <div className="flex gap-4 mt-4">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-1">{notifications}</div>
            </div>
        </div>
    )
}