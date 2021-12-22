import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
	render() {
		const {
			pokemon: { name, type, averageWeight, image },
		} = this.props;

		return (
			<div className="pokemon">
				<div>
					<p>{name}</p>
					<p>{type}</p>
          <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>	
      </div>
      <img src={image} alt={name}/>
      </div>
		);
	}
}


Pokemon.propTypes ={
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
  }).isRequired
};