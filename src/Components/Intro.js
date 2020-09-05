import React,{useState,useEffect,useRef} from 'react'
import gsap,{ TweenLite,Power3 } from 'gsap'

gsap.registerPlugin(TweenLite,Power3)

const Intro=()=> {
    let naMe = useRef(null)
    let welCome = useRef(null)
    let desCripTion = useRef(null)
    const [namText, setnamText] = useState('{Add Name}')


    useEffect(() => {
        TweenLite.staggerFrom([naMe,welCome,desCripTion],.8, {opacity:0, x:-1000, ease:Power3.easeInOut},.2).staggerTo([naMe,welCome,desCripTion],.8,{css:{scale:2}, ease:Power3.easeInOut},.2)
      }, [])
    return (
        <section id='intro'>
            <h2 
            ref={el=>naMe=el} 
            className='name'
            >
                Hi, 
                    <span 
                        contentEditable={true} 
                        onBlur={(e)=>setnamText(e.target.textContent)}
                    >
                        {namText}
                    </span>!,
            </h2>
        <h1 ref={el=>welCome=el} className='name'>I am Salvador 'Lekan A.</h1>
        <h2 ref={el=>desCripTion=el} className='name'>A Web Developer</h2>
        </section>
    )
}

export default Intro
