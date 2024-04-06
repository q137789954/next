"use client"
import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { Button, Spin } from 'antd';
import { getData } from './server';
// import './page.less';

const Login = () => {

  const { data, error, loading, run } = useRequest(getData, {
    manual: true
  });

  useEffect(() => {
    (async () => {
      const data =  await getData()
      console.log(data, '这里是data');
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
