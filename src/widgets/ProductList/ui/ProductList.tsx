import { ProductCard, useProducts } from '@/entities/product';
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ProductList = () => {
  const navigate = useNavigate();
  const { products } = useProducts();
  return (
    <Grid size={{ xs: 12, md: 9 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="subtitle1">
          {products && products.length} products
        </Typography>
        <Select defaultValue="az" size="small">
          <MenuItem value="az">Alphabetically, A-Z</MenuItem>
          <MenuItem value="za">Alphabetically, Z-A</MenuItem>
          <MenuItem value="low">Price: Low to High</MenuItem>
          <MenuItem value="high">Price: High to Low</MenuItem>
        </Select>
      </Box>

      <Grid container spacing={2}>
        {products &&
          products.map((product) => (
            <ProductCard
              product={product}
              key={product.key}
              onDetailsClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
      </Grid>
    </Grid>
  );
};
