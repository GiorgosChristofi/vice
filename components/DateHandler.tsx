function formatDateTime(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  console.log(time);
  return time;
}

export function getYesterdayDateTime(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  console.log(yesterday);
  return formatDateTime(yesterday);
}

export function getOneWeekAgoDateTime(): string {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  console.log(oneWeekAgo);
  return formatDateTime(oneWeekAgo);
}

export function getOneMonthAgoDateTime(): string {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  console.log(oneMonthAgo);
  return formatDateTime(oneMonthAgo);
}
