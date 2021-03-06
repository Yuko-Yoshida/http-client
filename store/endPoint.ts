enum Method {
  GET,
  POST,
  PUT,
  DELETE
}

interface State {
  method: Method
  endPoint: string
  head: object[]
  resHeaders: object
  resBody: object
  isAppended: boolean[]
}

interface Head {
  key: string
  value: string
}

interface Mutations {
  updateMethod(state: State, method: number): void
  updateEndPoint(state: State, endPoint: string): void
  pushHead(state: State, head: Head): void
  delHead(state: State, key: number): void
  updateHead(state: State, value: any): void
  setResHeader(state: State, headers: object): void
  setResBody(state: State, body: object): void
  switchAppendedFlag(state: State, value: { index: number, flag: boolean }): void
}

export const state: () => State = function () {
  return {
    method: Method.GET,
    endPoint: '',
    head: [{ key: '', value:'' }],
    resHeaders: {},
    resBody: {},
    isAppended: [false]
  }
}

export const mutations: Mutations = {
  updateMethod: function(state, method) {
    state.method = method
  },
  updateEndPoint: function(state, endPoint) {
    state.endPoint = endPoint
  },
  pushHead: function(state, head) {
    state.head.push(head)
    state.isAppended.push(false)
  },
  delHead: function(state, key) {
    state.head.splice(key, 1)
    state.isAppended.splice(key, 1)
  },
  updateHead: function(state, { index, key, value }) {
    console.log({ key, value })
    state.head[index] = { key, value }
  },
  setResHeader: function(state, headers) {
    state.resHeaders = headers
  },
  setResBody: function(state, body) {
    state.resBody = body
  },
  switchAppendedFlag: function(state, value) {
    state.isAppended[value.index] = value.flag
  }
}
