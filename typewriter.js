
//animated sentence using setTimeout,process.stdout.write,'\n'

const sentence = "hello there from lighthouse labs";

let timeOut = 0;
for (const char of sentence) {
  // console.log(char);
  setTimeout(() => {
    process.stdout.write(char);

  }, timeOut); // <= set a time increment 
  timeOut += 80;

};


setTimeout(() => {    // after sentence is printed, add \n to stdout. 

  process.stdout.write("\n");

}, timeOut);
