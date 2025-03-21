import { ShortenedUrlMapping } from "@/entities/ShortenedUrlMapping";

export abstract class UrlShortenerService {
  /**
   * @returns The reachable shortened full URL, from the `short_code` from the entity.
   * E.g. `https://front.end.test/s/${short_code}`.
   */
  static computeShortenedUrl(
    shortenedUrlMapping :Pick<ShortenedUrlMapping, "short_code">,
    frontendBaseShortenUrl :string = `${window.location.protocol}//${window.location.host}/s`
  ) :string {
    return [frontendBaseShortenUrl, shortenedUrlMapping.short_code].join("/");
  }
}
