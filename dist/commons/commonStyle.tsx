/** @format */

import styled from '@emotion/styled';

/*****************************************************************************
 * style type
 *****************************************************************************/
interface TxtColorProp {
	color: string;
}

/*****************************************************************************
 * global font style
 *****************************************************************************/
//-- title
export const T1 = styled.h1`
	font-size: 14px;
	font-weight: 700;
	text-align: center;
`;

//-- sub tilte
export const T2 = styled.h3`
	font-size: 12px;
	font-weight: 600;
	text-align: center;
`;

//-- normal txt
export const B1 = styled.p`
	font-size: 11px;
	color: ${(props: TxtColorProp) => props.color};
	text-align: center;
`;
