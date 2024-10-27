import React from "react";
import icon from "../../assets/logo.png";
import { motion } from "framer-motion";

export const Team = ({ teams }) => {
  return (
    <div>
      {teams
        .filter((team) => team[0] != null)
        .map((team, index) => (
          <motion.div
            key={index}
            className="p-2 rounded-lg shadow bg-white  dark:bg-gray-800 mb-5"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
              Teams {index + 1}
            </p>
            <div className="flex gap-x-8 justify-center flex-wrap">
              {team.map((member, index) => (
                <div key={index} className="p-4">
                  <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="relative block">
                        <img
                          alt="profil"
                          src={icon}
                          className="mx-auto object-cover rounded-full h-20 w-20 "
                        />
                      </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                      <span className="text-lg font-medium text-gray-600 dark:text-white">
                        {member}
                      </span>
                      <span className="text-xs text-gray-400">
                        {index === 0 ? "Leader" : "Member"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
    </div>
  );
};
