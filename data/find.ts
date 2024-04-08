import logger from "@/utils/logger";
import { UrlOutput } from "@/interfaces/url";
import models from "@/models/index";

export async function findUrl(
  shortUrl: string
): Promise<UrlOutput | undefined> {
  try {
    const url: UrlOutput = await models.Url.findOne({ where: { shortUrl } });

    if (url) {
      await models.Url.increment("clicks", { where: { shortUrl } });
    }

    return url;
  } catch (error: any) {
    logger.error(error.message);
  }
}
