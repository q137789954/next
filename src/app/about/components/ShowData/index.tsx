import { getLocale, getUserId } from "@/context";


export default async function Home() {

  const locale = getLocale();
  const userId = getUserId();

//   console.log(locale, userId, 'locale, userId')


  return (
    <div className=''>
      这里是showData
      <div>{locale}</div>
      <div>{userId}</div>
    </div>
  );
}
