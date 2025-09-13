const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            
            <header className="w-full bg-white shadow-md py-6 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">SplitCosts</h1>
                <nav className="space-x-6">
                    <a href="#features" className="text-gray-700 hover:text-blue-600">Funcionalidades</a>
                    <a href="#pricing" className="text-gray-700 hover:text-blue-600">Preços</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
                </nav>
            </header>

            <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 md:px-16 lg:px-32 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="max-w-lg">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Organize sua vida em casa de forma inteligente
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Com o SplitCosts, você gerencia sua residência, divide despesas, controla receitas e facilita a vida em grupo.
                    </p>
                    <a
                        href="/onboard"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-8 py-4 rounded-xl transition"
                    >
                        Começar agora
                    </a>
                </div>
                <div className="mt-12 md:mt-0">
                    <img
                        src="/images/home-illustration.svg"
                        alt="Gestão Residencial"
                        className="w-full max-w-md"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-8 md:px-16 lg:px-32 bg-white">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Tudo que você precisa para sua residência
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                        <h4 className="text-xl font-semibold mb-4">Cadastro Rápido</h4>
                        <p className="text-gray-600">
                            Crie sua conta e comece a usar em menos de 2 minutos.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                        <h4 className="text-xl font-semibold mb-4">Gestão de Despesas</h4>
                        <p className="text-gray-600">
                            Acompanhe receitas e gastos em tempo real.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                        <h4 className="text-xl font-semibold mb-4">Residências Colaborativas</h4>
                        <p className="text-gray-600">
                            Compartilhe informações com seus companheiros de casa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Escolha o plano ideal para você
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <h4 className="text-xl font-semibold mb-4">Gratuito</h4>
                        <p className="text-gray-600 mb-6">Ideal para usuários individuais.</p>
                        <p className="text-3xl font-bold text-blue-600 mb-6">¥0/mês</p>
                        <a
                            href="/onboard"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-6 py-3 rounded-xl transition"
                        >
                            Começar grátis
                        </a>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center border-2 border-blue-600">
                        <h4 className="text-xl font-semibold mb-4">Premium</h4>
                        <p className="text-gray-600 mb-6">Para residências compartilhadas.</p>
                        <p className="text-3xl font-bold text-blue-600 mb-6">¥500/mês</p>
                        <a
                            href="/onboard"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-6 py-3 rounded-xl transition"
                        >
                            Assinar
                        </a>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <h4 className="text-xl font-semibold mb-4">Empresarial</h4>
                        <p className="text-gray-600 mb-6">Para gestores de múltiplas residências.</p>
                        <p className="text-3xl font-bold text-blue-600 mb-6">Sob consulta</p>
                        <a
                            href="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-6 py-3 rounded-xl transition"
                        >
                            Fale conosco
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-white py-6 px-8 text-center text-gray-500 border-t">
                © {new Date().getFullYear()} NextHome. Todos os direitos reservados.
            </footer>
        </div>
    );
};

export default Home;
