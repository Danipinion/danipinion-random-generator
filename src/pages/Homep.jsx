import dark from "../assets/night.jpg";

const Homep = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${dark})`, filter: "blur(8px)" }}
        className="overflow-hidden w-full h-screen flex justify-center items-center "
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-white">
        <p
          className="font-bold text-6xl text-transparent  p-4 bg-clip-text "
          style={{
            backgroundImage: `url(${dark})`,
            WebkitTextStroke: "2px white",
          }}
        >
          Selamat Datang
        </p>
        <p className="font-medium">
          Dengan Website Generator, Anda tidak perlu lagi menghabiskan waktu
          berjam-jam memilih anggota / tim yang tepat. Website Generator akan
          memilihkan mereka untuk Anda secara otomatis!
        </p>
      </div>
    </>
  );
};

export default Homep;
