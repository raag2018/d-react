import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
//funcional component
const saludo = "Hi, I like development webs pps";
const primeraApp = ({nombre}) => {
	return( 
			<>
				<h1>{nombre}</h1>
				<small>Lic. en Computacion</small>
				<p>{saludo}</p>
			</>
		)
	
}
primeraApp.propTypes = {
	nombre: PropTypes.string.isRequired
}
export default primeraApp;
