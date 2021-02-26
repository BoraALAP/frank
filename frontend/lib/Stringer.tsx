export const Slugify = (string) => {
  return string.toLowerCase().replace(/ /g, "_");
};

export const Capitilize = (string) => {
  return string.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};
