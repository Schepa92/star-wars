const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

// ВАРИАНТ АСИНХРОННОГО ЗАПРОСА
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Could not fetch.', res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
};

(async () => {
  const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
  console.log(body);
})();

// ВАРИАНТ ЗАПРОСА С ИСПОЛЬЗОВАНИЕМ ПРОМИСОВ
// export const getApiResource = (url) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((body) => console.log(body.results))
//       .catch((error) => console.log(error.message));
//   };

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));
