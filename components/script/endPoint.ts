const name: string = 'EndPoint'


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
  method: function(method) {
    (this as any).$store.commit('endPoint/updateMethod', method)

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
  endPoint: function(endPoint) {
    (this as any).$store.commit('endPoint/updateEndPoint', endPoint)
  }
}


export default {
  name,
  data,
  watch
}
