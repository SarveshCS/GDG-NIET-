import { motion } from "framer-motion";
import { useRef } from "react";

export default function HeroSection8() {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
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
            GDG On Campus - NIET
          </strong>
          aims to foster a{" "}
          <span className="text-blue-600 font-bold">
            strong and inclusive development culture
          </span>
          . This initiative encourages students to{" "}
          <span className="text-pink-500 font-bold">
            collaborate, learn, and innovate
          </span>{" "}
          in a supportive environment. <br />
          Developer Student Clubs (DSC) is a program designed to help students
          gain essential skills in{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#FF5722" }}
            className="text-orange-600 font-semibold"
          >
            mobile
          </motion.span>{" "}
          and{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#FF5722" }}
            className="text-orange-600 font-semibold"
          >
            web development
          </motion.span>
          ,{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#009688" }}
            className="text-green-600 font-semibold"
          >
            design thinking
          </motion.span>{" "}
          and{" "}
          <motion.span
            whileHover={{ scale: 1.2, color: "#3F51B5" }}
            className="text-blue-700 font-semibold"
          >
            leadership skills
          </motion.span>
          . Join us to{" "}
          <span className="font-bold text-purple-600">
            shape the future of technology
          </span>{" "}
          together!
        </motion.p>
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-center space-x-4 mt-12">
        <button
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          onClick={() => scrollToSection(sectionRefs.community)}
        >
          Community
        </button>
        <button
          className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          onClick={() => scrollToSection(sectionRefs.students)}
        >
          Students
        </button>
        <button
          className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800"
          onClick={() => scrollToSection(sectionRefs.influence)}
        >
          Influence
        </button>
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
        },
        {
          ref: sectionRefs.students,
          title: "More Than 2000+ Students Influenced",
          highlight: "2000+",
          color: "#02C173",
          bgColor: "bg-[#15d98bfd]",
          imgSrc: "/images/il2.svg",
        },
        {
          ref: sectionRefs.influence,
          title: "Influential In 140 Countries",
          highlight: "140",
          color: "#0238c1",
          bgColor: "bg-[#1560d9fd]",
          imgSrc: "/images/il3.svg",
        },
      ].map((section, index) => (
        <motion.div
          ref={section.ref}
          className="flex flex-wrap items-center justify-around space-y-28"
          variants={sectionVariants}
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
