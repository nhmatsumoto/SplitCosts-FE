export type ExpenseItem = {
    id: string;
    name: string;
    amount: number;
    status: 'Pago' | 'Pendente';
};