import { defineStore, acceptHMRUpdate } from 'pinia'

export const useApp = defineStore('app', {
  state: () => ({
    scrollTop: 0,
    header: true,
    sidebar: false,
    contactUsModal: false,
  }),
  actions: {
    setHeaderVisibility(value) {
      this.header = value
    },
    setScrollTop(value) {
      this.scrollTop = value
    },
    toggleSidebar() {
      this.sidebar = !this.sidebar
    },
    toggleContactUsModal() {
      this.contactUsModal = !this.contactUsModal
    },
  }
},)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot))
}