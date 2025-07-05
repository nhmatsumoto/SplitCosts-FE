import { LoaderCircle } from 'lucide-react';

interface LoaderProps {
  message?: string;
}

const Loader = ({ message = 'Loading...' } : LoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[150px] p-4 text-center">
      <LoaderCircle size={48} className="animate-spin text-gray-600" />
      <span className="mt-3 text-gray-700 text-lg font-medium">{message}</span>
    </div>
  );
};

export default Loader;
