export function FooterSection() {
    return (
        <footer className="py-5 bg-white text-gray-600">
            <div className="container mx-auto">
                <div className="flex flex-row items-center justify-center">
                    <p className="text-sm mr-2">Built by</p>
                    <a href="https://nestordev.vercel.app/" aria-label="Néstor Portafolio" target="_blank" className="text-sm hover:text-orange-500 transition-colors duration-300">Néstor</a>
                    <span className="px-1 text-sm">&</span>
                    <a href="https://github.com/leonardaraujo" aria-label="Leonardo GitHub" target="_blank" className="text-sm hover:text-orange-500 transition-colors duration-300">Leonardo</a>
                </div>
            </div>
        </footer>
    );
}