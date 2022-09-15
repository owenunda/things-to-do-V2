import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = ({addTarea, tareaSelect, updateProduct,deSelectProduct}) => {


    /*
    inputs controlador
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
            const submit = e => {
        e.preventDefault()

        const newTodo = {
            title: title,
            description: description,
            isCompleted: isCompleted
        }
        if (tareaSelect) {
            updateProduct(newTodo)
        }else{
            addTarea(newTodo)
        }

        clear()
        const clear = () =>{
        setTitle(" ")
        setDescription(" ")
        setIsCompleted(false)
        deSelectProduct()
    }
    }
    useEffect(() =>{
        if(tareaSelect){
            setTitle(tareaSelect.title)
            setDescription(tareaSelect.description)
            setIsCompleted(tareaSelect.isCompleted)
}}, [tareaSelect])
*/


    // importar
    // registrar los inputs {...register("title")}
    // utilizar el handleSubmit con el submit
    // recibir el parametro en la funcion
    
    useEffect(() =>{
        if(tareaSelect){
            reset({
                title: tareaSelect.title,
            description: tareaSelect.description,
            isCompleted: tareaSelect.isCompleted
            })
        }
    }, [tareaSelect])


    const { register, handleSubmit, reset } = useForm();

    const submit = (newTodo) =>{
        console.log(newTodo)

        if (tareaSelect) {
            updateProduct(newTodo)
        }else{
            addTarea(newTodo)
        }
        clear()
    }
    // este useEfecct me muestra si hay algo selecionado
    const clear = () =>{
        reset({
            title: "",
            description: "",
            isCompleted: ""
        })
        deSelectProduct()
    }


    return (
        <div className='formulario'>
            <h1> Crear tarea </h1>
            <hr />
        <form onSubmit={handleSubmit(submit)} >
            <div className="input-container">
                <label htmlFor="title">title</label>
                <input type="text" id='title' {...register("title")} />
            </div>
            <div className="input-container">
                <label htmlFor="description">description</label>
                <textarea  id='description' {...register("description")} />
            </div>
            <div className="input-container checkbox">
                <label htmlFor="isCompleted">is Completed</label>
                <input type="checkbox" id='isCompleted' {...register("isCompleted")} />
            </div>
            <div className='btns'>
            <button className='btn'>  {tareaSelect ? "actualizar" : "crear"} </button>
            <button className='btn-clear btn' type='button' onClick={clear} ><i className="fa-brands fa-linux"></i></button>
            </div>
        </form>
        </div>
    );
};

export default TodoForm;