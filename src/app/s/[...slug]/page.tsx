"use client";

import { AnalyticsUrlClicksService } from "@/services/AnalyticsUrlClicksService";
import { UrlShortenerService } from "@/services/UrlShortenerService";
import { Alert, Spin } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

async function redirectToOriginalUrl(shortCode :string) {
  await AnalyticsUrlClicksService.registerNewClick(shortCode);

  const originalUrl :URL = await UrlShortenerService.getOriginalUrl(shortCode);
  // window.location.assign(originalUrl);
}

export default function ShortenedUrlCatchAllPage() {
  const pathParams = useParams();

  const firstSlug :string | undefined = useMemo(() => {
    return (pathParams.slug === undefined) ? undefined : pathParams.slug[0];
  }, [pathParams.slug]);

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
      icon={<Spin size="large" />}
      closable
      style={{ padding: "20px" }} />
  );
}
