import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className = "logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
        <img src="https://m.media-amazon.com/images/I/7107Y0VKCZL._AC_UF1000,1000_QL80_.gif" alt=""/>
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
      <div className="post">
        <div className="image">
        <img src="https://m.media-amazon.com/images/I/7107Y0VKCZL._AC_UF1000,1000_QL80_.gif" alt=""/>
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
      <div className="post">
        <div className="image">
        <img src="https://m.media-amazon.com/images/I/7107Y0VKCZL._AC_UF1000,1000_QL80_.gif" alt=""/>
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
    </main>
    
  );
}

export default App;
