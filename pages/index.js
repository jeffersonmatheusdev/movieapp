import { useState, useEffect } from "react";
import Loading from '../components/Loading';
import CardMovie from "../components/CardMovie";

export default function Home() {
  const baseURL = 'https://api.themoviedb.org/3';
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/discover/movie?api_key=04c35731a5ee918f014970082a0088b1`)
      .then((r) => r.json())
      .then((r) => {
        setData(r.results);
      });
  }, [baseURL])

  if (data !== null) {
    return (
      <div
        className="relative w-full h-full bg-backgroundColor"
      >

        <div
          className="relative flex w-full h-12 bg-menuColor"
        >
          <div
            className="relative flex w-fit h-fit ml-auto mr-auto"
          >
            <a
              className="text-textColor -translate-y-[-50%]"
            >
              Movies
            </a>
          </div>

          <div
            className="absolute flex w-full h-80p justify-end mt-auto pr-4"
          >
            <input
              placeholder="Search a movie here..."
              className="relative bg-menuColor p-1 rounded-lg border border-backgroundColor -translate-y-[-0.3rem]"
            />
          </div>

        </div>

        <div
          className="flex w-full h-full bg-backgroundColor justify-center flex-wrap"
        >
          {
            data.map((index, key) => {
              return (
                <CardMovie
                  key={key}
                  title={index.title}
                  url_image={index.poster_path}
                  vote_average={index.vote_average}
                  onClick={
                    () => {
                      window.location.href = `/detail?ID=${index.id}`
                    }
                  }
                />
              )
            })
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <Loading />
    )
  }
}