const name: string = 'EndPoint'


const getMethod: ($this: any) => Promise<object> = async function($this) {
  const res = await $this.$axios.get($this.endPoint)
  return res
}

const postMethod: ($this: any) => Promise<object> = async function($this) {
  const res = await $this.$axios.post($this.endPoint)
  return res
}

const putMethod: ($this: any) => Promise<object> = async function($this) {
  const res = await $this.$axios.put($this.endPoint)
  return res
}

const deleteMethod: ($this: any) => Promise<object> = async function($this) {
  const res = await $this.$axios.delete($this.endPoint)
  return res
}

const method: any[] = [
  getMethod,
  postMethod,
  putMethod,
  deleteMethod
]

interface Res {
  headers: object
  data: string | object
}

const methodHandler: ($this: any) => Promise<Res> = function($this) {
  $this.$store.state.endPoint.head.map(
    (head: { key: string, value: string }) => $this.$axios.setHeader(head.key, head.value)
  )
  return method[$this.method]($this)
}

interface Data {
  method: number
  methodName: string
  endPoint: string
}

const data: () => Data = function() {
  return {
    method: 0,
    methodName: 'GET',
    endPoint: ''
  }
}

interface Watch {
  method(method: number): void
  endPoint(endPoint: string): void
}

const watch: Watch = {
  method: function(this: any, method) {
    this.$store.commit('endPoint/updateMethod', method)

    switch (Number(method)) {
      case 0:
        (this as any).methodName = 'GET'
        break
      case 1:
        (this as any).methodName = 'POST'
        break
      case 2:
        (this as any).methodName = 'PUT'
        break
      case 3:
        (this as any).methodName = 'DELETE'
        break
      }
  },
  endPoint: function(this: any, endPoint) {
    this.$store.commit('endPoint/updateEndPoint', endPoint)
  }
}

interface Methods {
  send(): void
}

const methods: Methods = {
  send: async function(this: any) {
    const { headers, data }: Res = await methodHandler(this)
    this.$store.commit('endPoint/setResHeader', headers)
    this.$store.commit('endPoint/setResBody', data)
  }
}

export default {
  name,
  data,
  methods,
  watch
}
