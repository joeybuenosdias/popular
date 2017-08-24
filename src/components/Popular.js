import React from 'react';

class Popular extends React.Component{

  render(){

    let languages = ['All','JavaScript','Ruby','Java','CSS','Python']

    return(
      <ul className='languages'>
        {languages.map( (lang) => {
          return (
            <li>{lang}</li>
          )
        })}
      </ul>
    )
  }
}

export default Popular;
