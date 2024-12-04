/** @format */

import { useRecoilState } from 'recoil';
import * as S from '../../../commons/commonStyle';
import { checkedDate } from '../../../commons/recoilAtom';

export default function CheckedDate() {
	const [currDate] = useRecoilState(checkedDate);

	return <S.T1>{currDate}</S.T1>;
}
