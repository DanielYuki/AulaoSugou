import { useNavigate } from 'react-router-dom';
import logo from '../assets/react.svg';

export default function Header() {

    const navigate = useNavigate();

    return (
        <header className="bg-sky-500 text-sky-100 py-4 px-6 shadow-lg sticky w-full top-0 z-20 backdrop-blur-lg">
            <div className="flex justify-between items-center">
                <button className="flex items-center space-x-2"
                    onClick={() => navigate('/')}
                >
                    <img src={logo} alt="Logo" className="h-8" />
                    <h1 className="text-lg font-semibold">Cool Name</h1>
                </button>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <button className="hover:text-gray-300"
                                onClick={() => navigate('/')}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-300"
                                onClick={() => navigate('/about')}
                            >
                                About
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}