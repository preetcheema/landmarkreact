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

