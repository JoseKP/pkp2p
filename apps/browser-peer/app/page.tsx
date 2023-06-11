"use client";
import { Button, Typography } from "antd";
import { Wrapper } from "./Wrapper";
import { Loading } from "../components/Loading";

export default function Page() {
  return (
    <Wrapper>
      <Typography.Title>PKP2P - BROWSER PEER</Typography.Title>
      <Loading />
    </Wrapper>
  );
}
