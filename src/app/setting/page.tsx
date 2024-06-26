import { getLocale, getUserId } from "@/context";

import ShowData from '../about/components/ShowData';
import SetShowData from './components/ShowData';


export default async function Home() {

  // 服务端组件获取redux值
  // const state = store.getState().global;

  const locale = getLocale();
  const userId = getUserId();


  return (
    <div className=''>
      这里是设置页面
      <div>{locale}</div>
      <div>{userId}</div>
      <ShowData />
      <SetShowData />
    </div>
  );
}
