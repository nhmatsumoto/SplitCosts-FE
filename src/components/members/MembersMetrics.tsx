import MetricCard from "../MetricCard";

const MemberMetrics = () => {
    const stats = [
        { label: "Total de membros", value: "124" },
        { label: "Convidados pendentes", value: "8" },
        { label: "Ativos este mês", value: "96" },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((item, idx) => (
                <MetricCard
                    key={idx}
                    title={item.label}
                    value={item.value}
                    valueColor="text-gray-900"
                />
            ))}
        </div>
    );
};

export default MemberMetrics;
