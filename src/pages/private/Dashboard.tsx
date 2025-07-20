import { useState } from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardContent from "../../components/dashboard/DashboardContent";
import DashboardModals from "../../components/dashboard/DashboardModals";

const Dashboard = () => {
    const [modalType, setModalType] = useState<"income" | "expense" | "inviteUser" | "residence" | "investment" | null>(null);
    const closeModal = () => setModalType(null);

    return (
        <>
            <DashboardHeader />
            <DashboardContent />
            <DashboardModals modalType={modalType} closeModal={closeModal} />
        </>
    );
};

export default Dashboard;
