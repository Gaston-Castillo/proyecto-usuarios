

import imagen from "../assets/img/Image202.png"
const Header = () => {
  return (
    <header>
      <h1>Mi sitio web</h1>
    <div className="header" style={{boder: 'solid 1px '}}>
      <img
  className=" imagen"
  style={{ borderRadius: '50%', width: '100px', height: '100px' , marginLeft:'93%' , marginTop: '-12%'}} 
  src={imagen}
  alt="Logo"
/>
</div>
    
    </header>
  );
};

export default Header;
