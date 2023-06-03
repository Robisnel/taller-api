import React from 'react'
import { useState } from 'react'


const Series = () => {
    // mis variables hooks
    // index es la paginación
    const [series, setSeries] = useState([]);
    const [index, setIndex] = useState(0);

    // Funciones API
    const traerSeries = async (next) => {
        try {
            const solicitud = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7be72508776961f3948639fbd796bccd&page=${next}`);
            const respuesta = await solicitud.json();
            const auxSeries = respuesta.results;
            setSeries(auxSeries);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    }

    // HTML devuelto
    return (
        <div>
            <h1>Solicitud IMDb API</h1>
            <h2>Robisnel Paniza</h2>
            <button>Traer series</button>
            <button>Siguiente</button>
            <button>Atrás</button>
        </div>
    )
}

export default Series