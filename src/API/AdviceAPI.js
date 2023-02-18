import React, {useState, useEffect} from 'react';
import axios from "axios";

function AdviceAPI() {

    const [advice, setAdvice] = useState([])

    useEffect(() => {
        async function getAdvice() {
          const response = await axios.get('https://api.adviceslip.com/advice')
          setAdvice(response.data.slip.advice)
        }
        getAdvice()
      }, [])

    return (

        <div className='randomAdvice'>
            <h4 id="advTitle">Advice of the Day</h4>
            <p id="advice">{advice}</p>
        </div>

    );
};

export default AdviceAPI;
