import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,
} from 'recharts';

const sampleData = [
    { month: 'Jan', income: 5000, expense: 3200 },
    { month: 'Feb', income: 4800, expense: 3000 },
    { month: 'Mar', income: 5100, expense: 3400 },
    { month: 'Apr', income: 5300, expense: 3700 },
    { month: 'May', income: 4900, expense: 3100 },
    { month: 'Jun', income: 5500, expense: 3900 },
];

const DashboardCharts = () => {
    return (

        <div className="mt-10 w-full px-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Visão Mensal</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="text-gray-700 mb-2 font-medium">Entradas x Saídas</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={sampleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="income" stroke="#22c55e" name="Entradas" />
                            <Line type="monotone" dataKey="expense" stroke="#ef4444" name="Saídas" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="text-gray-700 mb-2 font-medium">Comparativo Mensal</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={sampleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="income" fill="#86efac" name="Entradas" />
                            <Bar dataKey="expense" fill="#fca5a5" name="Saídas" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>


    );
};

export default DashboardCharts;
