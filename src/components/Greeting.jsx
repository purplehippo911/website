import { useEffect, useState } from "react";
import Greetings from "../utils/Greetings";

const Welcome = () => {
    // Where I got the greetings from
      // https://www.babbel.com/en/magazine/how-to-say-hello-in-10-different-languages
      const [greetingText, setGreetingText] = useState('');
      const [flag, setFlag] = useState('');

      const useGreeting = () => {
        const random = Math.floor(Math.random() * Greetings.length);
        const greeting = Greetings[random];
        setGreetingText(greeting.text);
        // to avoid the same greeting reaparing twice in a row
        
        // the flags should attach to the right greeting
        const flag = greeting.flag;
        setFlag(flag);
      };

    // useEffect(() => {
    //     useGreeting()
    // }, [])

    return ( 
      <div>

        <button className="greeting btn" onClick={useGreeting}>
            <h2 className="greeting__text"> 
            
            {greetingText &&
            greetingText}
            
            {!greetingText && "Hei"}
            
            </h2>
            <a href="#" className="flags">
                <strong className="flag">
  
                  {flag &&
                  flag}
            
              {!flag && "🇳🇴"}  
                </strong>
            </a>
        </button>
        {!greetingText && <p className="greeting__info">Click above</p>}
      </div>
     );
}
 
export default Welcome;