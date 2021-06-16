# 常用的手写实现方法与排序方法

```js
function findStr(str) {
  let map = new Map();
  const new_str = str.split("");

  for (let i = 0; i < new_str.length; i++) {
    console.log(new_str[i]);
    if (map.has(new_str[i])) {
      let val = map.get(new_str[i]);
      map.set(new_str[i], val + 1);
    } else {
      map.set(new_str[i], 1);
    }
  }
  console.log(map);
  return map;
}

findStr("wwergfdgfdwwggerfffffff");

function test2() {
  let str = "abcabcabcbbccccc";
  let num = 0;
  let char = ""; // 使其按照⼀定的次序排列
  str = str.split("").sort().join(""); // "aaabbbbbcccccccc"
  // 定义正则表达式
  let re = /(\w)\1+/g;
  str.replace(re, ($0, $1, $2) => {
    console.log($0, $1, $2);
    if (num < $0.length) {
      num = $0.length;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      char = $1;
    }
  });
}

test2();

// ----------new apply call bind------------------
function _new(ctor, ...args) {
  if (typeof ctor !== "function") {
    throw "ctor is not a function";
  }
  let obj = new Object();
  obj.__proto__ = Object.create(ctor.prototype);
  let res = ctor.apply(obj, [...args]);
  return typeof res === "object" ? res : obj;
}

Function.prototype.call = function (cont, ...args) {
  var context = cont || window;
  context.fn = this;
  var result = eval("context.fn(...args)");
  delete context.fn;
  return result;
};

Function.prototype.apply = function (cont, args) {
  var context = cont || window;
  context.fn = this;
  var result = eval("context.fn(...args)");
  delete context.fn;
  return result;
};

Function.prototype.bind = function (context, args) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  var _self = this;
  var fb = function () {
    _self.apply(
      this instanceof _self ? _self : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  if (this.prototype) {
    fb.prototype = Object.create(this.prototype);
  }
  return fb;
};

// ------------组合继承-----------------
let person = function () {
  this.name = "baba";
};

let chi = function () {
  person.call(this);
  this.type = "son";
};

chi.prototype = new person();

// ------------寄生继承-----------------
function clone(parent, child) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Parent() {
  this.name = "parents";
  this.play = [1, 2, 3];
}

Parent.prototype.getName = function () {
  return this.name;
};

function child() {
  Parent.call(this);
  this.friends = "lily";
}

clone(Parent, child);

child.prototype.getFriends = function () {
  return this.friends;
};

var arr = [2, 1, 8, 5, 3, 6];
// ------------插入-------------------
function insertSort(arr) {
  var temp;
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = temp;
        break;
      }
    }
  }
  return arr;
}

console.log(insertSort(arr));

// ------------冒泡-------------------
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

// -------------选择--------------------

function selectSort(arr) {
  let i,
    j,
    minValue,
    minIndex,
    temp,
    len = arr.length;
  for (i = 0; i < len - 1; i++) {
    minIndex = i;
    minValue = arr[minIndex];
    // 遍历找到最小值
    for (j = i + 1; j < len; j++) {
      if (arr[j] < minValue) {
        minIndex = j;
        minValue = arr[minIndex];
      }
    }
    // 拿到最小值于外层交换
    temp = arr[i];
    arr[i] = minValue;
    arr[minIndex] = temp;
  }
}

console.log(selectSort(arr));

// -----------------归并-------------------
function merge(left, right) {
  var temp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  return temp.concat(left, right);
}

function mergeSort(a) {
  if (a.length === 1) return a;

  var mid = Math.floor(a.length / 2),
    left = a.slice(0, mid),
    right = a.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));

// ----------------快速--------------------
function quickSort2(arr) {
  if (arr.length < 2) return arr;
  var pivotValue = Math.floor(arr.length / 2);
  var left = [],
    right = [],
    temp = arr[pivotValue];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < temp) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort2(left).concat([temp], quickSort2(right));
}
console.log(quickSort2(arr));

// -----

function quickSort(arr) {
  function swap(arr, left, right) {
    var temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
  }
  function partition(arr, left, right) {
    var pivotValue = arr[right];
    var storeIndex = left;
    for (var i = left; i < right; i++) {
      if (arr[i] <= pivotValue) {
        swap(arr, storeIndex, i);
        storeIndex++;
      }
    }
    swap(arr, right, storeIndex);
    return storeIndex;
  }
  function sort(arr, left, right) {
    if (left > right) return false;
    var storeIndex = partition(arr, left, right);
    sort(arr, left, storeIndex);
    sort(arr, storeIndex + 1, right);
  }
  sort(arr, 0, arr.length - 1);
  return arr;
}

console.log(quickSort(arr));
```