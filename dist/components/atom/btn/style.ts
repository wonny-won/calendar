/** @format */

import styled from '@emotion/styled';

interface BtnProp {
	isBody?: boolean;
}

export const CommonBtn = styled.button`
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
		background-color: ${(props: BtnProp) => props.isBody && 'black'};
		color: ${(props: BtnProp) => props.isBody && '#FFF'};
		border-radius: ${(props: BtnProp) => props.isBody && '50% 50%'};
	}
`;
