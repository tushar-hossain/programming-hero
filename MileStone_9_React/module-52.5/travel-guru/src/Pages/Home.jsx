import Navbar from "../components/Navbar";
import { useLoaderData } from "react-router";
import Slider from "../components/Slider";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <section>
          <Slider place={data} />
        </section>
      </main>
    </div>
  );
};

export default Home;
