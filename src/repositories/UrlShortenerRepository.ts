import { ShortenedUrlMapping } from "@/entities/ShortenedUrlMapping";
import axios from "axios";

const BASE_API_URL = "http://localhost:9090/api/v1/url_shortener";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  withCredentials: false
});

export abstract class UrlShortenerRepository {
  static async newShortenedUrl(targetUrl: string): Promise<ShortenedUrlMapping> {
    const rawResponse = await axiosInstance.post(
      "/", { target_url: targetUrl }
    );
    return rawResponse.data as ShortenedUrlMapping; //! warning: missing safe type check
  }

  static async getOriginalUrl(shortCode: string): Promise<string> {
    const rawResponse = await axiosInstance.get(`/${shortCode}`);
    return rawResponse.data.target_url; //! warning: missing safe type check
  }
}
