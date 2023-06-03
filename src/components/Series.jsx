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

    // Funciones botones
    const traer = () => {
        setIndex(index + 1);
        traerSeries(index + 1);
    }

    const siguiente = () => {
        setIndex(index + 1);
        traerSeries(index + 1);
    }

    const atras = () => {
        if (index > 1) {
            setIndex(index - 1);
            traerSeries(index - 1);
        }
    }

    // HTML devuelto
    return (
        <div>
            <h1>Solicitud IMDb API</h1>
            <h2>Robisnel Paniza</h2>
            <button onClick={traer}>Traer series</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}>Atrás</button>
            {
                series.map((aux) => (
                    <div key={aux.id}>
                        <h3>{aux.name}</h3>
                        <h4>{aux.first_air_date}</h4>
                        <img src={`https://image.tmdb.org/t/p/w500/${aux.poster_path}`} alt={aux.name} />
                    </div>
                ))
            }
        </div>
    )
}

export default Series