const numbers= [1,2,3]

// const sort = numbers.map((n)=>n*10).map((n)=>n+1).
// filter((n)=>n<61)



// const sort = numbers.map((n)=>[
//     n+5
// ])

// console.log(sort)

// reduce

const total = numbers.reduce((acc,currval)=>

  acc+currval,0)

console.log(total)