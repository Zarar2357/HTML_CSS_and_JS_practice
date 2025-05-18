
var btn1=document.querySelector("#btn1");

 let dictionaryApi= async()=>{
    let word=document.querySelector("#input1").value.toLowerCase();
    
      try{
  
        url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        console.log(url);
        meaningJson= await fetch(url);
        console.log(meaningJson);
        console.log("next one");
        meaningObject= await meaningJson.json();
        console.log(meaningObject);
        console.log("next one");
        a=meaningObject[0].meanings[0].definitions[0].definition;
        console.log(a);
        let para1=document.querySelector("#para1");
        para1.innerText=a;
        
      }
    catch{
        let para1=document.querySelector("#para1");
        para1.innerText='sorry i dont know the meaning of this word';
    }
    
    
    
    
    
    
};
btn1.addEventListener("click", dictionaryApi);
