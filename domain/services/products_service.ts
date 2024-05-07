import { toProductMeta } from "../../utils/products-meta/toProductMeta";
import type { InsertProductDTO } from "../dto/product";
import type { ProductMetaCharacteristics } from "../models/product_meta";
import type { ProductRepository } from "../repository/product_repo";
import type { ProductMetaRepository } from "../repository/products_meta";
import type { ProductsServiceOperations } from "./types";

export class ProductsService implements ProductsServiceOperations {
  private productRepo: ProductRepository;
  private productMetaRepo: ProductMetaRepository;

  constructor(
    productRepo: ProductRepository,
    productMetaRepo: ProductMetaRepository
  ) {
    this.productRepo = productRepo;
    this.productMetaRepo = productMetaRepo;
  }

  async createProduct(
    product: InsertProductDTO,
    characteristics?: ProductMetaCharacteristics[]
  ) {
    const createdProduct = await this.productRepo.create(product);

    if (createdProduct.id != null && characteristics) {
      const productMetaInfo = toProductMeta(characteristics, createdProduct.id);

      await this.productMetaRepo.create(productMetaInfo);

      const productMetas = await this.productMetaRepo.getAllByProductId(
        createdProduct.id
      );

      return { ...createdProduct, productMetas };
    }

    return createdProduct;
  }

  async getProduct(id: number) {
    const product = await this.productRepo.get(id);
    const productMeta = await this.productMetaRepo.getAllByProductId(id);

    return { ...product, productMeta };
  }

  async updateProduct(productInfo: InsertProductDTO) {
    const product = await this.productRepo.update(productInfo);

    if (product?.id != null) {
      const productMetas = await this.productMetaRepo.getAllByProductId(
        product.id
      );

      return { ...product, productMetas };
    }

    return product;
  }

  async getAllByCategoryId(categoryId: number) {
    const products = await this.productRepo.getAllByCategoryId(categoryId);

    return products;
  }

  async getAllProducts() {
    const products = await this.productRepo.getAll();

    return products;
  }

  async deleteProduct(id: number) {
    const productId = await this.productRepo.delete(id);

    return productId;
  }
}
