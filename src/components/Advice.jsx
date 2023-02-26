import { useEffect, useState } from "react";

const Advice = () => {
     
    const adviceDiv = document.querySelector(".quote");
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".dropdown");
    const [adviceSlip, setAdviceSlip] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {

        fetch("https://api.adviceslip.com/advice")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const { advice } = data.slip;
            setAdviceSlip(advice)
            setIsPending(false)
        })
        .catch((err) => console.error(err))
    })

    return ( 
        <div class="quoteDiv">
         { isPending && <div>Loading advice...</div>  }
         { adviceSlip && <em class="quote">{adviceSlip}</em>}
        </div>

     );
}

export default Advice;  
