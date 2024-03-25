// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat (name) {
    return cats.push ("Ralph")
 }

 function destructivelyPrependCat (name) {
    return cats.unshift ("Bob")
 }
 function destructivelyRemoveLastCat (name) {
    return cats.pop ()
 }
 function destructivelyRemoveFirstCat (name) {
    return cats.shift()
 }
//  function appendCat(name) {
//     return cats.splice(0,"Arnold")
//  }
 function appendCat (name) {
    return [...cats,name]
 }  
 function prependCat (name) {
    return [name,...cats]
 }
 function removeLastCat(name) {
    return cats.slice (0,cats.length-1)
 }
 function removeFirstCat(name) {
    return cats.slice (1)
 }