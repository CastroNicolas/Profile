import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiVite } from "react-icons/si";

export const Technologies = () => {
    return (
        <div className="bg-black text-white py-20" id="technologies">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Technologies</h2>

                {/* Contenedor principal */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiReact className="text-7xl text-cyan-400 " />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiVite className="text-7xl text-violet-400 " />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-500" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs className="text-7xl text-green-400 " />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiJavascriptFill className="text-7xl text-yellow-400 " />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <BiLogoTypescript className="text-7xl text-blue-500 " />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <BiLogoPostgresql className="text-7xl text-sky-700 " />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiTailwindCssFill className="text-7xl text-cyan-400 " />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoCss3 className="text-7xl text-blue-600 " />
                    </div>
                </div>
            </div>
        </div>
    );
};
