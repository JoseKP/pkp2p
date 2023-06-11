"use client";
import { Card, ConfigProvider, theme } from "antd";
import "css.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ConfigProvider>
  );
}
