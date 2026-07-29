let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
  let d=document.querySelector("input");
  
  let data=await facts();
  let dv=d.value;
  show(data,dv);
  
})
function show(data,d){
  let id=document.querySelector("ul");
  for(col of data){
    if(col["state-province"] == d){
      let li=document.createElement("li");
      li.innerText=col.name;
      id.appendChild(li);
      console.log(col.name);
    }
  }
}


let url="http://universities.hipolabs.com/search?name=india";


async function facts() {
  try{

    let res=await axios.get(url);
    return res.data;
  }
  catch(e){
    return e;
  }
}
