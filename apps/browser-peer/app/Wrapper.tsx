"use client";
import { ConfigProvider, theme } from "antd";
import "css.css";
import NoSSR from "./noSSR";

export const Wrapper = ({ children }) => {
  return (
    <NoSSR>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </NoSSR>
  );
};
