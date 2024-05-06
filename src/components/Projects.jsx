import Project_prop from "./project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiSpringsecurity,
  SiJavascript,
  SiSpringboot,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            github_link="https://github.com/eme40/Anayo-Portfolio.git"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }

            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }

            


          />
          <Project_prop
            title="Task Management System"
            para="Task management systems streamline task creation, assignment, 
            prioritization, tracking, and management, fostering organization, collaboration, and productivity."
            img={Rocket}
            github_link="https://github.com/decadevs/myboard_backend.git"

            springBoot={
              <Tooltip title="Spring Boot" arrow>
                <IconButton>
                  <SiSpringboot className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }

            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }

            springSecurity={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiSpringsecurity className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }


          />
          <Project_prop
            title="Banking System"
            para="The banking system allows users to transfer funds, withdraw cash, and check their account balances"
            img={GPT4}
            github_link="https://github.com/eme40/Banking-System.git"
            springBoot={
              <Tooltip title="Spring Boot" arrow>
                <IconButton>
                  <SiSpringboot className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            springSecurity={
              <Tooltip title="Spring Security" arrow>
                <IconButton>
                  <SiSpringsecurity className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }

          />
          <Project_prop
            title="E-commerce Landing page"
            para="The e-commerce landing page showcases available products and services for users to explore and purchase. "
            img={WellBeing}
            github_link="https://github.com/eme40/Nike-Landing-Page.git"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Pokemon Game"
            para="A Pokemon Game created to remember childhood memories"
            img={Game}
            github_link="https://github.com/eme40/Pokemon.git"
            springBoot={
              <Tooltip title="Spring Boot" arrow>
                <IconButton>
                  <SiSpringboot className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            springSecurity={
              <Tooltip title="Spring Security" arrow>
                <IconButton>
                  <SiSpringsecurity className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
