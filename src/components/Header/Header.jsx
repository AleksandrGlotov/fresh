import s from './Header.module.scss'
import './BurgerMenu.scss'
import vk from '../FirstScreen/image/vk.svg'
import instagramm from '../FirstScreen/image/instagramm.svg'
import telegramm from '../FirstScreen/image/telegramm.svg'
import burger from '../FirstScreen/image/burger.svg'
import burgerOff from '../FirstScreen/image/burgerOff.svg'
import animation from '../common/linkAnimation.module.scss'

import { slide as Menu } from 'react-burger-menu'


export const Header = () => {
    return (
        <header className={s.header}>
			<span>/фреш</span>
			<nav className={s.headerNavigation}>
				<ul className={animation.linkWithAnimation}>
					<li>
						<a href='/'>Участники</a>
					</li>
					<li>
						<a href='/'>О фестивале</a>
					</li>
					<li>
						<a href='/'>Билеты</a>
					</li>
					<li>
						<a href='/'>Где жить</a>
					</li>
					<li>
						<a href='/'>Развлечения</a>
					</li>
					<li>
						<a href='/'>FAQ</a>
					</li>
					<li>
						<a href='/'>Как добраться</a>
					</li>
				</ul>
			</nav>
			<div className={s.social}>
                <img src={vk}></img>
                <img src={instagramm}></img>
                <img src={telegramm}></img>
			</div>
			<nav className={s.burger}>
				<BurgerMenu />
			</nav>
		</header>
    )
}

const BurgerMenu = () => {
	return (
		<Menu
			width={ '100%' }
			right 
			customBurgerIcon={ <img src={burger} /> }
			customCrossIcon={ <img src={burgerOff} /> }>
				<a id="bands" className="menu-item" href="/">Участники</a>
				<a id="about" className="menu-item" href="/about">О фестивале</a>
				<a id="tickets" className="menu-item" href="/tickets">Билеты</a>
				<a id="sleep" className="menu-item" href="/sleep">Где жить</a>
				<a id="games" className="menu-item" href="/games">Развлечения</a>
				<a id="info" className="menu-item" href="/info">FAQ</a>
				<a id="road" className="menu-item" href="/road">Как добраться</a>
				<div>
					<img className={s.headerLinksImage} src={vk}></img>
					<img className={s.headerLinksImage} src={instagramm}></img>
					<img className={s.headerLinksImage} src={telegramm}></img>
				</div>
		</Menu>
	)
}