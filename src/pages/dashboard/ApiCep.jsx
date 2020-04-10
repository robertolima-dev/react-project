import React, { Component } from "react";
import axios from 'axios'

class ApiCep extends Component {
    state = {
        cep: '',
        result: ''
    }

    getCep(e) {
        this.setState({ cep: e.target.value });
        // console.log(e.target.value)
    }

    seeResult() {
        axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
        .then(res => {
            this.setState({ result: res.data })
        })
    }


    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-12 mt-5">
                {/* <CepForm /> */}
                <input
                  style={{
                    width: "250px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  type="text"
                  className="form-control"
                  onChange={(e) => this.getCep(e)}
                  placeholder="Selecione um CEP"
                />
                <button className="button" onClick={() => this.seeResult()}>
                  Ver Resultado
                </button>
              </div>

              <div className="col-12 mt-5">
                <h3>
                  Resultado da pasquisa:{" "}
                  {this.state.result !== "" ? this.state.result.cep : ""}
                </h3>
                <h5>
                  {/* Rua São Francisco de Assis - Centro - Diadema - SP */}
                  {this.state.result !== ""
                    ? this.state.result.logradouro +
                      " - " +
                      this.state.result.bairro +
                      " - " +
                      this.state.result.localidade +
                      " - " +
                      this.state.result.uf
                    : ""}
                </h5>
              </div>
            </div>
          </div>
        );
    }
}

export default ApiCep;
