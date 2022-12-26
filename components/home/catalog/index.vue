<script setup>
import ProductList from './components/ProductList.vue'
import { chunk } from '~~/helpers'

const drillRig = ref([
  {
    path: '/pneumatic-impact-drill-rig',
    title: 'ПНЕВМОУДАРНЫЕ БУРОВЫЕ СТАНКИ',
    preview: '/images/products/models/DCR-22.jpg',
    links: [
      ['dcr-22', 'FURUKAWA DCR 22'],
      ['dcr-20', 'FURUKAWA DCR 20'],
      ['dcr-22-rc', 'FURUKAWA DCR 22 RC']
    ]
  },
  {
    path: '/rotary-drill-rig',
    title: 'ПЕРФОРАТОРНЫЕ БУРОВЫЕ СТАНКИ',
    preview: '/images/products/models/HCR-1500-sm.jpg',
    links: [
      ['hcr-1800', 'FURUKAWA HCR-1800'],
      ['hcr-1500', 'FURUKAWA HCR-1500'],
      ['hcr-1200', 'FURUKAWA HCR-1200'],
      ['hydraulic-breakers', 'Гидроперфораторы Furukawa HD']
    ]
  },
  {
    path: '/underground-drill-rig',
    title: 'ПОДЗЕМНЫЕ БУРОВЫЕ УСТАНОВКИ',
    preview: '/images/products/models/T1AM.jpg',
    links: [
      ['t1am', 'FURUKAWA T1AM'],
      ['t2am', 'FURUKAWA T2AM'],
      ['t1am-f', 'FURUKAWA T1AMF']
    ]
  },
  {
    path: '/pneumatic-drill-rig',
    title: 'ПНЕВМАТИЧЕСКИЕ БУРОВЫЕ СТАНКИ',
    preview: '/images/products/models/PCR-200.jpg',
    links: [['pcr-200', 'FURUKAWA PCR-200']]
  },
  {
    path: '/hydraulic-breaker',
    title: 'ГИДРОМОЛОТЫ FURUKAWA',
    preview: '/images/products/hydraulic-breaker.jpg',
    links: [
      ['fxj-125', 'FXJ 125'],
      ['fxj-175', 'FXJ 175'],
      ['fxj-225', 'FXJ 225'],
      ['fxj-275', 'FXJ 275'],
      ['fxj-375', 'FXJ 375'],
      ['fxj-475', 'FXJ 475'],
      ['fxj-770', 'FXJ 770'],
      ['fxj-1070', 'FXJ 1070']
    ]
  },
  {
    path: '/spare-parts-furukawa',
    title: 'ЗАПАСНЫЕ ЧАСТИ FURUKAWA',
    preview: '/images/products/spare-parts.jpg',
    links: [
      ['hydraulic-breakers-spare-parts', 'Запчасти для гидромолотов Furukawa'],
      ['drill-rigs-spare-parts', 'Запчасти для буровых станков Furukawa']
    ]
  },
  {
    path: '/service',
    title: 'СЕРВИСНОЕ ОБСЛУЖИВАНИЕ',
    preview: '/images/products/service.svg',
    links: [
      ['drill-rigs-service', 'Обслуживание и ремонт буровых станков'],
      ['hydraulic-breakers-service', 'Обслуживание и ремонт гидромолотов']
    ]
  }
])

const drillingTool = ref([
  {
    path: '/dth-hammers',
    preview: '/images/products/dth-hammers.jpg',
    title: 'ПНЕВМОУДАРНИКИ ВЫСОКОГО ДАВЛЕНИЯ QL, DHD, MISSION'
  },
  {
    path: '/dth-bits',
    preview: '/images/products/dth-bits.jpg',
    title: 'БУРОВЫЕ ПНЕВМОУДАРНЫЕ КОРОНКИ QL, DHD, MISSION'
  },
  {
    path: '/rotary-drill-bits',
    preview: '/images/products/rotary-drill-bits.jpg',
    title: 'ТРЕХШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ ГОРНО-РУДНОЙ ПРОМЫШЛЕННОСТИ'
  },
  {
    path: '/rc-bits',
    preview: '/images/products/rc-bits.jpg',
    title: 'БУРОВОЙ ИНСТРУМЕНТ ДЛЯ RC БУРЕНИЯ (REVERSE CIRCULATION)'
  },
  {
    path: '/pipes-and-adapters',
    preview: '/images/products/pipes-and-adapters.jpg',
    title: 'БУРОВЫЕ ТРУБЫ И АДАПТЕРЫ ДЛЯ ПНЕВМОУДАРНОГО И ВРАЩАТЕЛЬНОГО БУРЕНИЯ'
  },
  {
    path: '/button-bits',
    preview: '/images/products/button-bits.jpg',
    title:
      'ГИДРОПЕРФОРАТОРНЫЕ БУРОВЫЕ КОРОНКИ R25, R32, R38, T38, T45, T51, GT60'
  },
  {
    path: '/shanks',
    preview: '/images/products/shanks.jpg',
    title: 'ХВОСТОВИКИ ГИДРОПЕРФОРАТОРОВ Furukawa, Montaber, Epiroc, Sandvik'
  },
  {
    path: '/rods',
    preview: '/images/products/rods.jpg',
    title: 'БУРОВЫЕ ПЕРФОРАТОРНЫЕ ШТАНГИ R25, R32, R38, T38, T45, T51, GT60'
  }
])
</script>

<template>
  <section class="drill-rig-section">
    <ProductList
      title="БУРОВЫЕ СТАНКИ И ГИДРОМОЛОТЫ FURUKAWA"
      subtitle="для открытых и подземных горных работ"
    >
      <template #logo-md>
        <img
          src="/images/logo/furukawa.png"
          alt="furukawa"
          class="hidden md:block md:h-5"
        />
      </template>
      <template #logo-sm>
        <img
          src="/images/logo/furukawa.png"
          alt="furukawa"
          class="p-1 h-5 sm:h-6 md:hidden"
        />
      </template>
      <template #content>
        <product-card
          v-for="(product, i) in drillRig"
          :key="i"
          :title="product.title"
          :path="product.path"
          :preview="product.preview"
          :links="product.links"
        >
          <div
            class="grid gap-x-4"
            :style="{ gridTemplateColumns: `repeat(${chunk(product.links, 5).length}, 1fr)` }"
          >
            <div v-for="(chunk, k) in chunk(product.links, 5)" :key="k">
              <product-link
                v-for="(link, j) of chunk"
                :key="j"
                :path="product.path + '/' + link[0]"
                icon="tabler:external-link"
                :value="link[1]"
                @click="loading = true"
              />
            </div>
          </div>
        </product-card>
      </template>
    </ProductList>
  </section>
  <section class="drilling-tool-section">
    <ProductList
      title="БУРОВОЙ ИНСТРУМЕНТ"
      subtitle="Горно-шахтный буровой инструмент для различных типов бурения"
      :logo="false"
    >
      <template #content>
        <product-card
          v-for="(product, i) in drillingTool"
          :key="i"
          :title="product.title"
          :path="product.path"
          :preview="product.preview"
        />
      </template>
    </ProductList>
  </section>
</template>

<style lang="scss" scoped>
.drill-rig-section {
  padding-bottom: 0 !important;
}
</style>
