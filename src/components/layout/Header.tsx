import LanguageSelector from "../LanguageSelector";
import LogoutButton from "../Logout";

type HeaderProps = {
    title: string;
    description?: string | null;
    buttonLabel?: string;
    onButtonClick?: () => void;
    buttonClassName?: string;
};

const Header = ({
    title,
    description,
    buttonLabel,
    onButtonClick,
    buttonClassName = "rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition",
}: HeaderProps) => {


    return (
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 p-6 bg-white shadow-sm rounded-lg">
            <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800">
                    {title}
                </h1>
                {description && (
                    <p className="text-gray-500 text-sm md:text-base">
                        {description}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-3 md:gap-4 mt-3 md:mt-0">
                {buttonLabel && onButtonClick && (
                    <button onClick={onButtonClick} className={buttonClassName}>
                        {buttonLabel}
                    </button>
                )}
                <LanguageSelector />
                <LogoutButton />
            </div>
        </header>
    );
};

export default Header;
