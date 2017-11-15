// 项目公共逻辑和方法

// eg: url = 'http://inwecryptocms.app/ad'
export const getData = function(url, method, param, header) {
  let p = {};
  let h = {};
  if (arguments[1] && typeof arguments[1] === "string") {
    p.method = arguments[1];
    if (arguments[3] && typeof (arguments[3] === "object")) {
      h = header;
    }
    p.headers = Object.assign({}, h);
    p.body = JSON.stringify(param);
  }
  return new Promise((resolve, reject) => {
    fetch(url, p)
      .then(res => {
        var resD = res.json();
        if (res.ok) {
          resolve(resD);
        } else {
          throw new Error(res.status);
        }
      })
      .catch(e => {
        console.log("check your url/network");
      });
  });
};
var formatData = function(obj) {
  var k = 0;
  var str = "";
  if (obj && typeof obj === "object") {
    for (var key in obj) {
      if (k == 0) {
        str += "?";
      } else {
        str += "&";
      }
      str += key + "=" + obj[key];
      k++;
    }
  }
  return str;
};

//  className合并
export const cls = (...classes) => {
  return classes
    .filter(c => {
      return typeof c === "string";
    })
    .join(" ");
};

//卡片切换
export const switchCard = (active, e) => {
  let parent = e.target.parentNode;
  let children = parent.children;
  for (let key in children) {
    if (children[key].className) {
      children[key].className = children[key].className.replace(
        ` ${active}`,
        ""
      );
    }
  }
  e.target.className += ` ${active}`;
};
