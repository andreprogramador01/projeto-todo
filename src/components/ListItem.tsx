type Props = {
    item : {
        id: number;
        name: string;
        done: boolean;
    }
}

export function ListItem({item}: Props){
    return <div>{item.name}</div>
}