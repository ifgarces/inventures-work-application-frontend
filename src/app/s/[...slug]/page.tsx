"use client";

import { UrlShortenerService } from "@/services/UrlShortenerService";
import { Alert } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

async function redirectToOriginalUrl(shortCode :string) {
  const originalUrl :URL = await UrlShortenerService.getOriginalUrl(shortCode);
  debugger;
  window.location.assign(originalUrl);
}

export default function ShortenedUrlCatchAllPage() {
  const params = useParams();

  const firstSlug :string | undefined = useMemo(() => {
    return (params.slug === undefined) ? undefined : params.slug[0];
  }, [params.slug]);

  useEffect(() => {
    if (firstSlug === undefined) return;

    redirectToOriginalUrl(firstSlug);
  }, [firstSlug]);

  return (
    <Alert
      message="Redirecting"
      description={`Redirecting to original URL for short code ${firstSlug}...`}
      type="info"
      showIcon
      closable
      style={{ padding: "20px" }} />
  );
}
