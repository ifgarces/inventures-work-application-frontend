import { IFormFields } from "@/app/home/_components/UrlShortenerForm/types";
import { UrlShortenerService } from "@/services/UrlShortenerService";
import { useState } from "react";

export function useUrlShortenerFormViewModel() {
  const [shortenedUrlString, setShortenedUrlString] = useState<string | undefined>();

  async function onFormSubmit(values: IFormFields) {
    const shortenUrl :URL = await UrlShortenerService.newShortenedUrl(values.longUrl);
    setShortenedUrlString(shortenUrl.toString());
  };

  return { shortenedUrlString, onFormSubmit };
}
