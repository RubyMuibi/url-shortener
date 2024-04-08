import { UrlOutput } from "@/interfaces/url";
import logger from "@/utils/logger";
import models from "@/models/index";

export async function createUrl(
  originalUrl: string,
  shortUrl: string
): Promise<UrlOutput | undefined> {
  try {
    const url: UrlOutput = await models.Url.create({originalUrl, shortUrl});

    return url;
  } catch (error: any) {
    logger.error(error.message);
  }
}
