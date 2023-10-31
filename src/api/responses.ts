export const getAllCharacters = (name: string) => {
  return new Promise((resolve) => {
    fetch(`https://www.narutodb.xyz/api/character/search?name=${name}`, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://narutodb.xyz/api/character',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return resolve(data);
      });
  });
};
