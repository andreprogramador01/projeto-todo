import {useState} from 'react';


type Props ={
    onhandleTaskValue : (taskValue:string) => void;
}
export function AddArea({onhandleTaskValue}: Props){
    const [inputText, setInputText] = useState('');

    const Inserir = () =>{
        onhandleTaskValue(inputText);
        setInputText('');
    }
    return(
        <div>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} name="" id="input" />
            <button onClick={Inserir}>inserir</button>
        </div>
    )
}