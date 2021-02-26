function reverseString(str)
{
    //return str.split('').reverse().join('');

    // let revString = '';
    // for(let i = str.length-1; i >= 0; i--)
    // {
    //     revString = revString + str[i]
    // }
    // return revString;

    // let revString = '';
    // for(let i = 0; i <= str.length-1; i++)
    // {
    //     revString = str[i] + revString;
    // }
    // return revString;

    // let revString = '';
    // for(let char of str)
    // {
    //     revString = char + revString;
    // }
    // return revString;

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString)
    // return revString;

    //return str.split('').reduce((revString,char)=> char + revString)
}
// const op = reverseString('saketh')
// console.log(op);

function reverseInt(int)
{
    // const revString = int.toString().split('').reverse().join('')
    // return parseInt(revString);

    // const revString = int.toString().split('').reverse().join('')
    // return parseInt(revString)*Math.sign(int)
}
// const op = reverseInt(-123)
// console.log(op)

function isPalindrome(str)
{
    // const revString = str.split('').reverse().join('')
    // return revString === str;
}
// const op = isPalindrome('racecar')
// console.log(op)

function isPalindrome(int)
{
    // const revString = int.toString().split('').reverse().join('')
    // return revString === int.toString()
}
// const op = isPalindrome(121)
// console.log(op)

function capitaliseLetters(str)
{
    // let newStr = str.toLowerCase().split(' ')
    // for(let i = 0; i < newStr.length; i++)
    // {
    //     newStr[i] = newStr[i].substring(0,1).toUpperCase()+
    //     newStr[i].substring(1)
    // }
    // return newStr.join(' ')

    // return str
    //         .toLowerCase()
    //         .split(' ')
    //         .map(val => val[0].toUpperCase()+val.substring(1))
    //         .join(' ')
}
// const op = capitaliseLetters('THIS IS CODING')
// console.log(op)

function maxCharacter(str)
{
    // let count = {};
    // let maxNum = 0;
    // let maxChar = '';
    // str.split('').forEach(char => {
    //     if(count[char])
    //     {
    //         count[char]++
    //     }
    //     else
    //     {
    //         count[char] = 1;
    //     }
    // })
    // for(let val in count)
    // {
    //     if(count[val] > maxNum)
    //     {
    //         maxNum = count[val]
    //         maxChar = val;
    //     }
    // }
    // return maxChar;
}
// const op = maxCharacter('java')
// console.log(op)

function fizzBuzz()
{
    // for(let i = 1; i <= 100; i++)
    // {
    //     if(i % 3 == 0 && i % 5 == 0)
    //    {
    //        console.log('fizzBuzz');
    //    }
    //    else  if(i % 3 == 0)
    //    {
    //         console.log('fizz')
    //    }
    //    else if(i % 5 == 0)
    //    {
    //        console.log('buzz')
    //    }
    //    else
    //    {
    //        console.log(i);
    //    }
    // }    
}
// const op = fizzBuzz()
// console.log(op)

function longestWord(sen)
{
    // let wordArr = sen.toLowerCase().match(/[a-z]+/g)
    // let sorted = wordArr.sort((a,b)=> b.length - a.length)
    // let longestWordArr = sorted.filter(val => val.length === sorted[0].length)
    // if(longestWordArr.length ===1)
    // {
    //     return longestWordArr[0]
    // }
    // else
    // {
    //     return longestWordArr;
    // }
}
// const op = longestWord('Heyy, how are you!!');
// console.log(op)

function chunkedArray(arr,len)
{
    // let chunkedArr = [];
    // let i = 0;
    // while(i < arr.length)
    // {
    //     chunkedArr.push(arr.slice(i,i+len))
    //     i+=len;
    // }
    // return chunkedArr;

    // let chunkedArr = [];
    // for(let i = 0; i < arr.length; i+=len)
    // {
    //     chunkedArr.push(arr.slice(i,i+len))
    // }
    // return chunkedArr;

    // let chunkedArr = [];
    // arr.forEach(char =>
    //     {
    //         const last = chunkedArr[chunkedArr.length-1]
    //         if(!last || last.length == len)
    //         {
    //             return chunkedArr.push([char])
    //         }
    //         else
    //         {
    //             return last.push(char)
    //         }
    //     })
    //     return chunkedArr;

    // let chunkedArr = [];
    // arr.map(char =>
    //     {
    //         const last = chunkedArr[chunkedArr.length-1]
    //         if(!last || last.length == len)
    //         {
    //             return chunkedArr.push([char])
    //         }
    //         else
    //         {
    //             return last.push(char)
    //         }
    //     })
    //     return chunkedArr;
}
// const op = chunkedArray([1,2,3,4,5],2)
// console.log(op)

function flattenArray(arrays)
{
    //return arrays.reduce((a,b)=> a.concat(b))

    //return [].concat.apply([],arrays)

    //return [].concat(...arrays)
}
// const op = flattenArray([[1,2],[3,4],[5,6],[7,8]])
// console.log(op)

