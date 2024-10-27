import { motion } from "framer-motion";

export const Picker = ({ randoms }) => {
  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
      {randoms.map((random, index) => (
        <motion.div
          key={index}
          className="p-2 rounded-lg shadow bg-white w-40 h-56 dark:bg-gray-800 mb-5"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{
            rotateY: 0,
            opacity: 1,
            rotate: [0, -2, 2, -2, 0],
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
            rotate: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Pilihan {index + 1}
          </p>
          <div className="flex gap-x-8 justify-center flex-wrap">
            <div className="p-4">
              <div className="flex-col flex justify-center items-center">
                <div className="flex-shrink-0">
                  <p className="text-6xl">
                    {index + 1 === 1
                      ? "🥇"
                      : index + 1 === 2
                      ? "🥈"
                      : index + 1 === 3
                      ? "🥉"
                      : index + 1}
                  </p>
                </div>
                <div className="mt-2 text-center flex flex-col">
                  <span className="text-lg font-medium text-gray-600 dark:text-white">
                    {random.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-400">Pilihan</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
