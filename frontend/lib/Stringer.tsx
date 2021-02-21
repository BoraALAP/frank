export const Slugify = (string) => {
  return string.toLowerCase().replace(" ", "_");
};

export const Capitilize = (string) => {
  return string.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};
