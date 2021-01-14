const Header = ()=>{

    return (<div className="navigationColor">
    <nav className="navbar" role="navigation" >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://chouftv.ma/content/themes/chouftv/dist/images/brand.svg" 
          height="87" width="150"
          className="navbarLogo"
          />
        </a>
    
        <a role="button" className="navbar-burger" >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a  href="/" className="navbar-item">
            الصفحة الرئيسية
          </a>
    
          <a href="/posts" className="navbar-item">
            مقالات
          </a>
  
         
    
          
        </div>
    
       
      </div>
    </nav>
  </div>)
}

export default Header;