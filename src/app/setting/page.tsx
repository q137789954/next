import store from '../../store';


export default async function Home() {

  // 服务端组件获取redux值
  const state = store.getState().global;


  return (
    <div className=''>
      这里是设置页面
    </div>
  );
}
