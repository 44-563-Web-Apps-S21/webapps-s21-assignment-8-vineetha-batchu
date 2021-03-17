const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const bonusString = ["Behind every great fortune lies a great crime.",
                    "Fortune favors the brave.",
                    "A wise man turns chance into good fortune.",
                    "Come what may, all bad fortune is to be conquered by endurance.",
                    "Every man is the architect of his own fortune.",
                    "An aim in life is the only fortune worth finding",
                    "Diligence is the mother of good fortune."
                ]
                let randomIndex = Math.floor(Math.random() * bonusString.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${bonusString[randomIndex]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})