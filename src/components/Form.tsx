'use client'

import {Input} from '../components/Input'
import Button from '../components/Button'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'

export default function Form () {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const {name, email, message} = Object.fromEntries(formData.entries()) 
    //formData.entries() es un array de arrays donde cada uno es un par clave valor
    //donde el primero es el tipo de input Ej. mail y el segundo su valor pepe@gmail.com 
    //que se ve mucho mejor si lo transformamos a un objeto con Object.fromEntries()
    //por ej {mail:pepe@gmail.com}

    //LLAMAMOS A LA API
     fetch('/api/kv-send-message',{
      method:'POST',
      body:JSON.stringify({ name, email, message }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(() => {
      toast.success('Mensaje enviado con éxito')
      confetti()
      form.reset()
    }).catch(() => {
      console.log('hubo un error')
      toast.error('Hubo un error al enviar un mensaje ')
    })
  }
  return (
    <form onSubmit={handleSubmit} className=' max-w-xl space-y-4'>
        <Input
          name='email'
          id='email'
          label='Tu email'
          type='email'
          placeholder='tuemail@gmail.com'
        />
        <Input
          name='name'
          id='text'
          label='Tu nombre'
          type='text' 
          placeholder='Pepe'
        />
        <Input
          name='message'
          id='message'
          label='Tu mensaje:'
          type='text'
          placeholder='Wow un formulario'
        />
        <Button>Enviar mensaje</Button>
      </form>
  )
}
