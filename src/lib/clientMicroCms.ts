import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "cc5wlk04tm",
  apiKey: process.env.API_KEY || "",
});
