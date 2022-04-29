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

// Get Hours

export const toHours = (timestamp) => {
  const date = toDateObject(timestamp);
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};
