const Home = () => (
    <main className="lg:flex lg:py-8">
        <section className="lg:w-1/2">
            <section className="container py-4">
                <div>
                    <div className="w-full bg-black pb-2/3" />
                    <div className="pt-1.5">
                        <h4 className="text-sm font-semibold tracking-wide">
                            Environnement
                        </h4>
                        <h3 className="pt-0.5 leading-tight">
                            Ceci est un titre de Une, sans aucune information particulière
                        </h3>
                    </div>
                </div>
            </section>
            <section className="container py-4">
                <button className="flex items-center justify-center w-full h-12 font-semibold tracking-wide text-white bg-blue-600">
                    Join us !
                </button>
            </section>
        </section>
        <section className="lg:w-1/2 lg:flex lg:items-center">
            <section className="container py-4">
                <ul className="flex items-center overflow-auto lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:w-full lg:h-full lg:gap-2">
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                    <li className="flex flex-none w-32 h-20 mx-2 bg-black first:ml-0 last:mr-0 lg:mx-0 lg:w-full lg:h-full" />
                </ul>
            </section>
        </section>
    </main>
)

export default Home
