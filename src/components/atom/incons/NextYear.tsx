/** @format */
import React from 'react';
import { memo } from 'react';
import { IconsProp } from './commonIconsType';

const NextYear = (props: IconsProp) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={props.size ?? '15px'}
			viewBox='0 -960 960 960'
			width={props.size ?? '15px'}
			fill='#5f6368'>
			<path d='M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z' />
		</svg>
	);
};
export default memo(NextYear);
