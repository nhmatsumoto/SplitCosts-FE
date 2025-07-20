type IncomeStat = {
    label: string;
    value: number;
};

type IncomeStatsProps = {
    total: number;
    recurring: number;
    unique: number;
};

const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const IncomesSummary = ({ total, recurring, unique }: IncomeStatsProps) => {
    const stats: IncomeStat[] = [
        { label: 'Total Recebido', value: total },
        { label: 'Rendimentos Recorrentes', value: recurring },
        { label: 'Rendimentos Únicos', value: unique },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((item, idx) => (
                <div
                    key={idx}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
                >
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-lg font-semibold">{formatCurrency(item.value)}</div>
                </div>
            ))}
        </div>
    );
};

export default IncomesSummary;
