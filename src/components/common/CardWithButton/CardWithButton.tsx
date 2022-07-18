import React from 'react';
import { SkewButton } from '../SkewButton/SkewButton';
import s from './CardWithButton.module.scss';

type PropsType = {
	image: string
	buttonText: string
}

export const CardWithButton: React.FC<PropsType> = (props) => {

	return (
		<div className={s.card_item}>	
			<img src={props.image}></img>
			<div className={s.buttonAbs}>
				<SkewButton buttonText={props.buttonText}/>
			</div>
		</div>
	);
}
