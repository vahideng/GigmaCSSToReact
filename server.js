
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const express = require('express');
const bodyParser = require('body-parser');
var findColorPage = require('./util');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;



async function getFromApi() {
  let data = {};

  const url =
    'https://api.figma.com/v1/files/' + process.env.REACT_APP_FILE_KEY;

  await fetch(url, {
    headers: {
      'X-Figma-Token': process.env.REACT_APP_FIGMA_TOKEN
    }
  })
    .then(res => res.json())
    .then(json => {
      data = json;
    });

  return data;
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {

    let result= ""
    getFromApi().then(rep=>{
        result=rep
       const resuuu=  findColorPage(result.document.children)
        console.log(resuuu,"ressss");
            
       
        res.send({ AlephDesignTokenFigma: resuuu });
     })
    
 
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
    
  let rr=  null

   getFromApi().then(rep=>{
      rr=rep
   
   })
  
  
  

});
