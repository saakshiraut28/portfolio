/** @format */

import React from "react";
import Card from "../components/cards";
import Burger from "../assets/images/Burger-Builder.png";
import Oide from "../assets/images/Scryptn.png";
import Cgs from "../assets/images/CGS.png";
import {
    ScrollContainer,
    ScrollPage,
    Animator,
    Sticky,
    batch,
    Fade,
    MoveOut,
} from "react-scroll-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
const ZoomInScrollOut = batch(Sticky(), Fade(-0.5, 1.5), MoveOut(0, -100));
const ZoomScrollOut = batch(Sticky());
function SingleProject() {
    return (
        <>
            {/* <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 3 } }}
      > */}
            <Navbar />
            <div className="px-10 lg:px-20 w-full h-full font-main container scroll-smooth">
                {/* TITLE */ }
                <div className="flex lg:justify-end w-full title">
                    <span className="font-semibold text-3xl">PROJECT</span>
                    <br />
                </div>
                <div className="flex lg:justify-end w-full title2">
                    <hr className="border-0 bg-black my-4 w-1/2 h-0.5" />
                    <br />
                    <br />
                </div>

                <div className="flex-row mt-4 lg:px-20 w-full intro">
                    <ScrollContainer>
                        <ScrollPage>
                            <Animator animation={ ZoomInScrollOut }>
                                <Card
                                    img={ Cgs }
                                    title="Write It - Centralized Grievance System"
                                    desc="We develop a web application that would be a sort of Centralised Public Grievance portal and Monitoring System (CPGRAMS) but specifically dedicated to college(s)."
                                    tech="#HTML #Tailwind CSS #Bootstrap #Php"
                                    prolink="#"
                                    gitlink="https://github.com/saakshiraut28/Hackathon_Project"
                                />
                            </Animator>
                        </ScrollPage>
                        <ScrollPage>
                            <Animator animation={ ZoomInScrollOut }>
                                <Card
                                    img={ Oide }
                                    title="Scryptn - Online IDE"
                                    desc="Basic idea of this project to make Online IDE with registration and sign in functionality, along with that the user could save, update and even post their code."
                                    tech="#HTML #Bootstrap #PHP #Tailwind"
                                    prolink="#"
                                    gitlink="https://github.com/saakshiraut28/Online-IDE"
                                />
                            </Animator>
                        </ScrollPage>
                        <ScrollPage>
                            <Animator animation={ ZoomScrollOut }>
                                <Card
                                    img={ Burger }
                                    title="Burger Assembler"
                                    desc="A web-app where users can make their own burgers, by adding and removing various ingredients to it. This was the first project I created while learning react. "
                                    tech="#React JS #Tailwind CSS"
                                    prolink="#"
                                    gitlink="https://github.com/saakshiraut28/Burger_Builder"
                                />
                            </Animator>
                        </ScrollPage>
                    </ScrollContainer>
                </div>
            </div>
            <Footer />
            {/* </motion.div> */ }
        </>
    );
}

export default SingleProject;