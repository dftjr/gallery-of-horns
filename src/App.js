import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
// import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {}
    }
  }

  handleShowModal = (beast) => {
    console.log(beast);
    this.setState({
      showModal: true,
      beast: beast
    });
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <>
        <Header/>
        <Main data={data} temp={this.handleShowModal}/>
        <Footer/>
        <Modal
        show={this.state.showModal}
        onHide={this.handleHideModal}
      >
        <Card className="beast">
          <title title={this.state.beast.title}></title>
          <img src={this.state.beast.image_url} alt={this.state.beast.keyword} title={this.state.beast.description}></img>
          <p>{this.state.beast.votes}</p>
          <p>♥️</p>
          <p>{this.state.beast.description}</p>
        </Card>
      </Modal>
        
      </>
    )
  }
}

export default App;
