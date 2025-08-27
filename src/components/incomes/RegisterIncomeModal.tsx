
import Modal from "../Modal";
import IncomeForm from "../forms/IncomeForm";

interface ModalsProps {
    modalType: "income" | "expense" | "inviteUser" | "residence" | "investment" | null;
    closeModal: () => void;
}

const RegisterIncomeModal = ({ modalType, closeModal }: ModalsProps) => {
    return (
        <Modal
            isOpen={modalType === "income"}
            onClose={closeModal}
            title="Adicionar Receita"
        >
            <div className="mb-6">
                <IncomeForm />
            </div>
        </Modal>
    );
};

export default RegisterIncomeModal;
