// let myMap=new Map([["a", 1], ["b", 2]]);

// console.log(myMap);

// *********************************

// let myMap=new Map([[{}, 1], [{}, 2]]);

// console.log(myMap);

// **********************************

// let myMap=new Map([["a", 1], ["b", 2]]);

// console.log(myMap.has("a")); //true 

// console.log(myMap.has(1)); // false (no key present as 1)

// ***********************************


let m = new Map();

m.set("k1", "v1");
m.set("k2", "v2");
m.set("k3", "v3")
    .set("k4", "v4")
    .set("k5", "v5");

console.log("m has k4 ? " + m.has("k4"));
console.log("m has k6 ? " + m.has("k6"));

console.log("value for k4 " + m.get("k4"));
console.log("value for k6 " + m.get("k6"));

console.log("delete k4 " + m.delete("k4"));
console.log("delete k6 " + m.delete("k6"));

console.log(m.size);

m.clear();
console.log(m);