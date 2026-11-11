function CardCuidador(props){
    return(
        <div className="bg-white p-5  rounded-xl shadow-md border border-gray-200 ">
            <h2>{props.nombre}</h2>
            <p>{props.zona}</p>
            <p>{props.especialidad}</p>
            {props.children}

        </div>
    )
}

export default CardCuidador