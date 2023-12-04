import React, { useEffect, useRef } from 'react'
import { Navbar } from './components';
import Header from './pages/Header';
import { Testimonial, Work, WorkTogether } from './pages';
import Footer from './components/Footer';
import { useStateContext } from './context/ContextProvider';

const App = () => {

  /////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const { isButtonHover } = useStateContext()

  /////////////////////////////////////////////////// USE EFFECTS ///////////////////////////////////////////////////
  useEffect(() => {
    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current && cursorOutlineRef.current) {

        (cursorDotRef.current as HTMLDivElement).style.left = posX + 'px';
        (cursorDotRef.current as HTMLDivElement).style.top = posY + 'px';

        (cursorOutlineRef.current as HTMLDivElement).style.left = posX + 'px';
        (cursorOutlineRef.current as HTMLDivElement).style.top = posY + 'px';

        (cursorOutlineRef.current as HTMLDivElement).animate(
          [{ left: `${posX}px`, top: `${posY}px` }],
          { duration: 1000, fill: 'forwards' }
        );
      }
    });

    return () => {
      window.removeEventListener('mousemove', () => { });
    };
  }, []);

  return (
    <div className="min-h-screen ">

      {
        !isButtonHover &&
        <>
          <div ref={cursorDotRef} className="fixed top-0 left-0 tranform translate-x-[-50%] translate-y-[-50%] rounded-full z-[1] pointer-events-none w-[5px] h-[5px] text-white "></div>
          <div ref={cursorOutlineRef} style={{ background: 'rgba(175, 175, 175)' }} className="fixed top-0 left-0 tranform translate-x-[-50%] translate-y-[-50%] rounded-full z-[1] pointer-events-none w-[25px] h-[25px] cursor-outline"></div>
        </>
      }

      <Navbar />
      <Header />
      <Work />
      <Testimonial />
      <WorkTogether />
      <Footer />

    </div>
  )
}

export default App;