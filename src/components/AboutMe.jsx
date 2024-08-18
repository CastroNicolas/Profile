import AboutMePicture from '../assets/ProfilePicture.jpeg'

export const AboutMe = () => {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={AboutMePicture} alt='AboutMePicture' className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
                    <div className="flex-1">

                        <p className="text-lg mb-8">I'm a Fullstack Developer with experience working in different projects with the following stack of technologies: Javascript, Typescript, React.js, Redux,  Node.js, SQL, Express, and MongoDB. Additionally, I have hands-on experience with third-party authentications,
                            utilizing platforms such as Firebase and Auth0, as well as implementing JWT (JSON Web Tokens). I consider myself a problem-solving, team player, and results-oriented person. I'm looking for new challenges in the Industry where I can bring value to the team and to
                            the company in order to achieve the company's objectives.
                        </p>
                        {/* <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    HTML & CSS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    REACT JS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    NODE JS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                                    ></div>
                                </div>
                            </div>

                        </div> */}
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    +1
                                </h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    +10
                                </h3>
                                <p>Projects Complete</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    B2
                                </h3>
                                <p>English Level</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
