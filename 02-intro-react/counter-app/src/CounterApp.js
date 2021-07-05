import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
const primeraApp = ({value}) => {
	return( 
			<>
				<h1>CounterApp</h1>
				<h2>{value}</h2>
			</>
		)
	
}
primeraApp.propTypes = {
	value: PropTypes.number.isRequired
}
export default primeraApp;