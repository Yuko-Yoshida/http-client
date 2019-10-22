enum Method {
  GET,
  POST,
  PUT,
  DELETE
}

interface State {
  method: Method
  endPoint: string
}

export const state: () => State = function () {
  return {
    method: Method.GET,
    endPoint: ''
  }
}

interface Mutations {
  updateMethod(state: any, method: number): void
  updateEndPoint(state: any, endPoint: string): void
}

export const mutations: Mutations = {
  updateMethod: function(state, method) {
    state.method = method
  },
  updateEndPoint: function(state, endPoint) {
    state.endPoint = endPoint
  }
}
