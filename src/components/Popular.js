import React from 'react';

class Popular extends React.Component{
  state = { selectedLanguage: 'All' }

  updateLanguage = (lang) => {
    return this.setState({ selectedLanguage: lang })
  }

  render(){

    let languages = ['All','JavaScript','Ruby','Java','CSS','Python']

    return(
      <div>
      <p>Selected Language: {this.state.selectedLanguage}</p>
      <ul className='languages'>
        {languages.map( (lang) => {
          return (
            <li
              style={ lang === this.state.selectedLanguage ? {color: 'red'} : null }
              key={lang}
              onClick={this.updateLanguage.bind(null, lang)}
              >
              {lang}
            </li>
          )
        })}
      </ul>
      </div>
    )
  }
}

export default Popular;
