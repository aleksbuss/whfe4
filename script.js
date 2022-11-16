
//task1

// let laptops = [
//     {
//         mark : "Acer",
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         price : 52000
//     }
//   ]
  
//   for (let i = 0; i < laptops.length; i++) {
//     console.log(`<h1>${laptops[i].mark}</h1>`)
//   }

//   for (let i = 0; i < laptops.length; i++) {
//     if(laptops[i].price > 40000)
//     console.log(laptops[i].mark)
//   }
//   let sum = 0
//   for (let i = 0; i < laptops.length; i++) {
//     sum += laptops[i].price
//   }
//console.log(sum)



//task2
// let laptopsSecond = [
//     {
//         mark : "Acer",
//         category : ["laptop", "tech"],
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         category : ["notebook", "tech"],
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         category : ["computer", "premium"],
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         category : ["computer", "tech"],
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         category : ["notebook", "premium"],
//         price : 52000
//     }
//   ]
  
//   for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let y = 0; y < laptopsSecond[i].category.length; y++)
//       if (laptopsSecond[i].category[y] == "laptop")
        
//     console.log(laptopsSecond[i])
//    }

//    for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let y = 0; y < laptopsSecond[i].category.length; y++)
//       if (laptopsSecond[i].category[y] == "tech")
        
//     console.log(laptopsSecond[i])
//    }

//    for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let y = 0; y < laptopsSecond[i].category.length; y++)
//       if (laptopsSecond[i].category[y] == "premium")
        
//     console.log(laptopsSecond[i])
//    }

// task3
   
// let laptopsThird = []
// for (let i = 0; i <= 2; i++) {
//     mark = prompt ("type notebook brand")
//     price = +prompt ("type notebook price")
//     laptopsThird.push({mark, price})
// }
// console.log(laptopsThird)


//task4    

let laptopsFourth = [
    {
        mark : "Acer",
        category : ["laptop", "tech"],
        price : 25000
    },
    {
        mark : "Apple",
        category : ["notebook", "tech"],
        price : 37000
    },
    {
        mark : "Asus",
        category : ["computer", "premium"],
        price : 125500,
    },
    {
        mark : "HP",
        category : ["computer", "tech"],
        price : 42000
    },
    {
        mark : "Samsung",
        category : ["notebook", "premium"],
        price : 52000
    }
  ]

  let mark4 = prompt("what brand do you want?")
  let price4 = +prompt("what price do you want?")

    for(let i = 0; i < laptopsFourth.length; i++) {

        if(laptopsFourth[i].mark == mark4) {
            console.log(laptopsFourth[i]);
        };

        if(laptopsFourth[i].price <= price4) {
            console.log(laptopsFourth[i]);
        }
    };









