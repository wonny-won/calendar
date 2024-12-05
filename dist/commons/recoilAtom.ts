/** @format */

import { atom } from 'recoil';
import { convertDateFromFn } from './util';

export const checkedDate = atom({
	key: 'checkedDate',
	default: convertDateFromFn(new Date()),
});
