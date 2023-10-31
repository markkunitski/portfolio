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
    <div className="mb-40 ">
      <h2 className="text-center mb-28">My projects</h2>
      <div className="projects">
        <div className="image-container mr-6 flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={CQ}
            alt="City Quest Dashboard"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap ">
              <h5 className="mb-2 w-full">City Quest Dashboard</h5>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">REST API</div>
              <div className="badge badge-outline">RTK Query</div>
              <div className="badge badge-outline">React Router Dom </div>
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
              <div className="badge badge-outline ">UI/UX</div>
              <p className="mb-6 mt-4">
                I had the exciting opportunity to collaborate with a small
                escape room company, which also offered immersive City Quests.
                In this project, I was responsible for a complete redesign,
                focusing on enhancing the user experience (UI/UX). My work
                included updating WordPress plugins to ensure a seamless and
                engaging experience.
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
                href="https://navigate-app-fqhr.vercel.app/"
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
              <h5 className="mb-2 w-full w-full">React endgame</h5>
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
            src={CQ}
            alt="City Quest Dashboard"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <h5 className="mb-2 w-full">City Quest Dashboard</h5>
            <div className="flex flex-wrap mb-4">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">REST API</div>
              <div className="badge badge-outline">RTK Query</div>
              <div className="badge badge-outline">React Router Dom </div>
            </div>
            <p className="mb-6">
              This project centered on crafting efficient logic for displaying
              booking information and login processes. Leveraging React and
              TypeScript, I streamlined the user experience for accessing and
              interacting with booking details, while also enhancing the
              security and ease of user login. Explore how I made complex
              booking information and login procedures simple in this project.
            </p>
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
        <div className="image-container flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={austria}
            alt="Just Escape Austria"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <h5 className="mb-2 w-full">Just Escape Austria</h5>
            <div className="flex flex-wrap mb-4">
              <div className="badge badge-outline ">WordPress</div>
              <div className="badge badge-outline ">Bootstrap</div>
              <div className="badge badge-outline ">UI/UX</div>
            </div>
            <p className="mb-6">
              I had the exciting opportunity to collaborate with a small escape
              room company, which also offered immersive City Quests. In this
              project, I was responsible for a complete redesign, focusing on
              enhancing the user experience (UI/UX). My work included updating
              WordPress plugins to ensure a seamless and engaging experience.
            </p>
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
      </div>
    </div>
  );
};

export default Projects;
