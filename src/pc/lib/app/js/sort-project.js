var order = 0;

// 创建链表
function List(head) {
  this.head = new Node(head);
  this.insert = insert;
  this.find = find;
  this.getNeed = getNeed;
  this.position = position;
  this.node = 0;
}

// 创建节点
function Node(data) {
  this.pre = null;
  this.next = null;
  this.type = data.grid_type;
  this.need = [];
  this.data = data;
  this.arr = [[data]];
  this.size = data.grid_type === 3 ? 2 : data.grid_type;
  this.top = 0;
  this.left = 0;
  this.index = order;
}

// 查找节点
function find(data) {
  let cur = this.head;
  while (!cur.need.includes(data.grid_type)) {
    if (cur.next === null) {
      return this.insert(cur, data);
    } else {
      cur = cur.next;
    }
  }
  //  将数据添加到arr后，清空need对应得grid_type
  // 如果前两个盒子是type1,那么第三个盒子不能是type2(竖方块)
  if (
    cur.data.grid_type === 1 &&
    cur.arr[1] &&
    cur.arr[1][0].grid_type === 1 &&
    data.grid_type === 2
  ) {
    if (cur.next === null) {
      return this.insert(cur, data);
    } else {
      cur = cur.next;
    }
  }
  // 如果前一个盒子是type1,那么第二个盒子不能是type3(横方块)
  if (cur.data.grid_type === 1 && data.grid_type === 3) {
    if (cur.next === null) {
      return this.insert(cur, data);
    } else {
      cur = cur.next;
    }
  }
  let size = cur.size;
  let num = data.grid_type === 3 ? 2 : data.grid_type;
  let total = size + num;
  if (total <= 4) {
    let len = cur.arr.length;
    cur.arr[len] = [];
    cur.arr[len][0] = data;

    cur.size += num;
    let index = cur.need.indexOf(data.grid_type);
    if (total === 4) {
      cur.need = [];
    } else {
      cur.need.splice(index, 1);
    }
  } else {
    cur.need = [];
  }
}

// 插入节点
function insert(cur, data) {
  let newOne = new Node(data);
  newOne.next = cur.next;
  newOne.pre = cur;
  cur.next = newOne;
  newOne.need = this.getNeed(data);
  this.node++;
  newOne.index = this.node;
}

// 需要得盒子
function getNeed(data) {
  let type = data.grid_type;
  if (type === 1) {
    return [1, 1, 1, 3];
  } else if (type === 2) {
    return [1, 1, 2];
  } else if (type === 3) {
    return [1, 1, 3];
  } else {
    return [];
  }
}

// 位置信息
//half总数据得一半
function position(half) {
  let cur = this.head;
  let top = 0;
  let box = [];
  while (cur.next !== null) {
    if (cur.index < half) {
      p(cur.arr, cur.index, top);
      box.push(cur.arr);
      cur = cur.next;
    } else {
      top = 388;
      let index = cur.index - half; //剩下得部分
      p(cur.arr, index, top);
      box.push(cur.arr);
      cur = cur.next;
    }
  }
  return box;
}

/*
arr[[{data},{position}],[]]
*/
function p(arr, index, baseTop) {
  let len = arr.length;
  let base = index * 388;
  arr.map(function(item, i) {
    arr[i][1] = {};
    arr[i][1].top = baseTop;
  });
  arr[0][1].left = base;
  if (len === 4) {
    arr[1][1].left = base + 194;
    arr[2][1].left = base;
    arr[2][1].top = baseTop + 194;
    arr[3][1].top = baseTop + 194;
    arr[3][1].left = base + 194;
  } else if (len === 2) {
    let flag = "";
    arr.map(function(item, i) {
      if (item[0].grid_type === 2) {
        flag = "v";
      } else if (item[0].grid_type === 3) {
        flag = "h";
      } else {
        flag = "s";
      }
    });
    if (flag == "s" || flag == "v") {
      arr[1][1].left = base + 174;
    } else if (flag === "h") {
      arr[1][1].top = baseTop + 194;
      arr[1][1].left = base;
    }
  } else if (len === 3) {
    if (arr[0][0].grid_type === 1) {
      if (arr[1][0].grid_type === 1) {
        arr[1][1].left = base + 194;
        arr[2][1].left = base;
        arr[2][1].top = baseTop + 194;
      } else {
        arr[1][1].left = base;
        arr[2][1].left = base;
        arr[2][1].top = baseTop + 194;
      }
    } else if (arr[0][0].grid_type === 2) {
      arr[1][1].left = index * 388 + 194;
      arr[2][1].left = index * 388 + 194;
      arr[2][1].top = baseTop + 194;
    } else if (arr[0][0].grid_type === 3) {
      arr[1][1].left = index * 388;
      arr[1][1].top = baseTop + 194;
      arr[2][1].left = index * 388 + 194;
      arr[2][1].top = baseTop + 194;
    }
  }
}

function list(data) {
  let newList = new List(data[0]);
  newList.head.need = newList.getNeed(newList.head.data);
  for (var i = 1; i < data.length; i++) {
    newList.find(data[i]);
  }
  let half = Math.ceil(newList.node / 2);
  newList.position(half);
  let finalData = allArr(newList.head);

  return finalData;
}

function allArr(head) {
  let finalData = [];
  let cur = head;
  while (cur.next !== null) {
    finalData.push(cur.arr);
    cur = cur.next;
  }
  return finalData;
}

export default list;
