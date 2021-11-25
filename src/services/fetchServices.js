const baseURL = 'https://space-tourism-72cb0-default-rtdb.europe-west1.firebasedatabase.app/';

const getData = async (category, categoryItem = '0') => {
    const response = await fetch(`${baseURL}/${category}/${categoryItem}.json`);
    const data = await response.json();

    return data;
}

export default getData;
