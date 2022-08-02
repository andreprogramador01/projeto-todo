import { useState } from 'react'
import {ListItem } from './components/ListItem'
import {AddArea} from './components/AddArea'

type Item = {
  id:number;
  name: string;
  done: boolean;
}


function App() {
  const [list, setList] = useState<Item[]>([{
    id:1, name: "comprar pão", done:false
  },
  {
    id:2, name: "comprar mortadela", done:false
  }
])
function handleTaskValue(taskValue: string){
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskValue,
    done: false
  });
  setList(newList);

}
function removeTaskValue(taskId: number){
  let newList = [...list];
  let renewList = newList.filter((item)=> item.id !== taskId);
  setList(renewList);
}
  return (
    <div className="App">
      <AddArea  onHandleTaskValue={handleTaskValue}/>
      {list.map((item, index)=>(
        <ListItem onRemoveTaskValue={removeTaskValue} key={index} item={item} />
      ))}
      </div>
  )
}

export default App
