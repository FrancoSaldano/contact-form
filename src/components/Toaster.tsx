'use client'

import { Toaster as ToasterComponent } from 'sonner'

export const Toaster = () => {
  return (
      <ToasterComponent position='bottom-right' />
  )
}
//se pudo haber importado directamente en el layout. Pero eso implica usar 
// 'use client' sobre layout y no queremos eso.
// Contexto: use client tiene que tener este componente porque se ejecuta en el cliente