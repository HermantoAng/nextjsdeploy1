import React from 'react'
import Typed from 'typed.js'

function typedAnimation(props :any) {
   // Create reference to store the DOM element containing the animation
   const el = React.useRef(null);

   React.useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ['<i>We Are Hoomans</i> we will be.', '&amp; and You?.'],
       typeSpeed: 70,
     loop: true,
     backSpeed: 30,
     });
 
     return () => {
       // Destroy Typed instance during cleanup to stop animation
       typed.destroy();
     };
   }, []);
 
   return (
     <div>
       <span className='text-white text-3xl' ref={el} />
     </div>
   );
}

export default typedAnimation