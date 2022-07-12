import ColorByRate from "../function/ColorByRate";

function CardMovie({ title, url_image, vote_average, key, onClick }) {
    return (
        <div
            className="inline-block bg-menuColor w-[10rem] h-[15rem] rounded-t-lg m-2 flex-column cursor-pointer"
            key={key}
            onClick={onClick}
        >
            <div
                className="relative w-full h-80p rounded-t-lg"
            >
                <img
                    src={`https://image.tmdb.org/t/p/w1280${url_image}`}
                    className="relative w-full h-full rounded-t-lg fit"
                />
            </div>
            <div
                className="relative w-full h-20p inline-flex text-center"
            >
                <div
                    className="contents w-full h-50p mt-auto mb-auto"
                >
                    <p
                        className="title block break-all text-white font-mono pb-1"
                    >
                        {title}
                    </p>
                </div>
                <div
                    className="block w-full h-50p break-all mt-auto mb-auto"
                >
                    <div
                        className="relative flex w-fit h-fit ml-auto bg-tagColor pl-1 pr-1"
                    >
                        <span
                            style={{ color: ColorByRate(parseFloat(vote_average)) }}
                        >
                            {vote_average}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMovie;