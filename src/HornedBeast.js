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
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.description}/>
        <p>{this.state.votes}</p>
        <p onClick={this.handleWaves}>♥️</p>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
