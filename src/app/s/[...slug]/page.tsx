"use client";

import { Alert } from "antd";
import { useParams } from "next/navigation";

export default function ShortenedUrlCatchAllPage() {
  const params = useParams();
  const slug = params?.slug;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Alert
        message="WIP"
        type="warning"
        showIcon
        closable
        style={{ marginBottom: "1rem" }} />
      <h1>Shortened URL</h1>
      <p>
        You accessed: <strong>{Array.isArray(slug) ? slug.join("/") : slug}</strong>
      </p>
    </div>
  );
}
