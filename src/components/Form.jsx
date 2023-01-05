import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useNews from '../hooks/useNews';

const Categories = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' }
];

const Form = () => {
  const { category, handleChangeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          label="Categoría"
          onChange={handleChangeCategory}
          value={category}
        >
          {Categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
