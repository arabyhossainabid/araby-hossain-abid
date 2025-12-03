"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactMe = () => {
    const contactInfo = [
        { icon: Mail, title: "Email", details: "arabyhossainabid@gmail.com", link: "mailto:arabyhossainabid@gmail.com" },
        { icon: Phone, title: "Phone", details: "+880 123 456 7890", link: "tel:+8801234567890" },
        { icon: MapPin, title: "Location", details: "Dhaka, Bangladesh", link: "#" },
    ];

    const socialLinks = [
        { icon: Github, link: "#" },
        { icon: Linkedin, link: "#" },
        { icon: Twitter, link: "#" },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#deff00]/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[#deff00]/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Let's <span className="text-[#deff00]">Connect</span></h2>
                        <p className="text-gray-400 text-lg">Have a project in mind? I'm always open to discussing new ideas.</p>
                    </div>

                    <div className="space-y-4">
                        {contactInfo.map((item, i) => (
                            <motion.a
                                key={i} href={item.link}
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#deff00]/50 transition-all group"
                            >
                                <div className="p-3 rounded-full bg-[#deff00]/10 text-[#deff00] group-hover:bg-[#deff00] group-hover:text-black transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.details}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i} href={social.link}
                                whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#deff00] hover:text-[#deff00] text-gray-300 transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                alert("Message sent successfully! (This is a demo)");
                                (e.target as HTMLFormElement).reset();
                            }}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Name</label>
                                        <Input required name="name" placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-[#deff00] text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Email</label>
                                        <Input required name="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 focus-visible:ring-[#deff00] text-white" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Subject</label>
                                    <Input required name="subject" placeholder="Project Inquiry" className="bg-black/50 border-white/10 focus-visible:ring-[#deff00] text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <Textarea required name="message" placeholder="Tell me about your project..." rows={5} className="bg-black/50 border-white/10 focus-visible:ring-[#deff00] text-white resize-none" />
                                </div>
                                <Button type="submit" className="w-full bg-[#deff00] text-black hover:bg-[#deff00]/90 font-bold rounded-full shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00] transition-all">
                                    Send Message <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;
