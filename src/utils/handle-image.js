import { checkValidUrl } from "./handle-general";

export const checkThumbnailValid = (url = "") => {
  const imagePathRegex = /\.(jpeg|jpg|gif|png)$/i;
  return !!url && checkValidUrl(url) && imagePathRegex.test(url);
};
