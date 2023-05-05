import kv from '@vercel/kv'

export async function POST (request: Request) {
  const {name, email, message } = await request.json()
  if(name==null || email==null || message==null){
    return new Response ('Please provide all fields',{status:404})
  }

  const uuid = crypto.randomUUID()  //GENERA UNA ID ÚNICA
  const timestamp = Date.now()
  try{
    await kv.set(`contact-${uuid}`,{name, email, message, timestamp })
    return new Response ('Contact Saved',{status:200})
  }
  catch (error){
    console.error(error) //capturar el console y enviar a un dashboard
    return new Response ('Internal Error',{status:500})
  }
}
