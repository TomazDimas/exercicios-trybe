import React from 'react';
import './JobForm.css'


class JobForm extends React.Component {
  render() {
    return(
      <form>
        <fieldset>
          <h1>Último Emprego</h1>
          <div className='formContainer'>
            <label for='nameInput'>Nome:</label>
            <input name='nome' id='nameInput' type='text' maxLength={40} required></input>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default JobForm