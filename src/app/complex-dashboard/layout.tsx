export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div className="w-9/12">
      <div className="container mx-auto p-4 border-1">
        <div className="mb-6">{children}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full">{users}</div>
          <div className="w-full">{revenue}</div>

          <div className="w-full md:col-span-2 lg:col-span-1">{notifications}</div>
        </div>
      </div>
    </div>
  ) : (
    login
  );
}
