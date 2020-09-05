import React, { useRef, useEffect } from 'react';
import './App.scss';
import Nav from './Components/Nav';
import gsap,{ TweenLite,Power3 } from 'gsap'
import Intro from './Components/Intro';
import Languages from './Components/Languages';

gsap.registerPlugin(TweenLite,Power3)

function App() {
  let Ap = useRef(null)

  useEffect(() => {
    TweenLite.to(Ap, 0,{css:{opacity:1},ease:Power3.easeInOut})
  }, [])


  return (
    <div ref={el=>{Ap=el}} className="App">
      <Nav/>
      <Intro/>
      <Languages/>
    </div>
  );
}

export default App;
