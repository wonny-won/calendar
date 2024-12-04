/** @format */

import { useRecoilState } from 'recoil';
import { checkedDate } from '../../../commons/recoilAtom';
import { getDaysInMonth } from '../../../commons/util';
import CalendarBtn from '../../atom/btn/CalendarBtn';
import * as S from './style';

export default function CalendarBody() {
	const [currDate] = useRecoilState(checkedDate);
	const date = currDate.split('.');
	const days = getDaysInMonth(date[0], date[1]);
	let currMothDayArr = [];

	for (let i = 1; i <= days; i++) {
		currMothDayArr[i - 1] = i;
	}

	return (
		<S.CalendarBodyWrap>
			{currMothDayArr.map((i: number) => (
				<CalendarBtn
					key={currDate + i}
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
