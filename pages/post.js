import axios from 'axios';
const Post = ({id, comments}) => (
  <div>
    <h1>POST page # {id}</h1>
    <h2>COMMENTS</h2>
    <hr/>
    <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <p>Name: {comment.name}</p>
        <p>Comment: {comment.body}</p>
      </li>
    ))}
    </ul>
  </div>
)
Post.getInitialProps = async ({query}) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const {data} = res;
  return {...query, comments: data};
};
export default Post;