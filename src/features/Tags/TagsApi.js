import axios from '../../Components/utils/Axios';

export const getTags = async () => {
const res = await axios.get('/tag');
  return res.data;
}