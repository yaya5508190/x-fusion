import Mock from 'mockjs'

export default function setup () {
  Mock.mock('/api/hello', 'get', () => {
    return {
      message: 'Hello from mock' + new Date().getSeconds(),
    }
  })
}
