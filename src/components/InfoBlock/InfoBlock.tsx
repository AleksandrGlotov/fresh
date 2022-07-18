import { FAQ } from './FAQ/FAQ'
import s from './InfoBlock.module.scss'
import { SendForm } from './SendForm/SendForm'

export const InfoBlock: React.FC = () => {
    return (
        <div className={s.infoBlockContainer}>
            <FAQ />
            <SendForm />
        </div>
    )
}