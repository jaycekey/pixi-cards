import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-background-secondary h-screen flex flex-col justify-center">
      <h1 className="text-7xl font-bold text-center text-white leading-[80px]">
        Pixi
        <br />
        Cards
      </h1>
      <ul className="flex flex-col gap-8 text-white text-4xl text-center font-bold pt-40">
        <li onClick={() => navigate("/level")}>Start</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Home;
