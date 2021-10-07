import { NextPage } from 'next';
import Nav from "../components/nav"

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-5xl text-center text-accent-1">Pagina Home</h1>
      </div>
    </div>
  );
}

export default Home;