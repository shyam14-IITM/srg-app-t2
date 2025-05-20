import { useState } from 'react'
import TaskList from './TaskList'
import Menu from './Menu';


function App() {
  const [isDark, setIsDark] = useState(false);
  const[menuOpen,setMenuOpen]=useState(false);


  return (
    <>
      <div className={isDark?'Home darkHome':'Home'}>
        <Menu isDark={isDark} setIsDark={setIsDark} menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <TaskList isDark={isDark}></TaskList>
      </div>
      
    </>
  )
}

export default App
