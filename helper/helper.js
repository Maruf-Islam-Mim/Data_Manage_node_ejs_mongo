/**
 *  ganarete slug
 */
export const createSlug = (name) => {
  // Convert the product name to lowercase
  let slug = name.toLowerCase();

  // Replace spaces with hyphens
  slug = slug.replace(/\s+/g, "-");

  // Remove special characters
  slug = slug.replace(/[^a-zA-Z0-9-]/g, "");

  return slug;
};

/**
 * genarete random ids
 */
export const generateRandomId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const randomValue = Math.floor(Math.random() * 16777215).toString(16);
  const objectId =
    timestamp +
    "xxxxxxxxxxxxxxxx".replace(/[x]/g, () => {
      return ((Math.random() * 16) | 0).toString(16);
    }) +
    randomValue;

  return objectId;
};
const randomId = generateRandomId();
