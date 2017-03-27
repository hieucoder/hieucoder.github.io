function tinhcan(){
 var b = document.getElementById("result").value;
 var x = parseFloat(b);
  if(x<0){
    b = "Error";
  } else{
    b = Math.sqrt(x);
  }
  document.getElementById("result").value = b;
}