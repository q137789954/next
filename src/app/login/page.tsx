"use client";
import { Button } from "@nextui-org/button";
import { useRequest } from "ahooks";
import { useSelector, useDispatch } from 'react-redux';
import { update} from '@/store/global';
import { useRouter } from 'next/navigation'
import { getData } from "./server";

const Login = () => {

  const router = useRouter()
  const dispatch = useDispatch();
  const global = useSelector(state => state.global)
  console.log(global, 'global')

  const { data, error, loading, run } = useRequest(getData, {
    manual: true,
    onSuccess(data){
      console.log(data, '看一看数据')
      const { id, userId } = data;
      dispatch(update({id, userId}))
      // dispatch({
      //   type:'global/update',
      //   payload: {
      //     id,
      //     userId
      //   }
      // })
      setTimeout(() => {
        router.push('/about')
      }, 5000)
      
    }
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
