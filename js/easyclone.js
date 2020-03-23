/**
 * 浅拷贝
 */
const obj1={
    name:'xxx',
    age:21,
    address:{
        city:'beijing'
    },
    arr:['a','b','c']
}
const obj2 = obj1
obj2.address.city = 'guangzhou'
console.log(obj1.address.city) //guangzhou 符合引用类型拷贝的规则，引用类型必须复制内存的地址，就是浅拷贝