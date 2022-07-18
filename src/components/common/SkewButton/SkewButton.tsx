import React from 'react';
import s from './SkewButton.module.scss';

type PropsType = {
	buttonText: string
}

export const SkewButton: React.FC<PropsType> = (props) => {
	return (
		<button className={s.button_skew}>{props.buttonText}</button>
	);
}
