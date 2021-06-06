// console.log(process.argv[2]);
// console.log(process.argv[3]);
 var url= ` http://history.muffinlabs.com/date/${process.argv[2]}/${process.argv[3]}`;
 console.log(url);
 const axios = require('axios');

axios.get(url)
  .then(response => {
    console.log(response.data.data.Events);
    // console.log(response.data.explanation);
    console.log(response.data.data.Deaths);
    console.log(response.data.data.Births);
  })
  .catch(error => {
    console.log(error);
  });