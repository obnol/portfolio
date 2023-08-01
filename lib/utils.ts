import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateAgo(inputDate: string): string {
  const inputDateObject = new Date(inputDate);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDateObject.getTime();

  const millisecondsPerMinute = 60 * 1000;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const millisecondsPerMonth = 30 * millisecondsPerDay;
  const millisecondsPerYear = 365 * millisecondsPerDay;

  if (timeDifference >= millisecondsPerYear) {
    const yearsAgo = Math.floor(timeDifference / millisecondsPerYear);
    return `${yearsAgo}y ago`;
  } else if (timeDifference >= millisecondsPerMonth) {
    const monthsAgo = Math.floor(timeDifference / millisecondsPerMonth);
    return `${monthsAgo}m ago`;
  } else if (timeDifference >= millisecondsPerDay) {
    const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
    return `${daysAgo}d ago`;
  } else if (timeDifference >= millisecondsPerHour) {
    const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
    return `${hoursAgo}h ago`;
  } else if (timeDifference >= millisecondsPerMinute) {
    const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
    return `${minutesAgo}m ago`;
  } else {
    return 'Just now';
  }
}
