import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CreativeOnboardingCards = () => {
  const [activeCard, setActiveCard] = useState(0);

  const slides = [
    {
      number: "1",
      title: "Community of",
      highlight: "800+",
      subtitle: "developers",
      image: "/images/il1.png",
      gradient: "linear-gradient(135deg, #FF6B6B, #EA4335)",
      overlayColor: "rgba(234, 67, 53, 0.1)",
      pattern:
        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 10%, transparent 50%)",
      description:
        "Join a vibrant ecosystem of passionate developers pushing technological boundaries.",
    },
    {
      number: "2",
      title: "Learn from",
      highlight: "50+",
      subtitle: "workshops",
      image: "/images/workshop.svg",
      gradient: "linear-gradient(135deg, #4285F4, #1967D2)",
      overlayColor: "rgba(66, 133, 244, 0.1)",
      pattern:
        "linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%)",
      description:
        "Dive into cutting-edge learning experiences with industry-leading experts.",
    },
    {
      number: "03",
      title: "Work on",
      highlight: "30+",
      subtitle: "projects",
      image: "/images/projects.svg",
      gradient: "linear-gradient(135deg, #34A853, #1E8E3E)",
      overlayColor: "rgba(52, 168, 83, 0.1)",
      pattern:
        "diagonal-gradient(rgba(255,255,255,0.08) 45deg, transparent 45deg)",
      description:
        "Collaborate on innovative projects that solve real-world challenges.",
    },
    {
      number: "04",
      title: "Connect with",
      highlight: "100+",
      subtitle: "mentors",
      image: "/images/connect.svg",
      gradient: "linear-gradient(135deg, #FBBC05, #F9AB00)",
      overlayColor: "rgba(251, 188, 5, 0.1)",
      pattern:
        "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 10%, transparent 50%)",
      description:
        "Build meaningful connections with experienced industry professionals.",
    },
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
      maxWidth: "700px",
      margin: "0 auto",
      fontFamily: "'Inter', sans-serif",
    },
    cardContainer: {
      position: "relative",
      width: "100%",
      height: "500px",
      perspective: "1500px",
    },
    card: {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "32px",
      overflow: "hidden",
      display: "flex",
      cursor: "pointer",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
    cardBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      opacity: 0.05,
    },
    imageContainer: {
      flex: "0 0 50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    image: {
      width: "60%",
      height: "auto",
      transform: "scale(1.2)",
      transition: "transform 0.5s ease",
    },
    contentContainer: {
      flex: "0 0 50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "2rem",
      color: "white",
    },
    number: {
      fontSize: "4rem",
      opacity: 0.2,
      position: "absolute",
      top: "20px",
      left: "20px",
      fontWeight: "bold",
    },
    title: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
      fontWeight: 600,
    },
    highlight: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    subtitle: {
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
    description: {
      fontSize: "1rem",
      opacity: 0.8,
      lineHeight: 1.6,
    },
    navContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2rem",
      gap: "1rem",
    },
    navDot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              activeCard === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  style={{
                    ...styles.card,
                    background: slide.gradient,
                    transform: `rotateY(${activeCard === index ? 0 : 45}deg)`,
                  }}
                >
                  <div
                    style={{
                      ...styles.cardBackground,
                      background: slide.pattern,
                    }}
                  />
                  <span style={styles.number}>{slide.number}</span>
                  <div style={styles.imageContainer}>
                    <img src={slide.image} alt="" style={styles.image} />
                  </div>
                  <div style={styles.contentContainer}>
                    <h2 style={styles.title}>{slide.title}</h2>
                    <span style={styles.highlight}>{slide.highlight}</span>
                    <h3 style={styles.subtitle}>{slide.subtitle}</h3>
                    <p style={styles.description}>{slide.description}</p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <div style={styles.navContainer}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveCard(index)}
            style={{
              ...styles.navDot,
              backgroundColor:
                activeCard === index ? "white" : "rgba(255,255,255,0.3)",
              transform: activeCard === index ? "scale(1.5)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CreativeOnboardingCards;
