# 22.2.2---Note-Taker---Challenge-No.11

## What I learned

# Scenarios that I went through and what I learned.

Hopefully this section will demonstrate time and effort that was put into this challenge, that was sandly unsuccessful.  

Initially I simply used the code provided in the index.js file and added appropriate .get and .post requests in the server.js file the getAndRenderNotes() would not render anything on the left side and the subsequent .get request never had the info that was added after the server was initially connected, unless I reconnected the server. 

I have the post and gets working based off of the saving a newly aded note. I initiated new note outside of the savenote function and was able to get the post request to complete prior to the get request running. Screen shot 1. When this occurred, I could see in the network tab a 200 response for the post though I still got a 304 response for the get request, meaning nothing was modified. From here I thought there would be a couple of routes to try and to accomplish getting the new note added to the left hand column, even as it was successfully being received by the db.json. Initially I tried a res.set for Cache controls that would require a revalidation. Seemingly all that did was slow the backend process so my get request completed before my post request did. though they both still showed as occuring at the same time in the network tab of the dev. tools. 



From here I tried using a setTimeout() on the app.get to help ensure it would not resolve until after the app.post had had more time complete. Couldn't ever get the code here to fully function, though I don't think it would have helped even if it had worked, the get request seemingly doesn't actually pull the latest version of the file. It still uses the initial version.

From here I tried to seperate the post request from the additon of the note to left side of the html file. Initially I did this but deconstructing getAndRenderNOtes() whihc would result in the jsonNOtes variable in the renderNoteList const. not being defined or the .forEach() not being a function on noteListItems. 

I then tried to created a secondardy list item function that would add the note title to the list. This would either delete all of the other notes that hads been added by the starter code provided or it would have left them all as "undefined". I haven't figured out the solution yet but I am confident this issue is related to the activeNote.id and the "data-note" attribute that is set. 

I also tried to use nodemon npm to help in refrehsing my page to allow everything to work through an updated .get request from the server, to no avail.

My current code takes the new note and successfully sends it to the server, and .get request is sent back, though that request does not have the updated file until the server is refreshed. 

I will continue trying and resubmit, anything insite or guidance you are able to provide in the grader comments would be greatly appreciated. 










Heroku: https://git.heroku.com/immense-island-87651.git 



Figured out that if I call newNote as a global variable instead of inside of the handleNoteSave that post request completes prior to the get requesr running, the get request still doesn't pick the latest 

I tried a function that added li's to the ul on the left but they would either be undefenied or overried and delete all of the values provided by the renderNoteList funcyion

