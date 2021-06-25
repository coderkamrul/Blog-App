import "./post.css"
import {Link} from "react-router-dom"

function Post({post}) {
  const PF = "http://localhost:5000/images/";
    return (
      <div className="post">
        {post.photo &&(
          <Link Link to = {
            `/post/${post._id}`
          }
          className = "link" >
        <img
          className="postImg"
          src={PF + post.photo}
          alt=""
          />
        </Link>
          )}
        <div className="postInfo">
          <div className="postCats">
            {
              post.categories.map((c)=>(
                <span className="postCat">{c.name}</span>
              ))
            }
          </div>
          <span className="postTitle">
            <Link to={`/post/${post._id}`} className="link">{post.title}</Link>
          </span>
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>

        </div>
        <p className="postDesc">
          {post.desc}
        </p>
      </div>
    );
}

export default Post
