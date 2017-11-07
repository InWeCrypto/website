// 项目公共逻辑和方法

// eg: url = 'http://inwecryptocms.app/ad'
export function getDate(url) {
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
     alert('Error');
   })
 })
 }
