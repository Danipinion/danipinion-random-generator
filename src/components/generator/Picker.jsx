export const Picker = ({ randoms }) => {
  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
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
              <div class="flex-col flex justify-center items-center">
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
