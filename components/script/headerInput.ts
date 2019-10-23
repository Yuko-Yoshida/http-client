interface Props {
  index: number
}
const props: Props = {
  index: Number()
}

// interface Data {
//   key: string
//   value: string
// }
// const data: () => Data = function() {
//   return {
//     key: '',
//     value: '',
//   }
// }

// interface Watch {
//   key(key: string): void
//   value(value: string): void
// }
// const watch: Watch = {
//   key: function(this: any, key) {
//     const value = this.$store.state.endPoint.head[this.index].value
//     this.$store.commit('endPoint/updateHead', { index: this.index, key: key, value: value })
//     if (!this.$store.state.endPoint.isAppended[this.index]) {
//       this.$store.commit('endPoint/pushHead', { key: '', value: '' })
//       this.$store.commit('endPoint/switchAppendedFlag', { index: this.index, flag: true })
//     }
//     this.value = value
//   },
//   value: function(this: any, value) {
//     const key = this.$store.state.endPoint.head[this.index].key
//     this.$store.commit('endPoint/updateHead', { index: this.index, key: key, value: value })
//     if (!this.$store.state.endPoint.isAppended[this.index]) {
//       this.$store.commit('endPoint/pushHead', { key: '', value: '' })
//       this.$store.commit('endPoint/switchAppendedFlag', { index: this.index, flag: true })
//     }
//     this.key = key
//   }
// }

interface Methods {
  key(e: any): void
  value(e: any): void
  deleteHeader(): void
  getKey(): string
  getValue(): string
}
const methods: Methods = {
  key: function(this: any, e) {
    const value = this.$store.state.endPoint.head[this.index].value
    this.$store.commit('endPoint/updateHead', { index: this.index, key: e.target.value, value: value })
    if (!this.$store.state.endPoint.isAppended[this.index]) {
      this.$store.commit('endPoint/pushHead', { key: '', value: '' })
      this.$store.commit('endPoint/switchAppendedFlag', { index: this.index, flag: true })
    }
  },
  value: function(this: any, e) {
    const key = this.$store.state.endPoint.head[this.index].key
    this.$store.commit('endPoint/updateHead', { index: this.index, key: key, value: e.target.value })
    if (!this.$store.state.endPoint.isAppended[this.index]) {
      this.$store.commit('endPoint/pushHead', { key: '', value: '' })
      this.$store.commit('endPoint/switchAppendedFlag', { index: this.index, flag: true })
    }
  },
  deleteHeader: function(this: any) {
    this.$store.commit('endPoint/delHead', this.index)
    this.$store.commit('endPoint/switchAppendedFlag', { index: this.index - 1, flag: false })
  },
  getKey: function(this: any) {
    return this.$store.state.endPoint.head[this.index].key
  },
  getValue: function(this: any) {
    return this.$store.state.endPoint.head[this.index].value
  }
}

export default {
  props,
  // data,
  // watch,
  methods
}
