import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Form from './Form.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
      sortHornBy: 0,
      filteredHorns: data,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.sortHornBy !== 0) {
      let specificHorns = data.filter(num => num.horns === this.state.sortHornBy);
      this.setState({ filteredHorns: specificHorns });
    }
     else { 
      this.setState({ filteredHorns: data });
    }
  }


  handleSelect = (e) => {
    let selected = parseInt(e.target.value);
    this.setState({
      sortHornBy: selected
    });
  }

  handleShowModal = (beast) => {
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
        <Header />
        <Form
          onSubmit={this.handleSubmit}
          onChange={this.handleSelect}
        />
        <Main
          data={this.state.filteredHorns}
          temp={this.handleShowModal} />
        <Footer />
        <SelectedBeast
          beast={this.state.beast}
          show={this.state.showModal}
          onHide={this.handleHideModal}
        />
      </>
    )
  }
}


export default App;
