import { useState } from 'react';
import Toast from './Toast';

interface ToastMessage {
    id: number;
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
}

let toastId = 0;

export const useToasts = () => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const showToast = (message: string, type?: ToastMessage['type']) => {
        const id = toastId++;
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 4000);
    };

    const ToastContainer = () => (
        <div className="fixed top-4 right-4 space-y-2 z-50">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() =>
                        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                    }
                />
            ))}
        </div>
    );

    return { showToast, ToastContainer };
};
