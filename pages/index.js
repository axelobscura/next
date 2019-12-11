import React, { Component } from 'react';

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent }
  }
  render(){
    return(
      <div>
        <h1>Hola Amigos {this.props.userAgent}</h1>
      </div>
    )
  }
}

export default Index;