export const Input = ({ id, name, label, type, placeholder, ...props}: {
id: string
name: string
label: string
type: string
placeholder: string
}) => {
  return (
    <fieldset>
      <label className='block text-gray-500 mb-3 text-sm font-medium' htmlFor={id}>{label}</label>
      <input
        id={id}
        className='block p-3 font-thin text-base text-gray-600 rounded-md border-spacing-px border-2 border-s-slate-400 border-gray-300 focus:outline-1 focus:outline-sky-400 transition-colors'
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
        required
      />
    </fieldset>
  )
}
