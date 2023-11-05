import React from "react";
import Image from "next/image";
import austria from "/public/projects/austria.jpg";
import CQ from "/public/projects/CQ.jpg";
import daunt from "/public/projects/nodaunt.jpg";
import posts from "/public/projects/posts.jpg";
import tasks from "/public/projects/tasks.jpg";
import zeusky from "/public/projects/zeusky.jpg";
const Projects = () => {
  return (
    <div className="mb-40 observe">
      <h2 className="text-center mb-28">My projects</h2>
      <div className="projects">
        <div className="image-container mr-6 flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={CQ}
            alt="Panel CQ Dashboard"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap ">
              <h5 className="mb-2 w-full">City Quest Dashboard</h5>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">REST API</div>
              <div className="badge badge-outline">RTK Query</div>
              <div className="badge badge-outline">React Router Dom </div>
              <div className="badge badge-outline">UI/UX</div>
              <div className="badge badge-outline ">RWD</div>
              <p className="mb-6 mt-4">
                This project centered on crafting efficient logic for displaying
                booking information and login processes. Leveraging React and
                TypeScript, I streamlined the user experience for accessing and
                interacting with booking details, while also enhancing the
                security and ease of user login. Explore how I made complex
                booking information and login procedures simple in this project.
              </p>
            </div>

            <div className="flex justify-end">
              <a className=" inline-block" role="a">
                Private Page :(
              </a>
            </div>
          </div>
        </div>
        <div className="image-container flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={austria}
            alt="Just Escape Austria"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap ">
              <h5 className="mb-2 w-full">Just Escape Austria</h5>
              <div className="badge badge-outline ">WordPress</div>
              <div className="badge badge-outline ">Bootstrap</div>
              <div className="badge badge-outline ">JavaScript</div>
              <div className="badge badge-outline ">RWD</div>
              <div className="badge badge-outline ">UI/UX</div>
              <p className="mb-6 mt-4">
                At Just Escape Austria, I took on a challenging project with a
                tight one-week deadline. I needed to completely redesign a
                WordPress-based webpage, despite having limited prior experience
                with WordPress. I quickly learned new skills, from setting up an
                open server to understanding WordPress, plugins, PHP
                integration, and page hierarchy. Despite the steep learning
                curve, I managed to launch a functional version of the website
                on time, completing about 80% of the project. I then made
                further improvements in the following days. This experience
                highlights my ability to adapt, learn, and deliver under
                pressure.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className=" inline-block"
                target="_blank"
                href="https://www.justescape-austria.com/"
              >
                View the project &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="image-container mr-6 flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={daunt}
            alt="No daunt webpage"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap ">
              <h5 className="mb-2 w-full">NODAUNT</h5>
              <div className="badge badge-outline">Next.js</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">REST API</div>
              <div className="badge badge-outline">LeafLet</div>
              <div className="badge badge-outline">UI/UX</div>
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline ">RWD</div>
              <p className="mb-6 mt-4">
                In "NODAUNT," I spearheaded the frontend development of an
                innovative app, collaborating with a dedicated backend team.
                This project features a unique algorithm for personalized
                restaurant discovery and self-guided tours. The tech stack
                includes Next.js and TypeScript, ensuring a performant web
                application. Real-time data is seamlessly integrated through
                REST APIs, providing up-to-the-minute information on restaurants
                and tours. Additionally, the app incorporates Leaflet mapping
                for an interactive and captivating user experience.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className=" inline-block"
                target="_blank"
                href="https://navigate-app.vercel.app/"
              >
                View the project &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="image-container flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={posts}
            alt="Posts web page"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap">
              <h5 className="mb-2 w-full">React Training</h5>
              <div className="badge badge-outline ">React</div>
              <div className="badge badge-outline ">React Router Dom</div>
              <div className="badge badge-outline ">API</div>
              <p className="mb-6 mt-4">
                In this project I delved into the world of web development to
                create a showcase of essential React features. Sorting,
                filtering, working with API, memoization, custom Hooks, routing
                - Only the small part of what i use. This pet project
                encompasses a seamless infinite scrolling, React Hooks
                utilization, integration of external APIs, and an enhanced UI/UX
                through animations. Explore the project to witness the art of
                web development in action.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className=" inline-block"
                target="_blank"
                href="https://react-endgame.vercel.app"
              >
                View the project &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="image-container mr-6 flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={tasks}
            alt="Tasks Manager OOP"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <h5 className="mb-2 w-full">Task Manager OOP</h5>
            <div className="flex flex-wrap mb-4">
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline">API</div>
              <div className="badge badge-outline">Cookies</div>
              <div className="badge badge-outline">AJAX</div>
              <div className="badge badge-outline">UI/UX</div>
            </div>
            <p className="mb-6">
              In this project, I honed my OOP skills with Ajax and cookies to
              create an efficient task management app with a timer. I improved
              task display logic and user-friendly features, enabling persistent
              data storage through cookies. Real-time updates with Ajax enhanced
              the user experience, showcasing my commitment to improving UI/UX
              and simplifying task management.
            </p>
            <div className="flex justify-end items-center">
              <a
                className=" inline-block"
                target="_blank"
                href="http://divs.online/"
              >
                View the project &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="image-container flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={zeusky}
            alt="Zeusky IT Firm"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap">
              <h5 className="mb-2 w-full">Zeusky - IT company</h5>
              <div className="badge badge-outline ">JavaScript</div>
              <div className="badge badge-outline ">Tailwind</div>
              <div className="badge badge-outline ">RWD</div>
              <div className="badge badge-outline ">Logo design</div>
              <div className="badge badge-outline ">UI/UX</div>
              <p className="mb-6 mt-4">
                My objective was to craft an attractive and dynamic website for
                the Estonian IT firm, Zeusky, showcasing our expertise in
                JavaScript for interactivity, Tailwind for modern styling,
                responsive web design (RWD) for cross-device accessibility, and
                comprehensive logo design. Emphasizing user interface and user
                experience (UI/UX) principles, our Zeusky website seamlessly
                merges technology and creativity, echoing the innovative spirit
                of this IT company.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className=" inline-block"
                target="_blank"
                href="https://markkunitski.github.io/zeusky/"
              >
                View the project &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
