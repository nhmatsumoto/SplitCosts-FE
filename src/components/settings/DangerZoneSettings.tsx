import { Trash } from 'lucide-react';

interface Props {
    onDeleteResidence?: () => void;
    onDeleteAccount?: () => void;
}

const DangerZoneSettings = ({ onDeleteResidence, onDeleteAccount }: Props) => (
    <div className="rounded-xl border border-red-200 bg-white shadow-lg transition-shadow hover:shadow-xl w-full">
        <div className="p-6 border-b border-red-100">
            <div className="flex items-center space-x-3">
                <Trash size={20} className="text-red-600" />
                <h3 className="text-2xl font-bold text-red-600 tracking-tight">Zona de Perigo</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">Ações irreversíveis que afetam sua conta</p>
        </div>
        <div className="p-6 space-y-4">
            <DangerAction
                label="Excluir Residência"
                description="Remove permanentemente esta residência e todos os dados associados"
                onClick={onDeleteResidence}
            />
            <DangerAction
                label="Excluir Conta"
                description="Remove permanentemente sua conta e todos os dados"
                onClick={onDeleteAccount}
            />
        </div>
    </div>
);

interface DangerActionProps {
    label: string;
    description: string;
    onClick?: () => void;
}

const DangerAction = ({ label, description, onClick }: DangerActionProps) => (
    <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50/50 transition-colors hover:bg-red-50">
        <div className="space-y-1">
            <label className="text-sm font-medium text-red-600">{label}</label>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 transition-all focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={onClick}
        >
            Excluir
        </button>
    </div>
);

export default DangerZoneSettings;
