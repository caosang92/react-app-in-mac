// Hàm tính tổng viết bằng for....of
const sumFor = (numberList) => {
    let sum = 0;
    for (const number of numberList) {
        const newSum = sum + number;
        sum = newSum;
    }
    return sum;
}

//--------------------------------
//Nếu viết bằng Reduce, cần xác định:
//1. Xác định giá trị khởi tạo
//2. Xác định công thức với kết quả của bước trước đó
//--
//0  => .reduce (fn, 0)
// result = prevResult + current 

const sumReduce = (numberList) => {
    //return numberList.reduce((resultFromLastStep), curValue) =>{},0)
    return numberList.reduce((sum, number) => sum + number, 0);
};





function Sum() {
    return (<>
        <div> Kết quả tính tổng thông thường : {sumFor([1, 2, 3, 4, 5])}</div>
        <div> Kết quả tính tổng theo Reduce : {sumReduce([1, 2, 3, 4, 5])}</div>
    </>);
}

export default Sum