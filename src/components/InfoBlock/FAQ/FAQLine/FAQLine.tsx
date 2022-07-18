import { useRef, useState } from 'react';
import s from './FAQLine.module.scss'
import arrow from '../image/arrow.svg'

type PropsType = {
    question: string
    answer: string
}
export const FAQLine: React.FC<PropsType> = (props) => {

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        <li 
            onClick={onClick}
            className={`${s.faqLine} ${isActive ? s.faqLineActive : 'inactive'}`}>
            <div className={s.faqLineTop} >
                <span className={s.faqLineText}>
                    {props.question}
                </span>
                <img 
                    src={arrow}
                    className={`${s.faqLineImage} ${isActive ? s.faqLineImageActive : 'inactive'}`}></img>
            </div>
            <p className={`${s.faqLineDrop} ${isActive ? s.faqLineDropActive : 'inactive'}`}>
                {props.answer}
            </p>
        </li>
    )
}