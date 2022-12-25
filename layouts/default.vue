<template>
  <div class="default-layout" data-theme="light">
    <Header />
    <section class="container pt-10">
      <Breadcrumb />
    </section>
    <div class="page">
      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>
