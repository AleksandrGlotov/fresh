import { SkewButton } from '../common/SkewButton/SkewButton'
import { Header } from '../Header/Header'
import s from './FirstScreen.module.scss'

export const FirstScreen = () => {
    return (
        <div className={s.mainBG}>
            <div className={s.mainContainer}>
                <Header />
                <p>
                    Музыкальный фестиваль на свежем воздухе
                    <br/>13–14 августа 2022 / Белый колодец / Воронеж
                </p>
                <h1>/фрэш</h1>
                <SkewButton buttonText='Купить билеты'/>
            </div>
        </div>
    )
}