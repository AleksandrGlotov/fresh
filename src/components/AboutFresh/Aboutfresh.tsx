import s from './Aboutfresh.module.scss'
import { Carousel } from './Carousel/Carousel'

export const AboutFresh: React.FC = () => {
    return (
        <div  className={s.aboutFreshCenter} >
            <div className={s.aboutFreshLeft}>
                <div className={s.aboutFreshHead}>
                    <h2>
                        / О фестивале
                    </h2>
                    <p>
                        /фрэш в Белом колодце – фестиваль, без которого представить себе лето уже невозможно. 
                        В одном из самых живописных мест Воронежской области – карьере с меловыми холмами, 
                        песчаными пляжами и прозрачными озерами – ежегодно собираются тысячи человек, 
                        чтобы послушать ведущие рок-группы.
                    </p>
                </div>
                <div className={s.aboutFreshPluses}>
                    <div className={s.plus}>
                        <h2>12 км</h2>
                        <p>от Воронежа в уникальном природном парке</p>
                    </div>
                    <div className={s.plus}>
                        <h2>2 дня</h2>
                        <p>любимых хитов, драйва и отличного настроения</p>
                    </div>
                    <div className={s.plus}>
                        <h2>более 30</h2>
                        <p>ведущих и набирающих популярность рок-групп России </p>
                    </div>
                    <div className={s.plus}>
                        <h2>12 часов</h2>
                        <p>зажигательной живой музыки и развлечений на любой вкус</p>
                    </div>
                </div>
            </div>
            <div className={s.aboutFreshRight}>
                <Carousel />
            </div>
        </div>
    )
}