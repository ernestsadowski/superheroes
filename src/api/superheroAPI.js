const API_URL = 'https://akabab.github.io/superhero-api/api/';

export const fetchSuperheroes = async () => {
    try {
        const response = await fetch(`${API_URL}all.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching superheroes:', error);
        return [];
    }
};

export const fetchSuperheroById = async (id) => {
  try {
      const response = await fetch(`${API_URL}/id/${id}.json`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching superhero:', error);
      return [];
  }
};