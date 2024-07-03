import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'XeCfoUyyT3oNsIDP-IR6UQD5TSyIG6zOPaP39ZbOEp0';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/photos/random`, {
      params: {
        count: 20,
        client_id: ACCESS_KEY,
      },
    });

    return response.data.map(item => ({
      id: item.id,
      name: item.user.name,
      description: item.description || 'No description available',
      price: Math.floor(Math.random() * 100) + 1,
      image: item.urls.regular,
      category: item.user.username,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};