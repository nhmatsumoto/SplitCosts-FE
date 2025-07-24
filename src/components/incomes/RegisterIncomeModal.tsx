
import Modal from "../Modal";
import IncomeForm from "../forms/IncomeForm";

interface ModalsProps {
    modalType: "income" | "expense" | "inviteUser" | "residence" | "investment" | null;
    closeModal: () => void;
}

const RegisterIncomeModal = ({ modalType, closeModal }: ModalsProps) => {
   
    const handleIncomeSubmit = (data: { description: string; amount: number }) => {
        console.log("Income submitted:", data);
        closeModal();
    };

    return (
        <Modal
            isOpen={modalType === "income"}
            onClose={closeModal}
            title="Adicionar Receita"
        >
            <div className="mb-6">
                <IncomeForm onSubmit={handleIncomeSubmit} />
            </div>
        </Modal>
    );
};

export default RegisterIncomeModal;
