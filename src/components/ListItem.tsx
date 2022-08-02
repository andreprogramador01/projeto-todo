type Props ={
    item : {
        id: number;
        name: string;
        done: boolean;
    }
    onRemoveTaskValue : (taskId: number) => void;
}

export function ListItem({item,onRemoveTaskValue}: Props){
    function removerItem(){
        onRemoveTaskValue(item.id);
    }
    return(
        <div>
           <button onClick={removerItem}>excluir</button>  {item.name}
        </div>
    )

}