import { useEffect, useState } from 'react';

import getData from '../services/fetchServices';

const useInfo = (databaseName) => {

    const [info, setInfo] = useState({});
    const [itemSelected, setItemSelected] = useState();

    const getSelectedItemHandler = (itemId) => {
        setItemSelected(itemId);
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(databaseName, itemSelected);
            setInfo(data);
        }

        fetchData();
    }, [itemSelected, databaseName]);
    

    return {
        info,
        getSelectedItemHandler
    }
}

export default useInfo;