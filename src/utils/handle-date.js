import { formatDistanceToNow, fromUnixTime } from "date-fns";

export const convertUnixDate = (unixTimestamp) => {
  const date = fromUnixTime(unixTimestamp);
  return formatDistanceToNow(date).replace("about ", "") + " ago";
};
