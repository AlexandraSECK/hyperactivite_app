const server = "http://localhost:1337/api/";
export function posttUser (input) {
    const url = server+'signup'
    return fetch(url,{
        method: 'post',
        body: JSON.stringify(input)
    })
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }
