import './App.scss'
import TodosList from './components/TodosList'
import Stats from './components/Stats'
import Button from './UI/Button/Button'
import { useEffect, useState } from 'react'
import Popup from './UI/Popup/Popup'
import Form from './components/Form'
import { useSelector } from 'react-redux'

const App = () => {
  const todo = useSelector(state => state.main)
  const [isOpenCreatePopup, setIsOpenCreatePopup] = useState(false)

  useEffect(() => {
    localStorage.todo = JSON.stringify(todo)
  })

  return <>
    <Button onClick={() => setIsOpenCreatePopup(true)}>Create todo</Button>

    <Popup isOpenSettings={{ isOpen: isOpenCreatePopup, setIsOpen: setIsOpenCreatePopup }}>
      <Form />
    </Popup>

    <Stats />
    <TodosList />
  </>
}

export default App