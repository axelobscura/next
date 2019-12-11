import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  static async getInitialProps({ req }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const {data} = res;
    return { posts: data }
  }
  render(){
    return(
      <div>
        <h1>Hola Amigos</h1>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Index;