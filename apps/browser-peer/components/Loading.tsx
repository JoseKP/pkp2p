import { Alert, Space, Spin } from "antd";

export const Loading = () => {
  return (
    <>
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </>
  );
};
