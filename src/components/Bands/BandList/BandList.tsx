import s from './BandList.module.scss'
import { CardWithButton } from "../../common/CardWithButton/CardWithButton"
import pnkmovies from './image/pnkmovies.png'
import anakondaz from './image/anakondaz.png'
import fpg from './image/fpg.png'
import louna from './image/louna.png'
import shortparis from './image/shrtparis.png'
import slot from './image/slot.png'


export const BandList: React.FC = () => {
    return (
        <div className={s.bandList}>
            <CardWithButton image={pnkmovies} buttonText='Порнофильмы'/>
            <CardWithButton image={anakondaz} buttonText='Anakondaz'/>
            <CardWithButton image={fpg} buttonText='F.P.G.'/>
            <CardWithButton image={louna} buttonText='Louna'/>
            <CardWithButton image={shortparis} buttonText='ShortParis'/>
            <CardWithButton image={slot} buttonText='СЛОТ'/>
        </div>
    )
}