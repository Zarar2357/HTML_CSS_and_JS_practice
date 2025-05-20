btn=document.querySelector("#btn");
function g(){
    bod=document.querySelector("body");
    let div=document.createElement("div");
    div.innerHTML=`<br><p><ol>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
    <li>Friday</li>
    <li>Saturday</li>
    <li>Sunday</li>
</ol></p>`;
    bod.appendChild(div);
}
btn.addEventListener("click",g);
