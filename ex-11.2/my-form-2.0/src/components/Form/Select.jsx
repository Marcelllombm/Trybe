import React, { Component } from "react";

export default class Select extends Component {
  render() {
    const { estadoValue, labelValue, nameValue, infoValue, handleChange } =
      this.props;
    return (
      <>
        <span className="labelestado">{labelValue}</span>
        <select name={nameValue} value={infoValue} onChange={handleChange}>
          <option value="" disabled>Selecione</option>
          {estadoValue.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </select>
      </>
    );
  }
}
