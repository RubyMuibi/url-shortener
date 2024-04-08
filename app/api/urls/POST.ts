import logger from "@/utils/logger";
import { shortener } from "@/utils/shortener";

import { UrlOutput } from "@/interfaces/url";
import { createUrl } from "@/data/create";

export async function postUrl(
  originalUrl: string
): Promise<UrlOutput | undefined> {
  try {
    const shortUrl: string = shortener();
    if (!shortUrl) {
      throw new Error("Short url not generated");
    }
    const url: UrlOutput | undefined = await createUrl(originalUrl, shortUrl);

    return url;
  } catch (error: any) {
    logger.error(error.message);
    throw new Error(error.message);
  }
}
