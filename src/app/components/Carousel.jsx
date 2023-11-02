import React from "react";
import Image from "next/image";
import zeuskysvg from "/public/180px.svg";
import skalp from "/public/skalp.jpg";
import rita from "/public/Rita.jpg";
import michael from "/public/Michael.jpg";
const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={rita}
                width={60}
                height={60}
                loading="lazy"
                alt="Just Escape Your City Manager"
              ></Image>
              <div className="flex flex-wrap items-baseline">
                <h5 className="w-full sm:w-auto">Rita Telesa</h5>
                <span className="sm:ml-4 mt-1">
                  Just Escape Your City Manager
                </span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">Whole project maintain</div>
              <div className="badge badge-outline">24/7 support</div>
              <div className="badge badge-outline">New Quests</div>
              <div className="badge badge-outline">Advertisment services</div>
              <div className="badge badge-outline">Emails</div>
              <div className="badge badge-outline">
                JUST ESCAPE CONSULT Web Page
              </div>
              <div className="badge badge-outline">SEO Optimization</div>
              <div className="badge badge-outline">Google business</div>
              <div className="badge badge-outline ">Google Maps</div>
              <div className="badge badge-outline ">WordPress</div>
              <div className="badge badge-outline ">
                CQ Dashboard (react, ts)
              </div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>My Thoughts on the Project: </strong>
                Handling the entire project was quite an exciting challenge. It
                offered me a unique opportunity to make a real difference in our
                online presence and improve the overall user experience. This
                wide range of responsibilities allowed me to contribute
                significantly to the company's success.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Review: </strong>
                Mark played a pivotal role in managing our digital presence and
                enhancing the user experience. He shouldered numerous critical
                tasks, including creating new quests, website maintenance,
                advertising management, and boosting our online visibility. His
                dedication and expertise were integral to our success, and we're
                truly grateful for his exceptional work.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide4"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={michael}
                width={60}
                height={60}
                loading="lazy"
                alt="Just Escape Austria Manager"
              ></Image>
              <div className="flex flex-wrap items-baseline">
                <h5 className="w-full sm:w-auto">Michael Prantl</h5>
                <span className="sm:ml-4 mt-1">
                  Just Escape Austria Manager
                </span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">Whole project maintain</div>
              <div className="badge badge-outline">24/7 support</div>
              <div className="badge badge-outline">New Web Page</div>
              <div className="badge badge-outline">WordPress</div>
              <div className="badge badge-outline">WordPress Plugins</div>
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">Email</div>
              <div className="badge badge-outline">UI/UX</div>
              <div className="badge badge-outline">SEO Optimization</div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>My Thoughts on the Project: </strong>I had the
                opportunity to craft a unique online presence and improve the
                overall user experience from scratch. I single-handedly made the
                entire UI/UX design and logic implementation for the website,
                providing a seamless and user-friendly environment for our
                audience.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Review: </strong>
                Mark totally nailed our digital presence project! He took the
                reins from start to finish, coming up with cool ideas and
                crafting a killer website that gives users a smooth ride. We
                can't thank him enough for his invaluable contribution, and a
                big part of our success is thanks to his skill and dedication.
                Mark's work is truly exceptional.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide1"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={zeuskysvg}
                width={60}
                height={60}
                loading="lazy"
                alt="Zeusky CEO"
              ></Image>
              <div className="flex flex-wrap items-baseline">
                <h5 className="w-full sm:w-auto">Igor Mohhov</h5>
                <span className="sm:ml-4 mt-1">Zeusky CEO</span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">New Web Site</div>
              <div className="badge badge-outline">24/7 Support</div>
              <div className="badge badge-outline">
                Convert Page robbybobby (React)
              </div>
              <div className="badge badge-outline">
                Show Platforms robbybobby (React)
              </div>
              <div className="badge badge-outline">
                Email Select Page (Google Apps Script)
              </div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>My Thoughts on the Project: </strong>
                In my role as the sole frontend developer at Zeusky, I took on
                several significant responsibilities. I had the privilege of
                leading the development of our new website, making sure it was
                not only functional but also user-friendly. I provided
                around-the-clock support, promptly addressing any issues that
                arose. Moreover, I worked on converting the 'robbybobby' React
                page to ensure it seamlessly displayed platforms. Additionally,
                I designed an Email Select Page using Google Apps Script. My
                work played a crucial role in supporting Zeusky's mission of
                assisting other businesses with their IT needs.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Review: </strong>
                Mark, as our frontend developer at Zeusky, made an indelible
                impact on our projects. His pivotal role was most evident in the
                meticulous overhaul of our new website, optimizing it for peak
                performance and user-friendliness. Simultaneously, Mark's
                unwavering commitment to 24/7 support ensured the uninterrupted
                operation of our systems. Mark's dedication significantly
                augmented our digital presence and functionality, and we extend
                our sincere appreciation for the positive impact he brought to
                Zeusky.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide2"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={skalp}
                width={60}
                height={60}
                loading="lazy"
                alt="Head of Nodaunt Backend"
              ></Image>
              <div className="flex flex-wrap items-baseline ">
                <h5 className="w-full sm:w-auto">Aliaxandr Skulavets</h5>
                <span className="sm:ml-4 mt-1">Head of Nodaunt Backend</span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">Whole Frontend Logic</div>
              <div className="badge badge-outline">Whole UI/UX</div>
              <div className="badge badge-outline">24/7 Support</div>
              <div className="badge badge-outline">Real-Time Map</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">Next.js</div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>My Thoughts on the Project: </strong>
                In my role at NODAUNT, I led frontend development for an
                innovative app. Collaborating closely with a dedicated backend
                team, we created this application using Next.js and TypeScript
                for high performance. Real-time data integration via REST APIs
                provided up-to-the-minute information on restaurants and tours.
                We also incorporated Leaflet mapping for an interactive user
                experience, enhancing the way users discover restaurants and
                explore self-guided walking tours.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Review: </strong>
                Mark's leadership in NODAUNT was instrumental in bringing our
                innovative app to life. The unique algorithm for restaurant
                discovery and self-guided tours showcased his dedication to
                delivering a one-of-a-kind experience for our users. The choice
                of Next.js and TypeScript demonstrated his commitment to
                performance and quality. Real-time data integration and Leaflet
                mapping enriched the application with up-to-the-minute
                information and an interactive user experience. We greatly
                appreciate Mark's contribution in making NODAUNT a standout
                platform for restaurant discovery and self-guided tours.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide3"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
