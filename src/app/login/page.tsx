"use client"

// import './page.less';

export default function Login() {

  console.log(process.env.NEXT_PUBLIC_ENV, 'process.env.NEXT_PUBLIC_ENV')

  return (
   <div className='login'>
      登录
   </div>
  );
}
