import React from "react";
import icon from "../../assets/logo.png";

export const Team = ({ teams }) => {
  return (
    <div>
      {teams
        .filter((team, index) => team[0] != null)
        .map((team, index) => (
          <div
            key={index}
            class="p-2 rounded-lg shadow bg-white  dark:bg-gray-800 mb-5"
          >
            <p class="text-3xl font-bold text-center text-gray-800 dark:text-white">
              Teams {index + 1}
            </p>
            <div class="flex gap-x-8 justify-center flex-wrap">
              {team.map((member, index) => (
                <div key={index} class="p-4">
                  <div class="flex-col  flex justify-center items-center">
                    <div class="flex-shrink-0">
                      <a href="#" class="relative block">
                        <img
                          alt="profil"
                          src={icon}
                          class="mx-auto object-cover rounded-full h-20 w-20 "
                        />
                      </a>
                    </div>
                    <div class="mt-2 text-center flex flex-col">
                      <span class="text-lg font-medium text-gray-600 dark:text-white">
                        {member}
                      </span>
                      <span class="text-xs text-gray-400">
                        {index === 0 ? "Leader" : "Member"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
