import React, {useEffect, useState} from 'react';

const App = () => {
  const [data, setData] = useState(null)
   useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('./data/issues.csv')
      debugger;
      setData(result);
    };
    fetchData();
  }, []);
  console.log(data)
  return <div>hi</div>
}

export default App;
