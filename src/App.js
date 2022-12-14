import logo from './logo.svg';
import './App.css';

const App=({bgColor,name,text,textColor})=> {
  return (
    <div className='container'>
      <div className='color-card'>
        <section className='color' style={{ backgroundColor: bgColor }}></section>
        <section className='name'>{name}<br/>
        <span className='pink' style={{color: textColor}}>{text}</span>
        </section>
      </div>
    </div>
  )
}


function Card(){
  return(
  <div>
    <App bgColor="pink" name="#FF6663" text="PINK" textColor="pink"/>
    <App bgColor="gray" name="#333333" text="GRAY" textColor="gray"/>
    <App bgColor="black" name="#000000" text="BLACK" textColor="black"/>
    <App bgColor="green" name="#38BB14" text="GREEN" textColor="green"/>
    <App bgColor="red" name="#C90B0B" text="RED" textColor="red"/>
    <App bgColor="orange" name="#FF8000" text="ORANGE" textColor="orange"/>
    <App bgColor="yellow" name="#FFF500" text="YELLOW" textColor="yellow"/>
    <App bgColor="lightgray" name="#CCCCCC" text="LIGHT GRAY" textColor="lightgray"/>
    <App bgColor="purple" name="#7E41A2" text="PURPLE" textColor="purple"/>
    <App bgColor="brown" name="#C14911" text="BROWN" textColor="brown"/>
  </div>
  )
}

export default Card;
