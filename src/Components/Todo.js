import React from "react"
import Header from "./Header" 

export default function Todo()
{

// get the localstorage data back

const getLocalData=() => {
    const lists = localStorage.getItem("myToDoList")
    if(lists)
    {
        return JSON.parse(lists)
    }
    else{
        return []
    }
}
    const [inputData,setinputData]=React.useState("")

    const[Items,setItems]=React.useState(getLocalData())

    const[IsEditItem,setIsEditItems]=React.useState("")

    const[Togglebtn,setTogglebtn]=React.useState(false)
    const addItem=() => {
        if(!inputData)
        {
            alert('Please fill the data in the given input field')
        }
        else if(inputData && Togglebtn)
        {
            setItems(
                Items.map((curElem) => {
                    if(curElem.id === IsEditItem)
                    {
                        return {...curElem, name:inputData}
                    }
                    return curElem
                })
            )
            setinputData([])
            setIsEditItems(null)
            setTogglebtn(false)
        }
        else{
            const newData={
                id: new Date().getTime().toString(),
                name: inputData
            };
            setItems([...Items,newData])
            setinputData("")
        }
    }
    //Edit the items

    const editItems= (index) => {
        const todo_edited_items=Items.find((curElem) => {
            return curElem.id ===index
        })
        setinputData(todo_edited_items.name)
        setIsEditItems(index)
        setTogglebtn(true)
    }
    // How to delete items section
    const deleteItem=(index) => {
        const updatedItems=Items.filter ((curElem) => {
            return curElem.id !== index
        })
        setItems(updatedItems)
    }
    const removeAll=()=>{
        setItems([])
    }
    React.useEffect(() => {
        localStorage.setItem("myToDoList",JSON.stringify(Items))
    },[Items])
    return(
        <div className="main">
            <Header/>

            <span className="Add-items"><input value={inputData} onChange={(event) => setinputData(event.target.value)}className="input-box" type="text" placeholder="Add your list items here"
            />
            {Togglebtn ?    <svg  onClick={addItem}className="plus-icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                </svg> : <svg onClick={addItem} className="plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 32V64H80c-26.5 0-48 21.5-48 48v48H480V112c0-26.5-21.5-48-48-48H384V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H192V32c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 192H32V464c0 26.5 21.5 48 48 48H432c26.5 0 48-21.5 48-48V192zM256 248c13.3 0 24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V376H176c-13.3 0-24-10.7-24-24s10.7-24 24-24h56V272c0-13.3 10.7-24 24-24z"/></svg>}
            
            </span>
          <div className="space">
           { Items.map((curElem) => {
            return(
                <div className="eachitem" key={curElem.id}>
                <h3 className="apple">{curElem.name}</h3>
                <div className="to-do-btn">
                <svg  onClick={() => editItems(curElem.id)}className="plus-icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                </svg>
                <svg   onClick={() => deleteItem(curElem.id)} className="plus-icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                </div>
                </div>
            )
            
            })}
            </div>
            
             
          
            <div className="Show-items"><button className="btn effect-04" data-sm-link-text="Remove All " onClick={removeAll}>CheckList</button></div>
        </div>
    )
}