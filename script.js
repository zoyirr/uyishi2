



const ism=prompt("ism kiriting");
const harf=prompt("harf kiriting");
         
if(ism.toLocaleLowerCase().includes(harf.toLocaleLowerCase())){
    alert(ism+ " ismida "+ harf+  " harfi mavjud")
}else{
    alert(ism+ " ismida "+ harf+  " harfi majud emas")
}
