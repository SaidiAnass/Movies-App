import axios from "axios";
import { HomeMoviesListItem } from "../../../components";

const Popular = ({ movies }) => {
  return (
    <section className=" flex flex-col items-center justify-center space-y-5 m-5">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-xl">Popular Movies</h2>
      </header>
      <div className="flex flex-wrap justify-center items-stretch gap-4">
        {movies.map((movie, index) => (
          <HomeMoviesListItem movie={movie} key={index} />
        ))}
      </div>
    </section>
  );
};
export default Popular;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(
    process.env.NEXT_PUBLIC_API_LINK + "/tmdb/popular"
  );

  // const  topRatedMovies = await fetch(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/topRated")
  // const data = await topRatedMovies.json()

  // Pass data to the page via props
  return {
    props: { movies: res.data },
  };
}
