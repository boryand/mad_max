const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">Home </a>
        </li>
        <li>
          <a href="/menu">Our Menu </a>
        </li>
        <li>
          {" "}
          <a href="/wine_list">Wine List </a>
        </li>
        <li>
          {" "}
          <a href="/desserts">Desserts</a>
        </li>
       
      </ul>
    </div>
  );
};

export default Nav;
