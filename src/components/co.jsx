import { motion } from "framer-motion";
import { useRef } from "react";

export default function HeroSection8() {
  const sectionVariants = {
    initial: { opacity: 0, x: -500 }, // Move from further left
    animate: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const sectionRightVariants = {
    initial: { opacity: 0, x: 500 }, // Move from further right
    animate: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hover: { scale: 1.1, color: "#ff6f61", transition: { duration: 0.3 } },
  };

  const blurVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 0.75, transition: { duration: 1.5 } },
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
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
          <strong className="font-semibold text-indigo-700">
            This batch of the{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">GDG NIET</span>
          </strong>{" "}
          embodies the spirit of{" "}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">innovation</span> and{" "}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">collaboration</span>. 
          With a{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#ff6f61" }}
            className="text-orange-500 font-semibold"
          >
            diverse array of technical skills
          </motion.span>{" "}
          and a shared passion for{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#4CAF50" }}
            className="text-green-500 font-semibold"
          >
            technology
          </motion.span>, 
          we are committed to{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#FFC107" }}
            className="text-yellow-500 font-semibold"
          >
            pushing the boundaries of what's possible
          </motion.span>
          . Our developer mindset drives us to tackle challenges with{" "}
          <span className="text-red-500 font-bold">creativity</span> and{" "}
          <span className="text-indigo-700 font-bold">resilience</span>, while
          our emphasis on{" "}
          <span className="text-teal-500 font-bold">communication</span> ensures
          that every voice is heard and every idea is valued. Together, we are{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#8E44AD" }}
            className="text-purple-700 font-bold"
          >
            not just learning
          </motion.span>,
          we are{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#1ABC9C" }}
            className="text-green-700 font-bold"
          >
            building the future
          </motion.span>
          ,{" "}
          <span className="text-blue-800 font-bold">one line of code at a time</span>
          .
        </motion.p>
      </div>

      {/* Sections */}
      {[
        {
          ref: sectionRefs.community,
          title: "Community of 800+ Developers",
          highlight: "800+",
          color: "#c10202",
          bgColor: "bg-[#d91515fd]",
          imgSrc: "/images/il1.svg",
          variant: sectionVariants,
        },
        {
          ref: sectionRefs.students,
          title: "More Than 2000+ Students Influenced",
          highlight: "2000+",
          color: "#02C173",
          bgColor: "bg-[#15d98bfd]",
          imgSrc: "/images/il2.svg",
          variant: sectionRightVariants,
        },
        {
          ref: sectionRefs.influence,
          title: "Influential In 140 Countries",
          highlight: "140",
          color: "#0238c1",
          bgColor: "bg-[#1560d9fd]",
          imgSrc: "/images/il3.svg",
          variant: sectionVariants,
        },
      ].map((section, index) => (
        <motion.div
          ref={section.ref}
          className="flex flex-wrap items-center justify-around space-y-28"
          variants={section.variant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          key={index}
        >
          <motion.div
            className={`h-40 w-40 md:h-72 md:w-72 absolute rounded-full blur-[80px] filter top-[-50px] md:top-[-100px] left-5 md:left-10`}
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
              A collection of 10,000 worldly Koalas each with their unique
              skillsets. Their mission is to protect the world from evil.
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
      ))}
    </div>
  );
}
