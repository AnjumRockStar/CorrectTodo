import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'
import List from './List'

function App() {
  const [value, setValue] = useState("")
  const [list, setList] = useState([])

  const change = (e) => {
    setValue(e.target.value)
  }
const AddEvent = () => {
  setList((previousValue) => {
    return[...previousValue, value]
  })
  setValue("")
}
const deletList = (index) =>{
  setList((old_values) => {
    return old_values.filter((val, ind) => {
      return index !== ind
    })
  })
}
  return (
    <>
      <Input value = {value}
        onchange = {(e) => {
          change(e)
        }}
        addClick = {AddEvent}
        
      />
      <List 
      list = {list}
        delete = {deletList}
      />
    </>
  )
}

export default App
