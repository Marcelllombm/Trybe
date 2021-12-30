import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
import "./form.scss";
import Radio from "./Radio";
import Textarea from "./Textarea";
import Content from "./Content";

const estado = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const INITIAL_STATE = {
  nome: "",
  email: "",
  cpf: "",
  endereco: "",
  cidade: "",
  estado: "",
  tipo: "",
  resumo: "",
  cargo: "",
  descricao: "",
  submitted: false,
};
export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.sendForm = this.sendForm.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };
  sendForm = () => {
    this.setState({ submitted: true });
  };
  render() {
    return (
      <>
        <form className="container">
          <fieldset>
            <legend>Dados pessoais</legend>
            <Input
              labelValue="Nome: "
              nameValue="nome"
              typeValue="text"
              infoValue={this.state.nome}
              handleChange={this.handleChange}
              idValue="nomeValue"
            />

            <Input
              labelValue="Email: "
              nameValue="email"
              typeValue="text"
              infoValue={this.state.email}
              handleChange={this.handleChange}
              idValue="emailValue"
            />

            <Input
              labelValue="CPF: "
              nameValue="cpf"
              typeValue="text"
              infoValue={this.state.cpf}
              handleChange={this.handleChange}
              idValue="cpfValue"
            />

            <Input
              labelValue="Endereco: "
              nameValue="endereco"
              typeValue="text"
              infoValue={this.state.endereco}
              handleChange={this.handleChange}
              idValue="enderecoValue"
            />

            <Input
              labelValue="Cidade: "
              nameValue="cidade"
              typeValue="text"
              infoValue={this.state.cidade}
              handleChange={this.handleChange}
              idValue="cidadeValue"
            />

            <Select
              estadoValue={estado}
              labelValue="Estado"
              nameValue="estado"
              infoValue={this.state.estado}
              handleChange={this.handleChange}
            />
            <h4 style={{ margin: "10px 0 0 0 " }}>Informaçao adicional</h4>
            <Radio
              labelValue="Casa: "
              nameValue="tipo"
              typeValue="radio"
              infoValue="Casa"
              handleChange={this.handleChange}
              idValue="casaValue"
            />

            <Radio
              labelValue="Apartamento: "
              nameValue="tipo"
              typeValue="radio"
              infoValue="Apartamento"
              handleChange={this.handleChange}
              idValue="apartamentoValue"
            />
          </fieldset>

          <br />
          <br />

          <fieldset>
            <legend>Dados profissionais:</legend>

            <Textarea
              labelValue="Resumo do currículo "
              nameValue="resumo"
              infoValue={this.state.resumo}
              maxLength="1000"
              handleChange={this.handleChange}
            />

            <Textarea
              labelValue="Cargo "
              nameValue="cargo"
              infoValue={this.state.cargo}
              maxLength="40"
              handleChange={this.handleChange}
            />

            <Textarea
              labelValue="Descricao "
              nameValue="descricao"
              infoValue={this.state.descricao}
              maxLength="500"
              handleChange={this.handleChange}
            />
          </fieldset>

          <input className="bt" type="button" onClick={this.sendForm} value="Enviar" />
          <input className="bt" type="reset" onClick={this.resetForm} value="Limpar" />
        </form>

        {this.state.submitted ? (
          <Content
            nome={this.state.nome}
            email={this.state.email}
            cpf={this.state.cpf}
            endereco={this.state.endereco}
            cidade={this.state.cidade}
            estado={this.state.estado}
            tipo={this.state.tipo}
            resumo={this.state.resumo}
            cargo={this.state.cargo}
            descricao={this.state.descricao}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
