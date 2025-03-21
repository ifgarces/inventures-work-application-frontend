"use client";

import { Button, Card, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TypographyText from "antd/es/typography/Text";
import TypographyTitle from "antd/es/typography/Title";

import _ from "lodash";
import { IFormFields } from "./types";
import { useUrlShortenerFormViewModel } from "./view-model";


export default function UrlShortenerForm() {
  const [antdForm] = Form.useForm<IFormFields>();

  const { shortenedUrl, onFormSubmit } = useUrlShortenerFormViewModel();

  return (
    <Card title="URL Shortener" style={{ maxWidth: 600, margin: "2rem auto" }}>
      <Form layout="vertical" form={antdForm} onFinish={onFormSubmit}>
        <FormItem<IFormFields>
          label="Enter Long URL"
          name="longUrl"
          rules={[
            { required: true, message: "Please enter a URL!" },
            { type: "url", message: "Please enter a valid URL!" }
          ]}>
          <Input placeholder="https://example.com/very/long/url" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" block>
            Shorten URL
          </Button>
        </FormItem>
      </Form>

      {
        !_.isEmpty(shortenedUrl) && (
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
