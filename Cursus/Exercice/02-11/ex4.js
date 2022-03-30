function outputSquare(size) {

  let area = size*size;
  let string = '';
  let output = [];

  for(let i = 0; i <= area; i++) {
    if (size == string.length) {
      output.push(string);
      string = '*';
    }
    else if (output.length === size) return;
    else string += '*';
  }; 
return console.log(output.join('\n'));
}

outputSquare(2);