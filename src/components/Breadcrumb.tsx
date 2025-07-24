import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center text-sm text-gray-400 gap-1">
      <Link to="/" className="flex items-center gap-1 hover:text-white">
        <Home size={16} />
      </Link>

      {pathnames.map((segment, index) => {
        const fullPath = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={fullPath} className="flex items-center gap-1">
            <ChevronRight size={14} />
            {isLast ? (
              <span className="text-white capitalize">{decodeURIComponent(segment)}</span>
            ) : (
              <Link to={fullPath} className="hover:text-white capitalize">
                {decodeURIComponent(segment)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
