export interface UrlInput {
  originalUrl: string;
  shortUrl: string;
}

export interface UrlOutput {
  id: number;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: string;
  updatedAt: string;
}
