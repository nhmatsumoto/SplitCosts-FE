import MembersTable from "../../components/members/MembersTable";
import Metrics from "../../components/members/MembersMetrics";
import MembersInvitationsTable from "../../components/members/MembersInvitationsTable";
import Header from "../../components/Header";


const Members = () => {
    function handleButtonClick(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <main className="space-y-6">
            <Header
                title="Members"
                description="Gerencie os membros da sua residência"
                buttonLabel="Adicionar Membro"
                onButtonClick={() => handleButtonClick()}
                buttonClassName="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            />
            <Metrics />
            <div className="grid gap-4 md:grid-cols-2">
                <MembersTable />
                <MembersInvitationsTable />
            </div>
        </main>
    );
};

export default Members;
