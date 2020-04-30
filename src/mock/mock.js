const Mock = require('mockjs')
const Random = Mock.Random
/**
生成需要的数据
 **/
let arr = []
for (let j = 0; j < 5; j++) {
  let item = {
    'id': j,
    'name': Random.cname(),
    'date': Random.date(),
    'address': Random.region()
  }
  arr.push(item)
}
/**
对数据进行查询和筛选
 */
let list = function (options) {
  let rtype = options.type.toLowerCase()
  switch (rtype) {
    case 'get':
      break
    case 'post':
      let id = parseInt(JSON.parse(options.body).params.id)
      arr = arr.filter((val) => {
        return val.id !== id
      })
      break
    default:
  }
  return {
    data: arr
  }
}
/**
添加列表项
 */
let addList = function (newitem) {
  newitem = JSON.parse(newitem.body).params.data
  arr.push(newitem)
  return {
    data: arr
  }
}
/**
编辑列表项67333385
 */
let editList = function (editval) {
  editval = JSON.parse(editval.body).params.data
  arr.splice(editval.id, 1, editval)
  return {
    data: arr
  }
}

Mock.mock('./api/delete', /get|post/i, list)
Mock.mock('./api/add', addList)
Mock.mock('./api/edit', editList)
Mock.setup({
  timeout: 1000
})
