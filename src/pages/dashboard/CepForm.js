import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { submitCepAction } from '../../actions/cep/CepActions'

const CepFormFunc = props => {

    const {handleSubmit} = props

    const submit = (data, submitCepAction) => {
        submitCepAction(data)
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitCepAction))}>
            <Field
                style={{ width: "300px", marginLeft: "auto", marginRight: "auto" }}
                type="text"
                className="form-control"
                // onChange={(e) => this.getCep(e)}
                placeholder="Selecione um CEP"
                name="cep"
            ></Field>
            <button type="submit">Ver Resultado</button>
        </form>
    )
}

const CepForm = reduxForm({
  form: "Cep",
})(CepFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { submitCepAction })(CepForm);

