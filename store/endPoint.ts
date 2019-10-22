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
  updateHead(state: State, key: number, head: Head): void
  setResHeader(state: State, headers: object): void
  setResBody(state: State, body: object): void
}

export const state: () => State = function () {
  return {
    method: Method.GET,
    endPoint: '',
    head: [],
    resHeaders: {},
    resBody: {}
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
  },
  delHead: function(state, key) {
    state.head.splice(key, 1)
  },
  updateHead: function(state, key, head) {
    state.head[key] = head
  },
  setResHeader: function(state, headers) {
    state.resHeaders = headers
  },
  setResBody: function(state, body) {
    state.resBody = body
  }
}
