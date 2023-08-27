import { defineType, defineField } from "sanity";

export const category = defineType({
  // it is used for document type and for type safety and intellisence
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
  ],
});
