"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Berger,
  Decagon,
  PcLogo,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Decagon}
              title="Decagon"
              subtitle="Software Engineer"
              date="January 2024 - present"
              para="-Leveraged Java expertise, contributed to robust application development."
            />
            <Exp_prop
              img={PcLogo}
              title="PCDesignz"
              subtitle="Software Developer"
              date="February 2022 - December 2023 (Remote)"
              para="-Designed & developed Java-based web apps, ensured security & integration."
            />
            <Exp_prop
              img={Berger}
              title="Julius Berger"
              subtitle="Graduate Trainee"
              date="November 2022 - October 2023 "
              para="-Optimized site data analysis, implemented tech solutions."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
