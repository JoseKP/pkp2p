import { Alert, Space, Spin } from "antd";

export const Loading = () => {
  return (
    <>
      <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
    </>
  );
};
