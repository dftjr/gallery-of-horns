import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleWaves = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  render() {
    return (
      <article className="beast">
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.alt} title={this.props.description}/>
        <p>{this.props.horns}</p>
        <p>{this.props.keyword}</p>
        <p>♥️{this.state.votes}</p>
        <p onClick={this.handleWaves}>Say Hello!</p>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
