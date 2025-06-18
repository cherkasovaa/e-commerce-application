import { PageMeta } from '@/features/ProductMeta';
import { NotFoundPage } from '@/pages/not-found';
import { useCategory } from '@/shared/lib/hooks/useCategory';
import { useProduct } from '@/shared/lib/hooks/useProduct';
import { useProductMeta } from '@/shared/lib/hooks/useProductMeta';
import { getDataForProductDetails } from '@/shared/lib/products/getDataForProductDetails';
import { AdditionalInfoScreen } from '@/widgets/AdditionalInfoScreen';
import { MediaScreen } from '@/widgets/MediaScreen';
import { ProductDetails } from '@/widgets/ProductDetails';
import { Grid } from '@mui/material';
import { type FC } from 'react';
import { useParams } from 'react-router-dom';
import { ProductSkeleton } from './ProductSkeleton';

export const ProductPage: FC = () => {
  const { id } = useParams();

  const { data: product, isLoading: loading, error } = useProduct(id || '');
  const { data: categories } = useCategory(product?.categories || []);

  const metaData = useProductMeta(product);

  if (loading) return <ProductSkeleton />;
  if (error) return <NotFoundPage />;
  if (!product) return <div>Product not found</div>;

  const { key, ...rest } = product;

  const productDetailsData = getDataForProductDetails(product);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}

      <Grid container direction="column">
        <ProductDetails {...productDetailsData} />

        {rest?.masterVariant?.images?.length && (
          <MediaScreen images={rest.masterVariant.images} />
        )}

        <AdditionalInfoScreen
          key={key}
          categories={categories ? categories : []}
          gameData={rest}
        />
      </Grid>
    </>
  );
};
