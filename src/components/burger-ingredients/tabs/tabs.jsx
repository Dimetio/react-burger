import { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default function Tabs() {
  const [current, setCurrent] = useState('one')
  return (
    <div style={{ display: 'flex', paddingBottom: 40 }}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}
