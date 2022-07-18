import s from './BandList.module.scss'
import { CardWithButton } from "../../common/CardWithButton/CardWithButton"
import hatters from './image/hatters.png'
import kazus from './image/kazus.png'
import little from './image/little.png'
import lyapis from './image/lyapis.png'
import mow from './image/mow.png'
import plan from './image/plan.png'


export const BandList2: React.FC = () => {
    return (
        <div className={s.bandList}>
            <CardWithButton image={hatters} buttonText='The Hatters'/>
            <CardWithButton image={kazus} buttonText='Казускома'/>
            <CardWithButton image={little} buttonText='Little big'/>
            <CardWithButton image={lyapis} buttonText='Ляпис Трубецкой'/>
            <CardWithButton image={mow} buttonText='Кис-кис'/>
            <CardWithButton image={plan} buttonText='План Ломоносова'/>
        </div>
    )
}