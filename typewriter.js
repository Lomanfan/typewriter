
<<<<<<< HEAD
//animated sentence using setTimeout,process.stdout.write,'\n'

const sentence = "hello there from lighthouse labs";

let timeOut = 0;
for (const char of sentence) {
  // console.log(char);
  setTimeout(() => {
    process.stdout.write(char);
=======
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
  




>>>>>>> aee6ca62e0a46e721148ba51c19aa338895e9988

  }, timeOut); // <= set a time increment 
  timeOut += 80;

};


setTimeout(() => {    // after sentence is printed, add \n to stdout. 

  process.stdout.write("\n");

<<<<<<< HEAD
}, timeOut);
=======
  
  
>>>>>>> aee6ca62e0a46e721148ba51c19aa338895e9988
