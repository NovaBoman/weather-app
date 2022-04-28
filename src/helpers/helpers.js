// Converts UNIX timestamp to Date
export const toDate = (timestamp) => {
  const ms = timestamp * 1000;
  const dateObject = new Date(ms);
  const date = dateObject.toLocaleString();
  return date;
};

// Format date
export const formatDate = (timestamp, option = "long") => {
  const date = toDateObject(timestamp);
  return date.toLocaleDateString("en-GB", {
    weekday: option,
    month: option,
    day: "numeric",
  });
};

// Convert Unix timestamp to Date object
export const toDateObject = (timestamp) => {
  const ms = timestamp * 1000;
  const dateObject = new Date(ms);
  return dateObject;
};
