
const express = require('express');
const app = express();

// thinkful express echo assignment
app.get('/echo/:what', (req,res) =>{
      res.json({
        host:req.hostname,
        queryParams:req.query,
        params:req.params
        });
      });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

app.get('/', (req,res) => {
  let query = req.query;
  res.send(`There's a ${query.adjective1} new ${query.name} in ${query.place} and everyone's talking. Stunningly ${query.adjective2} and ${query.adverb} ${query.adjective3}, all the cool kids know it. However, ${query.name} has a secret - ${query.name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${query.noun}?`);
});


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
