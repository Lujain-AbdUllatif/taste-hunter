# Taste-Hunter

Taste-Hunter is plateform for cookers and all who have a good taste. We provide the user data resource upon dishes & favourite meals, it allows him to regist and login as a cook lover,
it saves his information for future usage.

the cooker could add dishes for his profile information, updating or deleting meals. 

Our data can be used also by developers and those interested in this kind of data, we provide you with an API key for life, for you to have access to all the cookers and the dishes we have in our database! 

It is an easy plateform, convenience editing, and most importantly *secured*!


# Documentation
## Usage
We have an ordered REST-API in your service;

as a ***Cooker***   

- You can sign up using the post route for the url "/cooker" passing your a json with your email and password as:  
{  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: "youremail@gmail.com,  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: "yourPassword"  
}  
We return an access token you should keep for future services;

- You can also view your competitor cookers by submitting a get request using the url "/cookers" passing the access token value in the your request "authentication" header.  

- You can also update your profile by submiting a put request for the url "/cookers" and providing your access token as clearefied above and the updated fields as a json like so:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "yourNewName",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: "newPassword",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;work_address : "yourUpdatedWorkAddress"  
}  

- For application uses, you can also login with a post request using the url "/cookers" as a cooker passing your email and password as a json in the request body:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: "youremail@gmail.com,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: "yourPassword"  
}  

** Be ware that your access token is expired within two hours from the creation!

- You can also add your tasty dishes by submitting a post request for the url "/dishes" providing the access token in the "authentication" header of your request as mentioned above. and request body should be provided with name, description, price, category of the dish as a json:  
{  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "yourName",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: "dishDescription",   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price: "inDollar",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category: "category"  
}

- You can also view all the dishes in our database by submitting a get request using the url "/dishes" passing the access token value in the your request "authentication" header.

- You can delete a dish from your dishes by submitting a delete request for the url "/dishes/your_dish_id", don't forget to provide us with the access token in the request "authentication" header.


as a ***user***

- You can sign up by submitting a post request to then url "/users/" providing your email and password as json:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: "youremail@gmail.com,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: "yourPassword"  
}  

- We provide you with an API key for life that you can use to access our data, you must concatenate it to the end of the url for every request you make in the following formate :: "request_url/api_key=YOUR_API_KEY".  
You can then use get requests like the cookers as desribed above.

# built-by:
- JS6
- EXPRESS
- NODE.JS
- SQL
- Insomnia

# Developers:
- Lujain @Lujain-AbdUllatif
- Hala @halaassaly
- Ammar @Ammaryus
- Muhammad @Muhammad Khamaisi
