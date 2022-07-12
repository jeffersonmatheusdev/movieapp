import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import GetRuntimeText from "../function/GetRuntimeText";

function DetailMovie() {
    const router = useRouter();
    const { ID } = router.query;

    const BaseApiUrl = 'https://api.themoviedb.org/3';
    const BaseImageUrl = 'https://image.tmdb.org/t/p/w1280';

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${BaseApiUrl}/movie/${ID}?api_key=04c35731a5ee918f014970082a0088b1`)
            .then((r) => r.json())
            .then((r) => setData(r))
    }, [ID])

    if (data !== null) {
        return (
            <div
                className="columns w-100vw h-100vh justify-center"
            >
                <>
                    <img
                        src={`${BaseImageUrl}${data.backdrop_path}`}
                        className="w-full h-60p"
                    />

                    <div
                        className="bg-backgroundColor w-full h-40p shadow-textColor shadow-inner"
                    />
                </>
                <div
                    className="absolute flex bg-white shadow-2xl shadow-black w-50p h-50p top-[30%] left-[50%] translate-x-[-50%] rounded-lg"
                >
                    <div
                        className="grid"
                    >
                        <div
                            className="relative flex"
                        >
                            <div
                                className="relative w-24 h-32 m-5"
                            >
                                <img
                                    src={`${BaseImageUrl}${data.poster_path}`}
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                            <div
                                className="relative mt-4"
                            >
                                <div
                                    className="flex items-center text-center"
                                >
                                    <div
                                        className="bg-textColor w-fit h-fit p-1 rounded-full font-bold text-white text-sm"
                                    >
                                        {data.vote_average}
                                    </div>
                                    <div
                                        className="grid ml-1"
                                    >
                                        <div>
                                            <a>⭐⭐⭐⭐⭐</a>
                                        </div>
                                        <div>
                                            <a className="text-gray-400 font-mono">{data.popularity}</a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid"
                                >
                                    <i
                                        className="text-textColor font-bold"
                                    >
                                        {data.title}
                                    </i>
                                    <i
                                        className="text-gray-400 font-mono"
                                    >
                                        {GetRuntimeText(data.runtime)}
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div
                            className="text-gray-600 relative font-arial overflow-hidden text-center"
                        >
                            <i
                                className="text-ellipsis"
                            >
                                {data.overview}
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <Loading />
            </>
        )
    }
}

export default DetailMovie;