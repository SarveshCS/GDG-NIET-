import { motion } from "framer-motion";

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

  return (
    <div className="relative bg-white">
      <div className="flex justify-center p-4 md:p-10">
        <motion.p
          className="text-center text-base md:text-lg lg:text-2xl leading-relaxed md:leading-loose"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Through GDG On Campus - NIET, we, as Developers and Designers, aim to
          foster a strong and inclusive development culture. This initiative
          encourages students to collaborate, learn, and innovate in a
          supportive environment. Developer Student Clubs (DSC) is a program
          designed to help students gain essential skills in mobile and web
          development, design thinking, and leadership. Through workshops,
          hands-on projects, and networking opportunities, students can: Enhance
          technical expertise in app and web development. Apply design thinking
          to solve real-world problems. Build teamwork and leadership skills by
          leading events and projects. Join us to learn, grow, and make an
          impact as part of a thriving tech community. Let’s shape the future of
          technology together!{" "}
          <motion.span whileHover={{ scale: 1.2 }}>
            mobile
          </motion.span>{" "}
          and{" "}
          <motion.span whileHover={{ scale: 1.2 }}>
            web development
          </motion.span>
          ,{" "}
          <motion.span whileHover={{ scale: 1.2 }}>
            design thinking
          </motion.span>{" "}
          and{" "}
          <motion.span whileHover={{ scale: 1.2 }}>
            leadership skills
          </motion.span>
          .
        </motion.p>
      </div>

      {[
        {
          title: "Community of 800+ Developers",
          highlight: "800+",
          color: "#c10202",
          bgColor: "bg-[#d91515fd]",
          imgSrc: "/images/il1.svg",
        },
        {
          title: "More Than 2000+ Students Influenced",
          highlight: "2000+",
          color: "#02C173",
          bgColor: "bg-[#15d98bfd]",
          imgSrc: "/images/il2.svg",
        },
        {
          title: "Influential In 140 Countries",
          highlight: "140",
          color: "#0238c1",
          bgColor: "bg-[#1560d9fd]",
          imgSrc: "/images/il3.svg",
        },
      ].map((section, index) => (
        <motion.div
          className="flex flex-wrap items-center justify-around min-h-screen px-4 md:px-10"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          key={index}
        >
          <motion.div
            className={`h-40 w-40 md:h-72 md:w-72 absolute rounded-full blur-[80px] filter top-[-50px] md:top-[-100px] left-5 md:left-10`}
            variants={blurVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
          <div className="relative w-full md:max-w-lg p-4">
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
              className="font-IBMPlexRegular text-sm md:text-base lg:text-lg text-left mt-4"
              whileHover={{ scale: 1.05 }}
            >
              A collection of 10,000 worldly Koalas each with their unique
              skillsets. Their mission is to protect the world from evil.
            </motion.p>
            <motion.div
              className="hidden md:block py-5"
              whileHover={{ scale: 1.2 }}
            >
              <img
                width="50"
                height="50"
                className="h-12 w-12"
                src="/images/logo.svg"
                alt=""
              />
            </motion.div>
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
