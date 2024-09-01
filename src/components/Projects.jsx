import GifApp from '../assets/GifApp.png';
import ToDoApp from '../assets/ToDoApp.png';
import HeroesApp from '../assets/HeroesApp.png';
import CountriesApp from '../assets/CountriesApp.png';
import PetPalace from '../assets/PetPalace.jpeg';
import Calendary from '../assets/Calendary.png'

const projects = [
    {
        id: 1,
        name: "Pet Palace",
        technologies: "Vite.js, Node, Express, SQL, Tailwind",
        image: PetPalace,
        github: "https://github.com/PetPalacePF/petpalace",
        deploy: "https://petpalace-lilac.vercel.app/"
    },
    {
        id: 3,
        name: "Calendary",
        technologies: "MERN, SASS",
        image: Calendary,
        github: "https://github.com/CastroNicolas/calendar-app",
        deploy: "https://castronicolas.github.io/calendar-app/"
    },
    {
        id: 4,
        name: "Heroes App",
        technologies: "React.js, Bootstrap CSS",
        image: HeroesApp,
        github: "https://github.com/CastroNicolas/Heroes-App",
        deploy: "https://castronicolas.github.io/Heroes-App/"
    },
    {
        id: 5,
        name: "Countries App",
        technologies: "Vite.js, Node, Express, SQL, Tailwind",
        image: CountriesApp,
        github: "https://github.com/CastroNicolas/CountriesApp",
        deploy: ""
    },
    {
        id: 7,
        name: "Gif App",
        technologies: "React.js, Bootstrap, CSS",
        image: GifApp,
        github: "https://github.com/CastroNicolas/react-GifApp",
        deploy: "https://castronicolas.github.io/react-GifApp/"
    },
    {
        id: 6,
        name: "To Do App",
        technologies: "React.js, Bootstrap, CSS",
        image: ToDoApp,
        github: "https://github.com/CastroNicolas/react-tarea-app",
        deploy: "https://castronicolas.github.io/react-tarea-app/"
    },

];

export const Projects = () => {
    return (
        <section className="bg-black text-white text-center py-16 px-4 sm:px-8 lg:px-16" id="projects">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex flex-col justify-between"
                        >
                            <div className="flex-grow">
                                <div className="w-full mb-4 rounded-lg h-40 sm:h-48 overflow-hidden flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.name}</h3>
                                <p className="text-gray-400 mb-6">{project.technologies}</p>
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href={project.github}
                                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 sm:px-4 py-2 rounded-full hover:from-green-500 hover:to-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                                {project.deploy && (
                                    <a
                                        href={project.deploy}
                                        className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 sm:px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-600 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Deploy
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
