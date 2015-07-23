// 1--------------------------------------

var testObj = {
    "name": "ciao",
    surname: "arrivedereci",
    address: 1,
    "city": bologna
};

// 2--------------------------------------

testObj['name'];
debug;
testObj.name;
debugger;

// 3--------------------------------------

1=="1"
1==="1"
"1"==="1"
1=1

//--------------------------
var nodes = document.getElementsByTagName('div');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
      console.log('You clicked element #' + i);
   });
}
-----
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof undefined);
-----
var foo = function() {
  alert("Hello World!");
};

var bar = function(arg) {
  return arg;
};

bar(foo)();
----
function add(value1) {
  return function doAdd(value2) {
    return value1 + value2;
  };
}

var increment = add(1);
var foo = increment(2);
// foo equals 3
-----
function Person(name) {
  var _name = name;

  this.getName = function() {
    return _name;
  };
}
-----
(function() {
   var a = b = 5;
})();
 
console.log(b);
-----
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());
 
var test = obj.prop.getFullname;
 
console.log(test());

// MV*?
// chainability?