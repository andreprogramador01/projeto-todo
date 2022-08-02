import { useState } from "react"

type Props = {
    onHandleTaskValue : (taskValue: string) => void;
}
export function AddArea({onHandleTaskValue}:Props){
    const [inputText, setInputText] = useState('');

    function Inserir(){
        onHandleTaskValue(inputText);
    }
    return(
        <div>
            <input type="text" placeholder="digite a tarefa" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
            <button onClick={Inserir}>inserir</button>
        </div>
    )
}