import { useEffect, useState } from "react";
import dark from "../assets/night.jpg";
import { shuffle } from "../lib/helper";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Generator = (params) => {
  const [noOfPeopleToSelect, setNoPeopleToSelect] = useState();
  const [isSpinning, setIsSpinning] = useState(false);
  const [minNumber, setMinNumber] = useState();
  const [maxNumber, setMaxNumber] = useState();
  const navigate = useNavigate();

  const [listNumber, setListNumber] = useState([]);
  useEffect(() => {
    if (minNumber !== undefined && maxNumber !== undefined) {
      let list = [];
      for (let i = minNumber; i <= maxNumber; i++) {
        let pushed = i.toString();
        list.push(pushed);
      }
      setListNumber(list);
    }
  }, [minNumber, maxNumber]);

  const handleSpinAndPick = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const shuffledArray =
      params.people && params.people.length > 0
        ? shuffle(params.people)
        : shuffle(listNumber);
    if (
      noOfPeopleToSelect === undefined ||
      noOfPeopleToSelect < 0 ||
      !shuffledArray
    ) {
      alert("Masukkan isian dengan benar");
      params.setRandom([]);
      setIsSpinning(false);
    } else {
      setTimeout(() => {
        setIsSpinning(false);
        const sliceArray = shuffledArray.slice(0, noOfPeopleToSelect);
        params.setRandom(sliceArray);
        params.setTeams([]);
        navigate("/result");
      }, 3000);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${dark})` }}
      className="overflow-hidden"
    >
      <div className="w-full h-screen font-sans bg-cover bg-landscape">
        <div className="container flex items-center h-full mx-auto">
          <div className="flex items-center justify-evenly w-full">
            <div className="leading-loose">
              <form className="p-10 m-auto rounded shadow-xl bg-white/25 backdrop-blur-sm">
                <p className="mb-8 text-2xl text-center text-white font-semibold">
                  ⚙️ Picker Name / Order GENERATOR ⚙️
                </p>
                {!minNumber && !maxNumber && (
                  <div className="mb-2">
                    <p className="mb-1 text-2xl  text-white font-semibold">
                      With Name
                    </p>
                    <textarea
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Masukkan nama, pisahkan dengan enter"
                      onChange={(e) => {
                        const listString = e.target.value;
                        const list = listString
                          .split("\n")
                          .filter((str) => str.trim().length)
                          .map((str) => str.trim());
                        params.setPeople(list);
                        params.setDataOld(e.target.value);
                      }}
                      value={params.old}
                    />
                  </div>
                )}

                {!params.people.length && (
                  <>
                    <p className="mb-1 text-2xl  text-white font-semibold">
                      With Range
                    </p>
                    <div className="flex w-full justify-between">
                      <div className="mb-2">
                        <input
                          type="number"
                          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Min"
                          onChange={(e) => setMinNumber(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="number"
                          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Max"
                          onChange={(e) => setMaxNumber(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="mb-2">
                  <input
                    type="number"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Masukkan jumlah orang"
                    onChange={(e) => setNoPeopleToSelect(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center mt-4">
                  <Button
                    className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    onClick={handleSpinAndPick}
                    disabled={isSpinning}
                  >
                    {isSpinning ? "Spinning..." : "Pick ME"}
                  </Button>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm font-light text-500">
                    Created By{" "}
                    <a
                      href="https://danipinion.vercel.app"
                      target="_blank"
                      className="underline decoration-2"
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

export default Generator;
