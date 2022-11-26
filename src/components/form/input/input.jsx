import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

export default function InputComponent({
  name,
  placeholder,
  icon,
  onIconClick,
  type,
  handleChange,
  value
}) {

  return (
    <div className='mb-6'>
      <Input
        onChange={handleChange}
        value={value || ''}
        name={name}
        placeholder={placeholder}
        icon={icon}
        onIconClick={onIconClick}
        type={type}
      />
    </div>
  )
}
