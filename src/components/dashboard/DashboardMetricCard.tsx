import type { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  valueColor?: string;
}

const DashboardMetricCard = ({
  title,
  value,
  icon,
  description,
  valueColor,
}: MetricCardProps) => (
  <div className="rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="p-6 flex items-center justify-between pb-2">
      <h3 className="text-sm font-semibold tracking-wide text-gray-700">{title}</h3>
      <div className="text-gray-500">{icon}</div>
    </div>
    <div className="p-6 pt-0">
      <div className={`text-3xl font-extrabold ${valueColor || "text-gray-900"}`}>
        {value}
      </div>
      {description && <p className="mt-1 text-xs text-gray-400">{description}</p>}
    </div>
  </div>
);

export default DashboardMetricCard;
