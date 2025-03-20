"use client";

import { Button, Card, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TypographyText from "antd/es/typography/Text";
import TypographyTitle from "antd/es/typography/Title";
import { debounce } from "lodash";
import { useState } from "react";

export default function UrlShortenerForm() {
  const [shortenedUrl, setShortenedUrl] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const fakeShortenUrl = debounce((longUrl: string) => {
    // Simulate a backend response
    return `https://my.short.ly/${btoa(longUrl).slice(0, 8)}`;
  }, 300);

  async function handleSubmit(values: { longUrl: string }) {
    setLoading(true);
    const { longUrl } = values;

    // Simulate a backend call
    setTimeout(() => {
      const fakeResponse = fakeShortenUrl(longUrl);
      setShortenedUrl(fakeResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <Card title="URL Shortener" style={{ maxWidth: 600, margin: "2rem auto" }}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <FormItem
          label="Enter Long URL"
          name="longUrl"
          rules={[
            { required: true, message: "Please enter a URL!" },
            { type: "url", message: "Please enter a valid URL!" }
          ]}>
          <Input placeholder="https://example.com/very/long/url" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Shorten URL
          </Button>
        </FormItem>
      </Form>

      {
        shortenedUrl && (
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <TypographyTitle level={4}>Shortened URL</TypographyTitle>
            <TypographyText copyable={{ text: shortenedUrl }}>
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
            </TypographyText>
          </div>
        )
      }
    </Card>
  );
};
