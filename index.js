function flatObj(obj){
	let result = {}
	for(const key in obj){
		if(typeof obj[key] !== 'object'){
			result[key] = obj[key]
		}else{
			const midResult = flatObj(obj[key])
			for(const midKey in midResult){
				result[`${key}.${midKey}`] = midResult[midKey]
			}
		}
	}
	return result
}

const arr = { a: { b: { c: 1, d: 2 } }}
const result = flatObj(arr)
console.log(result);

const res = { 'a.b.c': 1, 'a.b.d': 2 }

// function throttle(delay){
// 	let timeOutID = null
// 	return function(callback){
// 		if(!timeOutID){
// 			callback()
// 			timeOutID = setTimeout(()=> timeOutID = null,delay)
// 		}
// 	}
// }
// //finish
// const t = throttle(1000)
// function log(){
// 	console.log('here i am')
// }

// t(log)
// t(log)
// t(log)
// t(log)





// function catify(arr){
// 	const map = {}
	
// 	for(word of arr){
// 		const key = new Array(26).fill(0)
// 		for(char of word){
// 			key[char.charCodeAt(0)-97] = 1
// 		}
// 		const stringKey = key.toString()
// 		if(map.hasOwnProperty(stringKey)){
// 			map[stringKey].push(word)
// 		}else{
// 			map[stringKey] = [word]
// 		}
// 	}

// 	return Object.values(map)
// }

// const arr = ["eat","ate","tea","nat","tan","bat"]
// const result = catify(arr)
// console.log(result);


// [["eat","ate","tea"],["nat","tan"],["bat"]]