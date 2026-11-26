function square(startWidth, startHeight)
{
	var width = startWidth;
	var height = startHeight;
	var perimeter = 2 * width + 2 * height;
	var area = width * height;
	return {area: area, perimeter: perimeter};
}

let mySq = square(15, 33)
console.log(mySq)


let studentArrList = {
	James: 70044235,
	Patrick: 70064432,
	Fex: 7009567
}

for (let item in studentArrList)
{
    let numberString=""+studentArrList[item]
    let finalNum = numberString.charAt(numberString.length-1)
    if(finalNum =="4" ||finalNum=="5")
    {
        console.log(item+":"+studentArrList[item])
    }
}

