const BASE_URL = 'https://60254fac36244d001797bfe8.mockapi.io/api/v1';

export const handleFetchResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return console.log('Error', res.status);
  }
  
  export const getCities = async () => {
    const res = await fetch(`${BASE_URL}/city`);
    return handleFetchResponse(res);
  }