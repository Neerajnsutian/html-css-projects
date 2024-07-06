import "./App.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Omnifood",
    img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Omnifood is a food delivery website built using HTML and CSS, offering a simple and fast food delivery experience in just three easy steps. It provides a wide range of personalized options to suit your unique taste preferences .This version maintains the essence of your original statement while improving readability and clarity .",
    project: "https://food-ordering-app-omnifood.netlify.app/",
  },
  {
    id: 2,
    title: "Outdoors",
    img: "https://images.unsplash.com/photo-1465070845512-2b2dbdc6df66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    desc: "Outdoors is a travel package management website built using HTML and CSS. It offers a wide range of tour packages for exploring the world, including personalized options at affordable prices. Whether you're seeking adventure or relaxation, Outdoors provides tailored experiences to suit every traveler's preferences and budget.",
    project: "https://extraordinary-pony-3741d8.netlify.app/",
  },
  {
    id: 3,
    title: "BANKIST",
    img: "https://plus.unsplash.com/premium_photo-1658526914485-af7b566986b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhbnNhY3Rpb258ZW58MHx8MHx8fDA%3D",
    desc: "Our bank app offers a seamless and secure banking experience through a modern web interface crafted with HTML, CSS, and JavaScript . Users can conveniently manage their finances from any device with internet access.",
    project: "https://bankist-app-netlify.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.project} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>HTML / CSS Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default App;
