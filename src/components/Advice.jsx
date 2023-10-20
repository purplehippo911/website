import { useEffect, useState } from "react";

import "../styles/style.scss";

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
        <section className="advice-section">
           
            <div className="quoteDiv">
                <h2>Advice of the day</h2>
                { isPending && <p>Loading advice...</p>  }
                { adviceSlip && 
                    <em className="quote">{adviceSlip}</em>
                }
            </div>
        </section>

     );
}

export default Advice;  
