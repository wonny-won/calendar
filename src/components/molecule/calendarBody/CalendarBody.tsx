/** @format */

import { useRecoilState } from 'recoil';
import { checkedDate } from '../../../commons/recoilAtom';
import { getDaysInMonth } from '../../../commons/util';
import CalendarBtn from '../../atom/btn/CalendarBtn';
import * as S from './style';
import { T2 } from '../../../commons/commonStyle';

export default function CalendarBody() {
	const dayOfTheWeed = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const [currDate] = useRecoilState(checkedDate);
	const date = currDate.split('.');
	const days = getDaysInMonth(date[0], date[1]);
	let currMothDayArr = [];

	for (let i = 1; i <= days; i++) {
		currMothDayArr[i - 1] = i;
	}

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
				/>
			))}
		</S.CalendarBodyWrap>
	);
}
