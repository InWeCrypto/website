// 项目公共逻辑和方法

// eg: url = 'http://inwecryptocms.app/ad'
export const getData = (url) => {
   return new Promise((resolve, reject) => {
     fetch(url).then(res => {
       var resD = res.json()
           if (res.ok) {
             resolve(resD)
           } else {
             throw new Error(res.status)
           }
       }
   ).catch (e => {
     console.log('check your url/network')
   })
 })
 }

//  className合并
 export const cls = (...classes) => {
   return classes.filter(c => {
    return typeof c === 'string'
   }).join(" ")
 }