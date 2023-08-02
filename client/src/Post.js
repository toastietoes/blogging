export default function Post(){
    return(
        <div className="post">
        <div className="image">
        <img src="https://www.thoughtco.com/thmb/ic_z5yRJDp8uOfPONAEeXqsOC8s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-116051299-2693a29a440e4bdab4ee7f10c5f62dc5.jpg" alt=""/>
        </div>
        <div className="text">
          <h2>Steppenwolf</h2>
          <p className = "info">
            <a className = "author">Julie Yang</a>
            <time>2023-07-31</time>
          </p>
          <p className = "summary">my favourite book</p>
        </div>
      </div>
    );
}