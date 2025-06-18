import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = '/api/search'; 

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Coffee'); 
  const getResults = async (params) => {
    setLoading(true);
    const urlParams = new URLSearchParams({
      engine: 'google',
      q: searchTerm, 
      api_key: import.meta.env.VITE_API_KEY,
      ...params,
    });
    try {
      const res = await fetch(`${baseUrl}?${urlParams.toString()}`);
      if (!res.ok) {
        const text = await res.text();
        console.error('Response text:', text);
        throw new Error(`HTTP error! status: ${res.status}, response: ${text}`);
      }
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        setResults(data);
      } else {
        const text = await res.text();
        console.error('Non-JSON response:', text);
        setResults({ error: 'Failed to fetch data. Check API key or rate limit.' });
      }
    } catch (error) {
      console.error('API Error:', error);
      setResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  
  React.useEffect(() => {
    getResults({});
  }, []); 

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);