import {Link} from "react-router-dom";
import Slide from 'react-reveal/Slide';
import { format } from "timeago.js";


export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
<Slide bottom>
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">by @{author.username}</a>
          <time>{(format(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
    </Slide>
  );
}