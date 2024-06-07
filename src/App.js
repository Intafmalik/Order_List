import logo from './logo.svg';
import index from "./index.css"
import Listitem from './Listitem';
import { LuPlusCircle } from "react-icons/lu";
import { useState } from 'react';

function App() {

  const [inputlist, setinputlist] = useState("")
  const [items, setItem] = useState([])

  const InputEvent = (event) => {
    setinputlist(event.target.value)

  }
  const listOfitem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputlist]
    })
    setinputlist("")
  }

  const deletItem = (id) => {
    console.log("deleted")

    setItem((oldItem) => {
      return oldItem.filter((arrayelemet, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className='container'>
        <div className='center_div'>
          <br />
          <h1>To Order list</h1>
          <br />
          <div className='inputlist'>
            <input type='text' placeholder='Order Your list' onChange={InputEvent} value={inputlist} />
            <div className='hoverButton'>
              <button onClick={listOfitem}>
                <LuPlusCircle className='button' />
              </button>
            </div>
          </div>
          <ol>
            {
              items.map((itemlist, index) => {
                return <Listitem
                  key={index}
                  id={index}
                  onSelect={deletItem}
                  text={itemlist} />
              })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;

