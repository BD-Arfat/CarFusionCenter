import axios from '../../Components/utils/Axios';

export const getProducts = async () => {
    const res = await axios.get('/products');
    return res.data;
  }