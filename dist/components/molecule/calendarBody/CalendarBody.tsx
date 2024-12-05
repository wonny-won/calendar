/** @format */

import { useRecoilState } from 'recoil';
import { checkedDate } from '../../../commons/recoilAtom';
import { getDaysInMonth } from '../../../commons/util';
import CalendarBtn from '../../atom/btn/CalendarBtn';
import * as S from './style';
import { T2 } from '../../../commons/commonStyle';
import { Dispatch, SetStateAction } from 'react';

interface CalendarProp {
	onChange: Dispatch<SetStateAction<any>>;
}

export default function CalendarBody(props: CalendarProp) {
	let currMothDayArr = [];
	const dayOfTheWeed = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const [currDate] = useRecoilState(checkedDate);
	const date = currDate.split('.');
	const days = getDaysInMonth(date[0], date[1]);

	for (let i = 1; i <= days; i++) {
		currMothDayArr[i - 1] = i;
	}

	/*************************************************************
	 * 사용자 이벤트(클릭)에 따른 date 변경
	 *
	 * [참고]
	 * props.onChane가 undefined인 경우 currDate change 안됨
	 *
	 * @param e : 클릭한 버튼의 value
	 * @returns : 'YYYY . MM . DD'
	 *************************************************************/
	const onClickChangeDate = (e: any) => {
		if (!props.onChange) return;
		props.onChange(`${currDate} . ${e.currentTarget.innerHTML}`);
	};

	return (
		<S.CalendarBodyWrap>
			{dayOfTheWeed.map((i: string) => (
				<T2>{i}</T2>
			))}
			{currMothDayArr.map((i: number) => (
				<CalendarBtn
					key={currDate + i}
					isBody={true}
					btnText={i}
					style={{
						width: '34px',
						height: '34px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onClickFn={(e: any) => onClickChangeDate(e)}
				/>
			))}
		</S.CalendarBodyWrap>
	);
}
