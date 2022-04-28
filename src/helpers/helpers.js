// Converts UNIX timestamp to Date
export const toDate = (timestamp) => {
  const ms = timestamp * 1000;
  const dateObject = new Date(ms);
  const date = dateObject.toLocaleString();
  return date;
};
