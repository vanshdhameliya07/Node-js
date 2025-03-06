const ht = require(`http`);
const port = 8000;
const fs = require(`fs`);
const { error } = require("console");


const server = ht.createServer((req, res) => {

   let filename = ``;

   switch (req.url) {

      case `/`:
         filename = `./home.html`;
         break;
      case `/contact`:
         filename = `./contact.html`;
         break;
      case `/about`:
         filename = `./about.html`;
         break;
      case `/page`:
         filename = `./page.html`;
         break;
      case `/blog`:
         filename = `./blog.html`;
         break;
      case `/service`:
         filename = `./service.html`;
         break;
      case `/project`:
         filename = `./project.html`;
         break;
      case `/portfolio`:
         filename = `./portfolio.html`;
         break;
      case `/career`:
         filename = `./career.html`;
         break;
      case `/extra`:
         filename = `./extra.html`;
         break;
         
      default:
         filename = `./404.html`;
   }

   fs.readFile(filename, (err, pagename) => {
      if (err) {
         console.log(`file not found`);
         return false;
      }
      res.end(pagename);
   })

})
server.listen(port, (error) => {
   if (!error) {
      console.log(`server is running on port ${port}`);
   }
})

