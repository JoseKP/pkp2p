"use client";
import { Button, Input, Space, Typography } from "antd";
import { Wrapper } from "./Wrapper";
import { Loading } from "../components/Loading";
import Form from "../components/Form";

export default function Page() {
  return (
    <Wrapper>
      <Typography.Title>PKP2P - BROWSER PEER</Typography.Title>
      <Space>
        <Input placeholder="input placeholder" />
      </Space>
      <Space>
        <Button type="primary">Button</Button>
      </Space>
      <Loading />
    </Wrapper>
  );
}
