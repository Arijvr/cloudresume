# Updated README coming soon.


I’m writing this blog to share a few learnings, challenges and developments that happened throughout the process of building a resume, and hosting it in something I’ve built on the cloud. Why? Well, as a career changers, it’s a way for me to display some cloud skills prior to getting a job, so this is a way of sharing some of our capabilities, displaying the hungrer to figure it out, and shares your actual resume too!

The Project:

Initially I was going for something much simpler- put some files into S3 and have a URL that can show the website, but then I realized there was an opportunity to use more of the services I’ve not used before, and have a bit of fun doing it.

I wanted to display a working Resume, something that used a database, lambda functions, version control locally and online, practice access and setup via both GUI’s and command line, that can be easily edited and grown or shrunk depending on what is needed.

Below is a description of each of the “Chunks” I did (a way of breaking up the project into “to-do’s” in order), the services used, and some key challenges I overcame.

Chunk 1- HTML, CSS, JS, S3, Route 53, Cloudfront.
I wanted to create a central location to store and display my website, using the AWS platform as the core, showing simple code, but also the various services and how to implement them.

Challenges from Chunk 1- Creating website content was simpler having previously built websites for my own use, however all through hosted services (like EditorX and Wordpress templates), so to make it a learning experience, I used ChatGPT prompting for a template to edit- HTML, CSS and Javascript, just having to correct a few pieces of code to have it how I wanted(working).
AWS services were simple and clear to connect and initiate. Setting up and S3 bucket, getting a domain and setting up the records on Route 53 and using Cloudfront as our Content Delivery Network, to give access securely and not a direct url for public access to our S3 bucket.
Modification— As well as doing the above steps, I wanted to go a level above- including Github Repositories for version control of website files (and using multiple devices to code and build this project). I found a way to connect this to VSCode to automatically push commits via any device I set up on (mac and windows). This is a great improvement as I don’t need to upload new files to S3 everytime I want to update my website. I can literally update in my preferred code editor. So fun!
Additionally, I wanted to see if I could find a way of easily replicating the resources I had created in AWS, so I learned how to import these resources to Terraform (Infrastructure-as-code) and templatize them too. Also, creating new resources from Terraform is a matter of a few lines of code. Magic! This added some complexity, it was worth learning how to do this for future larger projects.

Chunk 2 Contents- DynamoDB, Lambda, Python, API
The idea on this part was to create a visitor counter for the website, using aws tools and demonstrate some more capabilities of a well structured website.

Challenges from Chunk 2- Having built what I thought was the totality of the website, there was still loads that needed to be figured out when I wanted to do the API. Initially I started researching all the solutions, and looking at AWS API Gateway to connect the DynamoDb to Lambda and to the Coudfront endpoint referring to the website. After doing some more research and building on my knowledge, I discovered that you can set up the Lambda function using a function URL to execute the code process in Lambda, simplifying the connection between the triggering website code with the function URL and logging the updated Viewer Count to DynamoDB, where the function returns the count to be reflected in the “views” section of the footer. I considered still building the AWS API, but decided to focus more on efficient solutions rather than building services that could create more challenges in future.

Chunk 3 contents- Github CI-CD,
Here I wanted to ensure the code was easily accessible and updateable. Using the Github Action platform to update the S3 bucket as well as the Github repository.

Challenges from Chunk 3- I struggled with this for a while! Initially having linked my VScode code editor to a file system path which updated a github repository, I had made the mistake of changing the file path directory, while setting up a new git directory in the command line, which then caused my github commits to have loads of errors, and not update anything. I learned how to really trouble-shoot on this challenge- line by line, error by error, and it was the most victorious feeling once I got everything working again! Sometimes, if you’re struggling to find the answer, you may be asking the wrong question.
I then proceeded to add a Github Action from marketplace called S3 Sync, which triggers anytime there is a push to your Github repository. Github Secrets is also a tremendous tool for keeping your services and account secure!

This is where this project sits now. Maybe I’ll add more to it in the future, however I have my eye set on building some more projects like a VPC or Web app.