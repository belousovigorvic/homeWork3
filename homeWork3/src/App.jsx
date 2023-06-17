import React, { useState, useEffect } from "react";
import './App.css'

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <button onClick={fetchData} disabled={isLoading}>Refresh</button>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                data.map(item => (
                    <div className='item' key={item.id}>{item.title}</div>
                ))
            )}
        </div>
    );
}

export default App;
