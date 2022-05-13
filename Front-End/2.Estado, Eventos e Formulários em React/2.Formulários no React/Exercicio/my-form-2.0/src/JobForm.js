import React from 'react';
import './JobForm.css'


class JobForm extends React.Component {
  render() {
    return(
      <form>
        <fieldset>
          <h1>Último Emprego</h1>
          <div className='formContainer'>
            <label for='currResumee'>Nome:</label>
            <textarea name='resumo' id='currResumee' maxLength={1000} required cols='100' rows='3'></textarea>
          </div>
          <div className='formContainer'>
            <label for='role'>Nome:</label>
            <textarea name='resumo' id='role' maxLength={40} required cols='100' rows='3' onMouseEnter={() => {
              alert('Preencha com atenção')}
              }></textarea>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default JobForm