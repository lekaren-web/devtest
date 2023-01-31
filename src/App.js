
import React, { useEffect, useState } from "react";


const App = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const url = "https://fe-test.marketing4storage.com/cart/reserve/528560dc-0507-4db9-94f9-f1afa80d0e07";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.description);
                setData(json.description);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        
       <div>{data}
        </div>
    );
};

export default App;
