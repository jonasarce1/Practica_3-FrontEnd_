import StartComp from "../islands/start.tsx";

export type Tpokemon = {
  _id: string;
  name: string;
  image: string;
  sound: string;
};

const Home = () => {
  return <StartComp />
};

export default Home;
