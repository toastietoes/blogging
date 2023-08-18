export default function Post({title, summary, cover, content, createdAt}){
    return(
        <div className="post">
        <div className="image">
        <img src="https://www.thoughtco.com/thmb/ic_z5yRJDp8uOfPONAEeXqsOC8s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-116051299-2693a29a440e4bdab4ee7f10c5f62dc5.jpg" alt=""/>
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p className = "info">
            <a className = "author">Julie Yang</a>
            <time>{createdAt}</time>
          </p>
          <p className = "summary">{summary}</p>
        </div>
      </div>
    );
}