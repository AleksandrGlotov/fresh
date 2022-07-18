import { Ticket } from "./Ticket/Ticket"
import s from './Tickets.module.scss'

export const Tickets: React.FC = () => {
    return (
        <div className={s.ticketsContainer}>
            <h2 className={s.t}>/ Билеты</h2>
            <p className={s.ps}>Вход на территорию фестиваля возможен только при наличии билета
                (электронного или бумажного).
                На входе билеты будут обмениваться на браслеты.
            </p>
            <div className={s.ticketsList}>
                <Ticket
                    price={2000}
                    title='Билет на 1 день'
                    description='Покупается на конкретную дату и действует только один день'
                />
                <Ticket
                    price={3500}
                    title='Абонемент на 2 дня'
                    description='Действует все дни фестиваля. Не включает билет в палаточный городок'
                />
                <Ticket
                    price={9000}
                    title='VIP-билет на 2 дня'
                    description='Даёт право на доступ в шатёр с отдельным баром,
                         санузлами и лаунж-зоной с сидячими местами'
                />
                <Ticket
                    price={500}
                    title='Билет в кемпинг'
                    description='Ограниченное количество билетов для комфортного пребывания гостей'
                />
            </div>
        </div>
    )
}