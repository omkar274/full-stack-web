import apple from "/assets/images/apple.svg"

function NavBar(){
  return(
    <header>
    <nav className='navigation'>
      <div className='iconHolder'>
      <img src={apple}></img>
      </div>
      <div className='menu'>
        <div className='menuItem'><a href="/"> home </a></div>
        <div className='menuItem'><a href="https://www.apple.com/in/store">about </a></div>
        <div className='menuItem'><a href="shop">shop  </a></div>
        <div className='menuItem'><a href="#">contact </a></div>
      </div>
      
     

    </nav>
  </header>

  )
}
 export default NavBar