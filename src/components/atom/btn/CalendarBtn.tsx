/** @format */

import { ReactNode } from 'react';
import * as S from './style';

interface BtnCompProps {
	btnText?: string | number;
	children?: ReactNode;
	onClickFn?: () => boolean | void;
	style?: {};
}

const CalendarBtn = (props: BtnCompProps) => {
	return (
		<S.CommonBtn style={props.style} onClick={props.onClickFn}>
			{props.btnText || props.children}
		</S.CommonBtn>
	);
};

export default CalendarBtn;
