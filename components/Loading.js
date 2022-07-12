function Loading() {
    return (
        <div
            className="relative flex w-full h-full"
        >
            <div
                className="relative w-fit h-fit mt-auto mb-auto mr-auto ml-auto"
            >
                <span
                    className="text-black font-mono text-3xl animate-pulse"
                >
                    Carregando...
                </span>
            </div>
        </div>
    )
}

export default Loading;