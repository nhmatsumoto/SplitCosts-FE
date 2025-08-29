import { useState } from "react";
import Modal from "../Modal";
import ExpenseForm from "../forms/ExpenseForm";
import IncomeForm from "../forms/IncomeForm";
import InviteUserForm from "../forms/InviteUserForm";
import ResidenceForm from "../forms/ResidenceForm";

interface ModalsProps {
    modalType: "income" | "expense" | "inviteUser" | "residence" | "investment" | null;
    closeModal: () => void;
}

const expenseTypes = [
    { value: "FIXED", label: "Fixa" },
    { value: "VARIABLE", label: "Variável" },
];

const categories = [
    { value: "FOOD", label: "Alimentação" },
    { value: "UTILITIES", label: "Contas" },
];

const residences = [{ value: "abc-123", label: "Residência 1" }];
const users = [
    { value: "user-1", label: "Hiro" },
    { value: "user-2", label: "Naoko" },
];

const DashboardModals = ({ modalType, closeModal }: ModalsProps) => {
    const [showIncomeForm, setShowIncomeForm] = useState(false);

    const handleIncomeSubmit = (data: { description: string; amount: number }) => {
        console.log("Income submitted:", data);
        setShowIncomeForm(false);
        closeModal();
    };

    const handleExpenseSubmit = (data: any) => {
        console.log("Expense submitted:", data);
        closeModal();
    };

    const handleInviteSubmit = (email: string) => {
        console.log("Invite sent to:", email);
        closeModal();
    };

    const handleResidenceSubmit = (data: any) => {
        console.log("Residence created:", data);
        closeModal();
    };

    return (
        <>
            <Modal
                isOpen={modalType === "income"}
                onClose={closeModal}
                title="Adicionar Receita"
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Lista de Entradas</h3>
                    <button
                        onClick={() => setShowIncomeForm(!showIncomeForm)}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                        {showIncomeForm ? "Fechar Formulário" : "Nova Entrada"}
                    </button>
                </div>
                {showIncomeForm && (
                    <div className="mb-6">
                       <IncomeForm
                            onSubmit={handleIncomeSubmit}
                            categories={categories}
                            residences={residences}
                            users={users}
                        />
                    </div>
                )}
            </Modal>

            <Modal
                isOpen={modalType === "expense"}
                onClose={closeModal}
                title="Adicionar Despesa"
            >
                <ExpenseForm
                    onSubmit={handleExpenseSubmit}
                    expenseTypes={expenseTypes}
                    categories={categories}
                    residences={residences}
                    users={users}
                />
            </Modal>

            <Modal
                isOpen={modalType === "inviteUser"}
                onClose={closeModal}
                title="Convidar Usuário"
            >
                <InviteUserForm onSubmit={handleInviteSubmit} />
            </Modal>

            <Modal
                isOpen={modalType === "residence"}
                onClose={closeModal}
                title="Residência"
            >
                <ResidenceForm onSubmit={handleResidenceSubmit} />
            </Modal>

            <Modal
                isOpen={modalType === "investment"}
                onClose={closeModal}
                title="Investimentos"
            >
                <div className="text-center text-gray-600">Em breve...</div>
            </Modal>
        </>
    );
};

export default DashboardModals;
