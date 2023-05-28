import { convertUnixDate } from "./handle-date";
import { checkValidUrl } from "./handle-general";
import { checkThumbnailValid } from "./handle-image";

describe("Is Valid URL", () => {
  it("Should return true if a url is valid", () => {
    const url = "https://www.example.com";
    const result = checkValidUrl(url);
    expect(result).toBe(true);
  });
});

describe("Is Valid Thumbnail Image Path", () => {
  it("Should return true in case the image path is valid", () => {
    const path =
      "https://b.thumbs.redditmedia.com/gY-kcb0L0p8Srx4cocpeGGNELgWzwurC0pyiaereFlI.jpg";
    const result = checkThumbnailValid(path);
    expect(result).toBe(true);
  });
  it("Should return false in case the image path is in a wrong format", () => {
    const path = "path/to/image.txt";
    const result = checkThumbnailValid(path);
    expect(result).toBe(false);
  });
  it("Should return false in case the image path is empty", () => {
    const path = "";
    const result = checkThumbnailValid(path);
    expect(result).toBe(false);
  });
});

describe("Check Unix convertion", () => {
  it("Should return true if the unix conversion match: 11 hours", () => {
    const unixTimestamp = 1685269344;
    const result = convertUnixDate(unixTimestamp);
    expect(result).toMatch("11 hours");
  });
  it("Should return true if the unix conversion match: 2 months", () => {
    const unixTimestamp = 1679961600;
    const result = convertUnixDate(unixTimestamp);
    expect(result).toMatch("2 months");
  });
  it("Should return true if the unix conversion match: 3 years", () => {
    const unixTimestamp = 1590700986;
    const result = convertUnixDate(unixTimestamp);
    expect(result).toMatch("3 years");
  });
});
