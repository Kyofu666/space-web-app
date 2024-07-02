import { useState } from 'react'
import Navbar from '../Navbar/nav'

import { technologyData } from './technologyData'
import { nanoid } from 'nanoid'

const Technology = () => {

    const [activePage, setActivePage] = useState('LAUNCH VEHICLE')
    const btnsArray = [...new Set(technologyData.map(item => item.name))]

    return (
        <section className='technology'>
            <Navbar />

            <div className="technology__container">
                <p className='technology__container__title'>
                    <span>03</span>
                    SPACE LAUNCH 101
                </p>

                <div className="technology__container__display">
                    {
                        technologyData.filter(technology => technology.name === activePage).map(items => {
                            const { img, name, info } = items
                            return (
                                <div className="technology__container__display__card" key={nanoid}>

                                    <div className='technology__container__display__card__img'>
                                        <img src={img} alt={name} />
                                    </div>

                                    <div className="technology__container__display__card__btns">
                                        {btnsArray.map((btn, index) => {
                                            return <div key={index} onClick={() => setActivePage(btn)} className={activePage === btn ? 'active' : ''}>{index + 1}</div>
                                        })}
                                    </div>

                                    <p className='technology__container__display__card__name'>
                                        <span>THE TERMINOLOGY…</span>
                                        {name}
                                    </p>

                                    <p className='technology__container__display__card__info'>{info}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </section>
    )
}

export default Technology
