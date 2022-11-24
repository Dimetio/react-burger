import { useState } from 'react'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

export default function InputComponent({
  isIcon,
  name,
  placeholder,
  icon,
  onIconClick,
  type
}) {
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div className='mb-6'>
      <Input
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        icon={icon}
        onIconClick={onIconClick}
        type={type}
      />
    </div>
  )
}
