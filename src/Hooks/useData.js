import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Enam121/cc331a30c907d178b8a30b7bd5e3b3ea/raw/cd76aaf7057ff07531628d81e2edcbf46da99ab7/data.json')
            .then(r => r.json())
            .then(d => setData(d))
    }, [])
    return data
};

export default useData;