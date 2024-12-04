/** @format */

import { ReactNode } from 'react';
import * as S from './style';

interface BtnCompProps {
	btnText?: string | number;
	children?: ReactNode;
	onClickFn?: () => boolean | void;
}

const CalendarBtn = (props: BtnCompProps) => {
	return <S.CommonBtn onClick={props.onClickFn}>{props.btnText || props.children}</S.CommonBtn>;
};

export default CalendarBtn;
