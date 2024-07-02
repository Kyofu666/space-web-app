import { useState } from "react"
import Navbar from "../Navbar/nav"
import { destinationData } from "./destinationData"



const Destination = () => {
    const btnArray = ['MOON', 'MARS', 'EUROPA', 'TITAN']
    const [btnName, setBtn] = useState('MOON')



    return (
        <section className="destination">
            <Navbar />

            <div className="destination__container">
                <p className="destination__container__title"><span>01</span> Pick your destination</p>

                <div className="destination__container__card">
                    {
                        destinationData.filter(destinations => destinations.title === btnName).map(item => {
                            const { id, title, img, info, travelTime, distance } = item
                            return (
                                <div key={id} className="destination__container__card__infoContainer">
                                    <img src={img} alt={title} className="destination__container__card__img" />
                                    <div className="destination__container__cardA">
                                        <ul className="destination__container__cardA__btns">
                                            {btnArray.map((btn, index) => {
                                                return <li className={btn === btnName ? "active" : ""} key={index} onClick={() => setBtn(btn)}>{btn}</li>
                                            })}
                                        </ul>

                                        <h1 className="destination__container__cardA__title">{title}</h1>
                                        <p className="destination__container__cardA__info">{info}</p>

                                        <div className="destination__container__cardA__travelInfo">
                                            <p><span>AVG. DISTANCE</span>{distance}</p>
                                            <p><span>Est. travel time</span>{travelTime}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </section>
    )
}

export default Destination
