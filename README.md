# Customer-Review
Assignment using MEAN Stack

The assignment is divided into two parts.

Steps:

1. Create a “Customer Review”  form using HTML, CSS, JavaScript in frontend.
2. Create a simple Review API. The API should be triggered when the customer clicks the  submit button in the Customer Review form.
Also, the API should be able to store the data in a database. 

Explanation: 

Customer Review form 

1. The form should consist of fields like Name, Email, Mobile No, Rating, Review.
2. The form should consist of a Submit button.
3. There is no constraint in design.

Review API 

1. The API should be triggered when the user clicks the SUBMIT button.
2. After the user clicks submit button, the data in the form should be stored in a database.
3. You can build your API using SpringBoot, Java, Node, Express or anything.
(Better If Ratings are marked in Star Format, Instead of typing the Ratings)


Steps to run the code :

1. Make sure <b>"node"</b> and <b>"npm"</b> is installed.

2. Install all require node modules using command
	<b>npm install</b>

3. Connection to mongodb <br>
	inside index.js file, change uri to -  
	<br>
	To connect mongodb cloud.<br>
	<b>const uri = "mongodb+srv://username:password@your-cluster-url/test?retryWrites=true&w=majority";</b>
	<br>or<br>
	To connect mongodb locally<br>
	<b>const uri = "mongodb://localhost:27017/myapp";</b>

4. Command to start the application
	<b>npm start</b>
	or 
	<b>node index.js</b>
