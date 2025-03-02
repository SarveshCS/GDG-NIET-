import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function HeroSection8() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // Use percentage values so the element starts just outside its container.
  const sectionVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%", transition: { duration: 1.5 } },
  };

  const sectionRightVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: "0%", transition: { duration: 1.5 } },
  };

  const textVariants = {
    hover: { scale: 1.1, color: "#ff6f61", transition: { duration: 0.3 } },
  };

  const blurVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 0.75, transition: { duration: 1.5 } },
  };

  const sectionRefs = {
    community: useRef(null),
    students: useRef(null),
    influence: useRef(null),
  };

  return (
    <div className="relative">
      {/* Intro Section */}
      <div className="flex justify-center p-4 md:p-6">
        <motion.p
          className="text-center text-base md:text-lg lg:text-2xl leading-relaxed md:leading-loose font-light text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* ... content ... */}
        </motion.p>
      </div>

      {/* Sections */}
      {[
        {
          ref: sectionRefs.community,
          title: "Community of 800+ Developers",
          highlight: "800+",
          color: "#c10202",
          imgSrc: "/images/il1.svg",
          variant: isMobile ? {} : sectionVariants,
        },
        {
          ref: sectionRefs.students,
          title: "More Than 2000+ Students Influenced",
          highlight: "2000+",
          color: "#02C173",
          imgSrc: "/images/il2.svg",
          variant: isMobile ? {} : sectionRightVariants,
        },
        {
          ref: sectionRefs.influence,
          title: "Influential In 140 Countries",
          highlight: "140",
          color: "#0238c1",
          imgSrc: "/images/il3.svg",
          variant: isMobile ? {} : sectionVariants,
        },
      ].map((section, index) =>
        !isMobile ? (
          // Wrapping container with w-full ensures the overflow clipping is limited to the section area.
          <div className="w-full overflow-hidden relative" key={index}>
            <motion.div
              ref={section.ref}
              className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0"
              variants={section.variant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="h-40 w-40 md:h-72 md:w-72 absolute rounded-full blur-[80px] filter top-[-50px] md:top-[-100px] left-5 md:left-10"
                variants={blurVariants}
                initial="initial"
                animate="animate"
              ></motion.div>
              <div className="relative w-full md:max-w-lg p-2">
                <motion.h1
                  className="font-IBMPlexBold text-3xl md:text-5xl lg:text-6xl leading-snug text-left uppercase"
                  variants={textVariants}
                  whileHover="hover"
                >
                  {section.title.split(section.highlight)[0]}
                  <span style={{ color: section.color }}>{section.highlight}</span>
                  {section.title.split(section.highlight)[1]}
                </motion.h1>
                <motion.p
                  className="font-IBMPlexRegular text-sm md:text-base lg:text-lg text-left mt-2"
                  whileHover={{ scale: 1.05 }}
                >
                  A collection of 800+ vibrant minds united under GDG NIET, each with
                  unique skillsets. Their mission is to revolutionize technology and solve
                  real-world challenges together.
                </motion.p>
              </div>
              <motion.div
                className="w-full md:w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-full md:w-[400px] lg:w-[500px] h-auto mx-auto"
                  alt="bg-image"
                  src={section.imgSrc}
                />
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <div
            ref={section.ref}
            className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0"
            key={index}
          >
            <div
              className="h-40 w-40 md:h-72 md:w-72 absolute rounded-full blur-[80px] filter top-[-50px] md:top-[-100px] left-5 md:left-10"
            ></div>
            <div className="relative w-full md:max-w-lg p-2">
              <h1 className="font-IBMPlexBold text-3xl md:text-5xl lg:text-6xl leading-snug text-left uppercase">
                {section.title.split(section.highlight)[0]}
                <span style={{ color: section.color }}>{section.highlight}</span>
                {section.title.split(section.highlight)[1]}
              </h1>
              <p className="font-IBMPlexRegular text-sm md:text-base lg:text-lg text-left mt-2">
                A collection of 10,000 vibrant minds united under GDG NIET, each with
                unique skillsets. Their mission is to revolutionize technology and solve
                real-world challenges together.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <img
                className="w-full md:w-[400px] lg:w-[500px] h-auto mx-auto"
                alt="bg-image"
                src={section.imgSrc}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
