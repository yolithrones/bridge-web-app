// importing necessary dependencies from React 
import React, { useState, useEffect } from "react";

function Counter() {
    //useState hook is used to manage count state
    //initialize count to 0
    const [count, setCount] = useState(0);
    
    //inside useEffect hook, fetch count from local storage if it exists and parse as number
    //if it does not exist default to 0
    //update count state, adding 1 to initial count
    useEffect(() => {
        const storedCount = localStorage.getItem("pageVisits");
        const initialCount = Number(storedCount) || 0;
        setCount(initialCount + 1);
        localStorage.setItem("pageVisits", initialCount + 1);
    }, []);

    //display count in div
    return <div>{count} visitors</div>;
}

export default Counter();

//credit to https://medium.com/@attarfarnoosh/tracking-page-visits-in-react-using-local-storage-573be0055691