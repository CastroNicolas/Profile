
const services = [
    {
        id: 1,
        title: "Frontend Developer",
        description: "Maintenance, design, and construction of new functionalities. I developed an app using the technologies of react, redux and the bootstrap framework",
    },
    {
        id: 2,
        title: "Full Stack Teacher Assistant at Henry Bootcamp  ",
        description: "Coordinating a group of students to achieve seamless integration into the study team",
    },
];
export const Service = () => {
    return (
        <div className="bg-black text-white text-center py-16 px-4 sm:px-8 lg:px-16" id="service">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
                        >
                            <div
                                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
                            >
                                {service.id}
                            </div>
                            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-gray-300">{service.description}</p>
                            <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
