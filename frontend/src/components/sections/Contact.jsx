import { useState } from 'react';
import axios from 'axios';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting:", formData);
        setStatus("loading");

        try {
            const response = await axios.post(
                "http://localhost:8080/api/contact",
                formData
            );

            console.log("Success:", response.data);
            setStatus("success");
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error("Error:", error);
            console.error("Backend response:", error.response?.data);
            if (error.response?.status === 409) {
                setStatus("duplicate");
            } else {
                setStatus("error");
            }
        }
    };
    return (
        <section className="mb-24" id="contact">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-8 text-center">
                Get In Touch
            </h3>
            <div className="grid md:grid-cols-2 gap-12 bg-card-light dark:bg-card-dark p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div>
                    <h4 className="text-3xl font-bold mb-6">
                        Let's build something extraordinary together.
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        Whether you have a specific project in mind or just want to chat about tech,
                        I'm always open to interesting conversations.
                    </p>
                    <div className="space-y-4">
                        <a className="flex items-center gap-4 group" href="mailto:franzcalumpit7@gmail.com" target="_blank">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                                <span className="material-icons-outlined text-sm group-hover:text-white">
                                    email
                                </span>
                            </div>
                            <span className="font-medium">franzcalumpit7@gmail.com</span>
                        </a>
                        <a className="flex items-center gap-4 group" href="https://www.linkedin.com/in/franz-calumpit-861715228/" target="_blank">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                                <span className="material-icons-outlined text-sm group-hover:text-white">
                                    share
                                </span>
                            </div>
                            <span className="font-medium">linkedin.com/in/franz-calumpit</span>
                        </a>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <span className="material-icons-outlined text-sm">location_on</span>
                            </div>
                            <span className="font-medium">Manila, Philippines</span>
                        </div>
                    </div>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium mb-1 opacity-70">Name</label>
                        <input
                            className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 ring-primary outline-none transition-all"
                            placeholder="John Doe"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 opacity-70">Email</label>
                        <input
                            className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 ring-primary outline-none transition-all"
                            placeholder="john@example.com"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 opacity-70">Message</label>
                        <textarea
                            className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 ring-primary outline-none transition-all"
                            placeholder="Tell me about your project..."
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                        type="submit"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <div className="text-green-500 bg-green-50 rounded-lg p-3 text-sm">
                            Message sent! I'll be in touch soon.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="text-red-500 bg-red-50 rounded-lg p-3 text-sm">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    {status === "duplicate" && (
                        <div className="text-red-500 bg-red-50 rounded-lg p-3 text-sm">
                            You already submitted this message.
                        </div>
                    )}


                </form>
            </div>
        </section>
    );
};

export default Contact;
