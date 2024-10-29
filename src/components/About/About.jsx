import React from 'react';
import { useDarkMode } from '../../DarkModeContext';

export default function About() {
    const { darkMode } = useDarkMode();

    return (
        <div className={`${darkMode ? "bg-[#0d1117] text-white" : "bg-white text-black"} py-16 transition-all duration-500`}>
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                {/* Introduction */}
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="Team Elite working on a project"
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-3xl font-bold md:text-4xl gradient-text mb-4">
                            Meet <span className="text-[#58a6ff]">Team Elite</span>
                        </h2>
                        <p className="mt-6 leading-relaxed text-gray-400">
                            Team Elite is a driven team of creative developers, designers, and analysts committed to creating efficient and impactful SaaS solutions that empower our clients and bring their ideas to life. We are passionate about innovation and dedicated to excellence, with each member playing a crucial role in achieving our shared goals.
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-400">
                            Our company is a small yet ambitious SaaS provider, starting from the roots with a big vision: to craft solutions that address our clients' needs through in-depth understanding and seamless implementation. We believe in delivering value, always.
                        </p>
                    </div>
                </div>

                {/* Vision, Mission, and Motto */}
                <div className="py-16 text-center">
                    <h2 className="text-2xl font-bold md:text-3xl mb-6 gradient-text">Our Vision, Mission, & Motto</h2>
                    <div className="md:flex md:justify-around gap-10">
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-semibold text-[#58a6ff]">Vision</h3>
                            <p className="mt-4 leading-relaxed text-gray-400">
                                To revolutionize the SaaS landscape by delivering user-centric solutions that seamlessly integrate with daily business needs and enhance productivity.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-semibold text-[#58a6ff]">Mission</h3>
                            <p className="mt-4 leading-relaxed text-gray-400">
                                To provide efficient SaaS software tailored to each client's unique requirements, fostering growth through innovation and a deep understanding of industry demands.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-semibold text-[#58a6ff]">Motto</h3>
                            <p className="mt-4 leading-relaxed text-gray-400">
                                "Efficiency, Innovation, and Excellence — in Every Line of Code."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
