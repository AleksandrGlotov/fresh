import { CardWithButton } from '../common/CardWithButton/CardWithButton'
import s from './Games.module.scss'
import pic1 from './image/1.png'
import pic2 from './image/2.png'
import pic3 from './image/3.png'
import pic4 from './image/4.png'
import pic5 from './image/5.png'

export const Games: React.FC = () => {
    return (
        <div className={s.gamesList}>
            <div className={s.gamesText}>
                <h2 className={s.gamesTextHeader}>
                    / Развлечения
                </h2>
                <p className={s.gamesTextDescription}>
                    Помимо крутой музыкальной программы, 
                    организаторы превратили территорию фестиваля 
                    в настоящий парк развлечений, а это значит, 
                    что фестиваль станет настоящим праздником для каждого
                </p>
            </div>
            <CardWithButton image={pic1} buttonText='Прокат сап-бордов'/>
            <CardWithButton image={pic2} buttonText='Футбол в инвертоскопах'/>
            <CardWithButton image={pic3} buttonText='Кальяная зона'/>
            <CardWithButton image={pic4} buttonText='Полёты на воздушном шаре'/>
            <CardWithButton image={pic5} buttonText='Пляжный волейбол'/>
        </div>
    )
}