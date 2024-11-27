
import { useState } from "react";
import "./styles.css"

export default function App(){
  const  [newItem, setNewItem] = useState("")
  const  [tograb, settograb] = useState([])
  const [newFood, setNewFood] = useState("")
  const [food, settofood] = useState([])
  const [household, settoHousehold] = useState([])
  const [newHousehold, setNewHousehold] = useState("")


  function handleSubmitHouseHold(e) {
    e.preventDefault()
    settoHousehold((currenthousehold) => 
      {
      return [...currenthousehold, { id: crypto.randomUUID(), title: newHousehold, completed: false },]
    })

    setNewHousehold("")
  }
  function toggleTograbHousehold(id, completed)
  {
    settoHousehold(currenthousehold => {
      return currenthousehold.map(household => {
     
        if (household.id === id)
        {
          return { ...household, completed }
        }
        return household
      })
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    settograb((currentTograb) => {
      return [...currentTograb, { id: crypto.randomUUID(), title: newItem, completed: false },]
    })
    
    setNewItem("")
  }
  function handleSubmitfood(e) {
    e.preventDefault()
    settofood((currentfood) => {
      return [...currentfood, { id: crypto.randomUUID(), title: newFood, completed: false },]
    })
    
    setNewFood("")
  }
  function toggleTograbfood(id, completed)
  {
    settofood(currentfood => {
      return currentfood.map(food => {
        if (food.id === id)
        {
          return { ...food, completed }
        }
        return food
      })
    })
  }

  
  function toggleTograb(id, completed)
  {
    settograb(currenttograb => {
      return currenttograb.map(tograb => {
        if (tograb.id === id)
        {
          return { ...tograb, completed }
        }
        return tograb
      })
    })
  }

  function deleteItem(id){
    settograb(currenttograb => {
      return currenttograb.filter(tograb => tograb.id != id)
    })
  }
  function deleteFood(id){
    settofood(currentfood => {
      return currentfood.filter(food => food.id != id)
    })
  }
  function deleteHousehold(id){
    settoHousehold(currenthousehold => {
      return currenthousehold.filter(household => household.id != id)
    })
  }

  return (
    <>
    
        <form onSubmit={handleSubmitfood} className="new-item-form"> <div className="form-row"> 
          <label htmlFor="food">Items to add to Food/Beverages supplies: </label>
           <input value={newFood} onChange={e => setNewFood(e.target.value)} type="text" id="food" /> 
           </div> 
           <button className="btn" type="submit">Add</button>
            </form>
    <form onSubmit={handleSubmitHouseHold} className="new-item-form"> <div className="form-row"> 
          <label htmlFor="household">Items to add to Household supplies: </label>
           <input value={newHousehold} onChange={e => setNewHousehold(e.target.value)} type="text" id="food" /> 
           </div> 
           <button className="btn" type="submit">Add</button>
            </form>

    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">Items to add to Cleaning supplies: </label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" id="item" />
    </div>
    <button className="btn">Add</button>
      </form>

      <h1 className="header">Food/Beverage List: </h1>
    <ul className="list">  
      {food.length === 0 && "No items"}
    {food.map(food => {
      return (
      <li key={food.id}>
        <label>
          <input type="checkbox" checked={food.completed}
          onChange={e => toggleTograbfood(food.id, e.target.checked)} />
          {food.title}
        </label>
        <button onClick={() => deleteFood(food.id)} className="btn btn-danger"> Delete </button>
       
      </li>
      )
      })}
      </ul>


    <h1 className="header">Household items List: </h1>
    <ul className="list">  
      {household.length === 0 && "No items"}
    {household.map(household => {
      return (
      <li key={household.id}>
        <label>
          <input type="checkbox" checked={household.completed}
          onChange={e => toggleTograbHousehold(household.id, e.target.checked)} />
          {household.title}
        </label>
        <button onClick={() => deleteHousehold(household.id)} className="btn btn-danger"> Delete </button>
      </li>
      )
      })}
      </ul>
    <h1 className="header">Cleaning supplies List: </h1>
    <ul className="list">  
      {tograb.length === 0 && "No items"}
    {tograb.map(tograb => {
      return (
      <li key={tograb.id}>
        <label>
          <input type="checkbox" checked={tograb.completed}
          onChange={e => toggleTograb(tograb.id, e.target.checked)} />
          {tograb.title}
        </label>
        <button onClick={() => deleteItem(tograb.id)} className="btn btn-danger"> Delete </button>
      </li>
      )
      })}
      </ul>

      
    </>
  )
}
