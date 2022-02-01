import './NavBar.css'

const NavBar = () => {
    return (
      <nav className='NavBar'>
          <div>
              <p> BOARD-SHOP </p>
          </div>
          <a href="#" className="NavMenu">Surfboard</a>
          <a href="#" className="NavMenu">Skateboard</a>
          <a href="#" className="NavMenu">Snowboard</a>
          <a href="#" className="NavMenu">LOGIN</a>           
      </nav>
    )
}
  export default NavBar