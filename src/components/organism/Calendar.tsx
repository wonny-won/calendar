/** @format */
import CalendarBody from '../molecule/calendarBody/CalendarBody';
import Header from '../molecule/header/Header';

interface CalendarProp {
	value?: any;
	onChange?: any;
}

export default function MainCalendar(props: CalendarProp) {
	return (
		<div style={{ margin: '5px', boxShadow: '10px 15px 10px #f0efef', display: 'inline-block' }}>
			<Header />
			<CalendarBody onChange={props.onChange} />
		</div>
	);
}
