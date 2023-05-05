const Button = ({ children }:{ children: React.ReactNode }) =>{
  return (
    <button type='submit' className='px-5 py-3 text-sm font-medium text-gray-600 border-2 border-gray-300 rounded-lg hover:border-sky-300 transition-colors' >
      {children}
    </button>
  )
}

export default Button