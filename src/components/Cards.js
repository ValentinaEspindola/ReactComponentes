import PropTypes from 'prop-types';
import React from 'react';

function Cards(props){
    return (
        <React.Fragment>
			
					{/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*<!-- Movies in Data Base -->*/}
                        {props.info.map((card, i)=> 
						<div key={card+i} className="col-md-4 mb-4">
                            <div className={`card border-left-${card.border} shadow h-100 py-2`}>

								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{card.nombre}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{card.cifra}</div>
										</div>
										<div className="col-auto">
											<i className={`fas fa-${card.icono} fa-2x text-gray-300`}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
                    )}
                    </div>
					

        </React.Fragment>
    )

}
Cards.propTypes = {
    nombre: PropTypes.string.isRequired,
    borde: PropTypes.string.isRequired,
    cifra: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    icono: PropTypes.string.isRequired
}
export default Cards;