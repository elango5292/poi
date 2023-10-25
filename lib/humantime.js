"use client"
export default function humanTime(dateStr) {
  const inputDate = new Date(dateStr);
  const currentDate = new Date();

  const timeDifference = currentDate - inputDate;
  const minutesDifference = Math.floor(timeDifference / (60 * 1000));
  const hoursDifference = Math.floor(minutesDifference / 60);

  if (minutesDifference < 1) {
    return 'Just now';
  } else if (minutesDifference < 60) {
    return `${minutesDifference} min ago`;
  } else if (hoursDifference < 24) {
    return `${hoursDifference} hour ago`;
  } else {
    // If it's more than 24 hours, return the actual date
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return inputDate.toLocaleDateString(undefined, options);
  }
}
