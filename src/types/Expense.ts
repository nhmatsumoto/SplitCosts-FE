export type Expense = {
    id: string;
    name: string;
    amount: number;
    status: 'Pago' | 'Pendente';
};