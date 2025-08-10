
import Modal from "../Modal";
import ExpenseForm from "../forms/ExpenseForm";

interface ModalsProps {
    modalType: "income" | "expense" | "inviteUser" | "residence" | "investment" | null;
    closeModal: () => void;
}

const RegisterExpenseModal = ({ modalType, closeModal }: ModalsProps) => {

    const handleExpenseSubmit = (data: { description: string; amount: number }) => {
        console.log("expense submitted:", data);
        closeModal();
    };

    const expenseTypes = [
        { value: "fixa", label: "Fixa" },
        { value: "variavel", label: "Variável" },
    ];

    const categories = [
        { value: "moradia", label: "Moradia" },
        { value: "alimentacao", label: "Alimentação" },
        { value: "transporte", label: "Transporte" },
        { value: "utilidades", label: "Utilidades" },
    ];

    const residences = [
        { value: "res1", label: "Casa Principal" },
        { value: "res2", label: "Apartamento" },
    ];

    const users = [
        { value: "user1", label: "João" },
        { value: "user2", label: "Maria" },
        { value: "user3", label: "Pedro" },
    ];

    
    return (
        <Modal
            isOpen={modalType === "expense"}
            onClose={closeModal}
            title="Adicionar Despesa"
        >
            <div className="mb-6">
                <ExpenseForm
                    onSubmit={handleExpenseSubmit}
                    expenseTypes={expenseTypes}
                    categories={categories}
                    residences={residences}
                    users={users}
                />
            </div>
        </Modal>
    );
};

export default RegisterExpenseModal;
