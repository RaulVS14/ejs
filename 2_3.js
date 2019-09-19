let size = 8;

for(let i = 0; i < size; i++){
  	let output = "";
	for(let j = 0; j < size; j++){
        nextChar = (j+i)%2==0 ? "#" : " ";
        output+=nextChar;
	}
  	console.log(output);
}
