import logger from "@/utils/logger";

import { UrlOutput } from "@/interfaces/url";
import { findUrl } from "@/data/find";

export async function getUrl(shortUrl: string): Promise<UrlOutput | undefined> {
  try {
    const url: UrlOutput | undefined = await findUrl(shortUrl);
    return url;
  } catch (error: any) {
    logger.error(error.message);
  }
}
