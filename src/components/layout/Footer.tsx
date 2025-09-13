const Footer = () => {
    return (
        <footer className="w-full bg-white text-gray-700 px-6 py-4 border-t border-gray-200 flex justify-center items-center">
            <span className="text-sm">&copy; {new Date().getFullYear()} SplitCosts. Todos os direitos reservados.</span>
        </footer>
    );
};

export default Footer;
