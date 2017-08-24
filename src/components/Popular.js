import React from 'react';

const SelectLanguage = (props) => {
  let languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
  return(
    <ul className='languages'>
      {languages.map( (lang) => {
        return (
          <li
            style={ lang === props.selectedLanguage ? {color: 'red'} : null }
            key={lang}
            onClick={props.onSelect.bind(null, lang)}
            >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}


class Popular extends React.Component {

  state = { selectedLanguage: 'All' }

  updateLanguage = (lang) => {
    return this.setState({ selectedLanguage: lang })
  }

  render(){

    return(
      <div>
        <SelectLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
      </div>
    )
  }
}

export default Popular;
