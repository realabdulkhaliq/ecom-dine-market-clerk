import { client } from "@/lib/sanityClient";

const FetchDataFromSanity = async () => {
  const sanityData = await client.fetch(`*[_type=='product']{
    title,
      _id,
    price,
    image, 
    alt,
    slug {current}, 
    kind -> {kind, _id}, 
    category -> {category, _id}
  }`);
  return sanityData;
};

export default FetchDataFromSanity;
