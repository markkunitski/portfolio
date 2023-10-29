import Image from "next/image";
import Header from "./components/Header";
import linked from "../../public/linkedin-svgrepo-com.svg";
import githib from "../../public/github-142-svgrepo-com.svg";
export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="px-8 px-md-16">
        <div className="max-w-screen-md mx-auto">
          <div className="hello w-full flex items-center justify-center">
            <p>hello</p>
          </div>

          <div className="flex justify-between items-center about mb-20">
            <h1>About Me</h1>
            <div className="flex">
              <a
                className="mr-2"
                href="https://www.linkedin.com/in/markkunitski/"
              >
                <Image
                  width={32}
                  height={32}
                  alt="linkedin"
                  src={linked}
                ></Image>
              </a>
              <a href="https://www.linkedin.com/in/markkunitski/">
                <Image
                  className="p-px"
                  width={31}
                  height={31}
                  alt="linkedin"
                  src={githib}
                ></Image>
              </a>
            </div>
          </div>
          <div>
            <p>
              <span className="focus">Passionate UI/UX Designer:</span> I'm
              dedicated to
              <span className="focus"> creating websites</span> that are not
              just visually appealing, but user-friendly too. I'm skilled in{" "}
              <span className="focus">HTML, CSS, and responsive design,</span>
              and I love working with frameworks like{" "}
              <span className="focus">Tailwind and Bootstrap</span> to ensure
              every project is a great experience for users.
            </p>

            <p>
              <span className="focus">JavaScript Enthusiast:</span> JavaScript
              is my playground. I'm experienced with modern JavaScript,
              including <span className="focus">ES6 and beyond.</span> I'm
              well-versed in{" "}
              <span className="focus">
                React, Redux Toolkit, and TypeScript,
              </span>{" "}
              enabling me to build dynamic and high-performance web
              applications. I'm also comfortable with{" "}
              <span className="focus">
                Next.js for server-rendered applications.
              </span>
            </p>

            <p>
              <span className="focus">
                Strong Foundation in Web Development:
              </span>{" "}
              I'm not just a builder; I understand the{" "}
              <span className="focus">fundamentals.</span> I have a solid grasp
              of{" "}
              <span className="focus">
                algorithms, data structures, and object-oriented programming.
              </span>{" "}
              My expertise extends to{" "}
              <span className="focus">Berkeley's CS61A,</span> and I'm
              well-versed in content management systems like{" "}
              <span className="focus">WordPress.</span>
            </p>

            <p>
              <span className="focus">Tool Proficiency:</span> Beyond coding,
              I'm equipped with  <span className="focus"> essential tools.</span>{" "}
              I'm fluent in{" "}
              <span className="focus">English for smooth communication,</span>{" "}
              proficient in{" "}
              <span className="focus">Git for version control,</span> and
              comfortable with <span className="focus">Linux and npm.</span> I
              also have a basic understanding of{" "}
              <span className="focus">
                Python (started learning code on it)
              </span>{" "}
              and{" "}
              <span className="focus">
                C++ (for Computer Systems. A Programmer's Perspective book).
              </span>
            </p>

            <p>
              I'm excited about collaborating on projects that require a
              <span className="focus">
                holistic approach to web development,
              </span>{" "}
              where <span className="focus">design, functionality,</span>
              and{" "}
              <span className="focus">
                performance seamlessly come together.
              </span>{" "}
              My commitment to{" "}
              <span className="focus">
                staying updated with industry trends
              </span>{" "}
              ensures that I deliver solutions that are not just visually
              pleasing but also highly{" "}
              <span className="focus">functional and efficient.</span> Feel free
              to reach out to me anytime! 😊
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
