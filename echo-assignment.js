
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