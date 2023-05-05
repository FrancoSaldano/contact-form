import {db} from '@vercel/postgres'

export async function POST (request: Request) {
  let client 
  try {
    client = await db.connect()
  } catch (error) {
      console.error(error)
      return new Response ('Internal Error',{status:500})
  }

  const {name, email, message } = await request.json()
  if(name==null || email==null || message==null){
    return new Response ('Please provide all fields',{status:404})
  }
  try{
    const {rows} = await client.sql`INSERT INTO messages (name, email, message) VALUES (${name},${email},${message})`
    console.log(rows)
    return new Response ('Contact Saved',{status:200})
  }
  catch (error){
    console.error(error) //capturar el console y enviar a un dashboard
    return new Response ('Internal Error',{status:500})
  }
}
