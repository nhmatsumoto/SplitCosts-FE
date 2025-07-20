const Metrics = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
                <p className="text-sm text-muted-foreground">Total de membros</p>
                <p className="text-2xl font-bold">124</p>
            </div>
            <div className="rounded-xl border p-4">
                <p className="text-sm text-muted-foreground">Convidados pendentes</p>
                <p className="text-2xl font-bold">8</p>
            </div>
            <div className="rounded-xl border p-4">
                <p className="text-sm text-muted-foreground">Ativos este mês</p>
                <p className="text-2xl font-bold">96</p>
            </div>
        </div>
    );
};

export default Metrics;
