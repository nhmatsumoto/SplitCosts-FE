import LanguageSelector from "../LanguageSelector";

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
    buttonClassName = "rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
}: HeaderProps) => {
    return (
        <header className="flex items-center justify-between p-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                {description && (
                    <p className="text-sm text-muted-foreground">{description}</p>
                )}
            </div>

            <div className="flex items-center gap-4">
                {buttonLabel && onButtonClick && (
                    <button onClick={onButtonClick} className={buttonClassName}>
                        {buttonLabel}
                    </button>
                )}
                <LanguageSelector />
            </div>
        </header>
    );
};

export default Header;
