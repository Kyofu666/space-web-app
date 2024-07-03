import { useState } from 'react'
import Navbar from '../Navbar/nav'
import { crewData } from './crewData'
import { nanoid } from 'nanoid'

const Crew = () => {
    const [activePage, setActivePage] = useState('Douglas Hurley')
    const btnsArray = [...new Set(crewData.map(item => item.name))]

    return (
        <section className='crew'>
            <Navbar />
            <div className="crew__container">
                <p className='crew__container__title'>
                    <span>02</span>
                    Meet your crew
                </p>

                <div className="crew__container__display">
                    {
                        crewData.filter(crew => crew.name === activePage).map(items => {
                            const { img, job, name, info } = items
                            return (
                                <div className="crew__container__display__card" key={nanoid}>

                                    <div className='crew__container__display__card__img'>
                                        <img src={img} alt={name} />
                                    </div>

                                    <div className="crew__container__display__card__btns">
                                        {btnsArray.map((btn, index) => {
                                            return <div key={index} onClick={() => setActivePage(btn)} className={activePage === btn ? 'active' : ''}></div>
                                        })}
                                    </div>

                                    <p className='crew__container__display__card__name'>
                                        <span>{job}</span>
                                        {name}
                                    </p>

                                    <p className='crew__container__display__card__info'>{info}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </section>
    )
}

export default Crew
