import {Button} from "@nextui-org/button";
import Link from 'next/link';
import { update} from '@/store/global';
import store from '../../store';
import { getData } from '../login/server';
import Title from './components/Title';
import ShowData from './components/ShowData';

import { setLocale, setUserId } from "@/context";


export default async function Home() {

  // 服务端组件获取redux值
  const state = store.getState().global;

  const data = await getData();
  // store.dispatch({
  //   type:'global/update',
  //   payload: data
  // })
  store.dispatch(update(data))

  console.log(data, '服务端获取的数据');
  console.log(state, '服务端store');

  // setLocale('啊实打实的')
  // setUserId('用户id啊,这里是用户id')

  return (
    <div>
      这里是{data.title}
      <div>
        <Link href='/setting'>跳转set</Link>
      </div>
      <Title title={data.title} />
      <Button>11111</Button>
      <ShowData />
    </div>
  );
}
