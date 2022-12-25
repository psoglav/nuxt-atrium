export const getDrillRigs = async () => (await import(/* @vite-ignore */`../data/products.js`)).default["drill-rig"]

export const getDrillingTools = async () => (await import(/* @vite-ignore */`../data/products.js`)).default["drilling-tool"]

export const getProductData = async product => (await import(/* @vite-ignore */
  `../data/products/${product}.js`
)).default

export const getProductModelData = async model => (await import(/* @vite-ignore */
  `../data/products/models/${model}.js`
)).default