import Dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

Dayjs.extend(utc);

export const dayjs = Dayjs
