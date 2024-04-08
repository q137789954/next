"use client";
import { Button } from "@nextui-org/button";
import { useRequest } from "ahooks";
import { getData } from "./server";

const Login = () => {
  const { data, error, loading, run } = useRequest(getData, {
    manual: true,
  });

  const handleLogig = async () => {
    run();
  };

  return (
    <div className="login">
      {loading && <div>加载中</div>}
      <Button onClick={handleLogig}>登录</Button>
      {data && data.id}
    </div>
  );
};

export default Login;
