import { Alert, Space, Spin } from "antd";

export const Loading = ({ tip = "Loading" }: { tip?: string }) => {
  return (
    <Spin tip={tip} size="small">
      <div className="content" />
    </Spin>
  );
};
