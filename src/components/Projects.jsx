import GifApp from "../assets/GifApp.png";
import ToDoApp from "../assets/ToDoApp.png";
import HeroesApp from "../assets/HeroesApp.png";
import CountriesApp from "../assets/CountriesApp.png";
import PetPalace from "../assets/PetPalace.jpeg";
import Calendary from "../assets/Calendary.png";
import RyM from "../assets/RyM.png";

import projectsData from "./projects.json"

const projects = projectsData.projects.map((project) => ({
    ...project,
    image:
        project.image === "PetPalace" ? PetPalace :
            project.image === "Calendary" ? Calendary :
                project.image === "HeroesApp" ? HeroesApp :
                    project.image === "CountriesApp" ? CountriesApp :
                        project.image === "GifApp" ? GifApp :
                            project.image === "ToDoApp" ? ToDoApp :
                                project.image === "RyM" ? RyM :
                                    null, // En caso de que no haya coincidencia
}));

export const Projects = () => {
    return (
        <section
            className="text-white text-center py-16 px-4 sm:px-8 lg:px-16"
            id="projects"
        >
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow"
                        >
                            {/* Imagen con enlace a GitHub */}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full h-52 mb-4 rounded-lg overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </a>
                            <div className="text-left">
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.technologies}
                                </p>
                            </div>
                            <div className="mt-auto flex justify-end">

                                {project.deploy && (
                                    <a
                                        href={project.deploy}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-500 transition-colors"
                                    >
                                        ➚
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

