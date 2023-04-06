import icon from "../assets/logo.png";
import dark from "../assets/night.jpg";
import { Picker } from "../components/generator/Picker";
import { Team } from "../components/generator/Team";
const Result = ({ randoms, teams }) => {
  const style = randoms.length ? true : false;
  return (
    <div
      style={{ backgroundImage: `url(${dark})` }}
      className={
        style
          ? "h-screen pt-20 px-10 sm:px-20 overflow-y-auto"
          : "h-screen pt-20 px-10 sm:px-20 overflow-y-auto"
      }
    >
      <Team teams={teams} />
      <Picker randoms={randoms} />
    </div>
  );
};

export default Result;
