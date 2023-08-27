import { defineType, defineField } from "sanity";

export const kind = defineType({
  // it is used for document type and for type safety and intellisence
  name: "kind",
  title: "Kind of Product",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      title: "Kind of Product",
      type: "string",
    }),
  ],
});
