import { checkValidUrl } from "./handle-general";

export const checkThumbnailValid = (url = "") => {
  return url && checkValidUrl(url);
};
