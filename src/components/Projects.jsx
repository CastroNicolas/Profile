import GifApp from '../assets/GifApp.png';
import ToDoApp from '../assets/ToDoApp.png';
import HeroesApp from '../assets/HeroesApp.png';
import CountriesApp from '../assets/CountriesApp.png';
import PetPalace from '../assets/PetPalace.jpeg';
import RyM from '../assets/RyM.png'
const projects = [
    {
        id: 1,
        name: "Pet Palace",
        technologies: "Vite.js, Node, Express, SQL, Taildwind",
        image: PetPalace,
        github: "https://github.com/PetPalacePF/petpalace",
        deploy: "https://petpalace-lilac.vercel.app/"
    },
    {
        id: 2,
        name: "Rick And Morty App",
        technologies: "Vite.js, Node, Express, SQL, Taildwind",
        image: RyM,
        github: "https://github.com/CastroNicolas/Heroes-App",
        deploy: "https://castronicolas.github.io/marvel"
    },
    {
        id: 3,
        name: "Calendary",
        technologies: "MERN, CSS",
        image: HeroesApp,
        github: "https://github.com/CastroNicolas/Heroes-App",
        deploy: "https://castronicolas.github.io/marvel"
    },

    {
        id: 4,
        name: "Heroes App",
        technologies: "React.js, Bootstrap CSS",
        image: HeroesApp,
        github: "https://github.com/CastroNicolas/Heroes-App",
        deploy: "https://castronicolas.github.io/marvel"
    },

    {
        id: 5,
        name: "Countries App",
        technologies: "Vite.js, Node, Express, SQL, Taildwind",
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
        <section className="bg-black text-white py-20" id="projects">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex flex-col justify-between"
                            style={{ height: '100%' }} // Asegura que todos tengan la misma altura
                        >
                            <div className="flex-grow">
                                <div className="w-full mb-4 rounded-lg h-48 overflow-hidden flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-contain rounded-lg" // Cambiado a object-contain
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                                <p className="text-gray-400 mb-6">{project.technologies}</p>
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href={project.github}
                                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:from-green-500 hover:to-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.deploy}
                                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Deploy
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
