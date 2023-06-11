import { Alert, Space, Spin } from "antd";

export const Loading = () => {
  return (
    <>
      <Space>
        <Spin tip="Loading" size="small">
          <div className="content" />
        </Spin>
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    </>
  );
};
