import { useData } from '@/stores/data'
import { defaultMeta } from '@/router/routes'

function setDescription(value) {
  value = value || defaultMeta.description
  document
    .getElementsByTagName('meta')
    .namedItem('description')
    .setAttribute('content', value)
}

function setTitle(value) {
  value = value || defaultMeta.title
  document.title = value
}

export function setMeta(route) {
  const { product, model } = useData()

  switch (route.name) {
    case 'product':
      setTitle(product?.meta?.title)
      setDescription(product?.meta?.description)
      break
    case 'model':
      setTitle(model?.meta?.title + ' - ' + defaultMeta.title)
      setDescription(model?.meta?.description)
      break
    default:
      setTitle(route.meta?.title)
      setDescription(route.meta?.description)
      break
  }
}