function isAnagram(str1, str2)
{
//     return formatStr(str1) === formatStr(str2)
// }
// function formatStr(str)
// {
//     return str  
//             .toLowerCase()
//             .replace(/[^\w]/g,'')
//             .split('')
//             .sort()
//             .join('')
}
// const op = isAnagram('ELBOW','below')
// console.log(op)

function letterChanges(str)
{
    // let newStr = str.toLowerCase().replace(/[a-z]/gi,val =>
    //     {
    //         if(val == 'z' || val == 'Z')
    //         {
    //             return 'a'
    //         }
    //         else
    //         {
    //             return String.fromCharCode(val.charCodeAt()+1)
    //         }
    //     })
    //     newStr = newStr.replace(/a|i|e|o|u/gi, vowel => vowel.toUpperCase())
    //     return newStr;
}
// const op = letterChanges('hello there')
// console.log(op)

function vowelCounter(str)
{
    // let matchingInstances = str.match(/[aeiou]/gi)
    // if(matchingInstances)
    // {
    //     return matchingInstances.length
    // }
    // else
    // {
    //     return 0;
    // }
}
// const op = vowelCounter('SAKETH')
// console.log(op)

function factorial(n)
{
    // if(n <= 0)
    // {
    //     return 1;
    // }
    // else
    // {
    //     let fact = 1;
    //     for(let i = 2; i <= n; i++)
    //     {
    //         fact*= i;
    //     }
    //     return fact
    // }

    // if(n <= 0)
    // {
    //     return 1;
    // }
    // else
    // {
    //     return n * factorial(n-1)
    // }
}
// const op = factorial(5)
// console.log(op)


function falsyBouncer(array)
{
    //return array.filter(val => Boolean(val))

    // let result = [];
    // for(let i = 0; i < array.length; i++)
    // {
    //     if(array[i])
    //     {
    //         result.push(array[i])
    //     }
    // }
    // return result;

    // let result = [];
    // for(let char of array)
    // {
    //     if(char)
    //     {
    //         result.push(char)
    //     }
    // }
    // return result
}
// const op = falsyBouncer([1,'saketh',0,'',false,true,null])
// console.log(op)

function hammingDistance(str1 , str2)
{
    // let result = 0;
    // if(str1.length === str2.length)
    // {
    //     for(let i = 0; i < str1.length; i++)
    //     {
    //         if(str1[i] != str2[i])
    //         {
    //             result++
    //         }
    //     }
    //     return result;
    // }
    // else
    // {
    //     return 'Strings does not have equal length'
    // }
}
// const op = hammingDistance('saketh','sarrr')
// console.log(op)

function arrayReverse(arr)
{
    // let newArr = [];
    // for(let i = arr.length-1; i >= 0; i--)
    // {
    //     newArr.push(arr[i])
    // }
    // return newArr
}
// const op = arrayReverse([1,2,3,4,5,6])
// console.log(op)

function evenOddArr(arr)
{
    // let even = [];
    // let odd = [];
    // for(let i = 0; i < arr.length; i++)
    // {
    //     if(i % 2 == 0)
    //     {
    //         even.push(arr[i])
    //     }
    //     else
    //     {
    //         odd.push(arr[i])
    //     }
    // }
    // return even;
}
// const op = evenOddArr([1,2,3,4,5,6])
// console.log(op)

function capitaliseLet(str)
{
    // let newStr  = str.toUpperCase().split('')
    // for(let i = 0; i < newStr.length; i+=2)
    // {
    //     newStr[i] = newStr[i].toLowerCase();
    // }
    // return newStr.join('')
}
// const op = capitaliseLet('saketh')
// console.log(op);

function multiplyArr(arr)
{
    // let newArr = [];
    // for(let i = 0; i < arr.length; i++)
    // {
    //     newArr.push(arr[i]*3)
    // }
    // return newArr
}
// const op = multiplyArr([1,2,3,4,5,6])
// console.log(op);

function duplicateValues(arr)
{
    // let res = arr.filter((val,index,arr)=> arr.indexOf(val) == index)
    // return res;

    // let newArr = [];
    // for(let i = 0; i < arr.length; i++)
    // {
    //     if(newArr.indexOf(arr[i]) == -1)
    //     {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr;
}
// const op = duplicateValues([1,2,1,2,3,4,2])
// console.log(op)

function factorialArr(arr)
{
    // let fact =1;
    // for(let i = 0; i < arr.length; i++)
    // {
    //     fact*=arr[i];
    // }
    // return fact;
}
// const op = factorialArr([1,2,3,4,5,6])
// console.log(op)

function seperateByfamily(arr)
{
    // let thippi = [];
    // let pulu = [];
    // let others = [];
    // for(let i = 0; i < arr.length; i++)
    // {
    //     if(arr[i].indexOf('Thippirishetty') != -1)
    //     {
    //         thippi.push(arr[i])
    //     }
    //     else if(arr[i].indexOf('Pulumati') != -1)
    //     {
    //         pulu.push(arr[i])
    //     }
    //     else
    //     {
    //         others.push(arr[i])
    //     }
    // }
    // return thippi;
}
// const op = seperateByfamily(['Naveen Thippirishetty', 'Gopi Thippirishetty','Saketh Pulumati','xyz'])
// console.log(op);

