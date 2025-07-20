const IncomeHeader = () => {
  return (
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Visão Geral de Receitas
      </h3>
      <p className="text-sm text-muted-foreground">
        Acompanhe suas entradas mensais
      </p>
    </div>
  );
};

export default IncomeHeader;
