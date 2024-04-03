"use client"
import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { Button, Spin } from 'antd';
// import './page.less';

const Login = () => {

  const { data, error, loading, run } = useRequest(() => fetch('/api/todos/1'), {
    manual: true
  });

  useEffect(() => {
    (async () => {
      const data =  await fetch('/api/todos/1', {
        headers:{lang: 'zh-CN'},
        keepalive:true
      })
      console.log(await data.json());
    })()
  }, [])

  const handleLogig = async () => {
    run()
  }

  return (
   <div className='login'>
    {
      loading && <Spin size='large' />
    }
    <Button onClick={handleLogig}>
      登录
    </Button>
    {
      data && data.id
    }
   </div>
  );
}

export default Login
