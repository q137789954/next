"use client"
import { Button } from 'antd';
// import './page.less';

const Login = () => {

  const handleLogig = async () => {
    const data = await fetch('/api/todos/1');
  }

  return (
   <div className='login'>
    <Button onClick={handleLogig}>
      登录
    </Button>
   </div>
  );
}

export default Login
