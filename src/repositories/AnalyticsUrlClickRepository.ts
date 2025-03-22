import { backendApiAxiosInstance } from "@/config/axios/backendApiAxiosInstance";
import { ShortenedUrlMapping } from "@/entities/ShortenedUrlMapping";

const BASE_REPOSITORY_URL = "crud/analytics_url_clicks";

interface IAnalyticsURLClickCreateRequest {
  shortened_url_mapping: Pick<ShortenedUrlMapping, "short_code">;
}

export abstract class AnalyticsUrlClickRepository {
  static async registerNewClick(shortCode: string): Promise<void> {
    await backendApiAxiosInstance.post(
      BASE_REPOSITORY_URL,
      {
        shortened_url_mapping: { // eslint-disable-line camelcase
          short_code: shortCode // eslint-disable-line camelcase
        }
      } as IAnalyticsURLClickCreateRequest
    );
  }
}
