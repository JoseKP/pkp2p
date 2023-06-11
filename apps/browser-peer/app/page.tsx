"use client";
import { Button, Input, List, Space, Typography } from "antd";
import { Wrapper } from "./Wrapper";
import { Loading } from "../components/Loading";
import Form from "../components/Form";

export default function Page() {
  return (
    <Wrapper>
      <List>
        <Typography.Title>PKP2P - BROWSER PEER</Typography.Title>

        <Input placeholder="input placeholder" />

        <Loading />
      </List>
    </Wrapper>
  );
}
