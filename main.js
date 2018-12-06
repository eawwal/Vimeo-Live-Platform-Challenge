const fs = require("fs");

let { writeFile, videoValid, validator } = require("./vimeo");

let csvFile = process.argv[2]; //get the appropriate csv file by entering into command line.


/** Callback function that is needed to run fs.readFile **/
function dataRetriever(err, data) {
  if (err) throw err;

  //cuts out the first line of column names, removes spaces, and splits by line
  const totalVideos = data
    .trim(" ")
    .split(`\n`)
    .slice(1);

  const validVideos = validator(totalVideos); //run the main validation function found in "vimeo.js"



  /*Did not need to do this part according to problem statement but figured some quick totals in the console would be nice
  for some quick analysis and testing. */
  console.log(`Total videos: ${totalVideos.length}`);
  console.log(`Valid videos: ${validVideos.valid.length}`);
  console.log(`Invalid videos: ${validVideos.invalid.length}`);
}

//read the file, use above callback to do manipulation.
fs.readFile(csvFile, "utf-8", dataRetriever);

module.exports = {
  dataRetriever
};
