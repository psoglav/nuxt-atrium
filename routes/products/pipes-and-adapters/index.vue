<script setup>
useHead({
  title: 'БУРОВЫЕ ТРУБЫ И АДАПТЕРЫ',
  meta: [
    {
      name: 'description',
      content: 'Продажа буровых труб и адаптеров для буровых станков'
    }
  ]
})

const { data: data1 } = await useAsyncData(() =>
  queryContent('/products/pipes-and-adapters/1').findOne()
)
const { data: data2 } = await useAsyncData(() =>
  queryContent('/products/pipes-and-adapters/2').findOne()
)
const { data: data3 } = await useAsyncData(() =>
  queryContent('/products/pipes-and-adapters/3').findOne()
)
</script>

<template>
  <section>
    <product-header
      title="БУРОВЫЕ  ТРУБЫ И АДАПТЕРЫ"
      subtitle="ДЛЯ ПНЕВМОУДАРНОГО И ВРАЩАТЕЛЬНОГО БУРЕНИЯ"
    />
    <br />
    <div class="flex gap-8 flex-col md:flex-row">
      <img
        src="/images/products/gallery/pipes-and-adapters/image1.jpeg"
        alt="БУРОВЫЕ ТРУБЫ И АДАПТЕРЫ"
        style="max-width: 30rem"
        class="rounded-lg self-center w-full"
      />
      <div>
        <p>
          Предлагаемый нашей компанией буровые трубы / штанги, переходники,
          адаптеры, забурники собственного производства ATRIUM, не раз проходили
          полевые испытания и нашли широкое и успешное применение на
          горнодобывающих и строительных предприятиях России и СНГ.
        </p>
        <p>
          Использование при ведении буровзрывных работ высококачественных
          буровых труб ATRIUM экономически выгодно! Заказчик получает не только
          стабильную проходку, но и более низкую себестоимость работ.
        </p>
      </div>
    </div>
    <br />
    <div class="w-full" style="max-width: 1024px">
      <product-table
        :data="data1"
        title="БУРОВЫЕ ТРУБЫ ДЛЯ ПНЕВМОУДАРНОГО БУРЕНИЯ"
      />
      <product-table
        :data="data2"
        title="БУРОВЫЕ АДАПТЕРЫ И ПЕРЕХОДНИКИ ДЛЯ ПНЕВМОУДАРНОГО БУРЕНИЯ"
      />
      <div class="product-table">
        <h2>БУРОВЫЕ ТРУБЫ И АДАПТЕРЫ ДЛЯ СТАНКОВ ВРАЩАТЕЛЬНОГО БУРЕНИЯ</h2>
        <table>
          <thead>
            <tr>
              <th>НАИМЕНОВАНИЕ ИЗДЕЛИЯ</th>
              <th>ГАБАРИТНЫЕ РАЗМЕРЫ (ДИАМЕТР / ДЛИНА / ТОЛЩИНА СТЕНКИ), ММ</th>
              <th>АРТИКУЛ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-name">Буровой станок DML-1200 (Epiroc)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга DML L-9,1</td>
              <td>178 / 9140 / 20</td>
              <td>ATR-DML1200-2135</td>
            </tr>
            <tr>
              <td>Буровая штанга DML L-10,7</td>
              <td>178 / 10670 / 20</td>
              <td>ATR-DML1200-2136</td>
            </tr>
            <tr>
              <td>Переходник долотный (адаптер нижний) DML</td>
              <td>178 / 1050</td>
              <td>ATR-DML1200-2137</td>
            </tr>
            <tr>
              <td>Адаптер нижний DML</td>
              <td>178 / 705</td>
              <td>ATR-DML1200-2138</td>
            </tr>
            <tr>
              <td>Адаптер нижний DML</td>
              <td>178 / 960</td>
              <td>ATR-DML1200-2139</td>
            </tr>
            <tr>
              <td>Муфта шпиндельная (адаптер верхний) DML</td>
              <td>152 / 850</td>
              <td>ATR-DML1200-2140</td>
            </tr>
            <tr>
              <td>Втулка центрирующая DМL</td>
              <td>300 / 255 / 182</td>
              <td>ATR-DML1200-2141</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок DML-1600 (Epiroc)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга DML L-10,7</td>
              <td>178 / 10670 / 20</td>
              <td>ATR-DML1600-5231</td>
            </tr>
            <tr>
              <td>Переходник долотный (адаптер нижний) DML</td>
              <td>178 / 1050</td>
              <td>ATR-DML1600-5232</td>
            </tr>
            <tr>
              <td>Адаптер нижний DML</td>
              <td>178 / 705</td>
              <td>ATR-DML1600-5233</td>
            </tr>
            <tr>
              <td>Адаптер нижний DML</td>
              <td>178 / 960</td>
              <td>ATR-DML1600-5234</td>
            </tr>
            <tr>
              <td>Муфта шпиндельная (адаптер верхний) DML</td>
              <td>152 / 850</td>
              <td>ATR-DML1600-5235</td>
            </tr>
            <tr>
              <td>Втулка центрирующая DМL</td>
              <td>300 / 255 / 182</td>
              <td>ATR-DML1600-5236</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок T4BH (Epiroc)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга T4BH L-7,62</td>
              <td>159 / 7725 / 20</td>
              <td>ATR-T4BH-6431</td>
            </tr>
            <tr>
              <td>Буровая штанга T4BH L-6,295</td>
              <td>159 / 6400 / 20</td>
              <td>ATR-T4BH-6432</td>
            </tr>
            <tr>
              <td>Адаптер верхний T4BH</td>
              <td>159 / 599</td>
              <td>ATR-T4BH-6433</td>
            </tr>
            <tr>
              <td>Переходник долотный T4BH</td>
              <td>159 / 917</td>
              <td>ATR-T4BH-6434</td>
            </tr>
            <tr>
              <td>Втулка центрирующая T4BH</td>
              <td>161 / 304 / 190</td>
              <td>ATR-T4BH-6435</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок DM45 (Epiroc)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга DM45 Ø140 L-9,1</td>
              <td>140 / 9235 / 20</td>
              <td>ATR-DM45-1422</td>
            </tr>
            <tr>
              <td>Буровая штанга DM45 Ø159 L-9,1</td>
              <td>159 / 9140 / 20</td>
              <td>ATR-DM45-1423</td>
            </tr>
            <tr>
              <td>Переходник долотный DM-45 Ø140</td>
              <td>140 / 800</td>
              <td>ATR-DM45-1424</td>
            </tr>
            <tr>
              <td>Муфта шпиндельная DМ-45 Ø140</td>
              <td>140 / 815</td>
              <td>ATR-DM45-1425</td>
            </tr>
            <tr>
              <td>Переходник долотный DM-45 Ø159</td>
              <td>159 / 1050</td>
              <td>ATR-DM45-1426</td>
            </tr>
            <tr>
              <td>Муфта шпиндельная DМ-45 Ø159</td>
              <td>159 / 845</td>
              <td>ATR-DM45-1427</td>
            </tr>
            <tr>
              <td>Втулка центрирующая DM-45</td>
              <td>161 / 304 / 190</td>
              <td>ATR-DM45-1428</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок PV-271 (Epiroc)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга PV-271 L7740</td>
              <td>203 / 7740 / 20</td>
              <td>ATR-PV271-9421</td>
            </tr>
            <tr>
              <td>Буровая штанга PV-271 L-5370 (стартовая)</td>
              <td>203 / 5370 / 20</td>
              <td>ATR-PV271-9422</td>
            </tr>
            <tr>
              <td>Муфта шпиндельная (адаптер верхний) PV-271</td>
              <td>219 / 610</td>
              <td>ATR-PV271-9423</td>
            </tr>
            <tr>
              <td>Втулка центрирующая PV-271</td>
              <td>300 / 290 / 220</td>
              <td>ATR-PV271-9424</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок D50KS (Sandvik)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга D50KS</td>
              <td>178 / 9140 / 20</td>
              <td>ATR-D50-1237</td>
            </tr>
            <tr>
              <td>Переходник долотный D50KS</td>
              <td>178 / 610</td>
              <td>ATR-D50-1238</td>
            </tr>
            <tr>
              <td>Муфта шпиндельная D50KS</td>
              <td>163 / 322</td>
              <td>ATR-D50-1239</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок D245S (Sandvik)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга D245S Ø140 L-9,1</td>
              <td>140 / 9230 / 20</td>
              <td>ATR-D245-9412</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок 2СБШ-200</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга 2СБШ-200 черт.200Н.09.06.600</td>
              <td>180 / 8165 / 20</td>
              <td>ATR-SBH200-3141</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок 3СБШ-200</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга 3СБШ-200 черт.08.00.45.100</td>
              <td>180 / 11970 / 20</td>
              <td>ATR-3SBH200-1241</td>
            </tr>
            <tr>
              <td>Штанга концевая 3СБШ-200 черт.08.00.45.200</td>
              <td>180 / 2390 / 20</td>
              <td>ATR-3SBH200-1242</td>
            </tr>
            <tr>
              <td>Штанга концевая 3СБШ-200 черт.08.00.45.200</td>
              <td>180 / 3200 / 20</td>
              <td>ATR-3SBH200-1243</td>
            </tr>
            <tr>
              <td>Буровая штанга 3СБШ-200Н черт.08.00.10.000</td>
              <td>180 / 12070 / 20</td>
              <td>ATR-3SBH200-1244</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок 4СБШ-200</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга 4СБШ-200 черт.09.00.10.000</td>
              <td>180 / 8000 / 20</td>
              <td>ATR-4SBH200-1233</td>
            </tr>
            <tr>
              <td class="highlight-name">Буровой станок 5СБШ-200</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Буровая штанга 5СБШ-200-36 черт.12.00.10.000</td>
              <td>180 / 9650 / 20</td>
              <td>ATR-5SBH200-6223</td>
            </tr>
            <tr>
              <td>Штанга концевая 5СБШ-200-36 L-2,4 черт.09.00.11.000</td>
              <td>180 / 2390 / 20</td>
              <td>ATR-5SBH200-6224</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlight-name {
  /* color: red; */
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.1rem;
}
</style>
