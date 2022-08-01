import { useState } from 'react'
import { AddArea } from './components/AddArea';
import {ListItem} from './components/ListItem'

type Item = {
  id: number;
  name: string;
  done: boolean;
}


function App() {
  const [list, setList] = useState<Item[]> ([
    {
    id: 1, name: 'comprar pão na padaria', done: false
  }, {
    id: 2, name: 'comprar feijão', done: false
  }
]);


const handleTaskValue = (taskValue: string) =>{
  
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskValue,
    done: false
  });
  
  setList(newList);
}
  return (
    <div className="App">
      <AddArea onhandleTaskValue={handleTaskValue} />
      {list.map((item, index) =>{
        return <ListItem item={item}/>
      })}
      
      
    </div>
  )
}

export default App
