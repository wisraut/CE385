const fetchDataFromServer1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data from Server 1'), 2000);
    });
};

const fetchDataFromServer2 = () => {
    return new Promise((_, reject) => {
        setTimeout(() => reject('Error from Server 2'), 1000);
    });
};

const fetchDataFromServer3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data from Server 3'), 3000);
    });
};

Promise.any([fetchDataFromServer1(), fetchDataFromServer2(), fetchDataFromServer3()])
    .then((result) => {
        console.log('Case 1 (First Success):', result);
    })
    .catch((error) => {
        console.error('Case 1 Error:', error);
    });

Promise.allSettled([fetchDataFromServer1(), fetchDataFromServer2(), fetchDataFromServer3()])
    .then((results) => {
        console.log('Case 2 (All Results):', results);
    });