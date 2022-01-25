/**
 * 
 * @param {*} arr
 * 描述
请补全JavaScript代码，要求将数组参数中的多维数组扩展为一维数组并返回该数组。
注意：
1. 数组参数中仅包含数组类型和数字类型
示例1
输入：
[1,[2,[3,[4]]]]
输出：
[1,2,3,4] 
 */

function flatten(arr) {
    let result=[]
    arr.forEach(item=>{
        if(typeof(item)=="number"){
           result.push(item)
        }else{   
            let mulResult = flatten(item)     
            result.push(...mulResult)
        }
    })
    return result
}
console.log(flatten([1,[2,[3,[4]]]]))






