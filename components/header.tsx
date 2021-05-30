import type { AppProps } from 'next/app'

export default function Header() {
    return (
        <header className="container flex flex-row justify-between pt-4 pl-4">
            <h1 className="text-blue-500 text-2xl p-3"><a href="#">Víctor Hugo Vázquez Gómez</a></h1>
            <nav>
                <ul className="flex">
                    <a href="#"><li className="mx-3 underline text-gray-700 hover:text-blue-500 text-lg hover:bg-blue-50 p-3 rounded">Home</li></a>
                    <a href="#"><li className="mx-3 underline text-gray-700 hover:text-blue-500 text-lg hover:bg-blue-50 p-3 rounded">Blog</li></a>
                    <a href="#"><li className="mx-3 underline text-gray-700 hover:text-blue-500 text-lg hover:bg-blue-50 p-3 rounded">About me</li></a>
                    <a href="#"><li className="mx-3 underline text-gray-700 hover:text-blue-500 text-lg hover:bg-blue-50 p-3 rounded">Skills</li></a>
                    <a href="#"><li className="mx-3 underline text-gray-700 hover:text-blue-500 text-lg hover:bg-blue-50 p-3 rounded">Projects</li></a>
                    <a href="#"><li className="mx-3 underline text-gray-700 hover:text-blue-500 text-lg hover:bg-blue-50 p-3 rounded">Contact me</li></a>
                </ul>
            </nav>
        </header>
    );
}