function missingElements(arr)
{
    // let missing = [];
    // let sorted = arr.sort((a,b)=> a-b)
    // let maxNum = sorted[sorted.length-1]
    // let minNum = sorted[0]
    // for(let i = minNum; i < maxNum; i++)
    // {
    //     if(arr.indexOf(i) == -1)
    //     {
    //         missing.push(i);
    //     }
    // }
    // return missing;
}
// const op = missingElements([9,1,5])
// console.log(op);

function largestFamilyLength(arr)
{
    // let max = 0;
    // for(let i = 0; i < arr.length; i++)
    // {
    //     if(arr[i].length > max)
    //     {
    //         max = arr[i].length;
    //         index = i;
    //     }
    // }
    // return arr[index];
}
// const op = largestFamilyLength(['Naveen Thippirishetty','Saketh Pulumati'])
// console.log(op)

function duplicatedVal(arr1,arr2)
{
    // let c = [...arr1,...arr2]
    // let duplication = c.filter((val,index,arr)=> arr.indexOf(val) == index)
    // return duplication;
}
// const op = duplicatedVal([1,2,3,4],[2,3,5,1])
// console.log(op);

function commonVal(arr1,arr2)
{
    // let common = arr1.filter(val => arr2.includes(val))
    // return common;
}
// const op = commonVal([1,2,3,4],[2,3,5,1])
// console.log(op)

function diffVal(arr1,arr2)
{
    // let diff = arr1.filter(val => !arr2.includes(val))
    //                .concat(arr2.filter(val => !arr1.includes(val)))
    // return diff;               

}
// const op = diffVal([1,2,3,4],[2,3,5,1])
// console.log(op) 

function factorsOfNum(arr)
{
    // let sum = 15;
    // let newArr = [];
    // for(let i = 0; i <= arr.length; i++)
    // {
    //     for(let j = i+1; j <= arr.length; j++)
    //     {
    //         let temp =[];
    //         if(arr[i] * arr[j] == sum)
    //         {
    //             temp.push(arr[i])
    //             temp.push(arr[j])
    //             newArr.push(temp)
    //         }
    //     }
    // }
    // return newArr;
}
// const op = factorsOfNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
// console.log(op);

function popStartingLetter(str)
{
    // let newStr = str.split(' ')
    // for(let i = 0; i < newStr.length; i++)
    // {
    //     newStr[i] = newStr[i].substring(0,1).toUpperCase()
    // }
    // return newStr.join('');

    // return str  
    //         .split(' ')
    //         .map(val => val[0].toUpperCase())
    //         .join('')
}
// const op = popStartingLetter('BACHELOR OF TECHNOLOGY')
// console.log(op);

function maxNumOfArray(arr)
{
    // let max = 0;
    // for(let i = 0; i <= arr.length; i++)
    // {
    //     if(arr[i] > max)
    //     {
    //         max = arr[i]
    //     }
    // }
    // return max;
}
// const op = maxNumOfArray([8,6,3,9,2,7])
// console.log(op)

///////////////////////////////   OBJECTS

//Object literal

let literal = 
{
    // name : 'johny',
    // age : 21
}
// console.log(literal)

//Instance of Object

let instance = new Object()
// instance.name = 'johnyy';
// instance.age = 22
// console.log(instance)

//Constructor function

function constructor(name,age)
{
    // this.NAME = name;
    // this.AGE  = age;
}
// let person = new constructor('johny',23)
// console.log(person);

//Object.create

// let created = 
// {
//     name : 'johny',
//     age : 24,
//     displayAge() {
//         console.log(this.age);
//     }
// }
// let create1 = Object.create(created)
// create1.displayAge();

//Object in function using :Instance of object,object literal,constructor function

// let school = new Object()
// school.name = 'KKHS';
// school.location = 'WGL';
// school.strength = 200

// let school = 
// {
//     name : 'KKHS',
//     location : 'WGL',
//     strength : 100
// }

// function sch(name,location,strength)
// {
//     this.NAME = name;
//     this.LOCATION = location;
//     this.STRENGTH = strength;
// }
// let sch1 = new sch('KKHS','WGL',50)

// function schoolObject(obj,objName)
// {
//     let result = '';
//     for(let i in obj)
//     {
//         if(obj[i])
//         {
//             result += objName+'.'+i+' = '+obj[i]+'\n'
//         }
//     }
//     return result;
// }
// console.log(schoolObject(sch1,'SCHOOL')) //argument: sch1 for constructor function,school for instance of object and object literal

// let user = 
// {
//     name : 'saketh',
//     age : 21,
//     blogs : [{title : 'Hello',likes : 21},{title : 'Hi',likes : 32}],
//     logblogs(){
//        this.blogs.forEach(blog=> 
//         {
//             console.log(blog.title,blog.likes)
//         })
//     }
// }
// user.logblogs()
