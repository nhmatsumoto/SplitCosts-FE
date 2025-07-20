import Header from "../../components/members/Header";
import InvitationsTable from "../../components/members/InvitationsTable";
import MembersTable from "../../components/members/MembersTable";
import Metrics from "../../components/members/Metrics";


const Members = () => {
    return (
        <main className="space-y-6">
            <Header title="Membros" />
            <Metrics />
            <div className="grid gap-4 md:grid-cols-2">
                <MembersTable />
                <InvitationsTable />
            </div>
        </main>
    );
};

export default Members;
