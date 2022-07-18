import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import s from './SendForm.module.scss'
import style from '../../common/SkewButton/SkewButton.module.scss'

export const SendForm: React.FC = () => {
    return (
        <div className={s.sendFormContainer}>
            <h3 className={s.sendFormHeader}>
                Будь в курсе
            </h3>
            <p className={s.sendFormDescription}>
                Чтобы не пропустить важные анонсы и акции, подпишись на новостную рассылку
            </p>
            <TelegrammSendFrom />
        </div>
    )
}

type TelegrammSendFromType = {
    name: string,
    email: string
}

const validationSchemaTelegrammForm = Yup.object().shape({
    name: Yup.string()
        .min(2, "Длина имени не менее 2 символов")
        .required("Введите имя"),
    email: Yup.string()
        .email('Некорректный формат почты')
        .required('Введите почту'),
});

const TelegrammSendFrom: React.FC = () => {

    const token = '5577523950:AAFlsS87MtoT5QvUW1RGAzS7D5XxtvFbp6g'

    const chat_id = '-749708945'

    return (

        <Formik
            initialValues={{
                email: "",
                name: "",
            }}
            validationSchema={validationSchemaTelegrammForm}
            onSubmit={ (values: TelegrammSendFromType) => {
                const apiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Имя: ${values.name}, Почта: ${values.email}`;
                axios.post(apiUrl).then((resp) => resp.data)
            }}
        >
            {({
                errors,
                touched,
                values
            }) => (
                <Form>
                    <div className={s.form_group}>
                        <label htmlFor="name"></label>
                        <Field
                            name={'name'}
                            type={'text'}
                            placeholder={'Имя'}
                            className={(errors.name && touched.name ? s.is_invalid : '') + ( !errors.name && touched.name ? s.is_valid : '') }
                        />
                        <ErrorMessage className={s.info} name="name" component="span" />
                    </div>

                    <div className={s.form_group}>
                        <label htmlFor="email"></label>
                        <Field
                            name={'email'}
                            type={'text'}
                            placeholder={'Электронный адрес'}
                            className={(errors.email && touched.email ? s.is_invalid : '') + ( !errors.email && touched.email ? s.is_valid : '') }
                        />
                        <ErrorMessage className={s.info} name="email" component="span" />
                    </div>

                    <button className={style.button_skew} type={'submit'}>Подписаться</button>
                </Form>
            )}
        </Formik>

    )
}
