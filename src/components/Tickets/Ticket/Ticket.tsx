import { useState } from 'react';
import s from './Ticket.module.scss'


type PropsType = {
    title: string
    description: string
    price: number
}

export const Ticket: React.FC<PropsType> = (props) => {

    const [ticketCounter, setTicketCounter] = useState(0)
    
    return (
        <div className={s.ticket}>
            <h4 className={s.ticketTitle}>{props.title}</h4>
            <hr className={s.dashedLine}/>
            <p className={s.description}>{props.description}</p>
            <p className={s.price}>{props.price} ₽</p>
            <div className={s.counter}>
                <button
                    className={s.counterButton}
                    onClick={() => {
                        if (ticketCounter > 0) {
                            setTicketCounter(ticketCounter - 1)
                        } 
                    }}>
                        -
                </button>
                <p>{ticketCounter}</p>
                <button
                    className={s.counterButton}
                    onClick={() => setTicketCounter(ticketCounter + 1)}>
                        +
                </button>
            </div>
            <button className={s.buyButton}>Купить билет</button>
        </div>
    )
}