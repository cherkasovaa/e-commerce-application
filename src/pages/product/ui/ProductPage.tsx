import { PageMeta } from '@/features/ProductMeta';
import { NotFoundPage } from '@/pages/not-found';
import { getCategoriesByIds } from '@/shared/api/commerceTools/getCategoriesByIds';
import { getProductById } from '@/shared/api/commerceTools/getProductById';
import { useProductMeta } from '@/shared/lib/hooks/useProductMeta';
import { getDataForProductDetails } from '@/shared/lib/products/getDataForProductDetails';
import { AdditionalInfoScreen } from '@/widgets/AdditionalInfoScreen';
import { MediaScreen } from '@/widgets/MediaScreen';
import { ProductDetails } from '@/widgets/ProductDetails';
import type { Category, ProductProjection } from '@commercetools/platform-sdk';
import { Grid } from '@mui/material';
import { useEffect, useState, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { ProductSkeleton } from './ProductSkeleton';

export const ProductPage: FC = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    async function fetchData(id: string): Promise<void> {
      try {
        const productData = await getProductById(id);
        setProduct(productData);

        if (productData?.categories.length) {
          const categoryIds = productData.categories.map(
            (category) => category.id
          );

          if (categoryIds) {
            const categoriesData = await getCategoriesByIds(categoryIds);
            setCategories(categoriesData);
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData(id);
  }, [id]);

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
          categories={categories}
          gameData={rest}
        />
      </Grid>
    </>
  );
};
