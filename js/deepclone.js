/**
 * 深拷贝 复制obj1的时候，obj2改了之后，obj1它不会变
 */
const obj1 = {
    name:'xxx',
    age:21,
    address:{
        city:'beijing'
    },
    arr:['a','b','c']
}

const obj2 = deepclone(obj1)
obj2.address.city = 'guangzhou'
console.log(obj1.address.city)//beijing
obj2.arr[0] = 'a1'
console.log(obj1.arr[0])//a
/**
 * 深拷贝 做深拷贝真正的是对象或数组
 * @param {Object} obj 要拷贝的对象 
 */
function deepclone(obj){
    if(typeof obj !== 'object' || obj==null){
        return obj //obj是null，或者不是对象和数组，直接返回
    }
    //初始化返回结果
    let result
    //如果传入的值是数组类型的
    if(obj instanceof Array){
        result = []
    }
    else {
        result = {}
    }
    //无论是对象还是数组，都可以用for...in进行遍历
    for(let key in obj){
        //1.每个key是不是这个对象所拥有的属性
        //2.保证key不是原型的属性
        if(obj.hasOwnProperty(key)){
            //递归调用,防止深层次的结构
            result[key] = deepclone(obj[key])
        }
    }
    //返回结果
    return result
}