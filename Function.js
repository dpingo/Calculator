//let a=document.getElementById("no.1").value);
//let b=document.getElementById("no.2").value);
function divide_no() {


    var ans = document.getElementById("ans").innerHTML = (Number(document.getElementById("no.1").value) / Number(document.getElementById("no.2").value));
    return ans;
    // document.getElementById("ans").innerHTML = divide_no();
}
document.getElementById("ans").innerHTML = divide_no();
