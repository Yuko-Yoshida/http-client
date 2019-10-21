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
    method: Method.POST,
    endPoint: ''
  }
}

interface Mutations {
  updateMethod(state: any, method: number): void
}

export const mutations: Mutations = {
  updateMethod: function(state, method) {
    state.method = method
  }
}
