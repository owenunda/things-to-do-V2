import React from 'react';

const ProductsList = ({tareas, deleteProducts, selecProduct}) => {




    return (
        <div className='card-listTareas'>
            <h1 >Lista de tareas</h1>
            <hr/>
            <ul>
            {
                tareas.map( tarea => (
                    <li className='list-items' key={tarea.id}> 
                        <h3 className='tarea-tittle'>{tarea.title}</h3>
                        <p><b> description:</b> {tarea.description}</p>
                        <p><b>completado:</b> {tarea.isCompleted.toString()} </p>
                        <div className='btns'>
                        <button  onClick={() => deleteProducts(tarea.id)} className='btn-delete btn'> <i className="fi fi-rr-trash"></i> </button>
                        <button className='btn btn-update' onClick={() => selecProduct(tarea)} > <i className="fi fi-rr-pencil"></i></button>
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default ProductsList;