
import './App.css'
import ProductsForm from './components/ProductsForm'
import TodoForm from './components/TodoForm'
import axios from 'axios'
import ProductsList from './components/ProductsList'
import { useState, useEffect } from 'react'



function App() {
      // CRUD / CREATE / READ / UPDATE / DELETE

      
      const [tareas, setTareas] = useState([])
      const [tareaSelect, setTareaSelect] = useState(null)

    useEffect(() => {
      axios.get(`https://todo-app-academlo.herokuapp.com/todos/`)
        .then( res => setTareas(res.data))
    },[])

    console.log(tareas)


    const getTAreas = () =>{
      axios.get(`https://todo-app-academlo.herokuapp.com/todos/`)
        .then( res => setTareas(res.data))
    }

      const addTarea = (newTodo) =>{
        axios.post("https://todo-app-academlo.herokuapp.com/todos/",newTodo)
        .then(() => getTAreas())
        .catch(error => console.log(error.response))
      }


      const deleteProducts = (id) =>{
        axios.delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
          .then(() => getTAreas())
        //setTareas(filterProducts)
        //const filterProducts = tareas.filter( tarea => tarea.id !== id)
      }

      const selecProduct = (tarea) =>{
        //alert(`se edito el producto ${name}`)
        setTareaSelect(tarea)
      }

      const updateProduct = (newTodo) =>{
        // replaza el la id de de newTodo por la de tareaSelect ya que es es la mas actulizadada
        newTodo.id = tareaSelect.id
        axios.put(`https://todo-app-academlo.herokuapp.com/todos/${newTodo.id}/`, newTodo)
          .then( () => getTAreas() )
        //const index = tareas.findIndex( tarea => tarea.id === newTodo.id)
        // tareas en la posicion~ X cambia su valor por el valor que tiene el valor en el newTodo
        //tareas[index] = newTodo
        //setTareas([...tareas])

      }
      const deSelectProduct = () => setTareaSelect(null)
      console.log(tareaSelect)


  return (
    <div className="App">
      <TodoForm 
      addTarea={addTarea} 
      tareaSelect={tareaSelect}
      updateProduct={updateProduct}
      deSelectProduct={deSelectProduct}  />
      <ProductsList 
      tareas={tareas}
      deleteProducts={deleteProducts}
      selecProduct={selecProduct} />
    </div>
  )
}

export default App

/*
  <h1> products crud</h1>
  <ProductsForm />
*/