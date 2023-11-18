import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props{
    text: string[];
    completed: boolean;
}
 
export const ToDoList: React.FC<Props> = ({ text }) => {


    const [todo , settodo] = useState<string[]>(text);
    const [inputValue , setinputValue] = useState<string>('');
    const [completed, setCompleted] = useState(false);


    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.target.value);
    }
    const clickHandle = () => {
            const updatedArray = [...todo, inputValue];
            settodo(updatedArray);
            setinputValue("");
           
    }  

    return (
    <>
    <div className="container mt-5"><h1>To Do List</h1>
    {todo.length === 0 ? <p></p> : null}
    <ul className="list-group list-group-flush">
        {todo.slice().reverse().map((text, index) => (
            //text-decoration-line-through
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index} onClick={() => { setCompleted(!completed)}}>{text}</li>
        ))}
    </ul>
    <div className="input-group mt-3">   
    <input type="text" value={inputValue} placeholder="Add to do " onChange={handleInputChange} />
    </div>
     <button className="btn btn-primary" onClick={clickHandle}>Add</button>
    </div>
    </>)

}