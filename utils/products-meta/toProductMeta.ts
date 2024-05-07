import type { ProductMetaCharacteristics } from "../../domain/models/product_meta";
import { insertProductMetaSchema } from "../../infrastructure/validation/product-meta";

export const toProductMeta = (
  characteristics: ProductMetaCharacteristics[],
  id: number
) => {
  const validatedProductMeta = insertProductMetaSchema.parse({
    characteristics,
    productId: id,
  });

  const addedData = validatedProductMeta.characteristics.map(
    (characteristic) => ({
      ...characteristic,
      productId: id,
    })
  );

  return addedData;
};
