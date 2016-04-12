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
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})();
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