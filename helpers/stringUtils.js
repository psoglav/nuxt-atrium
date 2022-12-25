export const toKebabCase = s => s.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase()
export const toCamelCase = s => s.replace(/-\w/g, clearAndUpper)
export const toPascalCase = s => s.replace(/(^\w|-\w)/g, clearAndUpper)
export const clearAndUpper = s => s.replace(/-/, "").toUpperCase()

export const getStaticAssetURL = (path) => new URL(
  `../assets/${path}`,
  import.meta.url,
).href