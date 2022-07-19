import s from './Sleep.module.scss'
import image from './image/image 5.png' 
import { Element } from 'react-scroll'

export const Sleep: React.FC = () => {
    return (
        <div className={s.sleepContainer}>
            <div className={s.sleepText}>
                <Element name='sleep'>
                    <h2 className={s.sleepHeader}>
                        / Где жить
                    </h2>
                </Element>
                <div className={s.sleepDescription}>
                    <p className={s.sleepDescriptionText}>Кемпинг расположен на территории проведения фестиваля. 
                        Жители палаточного лагеря могут бесплатно пользоваться горячим душем, 
                        холодной и горячей питьевой водой, розетками для зарядки гаджетов, Wi-Fi, 
                        комнатой матери и ребёнка, ячейками для хранения личных вещей.
                    </p>
                    <p className={s.sleepDescriptionText}>Для тех, кто не хочет везти с собой палатку и заниматься её установкой, 
                        работает кемпинг Caravan – это палатки, заранее установленные на 
                        отдельной охраняемой территории. Также у кемпинга Caravan есть свой 
                        собственный ресепшн и набор дополнительных услуг.
                    </p>
                </div>
            </div>
            <img className={s.sleepImage} src={image}></img>
        </div>
    )
}