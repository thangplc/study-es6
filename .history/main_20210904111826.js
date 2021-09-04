/*
    Từ khóa var
*/
console.log(fullName); // không lỗi và có giá trị là undefind
fullName = "Phan Van A";
var fullName = "PhanLuongCongThang";
console.log(fullName);

/*
    Từ khóa let
*/
// console.log(age); // Lỗi
let age = 24;
console.log(age); // Không lỗi

/*
    Từ khóa const
*/
const birthYear = 1998;
console.log(birthYear);

/**
 * So sánh declaration funtion và expression funtion
 */

// expression funttion
const calcAgeNormal = function(birthYear) {
    console.log(2021 - birthYear);
};
// Arrow funtion
const calcYearArrow = (birthYear) => {
    console.log(2021 - birthYear);
};
const calcYearArrowShort = (birthYear) => 2021 - birthYear;