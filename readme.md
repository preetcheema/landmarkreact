.NET Solution

Overview: 
The solution allows users to:
 1.Register, Login, Logout 
 2.view their current location on map.
 3.Add note to current location
 4.View other users notes.
 5.Filter notes by combination of username and text inside comment.

 * Please add the Google map api key

 Limitations: 
 The api to get notes is currently very simplistic. In real world application this could be much more complicated for example, getting only
 comments from the bounds of the map or spreading the notes over a large area when map bounds are large.
 The maps show notes in a box. There are some issues with it , for example notes added on same location show up on top of each other. 
  

Before running the program first time:
	 Update 'LandmarkRemarkDatabase' database connection string in LandmarkRemark.Api->appsettings.json if required.
	 Program.cs is using method to create small seed data.Comment it out if not required.

How to Run:
Set Landmark.Api as startup project.
To Fake current location, use Chrome->DeveloperTools->MoreTools->Sensors

Notes:
I have structured the project in a way I do in production. However there are many things that have been left out due to time constraint and small scope of project.
Currently there is no logging in the project and not many helper filters etc.
The api to get notes is currently very simplistic. In real world application this could be much more complicated for example, getting only
comments from the bounds of the project.
I have written some tests on Business Logic. Again, in real world we may also have tests against the API.
The code is fairly self explanatory. I have added remarks where required.

React Solution

Disclaimer: As I have very limited knowledge of react, I have taken a sample project on login, register and modified it to add my code on home page
The link to base project is: https://github.com/cornflourblue/react-redux-registration-login-example

The react code just get the job done. It is not done using best practices such as usage of redux, redux-saga etc.

Before running the program for first time:
   Run npm-install to install the packages.

Limitations: Currently the map shows the notes in a popup. The css in pop ups is not very pretty and also shows username on the side. I would have liked to 
show just the pins and then the full note on hover over and the 'my' notes and other user notes in different colours but was limited by my css knowledge.


Effort taken:
.NET Project - Approx 8 hours,
.React Project - Approx 12 hours
