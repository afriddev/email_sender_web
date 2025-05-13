import { BiLogoTwitter, BiLogoGithub, BiLogoInstagram, BiLogoGmail } from 'react-icons/bi';

export default function Bottom() {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <ul className="flex justify-center space-x-6 mb-4">
                    <li>
                        <a
                            href="https://twitter.com/afriddev" // Replace with your actual Twitter link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                        >
                            <BiLogoTwitter size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:your.email@example.com" // Replace with your actual Gmail address
                            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                        >
                            <BiLogoGmail size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/afriddev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                        >
                            <BiLogoGithub size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/afriddev" // Replace with your actual Instagram link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                        >
                            <BiLogoInstagram size={24} />
                        </a>
                    </li>
                </ul>
                <p className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Shaik Afrid. All rights reserved.
                </p>
            </div>
        </footer>
    );
}