

# Tutorial


* *Date Created*: 01 07 2023
* *Last Modification Date*: 05 07 2023
* *Lab URL*: <http://example.com/>
* *Git URL*: https://git.cs.dal.ca/shun/csci-4177-tutorials.git

## Authors

Name: Shun Li
ID: B00826442


## Testing

Test program by using hostman

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```


## Deployment

Add additional notes about how you deployed this work on a live system

## Built With

Node.js Express.js

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
**

## Sources Used

1. Omari.T.E, 22 March,2023. How to Validate Email Addresses with Ease in React. URL: https://upmostly.com/tutorials/how-to-validate-email-addresses-with-ease-in-react
2. ruedamanuel, 3 Feb,2017. How to get id from URL as variable? In Node.js. URL: https://stackoverflow.com/questions/42033209/how-to-get-id-from-url-as-variable-in-node-js
3. Procademy, 17 Dec,2022. API: Handling POST Request|Working with Express JS|A Complete NODE JS Course. URL: https://www.youtube.com/watch?v=JTr2gQoUDnk
4. Onelight Web Dev. 04 Sep,2022. Error Handling in NodeJS (Complete Guide. URL: https://www.youtube.com/watch?v=mGPj-pCGS2c
5. Yuval.P. 21 Mar,2017. How to check req.body empty or not in node ,express? URL: https://stackoverflow.com/questions/42921727/how-to-check-req-body-empty-or-not-in-node-express
6. hunter__js. 08 Apr,2022. Node.js NPM uuid. URL: https://www.geeksforgeeks.org/node-js-npm-uuid/
7. Used some codes shown in Tutorial5 video

I watched the Tutorial5 video before I started writing T5, and I learned a lot about Node.js requests in the video. Although I consulted many resources to help me do this homework better, many of the ideas in this homework came from the Tutorial 5 videos. I didn't write my code while watching the video, I did the homework independently after I watched the video.

### File Name

*Lines ## - ##*

```
try{
        if(!userObj || !userObj.length)
        {
            return res.status(404).json({success: false, message: "Users not found"});
        }
    }
    catch(err){
            return res.status(500).json({success: false, message: "Internal Server Error"});
    }

    return res.status(200).json({success: true, users: userObj});


const userID = req.params.id;
userObj.push(newUser);

```

The code above was created by adapting the code in Tutorial5 Recording Video as shown below: 

```

Tutorial5 Recording Video

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*

### File Name

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
