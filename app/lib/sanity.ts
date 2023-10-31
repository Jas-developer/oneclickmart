import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// sanity client
export const client = createClient({
  projectId: "pyjt2bf0",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

// create image builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
