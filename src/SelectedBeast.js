import React from 'react';



class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal
      >
        <Card className="beast">
        <title title={this.props.title}></title>
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
