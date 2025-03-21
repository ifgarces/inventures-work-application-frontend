import { IFormFields } from "@/app/home/_components/UrlShortenerForm/types";
import { ShortenedUrlMapping } from "@/entities/ShortenedUrlMapping";
import { UrlShortenerRepository } from "@/repositories/UrlShortenerRepository";
import { UrlShortenerService } from "@/services/UrlShortenerService";
import { useState } from "react";

export function useUrlShortenerFormViewModel() {
  const [shortenedUrl, setShortenedUrl] = useState<string | undefined>();

  async function onFormSubmit(values: IFormFields) {
    const shortenedUrlMapping :ShortenedUrlMapping = await UrlShortenerRepository.shortenUrl(values.longUrl);
    setShortenedUrl(UrlShortenerService.computeShortenedUrl(shortenedUrlMapping));
  };

  return { shortenedUrl, onFormSubmit };
}
