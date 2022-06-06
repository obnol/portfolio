const birthday = new Date('2000-06-11');
const ageMilliseconds = Date.now() - birthday.getTime();

const MILLISECOND = 1;
const SECOND = MILLISECOND * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365;

export const age = ageMilliseconds / YEAR;
