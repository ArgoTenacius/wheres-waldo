import React, { useRef } from 'react'
import { default as Waldo } from "../../assets/Waldo.jpg"
import './game.css'

const Game = ({gameWin}) => {  
  const gameMain = useRef();
  const gameImg = useRef();

  const waldoCoordX = 0.49;
  const waldoCoordY = 0.37;
  const range = 0.025;

  const foundWaldo = (x, y) => {
    if(x > waldoCoordX - range && x < waldoCoordX + range
    && y > waldoCoordY - range && y < waldoCoordY + range){
      return true;
    }else{
      return false;
    }
  }

  const imageClick = async (e) => {
    //Will get the position of X and Y in percentage.

    const image_width = gameImg.current.offsetWidth;
    const image_height = gameImg.current.offsetHeight;
    const image_click_x = e.pageX - (gameMain.current.offsetWidth - gameImg.current.offsetWidth) / 2;
    const image_click_y = e.pageY - 32;
    const clickPercentageX = image_click_x / image_width;
    const clickPercentageY = image_click_y / image_height;

    const isFound = foundWaldo(clickPercentageX, clickPercentageY, waldoCoordX, waldoCoordY);
    
    if (isFound) { gameWin() }
  }
  return (
    <main ref={gameMain} className='game'>
      <img ref={gameImg} src={Waldo} onClick={imageClick} alt='waldo'/>
    </main>
  )
}

export default Game