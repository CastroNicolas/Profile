import GifApp from "../assets/GifApp.png";
import ToDoApp from "../assets/ToDoApp.png";
import HeroesApp from "../assets/HeroesApp.png";
import CountriesApp from "../assets/CountriesApp.png";
import PetPalace from "../assets/PetPalace.jpeg";
import Calendary from "../assets/Calendary.png";
import RyM from "../assets/RyM.png";

const projects = [
    {
        id: 1,
        name: "Pet Palace",
        technologies: "Vite.js, Node, Express, SQL, Tailwind",
        image: PetPalace,
        github: "https://github.com/PetPalacePF/petpalace",
        deploy: "https://petpalace-lilac.vercel.app/",
    },
    {
        id: 3,
        name: "Calendary",
        technologies: "MERN, SASS",
        image: Calendary,
        github: "https://github.com/CastroNicolas/calendar-app",
        deploy: "https://castronicolas.github.io/calendar-app/",
    },
    {
        id: 4,
        name: "Heroes App",
        technologies: "React.js, Bootstrap CSS",
        image: HeroesApp,
        github: "https://github.com/CastroNicolas/Heroes-App",
        deploy: "https://castronicolas.github.io/Heroes-App/",
    },
    {
        id: 5,
        name: "Countries App",
        technologies: "Vite.js, Node, Express, SQL, Tailwind",
        image: CountriesApp,
        github: "https://github.com/CastroNicolas/CountriesApp",
        deploy: "",
    },
    {
        id: 6,
        name: "Gif App",
        technologies: "React.js, Bootstrap, CSS",
        image: GifApp,
        github: "https://github.com/CastroNicolas/react-GifApp",
        deploy: "https://castronicolas.github.io/react-GifApp/",
    },
    {
        id: 7,
        name: "To Do App",
        technologies: "React.js, Bootstrap, CSS",
        image: ToDoApp,
        github: "https://github.com/CastroNicolas/react-tarea-app",
        deploy: "https://castronicolas.github.io/react-tarea-app/",
    },
    {
        id: 8,
        name: "Rick and Morty App (Backend Under Maintenance)",
        technologies: "React.js, Node.js, Express, SQL, CSS",
        image: RyM,
        github: "https://github.com/CastroNicolas/RickAndMortyApp",
        deploy:
            "https://rick-and-morty-app-chi-nine.vercel.app/",
    },
];

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

