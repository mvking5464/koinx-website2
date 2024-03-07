// let changes = 1082.9381;

// var a = "-212";
// a = a.replace(/\-/g, "");
// // a = Number(a);
// console.log(a);

// let calculate = -1212;
// let ans = String(calculate);
// // console.log(ans);
// if (calculate < 0) {
//   ans = ans.replace(/\-/g, "");
// }
// console.log(ans);

export function numberWithCommas(y) {
  const x = (Math.round(y * 100) / 100).toFixed(2);
  return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function numberWithCommasIND(z) {
  const ok = (Math.round(z * 100) / 100).toFixed(0);
  let x = ok;
  x = x.toString();
  var afterPoint = "";
  if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
  x = Math.floor(x);
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  return res;
}

// console.log(numberWithCommasIND(12345652457.5523237));
