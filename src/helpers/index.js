export const infoResponse = (response) => {
    console.log('response.type =', response.type);
    console.log('response.url =', response.url);
    console.log('response.userFinalURL =', response.useFinalURL);
    console.log('response.status =', response.status);
    console.log('response.ok =', response.ok);
    console.log('response.statusText =', response.statusText);
    console.log('response.headers =', response.headers);
}
export const checkError = (response) => {
    if (!response.ok) {
        throw new Error("Network response was not OK");
    }
    if (response.status !== 200) {
       throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response;
}