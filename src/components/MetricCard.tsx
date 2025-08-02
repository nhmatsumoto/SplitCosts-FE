import type { ReactNode } from "react";

interface MetricCardProps {
    title: string;
    value: string;
    icon?: ReactNode;
    description?: string;
    valueColor?: string;
}

const MetricCard = ({ title, value, icon, description, valueColor }: MetricCardProps) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-lg space-y-3">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
                {icon && <div className="rounded-full bg-gray-100 p-2">{icon}</div>}
            </div>
            <div className={`text-3xl font-bold ${valueColor ?? "text-gray-900"}`}>{value}</div>
            {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
    );
};

export default MetricCard;
