import React from 'react';
import Cards from './Cards';

function ContentRowMovies(){
    const card = [{nombre: "Movies in database", cifra: 21, border: "primary", icono:"film"},
    {nombre: "Total awards", cifra: 79, border: "success", icono:"award"},{nombre: "Actors quantity", cifra: 49, border: "warning", icono:"user"}];

    return (
        <React.Fragment>
			
					{/*<!-- Content Row Movies-->*/}
					<Cards info = {card}
                    />

            
					{/*<!-- Content Row Movies-->*/}
					

        </React.Fragment>
    )
}
export default ContentRowMovies;