import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-slate-800 flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="dark:bg-slate-800 flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}