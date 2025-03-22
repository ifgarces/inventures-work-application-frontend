import { backendApiAxiosInstance } from "@/config/axios/backendApiAxiosInstance";
import { ShortenedUrlMapping } from "@/entities/ShortenedUrlMapping";

const BASE_REPOSITORY_URL = "url_shortener";

export abstract class UrlShortenerRepository {
  static async newShortenedUrl(targetUrl: string): Promise<ShortenedUrlMapping> {
    const rawResponse = await backendApiAxiosInstance.post(
      BASE_REPOSITORY_URL,
      { target_url: targetUrl } // eslint-disable-line camelcase
    );
    return rawResponse.data as ShortenedUrlMapping; //! warning: missing safe type check
  }

  static async getOriginalUrl(shortCode: string): Promise<string> {
    const rawResponse = await backendApiAxiosInstance.get([BASE_REPOSITORY_URL, shortCode].join("/"));
    return rawResponse.data.target_url; //! warning: missing safe type check
  }
}
