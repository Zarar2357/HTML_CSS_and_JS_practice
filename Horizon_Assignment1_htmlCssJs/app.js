//code to add new element to the table
let btn=document.querySelector("#btn");
function addTable () {
   const nam=document.querySelector("#nam").value;
    const age=document.querySelector("#age").value;
    const nmbr=document.querySelector("#nmbr").value;
    const tbl=document.querySelector("#tbl");
    console.log(nam,age,nmbr);
    const newRow=tbl.insertRow(-1);//inserting a new row

    const newNam=newRow.insertCell(0);//inserting new name
    newNam.textContent=nam;
    const newAge=newRow.insertCell(1);//inserting new age
    newAge.textContent=age;
    const newNmbr=newRow.insertCell(2);//inserting new number
    newNmbr.textContent=nmbr;
    
    // clearing the input from previous names
document.querySelector("#nam").value="";
document.querySelector("#age").value="";    
document.querySelector("#nmbr").value="";

}
btn.addEventListener("click",addTable);