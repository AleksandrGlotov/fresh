import s from './Footer.module.scss'
import vk from './image/vk.svg'
import instagramm from './image/instagramm.svg'
import telegramm from './image/telegramm.svg'
import animation from '../common/linkAnimation.module.scss'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.footerFirstColumn}>
                    <h4 className={s.footerHeaders}>/фрэш</h4>
                    <div className={s.footerLinks}>
                        <img className={s.footerLinksImage} src={vk}></img>
                        <img className={s.footerLinksImage} src={instagramm}></img>
                        <img className={s.footerLinksImage} src={telegramm}></img>
                    </div>
                </div>
                <div className={s.footerSecondColumn}>
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности </p>
                </div>
                <div className={s.footerThirdColumn}>
                    <h4 className={s.footerHeaders}>Навигация</h4>
                    <nav className={s.footerDescription}>
                        <div>
                            <a>Участники</a>
                            <a>О фестивале</a>
                            <a>Билеты</a>
                        </div>
                        <div>
                            <a>Развлечения</a>
                            <a>Где жить</a>
                            <a>Как добраться</a>
                        </div>
                    </nav>
                </div>
                <div className={s.footerFourthColumn}>
                    <h4 className={s.footerHeaders}>Контакты</h4>
                    <nav className={s.footerDescription}>
                        <p>info@slashfresh.ru</p>
                        <p>+7 (963) 030-023-99</p>
                    </nav>
                </div>
            </div>
            <div className={s.footerDown}>
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности </p>
                </div>
        </div>
    )
}