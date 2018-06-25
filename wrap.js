const wrap = (line, maxLen) => {
  let output = []
  let newLine = ''
  let c = 0

  for (let i = 0; i < line.length; i++){
    if (c === maxLen){
      if (line[i] === ' ' ){
        output.push(newLine)
        c = 0
        newLine = ''
      }
      else {
        firstHalf = newLine.slice(0, newLine.lastIndexOf(' ')+1)
        output.push(firstHalf)
        c = 0
        newLine = newLine.slice(newLine.lastIndexOf(' ')+1)
        // reassign i back to the most recent space
      }
    }
    newLine += line[i]
    c++
  }
  output.push(newLine)

  return output.join('\n');
}




module.exports = wrap;
