// Chessboard
let size = 8;
let board = "";
for(let i = 0; i < size; i++){
  	let line = "";
	for(let j = 0; j < size; j++){
        nextChar = (j+i)%2==0 ? "#" : " ";
        line+=nextChar;
	}
  	board+=line+"\n"
}
console.log(board);
