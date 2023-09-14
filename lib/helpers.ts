import readingTime from 'reading-time';
import { DateTime } from 'luxon';

export const getReadingTime = (text: string, locale: string) => {
	const minute = readingTime(text).minutes;
	// Floor to 1 decimal place
	const minutesRounded = Math.floor(minute);
	if (locale === 'ko') {
		return `${minutesRounded} 분`;
	} else {
		if (minutesRounded === 1) {
			return `${minutesRounded} minute`;
		} else {
			return `${minutesRounded} minutes`;
		}
	}
};

export const getRelativeDate = (date: string, locale: string) => {
	return DateTime.fromISO(date).setLocale(locale).toRelative();
};
