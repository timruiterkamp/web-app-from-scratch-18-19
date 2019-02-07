export const parseDate = date => {
  const currDate = new Date(date);
  const hours = (currDate.getHours() < 10 ? "0" : "") + currDate.getHours();
  const minutes =
    (currDate.getMinutes() < 10 ? "0" : "") + currDate.getMinutes();
  const day = currDate.getDate();
  const month = currDate.getMonth() + 1;
  const year = currDate.getFullYear();

  return `${day}-${month}-${year} ${hours}:${minutes}`;
};
