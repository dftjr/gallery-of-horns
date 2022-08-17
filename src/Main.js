import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import ListOfBeasts from './data.json';

class Main extends React.Component {
  
  render() {
    let newArr = ListOfBeasts.map((beast, idx) => (
      <HornedBeast
        key={idx}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}/>
    ))

    return (
      <main>
      {newArr}
      </main>
    );
  }
  
  
}


export default Main;