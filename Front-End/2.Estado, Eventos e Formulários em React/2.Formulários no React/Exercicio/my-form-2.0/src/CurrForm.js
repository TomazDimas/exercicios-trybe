import React from 'react';
import './CurrForm.css'

const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
]

class CurrForm extends React.Component {
  render() {
    return(
      <form>
        <fieldset>
          <h1>Dados Pessoais</h1>
          <div className='formContainer'>
            <label for='nameInput'>Nome:</label>
            <input name='nome' id='nameInput' type='text' maxLength={40} required></input>
          </div>
          <div className='formContainer'>
            <label for='emailInput'>Email:</label>
            <input name='email' id='emailInput' type='email' maxLength={50} required></input>
          </div>
          <div className='formContainer'>
            <label for='cpfInput'>CPF:</label>
            <input name='cpf' id='cpfInput' type='text' maxLength={11} required></input>
          </div>
          <div className='formContainer'>
            <label for='adressInput'>Endereço:</label>
            <input name='endereço' id='adressInput' type='text' maxLength={200} required></input>
          </div>
          <div className='formContainer'>
            <label for='cityInput'>Cidade:</label>
            <input name='cidade' id='cityInput' type='text' maxLength={28} required></input>
          </div>
          <div className='formContainer'>
            <label for='stateInput'>Estado:</label>
            <select name='estado' id='stateInput' type='text' required>
              <option>Selecione</option>
              {estados.map((estado, index) => <option id={estado.index}>{estado}</option>)}
            </select>
          </div>
          <div className='formContainer'>
            <label for='houseInput'>Casa:</label>
            <input name='moradia' id='houseInput' type='radio' required></input>
            <label for='apartmentInput'>Apartamento:</label>
            <input name='moradia' id='apartmentInput' type='radio' required></input>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default CurrForm