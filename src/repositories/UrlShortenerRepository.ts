import { backendApiAxiosInstance } from "@/config/axios/backendApiAxiosInstance";
import { ShortenedUrlMapping } from "@/entities/ShortenedUrlMapping";

const BASE_REPOSITORY_URL = "url_shortener";

export abstract class UrlShortenerRepository {
  static async newShortenedUrl(targetUrl: string): Promise<ShortenedUrlMapping> {
    const rawResponse = await backendApiAxiosInstance.post(
      BASE_REPOSITORY_URL, { target_url: targetUrl }
    );
    return rawResponse.data as ShortenedUrlMapping; //! warning: missing safe type check
  }

  static async getOriginalUrl(shortCode: string): Promise<string> {
    const rawResponse = await axiosInstance.get(`/${shortCode}`);
    return rawResponse.data.target_url; //! warning: missing safe type check
  }
}
