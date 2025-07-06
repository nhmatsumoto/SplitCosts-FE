import { DashboardActions } from "../../components/DashboardActions"

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <DashboardActions />
      </div>
    </main>
  );
};

export default Dashboard;
