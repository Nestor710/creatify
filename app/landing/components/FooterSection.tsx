export function FooterSection() {
    return (
        <footer className="py-10 bg-white text-gray-600">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div>
                        <div className="mb-4 font-bold text-xl text-orange-500">
                            Creatify
                        </div>
                        <p className="text-sm">
                            Transforming image and video editing with artificial intelligence
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 text-sm">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Service Status
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 text-sm">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3 text-sm">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        © 2025 Creatify. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}