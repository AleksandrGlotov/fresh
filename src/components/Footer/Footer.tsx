import s from './Footer.module.scss'
import vk from './image/vk.svg'
import instagramm from './image/instagramm.svg'
import telegramm from './image/telegramm.svg'
import animation from '../common/linkAnimation.module.scss'
import { Link } from 'react-scroll'

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
                        <div className={animation.linkWithAnimation}>
                            <Link
                                to="bands"
                                smooth={true}
                                duration={500}
                                offset={-100}>
                                    Участники
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-100}>
                                    О фестивале
                            </Link>
                            <Link
                                to="tickets"
                                smooth={true}
                                duration={500}
                                offset={-100}>
                                    Билеты
                            </Link>
                        </div>
                        <div className={animation.linkWithAnimation}>
                            <Link
                                to="games"
                                smooth={true}
                                duration={500}
                                offset={-100}>
                                    Развлечения
                            </Link>
                            <Link
                                to="sleep"
                                smooth={true}
                                duration={500}
                                offset={-100}>
                                    Где жить
                            </Link>
                            <Link
                                to="info"
                                smooth={true}
                                duration={500}>
                                    FAQ
                            </Link>
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