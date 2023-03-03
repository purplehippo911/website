import { useEffect, useState } from "react";

const Advice = () => {
     
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
        <div className="quoteDiv">
         { isPending && <div>Loading advice...</div>  }
         { adviceSlip && <em className="quote">{adviceSlip}</em>}
        </div>

     );
}

export default Advice;  
