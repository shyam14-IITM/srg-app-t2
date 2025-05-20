import "./Menu.css"

const Menu = ({isDark,setIsDark,menuOpen,setMenuOpen}) => {
    return ( 
        <div className="Menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <i  className="ri-more-2-line"></i>
            {
                menuOpen && <div onClick={()=>{setIsDark(!isDark); setMenuOpen(!menuOpen)}} className="option">Switch to {isDark?"Light Theme":"Dark Theme"}</div>
            }

        </div>
     );
}
 
export default Menu;