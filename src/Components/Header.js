import React from "react"
import Mainpng from "./assets/Main.png"
export default function Header()
{
    return(
       
            <span className="set"><h2 className="todo_heading">ToDo App</h2> 
            <img className="notepad"src={Mainpng}/>
            </span>

    )
}