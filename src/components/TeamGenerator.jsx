import { useState } from "react";
import dark from "../assets/night.jpg";
import { shuffle } from "../lib/helper";
import { Link, useNavigate } from "react-router-dom";

const TeamGenerator = (params) => {
  const [noOfTeams, setNoOfTeams] = useState();
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    const suffledArray = shuffle(params.people);
    if (!noOfTeams || noOfTeams < 0) {
      params.setTeams([]);
    } else {
      const noOfPeoplePerTeam = suffledArray.length / noOfTeams;
      const res = [];
      for (let i = 0; i < noOfTeams; i++) {
        res.push(
          suffledArray.slice(i * noOfPeoplePerTeam, (i + 1) * noOfPeoplePerTeam)
        );
        params.setTeams(res);
      }
      // params.setRandom(sliceArray);
    }
    params.setRandom([]);
    navigate({ to: "/result" });
  };
  return (
    <div
      style={{ backgroundImage: `url(${dark})` }}
      className="overflow-hidden"
    >
      <div class="w-full h-screen font-sans bg-cover bg-landscape">
        <div class="container flex items-center justify-center flex-1 h-full mx-auto">
          <div class="w-full max-w-lg">
            <div class="leading-loose">
              <form class="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25 backdrop-blur-sm">
                <p class="mb-8 text-2xl text-center text-white font-semibold">
                  ⚙️TEAMS GENERATOR⚙️
                </p>
                <div class="mb-2">
                  <div class=" relative ">
                    <textarea
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Masukkan nama"
                      onChange={(e) => {
                        const listString = e.target.value;
                        const list = listString
                          .split(",")
                          .filter((str) => {
                            return str.trim().length;
                          })
                          .map((str) => {
                            return str.trim();
                          });
                        params.setPeople(list);
                        params.setDataOld(e.target.value);
                      }}
                      value={params.old}
                    />
                  </div>
                </div>
                <div class="mb-2">
                  <div class=" relative ">
                    <input
                      type="number"
                      id="login-with-bg-password"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Masukan angka Groups"
                      onChange={(e) => {
                        setNoOfTeams(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <Link
                    to="/result"
                    type="button"
                    class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={handleBtnClick}
                  >
                    Generate
                  </Link>
                </div>
                <div class="text-center">
                  <p class="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                    Created By{" "}
                    <a
                      href="https://danipinion.vercel.app"
                      target="_blank"
                      className="underline decoration-2 decoration-"
                    >
                      @Danipinion
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGenerator;
