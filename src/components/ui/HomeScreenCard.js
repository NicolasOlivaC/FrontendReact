import React from 'react'
import HomeScreenCardList from '../ui/HomeScreenCardList';
import {eliminarRecetas} from '../../actions/recetas';
import {useDispatch} from 'react-redux';
const HomeScreenCard = ({ id, precioVenta, titulo }) => {
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(eliminarRecetas(id));
    }
    return (
        <div className="col-lg-3 col-md-4 col-6 mt-4">
            <div className="card h-100">
            <i className="fas fa-times-circle position" onClick={handleDelete}></i> 
                <h4 className="text-center mt-3">{titulo}</h4>
                <img className="card-img-top px-2 py-1" src="/pollo.jpg" />
                <div className="card-body">
                    <h4 className="text-center">{`Precio de venta: $${precioVenta}`}</h4>
                    <h4>Ingredientes</h4>
                    <HomeScreenCardList id={id} />
                </div>
            </div>
        </div>
    )
}

export default HomeScreenCard
