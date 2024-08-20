import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion, useInView } from "framer-motion";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Por favor, completa todos los campos antes de enviar el mensaje.",
                confirmButtonColor: "#d33",
            });
            return;
        }

        if (!isValidName(formData.name)) {
            Swal.fire({
                icon: "warning",
                title: "Nombre no válido",
                text: "El nombre no debe contener números ni caracteres especiales.",
                confirmButtonColor: "#d33",
            });
            return;
        }

        if (!isValidEmail(formData.email)) {
            Swal.fire({
                icon: "warning",
                title: "Email no válido",
                text: "Por favor, ingresa un correo electrónico válido.",
                confirmButtonColor: "#d33",
            });
            return;
        }

        emailjs.send(
            "service_18le5vb",
            "template_7hnpbdk",
            formData,
            "3ad8PZbVlWag9CpAp"
        )
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Tu mensaje ha sido enviado con éxito. Te contactaré pronto.',
                    confirmButtonColor: '#4caf50'
                });
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
                    confirmButtonColor: '#d33'
                });
            });
    };

    // Referencias y animación
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.3 });

    return (
        <div className="bg-black text-white py-20" id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    Contact Me
                </motion.h2>
                <motion.div
                    className="flex flex-col md:flex-row items-center md:space-x-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                    ref={ref}
                >
                    <div className="flex-1 mb-8 md:mb-0">
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                            Let's Talk
                        </h3>
                        <p>I'm open to discussing web development projects or partnership opportunities.</p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center">
                                <FaEnvelope className="text-green-400 mr-2" />
                                <a href="mailto:maximonicolascastro@gmail.com" className="hover:underline">
                                    maximonicolascastro@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <AiOutlineWhatsApp className="text-green-400 mr-2" />
                                <a href="https://wa.me/+34682044125" className="hover:underline">
                                    +34 682044125
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkedAlt className="text-green-400 mr-2" />
                                <span>Calle San Rafael, Leon, Spain</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-lg">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-lg">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-lg">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    rows="5"
                                    placeholder="Enter Your Message"
                                />
                            </div>
                            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                                Send
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
