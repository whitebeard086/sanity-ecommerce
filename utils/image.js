import ImageUrlBuilder from "@sanity/image-url";
import client from "./client";

const urlForThumbnail = source => {
  return ImageUrlBuilder(client).image(source).width(300).url();
};

const urlFor = source => {
  return ImageUrlBuilder(client).image(source).width(580).url();
};

export { urlForThumbnail, urlFor };
