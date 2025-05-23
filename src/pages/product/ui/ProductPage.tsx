import { NotFoundPage } from '@/pages/not-found';
import { getProductById } from '@/shared/api/commerceTools/getProductById';
import { ProductDetails } from '@/widgets/ProductDetails';
import type { ProductProjection } from '@commercetools/platform-sdk';
import { Skeleton } from '@mui/material';
import { useEffect, useState, type FC } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage: FC = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id, setError, setLoading, setProduct]);

  if (loading) return <Skeleton variant="rounded" width={400} height={400} />;
  if (error) return <NotFoundPage />;
  if (!product) return <div>Product not found</div>;

  const { key, ...rest } = product;

  return <ProductDetails key={key} {...rest} />;
};
