import { NextResponse, NextRequest } from "next/server";
import sequelize from "@/config/db";
import { postUrl } from "@/app/api/urls/POST";
import { getUrl } from "@/app/api/urls/GET";
import { UrlOutput } from "@/interfaces/url";
import logger from "@/utils/logger";

export async function POST(req: NextRequest): Promise<NextResponse> {
  await sequelize.sync();

  const { originalUrl } = await req.json();
  try {
    const result: UrlOutput | undefined = await postUrl(originalUrl);

    if (!result) {
      return NextResponse.json(
        { error: "URL could not be created" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    logger.error("Error creating url:", error);
    return NextResponse.json({ error: "Error creating url" }, { status: 500 });
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  await sequelize.sync();
  const shortUrl = new URL(req.url).searchParams.get("shortUrl");

  try {
    const result: UrlOutput | undefined = await getUrl(shortUrl);

    if (!result) {
      return NextResponse.json(
        { error: "URL could not be found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    logger.error("Error finding url:", error);
    return NextResponse.json({ error: "Error finding url" }, { status: 500 });
  }
}
