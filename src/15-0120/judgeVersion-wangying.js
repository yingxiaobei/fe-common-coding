/**
 * 
 * @param {*} oldVersion 
 * @param {*} newVersion 
 * 请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
注意：
1. 版本号格式均为"X.X.X"
2. X∈[0,9]
3. 当两个版本号相同时，不需要更新
 */

const shouldUpdate = (oldVersion, newVersion) => {
  return [newVersion,oldVersion].sort()[0] !== newVersion
}

console.log(shouldUpdate('1.2.3','1.2.3'))
console.log(shouldUpdate('1.2.3','2.0.0'))