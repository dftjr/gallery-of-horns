import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  
  render() {
    let newArr = this.props.data.map((beast, idx) => {
      return <HornedBeast
        key={idx}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        temp={this.props.temp}
        beast={beast}
        />

  });

    return (
      <main>
      {newArr}
      </main>
    );
  }
  
}

export default Main;
