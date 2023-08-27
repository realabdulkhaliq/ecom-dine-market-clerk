import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category";
import { kind } from "./kind";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, kind],
};
