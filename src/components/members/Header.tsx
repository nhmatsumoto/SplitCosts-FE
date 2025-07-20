type HeaderProps = {
    title: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
};

const Header = ({ title, buttonLabel, onButtonClick }: HeaderProps) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            {buttonLabel && onButtonClick && (
                <button
                    onClick={onButtonClick}
                    className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
                >
                    {buttonLabel}
                </button>
            )}
        </div>
    );
};

export default Header;
