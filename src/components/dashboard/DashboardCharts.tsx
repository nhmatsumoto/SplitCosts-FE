import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { name: "Jan", entradas: 2400, saidas: 4000 },
    { name: "Feb", entradas: 1398, saidas: 3000 },
    { name: "Mar", entradas: 9800, saidas: 2000 },
    { name: "Apr", entradas: 3908, saidas: 2780 },
    { name: "May", entradas: 4800, saidas: 1890 },
    { name: "Jun", entradas: 3800, saidas: 2390 },
    { name: "Jul", entradas: 4300, saidas: 3490 },
];

export default function DashboardCharts() {
    return (
        <div className="m-6">
            <h2 className="text-2xl font-bold mb-2">Visão Geral</h2>
            <p className="text-sm text-muted-foreground mb-6">
                Crescimento mensal em entradas e saídas
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 flex-1">
                    <h3 className="text-lg font-semibold mb-2">Entradas vs Saídas</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="entradas" stackId="a" fill="#6366f1" />
                            <Bar dataKey="saidas" stackId="a" fill="#ec4899" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 flex-1">
                    <h3 className="text-lg font-semibold mb-2">Distribuição</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data} stackOffset="expand">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={(val) => `${(val * 100).toFixed(0)}%`} />
                            <Tooltip formatter={(val: number | string) => `${(Number(val) * 100).toFixed(0)}%`} />
                            <Area type="monotone" dataKey="entradas" stackId="1" stroke="#6366f1" fill="#6366f1" />
                            <Area type="monotone" dataKey="saidas" stackId="1" stroke="#ec4899" fill="#ec4899" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
