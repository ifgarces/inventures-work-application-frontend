import { ShortenedUrlMapping } from "@/entities/ShortenedUrlMapping";
import { UrlShortenerRepository } from "@/repositories/UrlShortenerRepository";

export abstract class UrlShortenerService {
  /**
   * @returns The reachable shortened full URL, from the `short_code` from the entity.
   * E.g. `https://front.end.test/s/${short_code}`.
   */
  private static computeShortenedUrl(
    shortenedUrlMapping :Pick<ShortenedUrlMapping, "short_code">,
    frontendBaseShortenUrl :string = `${window.location.protocol}//${window.location.host}/s`
  ) :string {
    return [frontendBaseShortenUrl, shortenedUrlMapping.short_code].join("/");
  }

  public static async newShortenedUrl(targetUrl :string) :Promise<URL> {
    const shortenedUrlMapping :ShortenedUrlMapping = await UrlShortenerRepository.newShortenedUrl(targetUrl);
    const urlString :string = UrlShortenerService.computeShortenedUrl(shortenedUrlMapping);
    return new URL(urlString);
  }

  public static async getOriginalUrl(shortCode :string) :Promise<URL> {
    const urlString :string = await UrlShortenerRepository.getOriginalUrl(shortCode);
    return new URL(urlString);
  }
}
