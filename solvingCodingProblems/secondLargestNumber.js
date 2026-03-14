// 1) Find the second largest number in an array without sorting.

function largestNumber(intlist) {
    let largestNumberr = 0
    let secondLargest = 0
    console.log(intlist)
    for (let i = 0; i < intlist.length; i++){
        if (intlist[i] > largestNumberr){
            largestNumberr = intlist[i]
            const removingNumber = intlist.indexOf(largestNumberr)
            intlist.splice(removingNumber, 1)
        }
    }
    for (let i = 0; i < intlist.length; i++){
        if (intlist[i] > secondLargest){
            secondLargest = intlist[i]
        }
    }
    console.log("Second number more larger: ", secondLargest)

}

largestNumber([9, 10, 23, 7, 3, 4, 2])

