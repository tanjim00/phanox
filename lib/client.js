import { createClient } from '@sanity/client';
import { image } from '@sanity/image-url';
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: 'wrwskf02',
  dataset: 'production',
  apiVersion: '2023-04-13',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder({
  projectId: 'wrwskf02',
  dataset: 'production',
  apiVersion: '2023-04-13',
  useCdn: true
});

export const urlFor = (source) => builder.image(source);

export default client;
