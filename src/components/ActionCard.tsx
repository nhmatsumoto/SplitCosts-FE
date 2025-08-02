import { clsx } from 'clsx';
import React from 'react';

interface ActionCardProps {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color?: 'green' | 'red' | 'blue' | 'yellow' | 'purple';
    onClick: () => void;
}

const ActionCard = ({ title, icon: Icon, color = 'blue', onClick }: ActionCardProps) => {
    const bgColor = {
        green: 'bg-green-100 hover:bg-green-200 text-green-700',
        red: 'bg-red-100 hover:bg-red-200 text-red-700',
        blue: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
        yellow: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700',
        purple: 'bg-purple-100 hover:bg-purple-200 text-purple-700',
    }[color];

    return (
        <div
            onClick={onClick}
            className={clsx(
                'cursor-pointer rounded-xl p-6 shadow-sm transition-colors flex flex-col items-center justify-center gap-3 w-38 h-30 border border-gray-200',
                bgColor
            )}
        >
            <Icon scale={36} />
            <span className="text-lg font-medium">{title}</span>
        </div>
    );
};

export default ActionCard;
