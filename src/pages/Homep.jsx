import { useEffect, useState } from "react";
import dark from "../assets/night.jpg";
import { Loading } from "../components/Loading";
import { motion } from "framer-motion";

const Homep = () => {
  const [showFullscreen, setShowFullscreen] = useState(true);
  const text =
    "Dengan Website Generator, Anda tidak perlu lagi menghabiskan waktu berjam-jam memilih anggota / tim yang tepat. Website Generator akan memilihkan mereka untuk Anda secara otomatis!".split(
      " "
    );

  useEffect(() => {
    let timer;

    if (showFullscreen) {
      timer = setTimeout(() => {
        setShowFullscreen(false);
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showFullscreen]);
  setTimeout(() => {
    sessionStorage.setItem("visited", "true");
  }, 5000);
  return (
    <>
      {showFullscreen && !sessionStorage.getItem("visited") && (
        <Loading fullscreen size="lg" text="Loading your content..." />
      )}
      <div
        style={{ backgroundImage: `url(${dark})`, filter: "blur(8px)" }}
        className="overflow-hidden w-full h-screen flex justify-center items-center "
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-white">
        <motion.p
          className="font-bold text-6xl text-transparent  p-4 bg-clip-text "
          style={{
            backgroundImage: `url(${dark})`,
            WebkitTextStroke: "2px white",
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Selamat Datang
        </motion.p>
        <div>
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homep;
