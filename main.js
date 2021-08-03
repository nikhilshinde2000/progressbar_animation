function bgcolor()
{
    let lvalue=document.getElementById("lvalue").value;
    let output=document.querySelector(".percent")
    let container=document.querySelector(".container")

    container.style.background="#"+lvalue+lvalue+lvalue
}
