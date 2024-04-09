export async function GET() {
    console.log(66666)
    const res = await fetch('http://jsonplaceholder.typicode.com/todos/1')
    console.log(res, 'data')
    const data = await res.json()
   
    return Response.json({ data })
  }