import s from './Header.module.scss'
import './BurgerMenu.scss'
import vk from '../FirstScreen/image/vk.svg'
import instagramm from '../FirstScreen/image/instagramm.svg'
import telegramm from '../FirstScreen/image/telegramm.svg'
import burger from '../FirstScreen/image/burger.svg'
import burgerOff from '../FirstScreen/image/burgerOff.svg'
import animation from '../common/linkAnimation.module.scss'
import { Link } from 'react-scroll'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'


export const Header = () => {
	// let Link = Scroll.Link;

    return (
        <header className={s.header}>
			<span>/фреш</span>
			<nav className={s.headerNavigation}>
				<ul className={animation.linkWithAnimation}>
					<li>
						<Link
							to="bands"
							smooth={true}
							duration={500}
							offset={-100}>
								Участники
						</Link>
					</li>
					<li>
						<Link
							to="about"
							smooth={true}
							duration={500}
							offset={-100}>
								О фестивале
						</Link>
					</li>
					<li>
						<Link
							to="tickets"
							smooth={true}
							duration={500}
							offset={-100}>
								Билеты
						</Link>
					</li>
					<li>
						<Link
							to="sleep"
							smooth={true}
							duration={500}
							offset={-100}>
								Где жить
						</Link>
					</li>
					<li>
						<Link
							to="games"
							smooth={true}
							duration={500}
							offset={-100}>
								Развлечения
						</Link>
					</li>
					<li>
						<Link
							to="info"
							smooth={true}
							duration={500}
							offset={-100}>
								FAQ
						</Link>
					</li>
					<li>
						<Link
							to="road"
							smooth={true}
							duration={500}
							offset={-100}>
								Как добраться
						</Link>
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

	const [isOpen, setOpen] = useState(false)

	const handleIsOpen = () => {
		setOpen(!isOpen)
	}

	const closeSideBar = () => {
		setOpen(false)
	}
	return (
		<Menu
			width={ '100%' }
			right 
			customBurgerIcon={ <img src={burger} /> }
			customCrossIcon={ <img src={burgerOff} /> }
			isOpen={isOpen}
			onOpen={handleIsOpen}
			onClose={handleIsOpen}>
				<Link
					className="menu-item"
					to="bands"
					smooth={true}
					duration={500}
					offset={-100}
					onClick={closeSideBar}>
						Участники
				</Link>
				<Link
					className="menu-item"
					to="about"
					smooth={true}
					duration={500}
					offset={-100}
					onClick={closeSideBar}>
						О фестивале
				</Link>
				<Link
					className="menu-item"
					to="tickets"
					smooth={true}
					duration={500}
					offset={-100}
					onClick={closeSideBar}>
						Билеты
				</Link>
				<Link
					className="menu-item"
					to="sleep"
					smooth={true}
					duration={500}
					offset={-100}
					onClick={closeSideBar}>
						Где жить
				</Link>
				<Link
					className="menu-item"
					to="games"
					smooth={true}
					duration={500}
					offset={-100}
					onClick={closeSideBar}>
						Развлечения
				</Link>
				<Link
					className="menu-item"
					to="info"
					smooth={true}
					duration={500}
					offset={-100}
					onClick={closeSideBar}>
						FAQ
				</Link>
				<Link
					className="menu-item"
					to="road"
					smooth={true}
					duration={500}
					offset={-100}
					onClick={closeSideBar}>
						Как добраться
				</Link>
				<div>
					<img className={s.headerLinksImage} src={vk}></img>
					<img className={s.headerLinksImage} src={instagramm}></img>
					<img className={s.headerLinksImage} src={telegramm}></img>
				</div>
		</Menu>
	)
}