
function colorChange() {
    alert("you made it to ColorChange!")
    document.getElementById('pageTitle').style.color='red';
    return false;
}

function dateBtn() {
    alert("you are at the date button");
    document.getElementById('demo').innerHTML = "<p> hello </p>";
    // document.getElementById('demo').innerHTML = Date();
    return false;
}
