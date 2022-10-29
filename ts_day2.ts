type combine = (number|string)[];

function ts (text1 :combine): string{
    let result: string= '';
    text1.map((text, index)=>{
        result += (index ? ' ' : '')+text;
    })
    return result;
}

const case1 =[1 ,'data' ,3, 'result']
const case2 =['Bejo', 'has', 4, 'sport', 'car']

console.log(ts(case1))
console.log(ts(case2))