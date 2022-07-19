import s from './FAQ.module.scss'
import { FAQLine } from './FAQLine/FAQLine';
import { Element } from 'react-scroll'


export const FAQ: React.FC = () => {
    return (
        <div className={s.faqContainer}>
            <Element name='info'>
                <h2 className={s.faqHeader}>
                    / FAQ
                </h2>
            </Element>
            <ul className={s.faqList}>
                    <FAQLine
                        question='Есть ли на территории интернет?'
                        answer='Для посетителей фестиваля в основных 
                        зонах будет работать высокоскоростной Wi-Fi'
                    />
                    <FAQLine
                        question='Можно ли приносить свою еду/алкоголь?'
                        answer='Запрещено проносить любую еду и напитки,
                         в том числе алкогольные'
                    />
                    <FAQLine
                        question='Можно ли вернуть/обменять билет?'
                        answer='Вернуть или обменять билет можно в любое время за 
                        14дней до фестиваля. Для этого необходимо написать письмо 
                        на почту info@slashfresh.ru с темой «Возврат билета» и приложить 
                        к письму электронный билет и чек.'
                    />
                    <FAQLine
                        question='Будет ли камера хранения?'
                        answer='Камера хранения на фестивале будет предусмотрена'
                    />
                    <FAQLine
                        question='Разрешен ли вход с животными?'
                        answer='Вход с животными на фестивальное поле запрещен. 
                        (кроме собак поводырей)'
                    />
            </ul>
        </div>
        
    )
}