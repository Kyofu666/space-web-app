import Navbar from "../Navbar/nav"

const Home = () => {
    return (
        <section className="home">
            <Navbar />

            <div className="home__test">
                <div className="text">
                    <p className="text--medium">SO, YOU WANT TO TRAVEL TO</p>
                    <p className="text--big">SPACE</p>
                    <p className="text--small">
                        Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll give you a truly out of this
                        world experience!
                    </p>
                </div>
                <div className="text__circle">
                    <p>EXPLORE</p>
                </div>
            </div>
        </section>)
}

export default Home
