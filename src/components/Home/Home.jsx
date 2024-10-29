import { Link } from 'react-router-dom';
import { useDarkMode } from '../../DarkModeContext';

export default function Home() {

    const {darkMode} = useDarkMode()

    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Welcome to Elite
                            <span className="hidden sm:block text-4xl">Empowering Your Business with SaaS Solutions</span>
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <section className={`${darkMode?" bg-zinc-800":"bg-gray-200"} text-center sm:py-20 py-10`}>
                <h1 className={`text-3xl sm:text-5xl font-bold mb-6`}>Our Vision</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    To be a pioneering force in the SaaS industry, driving sustainable growth and innovation by creating solutions that matter. We aim to empower organizations and individuals to achieve their goals with scalable, impactful technology.
                </p>
            </section>

            <section className="text-center sm:py-20 py-10">
                <h1 className="text-3xl sm:text-5xl font-bold mb-6">Our Mission</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    Our mission is to understand our clients' needs deeply and provide solutions that simplify their processes, enhance productivity, and accelerate growth. We combine cutting-edge technology with a user-first approach, making our software as reliable as it is efficient.
                </p>
            </section>

            <section className={`${darkMode?" bg-zinc-800":"bg-gray-200"} text-center sm:py-20 py-10`}>
                <h1 className="text-3xl sm:text-5xl font-bold mb-6">Our Motto</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    <strong>"Innovation, Efficiency, and Empowerment."</strong> At Elite, we believe that great software is born from innovation, crafted with efficiency, and delivered with the purpose of empowering our clients.
                </p>
            </section>

            <section className="text-center sm:py-20 py-10 {}">
                <h1 className="text-3xl sm:text-5xl font-bold mb-6">What We Do</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    Elite provides high-quality, tailored SaaS solutions designed to meet the specific demands of our clients. By understanding each client’s unique challenges and requirements, we develop software that seamlessly integrates with their workflow, providing a smooth, intuitive user experience.
                </p>
            </section>
        </div>
    );
}
