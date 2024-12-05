/** @format */

import { useState } from 'react';
import MainCalendar from './components/organism/Calendar';
import React from 'react';

export default function TestPage() {
	const [value, setValue] = useState('');
	return (
		<>
			<MainCalendar value={value} onChange={setValue} />
			<div>선택된 날짜는 '{value}' 입니다.</div>
		</>
	);
}
