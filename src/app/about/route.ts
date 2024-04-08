import { getData } from '../login/server';
export async function GET() {
    console.log('router.js')
   
    return Response.json(getData())
  }