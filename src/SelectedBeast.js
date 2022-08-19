import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal
      show={this.props.show}
      onHide={this.props.onHide}
      >
        <Card className="beast">
        <title title={this.props.beast.title}></title>
          <img src={this.props.beast.image_url} alt={this.props.beast.keyword} title={this.props.beast.description}></img>
          <p>{this.props.beast.votes}</p>
          <p>♥️</p>
          <p>{this.props.beast.description}</p>
        </Card>
      </Modal>
    )
  }
}

export default SelectedBeast;
