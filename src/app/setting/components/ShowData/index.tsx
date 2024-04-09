import { getLocale, getUserId } from "@/context";


export default async function Home() {

  const locale = getLocale();
  const userId = getUserId();


  return (
    <div className=''>
      这里是 set data
      <div>{locale}</div>
      <div>{userId}</div>
    </div>
  );
}
