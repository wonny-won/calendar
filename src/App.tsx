/** @format */

import { RecoilRoot } from 'recoil';
// import TestPage from './Test';
import MainCalendar from './components/organism/Calendar';

function App() {
	return (
		<RecoilRoot>
			<MainCalendar />
		</RecoilRoot>
	);
}

export default App;
