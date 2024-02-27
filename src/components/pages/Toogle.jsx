import React, { useContext } from 'react';
import './toogle.css';
import { themeContxt } from '../../context';

function Toogle() {
  const theme = useContext(themeContxt);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };

  return (
    <div className="toogle" onClick={handleClick}>
      <i className="fa-solid fa-moon"></i>
      <i className="fa-solid fa-sun"></i>
      <div className="to-button" style={darkMode ? { left: '2px' } : { right: '2px' }}></div>
    </div>
  );
}

export default Toogle;
