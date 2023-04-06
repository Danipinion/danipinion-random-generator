import icon from "../assets/logo.png";
import dark from "../assets/night.jpg";
const Result = ({ randoms, teams }) => {
  const style = randoms.length ? true : false;
  return (
    <div
      style={{ backgroundImage: `url(${dark})` }}
      // className="h-screen pt-20 px-10 sm:px-20 overflow-y-auto flex gap-10 flex-wrap justify-center"
      className={
        style
          ? "h-screen pt-20 px-10 sm:px-20 overflow-y-auto flex gap-10 flex-wrap justify-center"
          : "h-screen pt-20 px-10 sm:px-20 overflow-y-auto"
      }
    >
      {/* Teams Generator */}
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

      {/* Random / order Generator */}
      {randoms.map((random, index) => (
        <div
          key={index}
          class="p-2 rounded-lg shadow bg-white w-40 h-56 dark:bg-gray-800 mb-5"
        >
          <p class="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Pilihan {index + 1}
          </p>
          <div class="flex gap-x-8 justify-center flex-wrap">
            <div class="p-4">
              <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                  {/* <img
                    alt="profil"
                    src={icon}
                    class="mx-auto object-cover rounded-full h-20 w-20 "
                  /> */}
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
                <div class="mt-2 text-center flex flex-col">
                  <span class="text-lg font-medium text-gray-600 dark:text-white">
                    {random.toUpperCase()}
                  </span>
                  <span class="text-xs text-gray-400">Pilihan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
