import React from 'react';
import { Card } from 'react-bootstrap';
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

  handleImgClick = () => {
    this.props.temp(this.props.beast);
  }

  render() {
    return (
      <Card className="beast">
        <title title={this.props.title}></title>
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.description} onClick={this.handleImgClick}></img>
        <p>{this.state.votes}</p>
        <p onClick={this.handleWaves}>♥️</p>
        <p>{this.props.description}</p>
      </Card>
    )
  }
}

export default HornedBeast;
