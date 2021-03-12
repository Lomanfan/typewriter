
const sentence = "hello there from lighthouse labs";

let timeOut = 0;
for (const char of sentence) { 
  setTimeout(() => {
    process.stdout.write(char);   
    }, timeOut); 
    timeOut += 80;
    
  };
  
  setTimeout (() => {
  process.stdout.write("\n"); 
  }, timeOut);
  










  
  
