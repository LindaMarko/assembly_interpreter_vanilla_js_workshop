//WORKSHOP Simple Assembler Interpreter - Level One and Two

function split(str, delimiter){
  let arr = [];
  let temp = '';
  for(let i = 0; i < str.length; i++){
    if( str[i] !== delimiter ){
      temp += str[i];
    }else if( str[i] === delimiter ){
      arr.push(temp);
      temp = '';
    }
  }
  arr.push(temp);
  return arr;
}

function interpret(program){
  let result = {};
   for(let i = 0; i < program.length; i++){
    let parts = split(program[i], " ");
    let instruction = parts[0];
    let reg = parts[1];
    let value = parts[2];
    if(instruction === "mov"){
      if( !Number(value) ){
         result[reg] = Number(result[value]);
      }else{
        result[reg] = Number(value);
      }
    }else if(instruction === "inc"){
      result[reg]++;
    }else if(instruction === "dec"){
      result[reg]--;
    }else if(instruction === "jnz"){
      if(result[reg] !== 0){
        i += Number(value) - 1;
      }
    }else if(instruction === "add"){
      if( !Number(value) ){
        result[reg] += Number(result[value]);
      }else{
        result[reg] += Number(value);
      }
    }else if(instruction === "sub"){
      if( !Number(value) ){
        result[reg] -= Number(result[value]);
      }else{
        result[reg] -= Number(value);
      }
    }else if(instruction === "mul"){
      if( !Number(value) ){
        result[reg] *= Number(result[value]);
      }else{
        result[reg] *= Number(value);
      }
    }else if(instruction === "div"){
      if( !Number(value) ){
        result[reg] /= Number(result[value]);
      }else{
        result[reg] /= Number(value);
      }
    } 
  }return result;
}

function main(){
  console.log(interpret(["mov a 6", "mov b 3", "div a b"]));
}
main();