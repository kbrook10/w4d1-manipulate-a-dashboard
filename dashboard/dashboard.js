// 1. Count the number of records in the "Current Quarter Details" table.

/*
Questions:
~What am I doing?
()Search through the HTML document to find the amount of records in the table.
~How am I doing it?
(1)Access the HTML document
(2)Search for the table the displays the Current Quarter Details data
(3)ID the table rows for the Current Quarter Details table
(4)Use length to count the amount of tr tags in the table setup
~Why am I doing it this way?
*/
//steps 1 - 3
var tableRows = document.querySelectorAll('tbody > tr')
//step 4
    console.log(tableRows.length)

//<----------------------------------------------------------------------->
//<--------------End of Question (1)------------------------------------------>

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

/*
Questions:
~ What am I doing?
()ID the dashboard images within the HTML document and change to the four seasons.  Add the alt verbiage as well.
~ How am I doing it?
(1)Search the HTML document for the dashboard images
(2)Filter images into an array and update the various images
(3)Add alt='' values for each image item
~ Why am I doing it this way?
*/

//Steps 1
var dashboardImages = document.querySelectorAll('img')
    console.log(dashboardImages);

//step 2 - 3
dashboardImages[0].setAttribute('src', 'http://unsplash.it/200/200?image=1020')
dashboardImages[0].setAttribute('alt', 'image of winter')
dashboardImages[1].setAttribute('src', 'http://unsplash.it/200/200?image=976')
dashboardImages[1].setAttribute('alt', 'image of spring')
dashboardImages[2].setAttribute('src', 'http://unsplash.it/200/200?image=1016')
dashboardImages[2].setAttribute('alt', 'image of summer')
dashboardImages[3].setAttribute('src', 'http://unsplash.it/200/200?image=1018')
dashboardImages[3].setAttribute('alt', 'image of fall')

//http://unsplash.it/200/200?random
//<----------------------------------------------------------------------->
//<--------------End of Question (2)------------------------------------------>

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

/*
Questions:
~ What am I doing?
()Search for the dashboard images and find the tag with the three dots.  Update the dots with random numbers formatted for currency
~ How am I doing it?
()Search the HTML document for the tag that holds the three dots
()Update the tag that holds the three dots with a random number
()Format the random number for currency
~ Why am I doing it this way?
*/



//<----------------------------------------------------------------------->
//<--------------End of Question (3)------------------------------------------>

// 4. Change the currently selected left side menu item from Overview to Reports.

/*
Questions:
~ What am I doing?
~ How am I doing it?
~ Why am I doing it this way?
*/

//<----------------------------------------------------------------------->
//<--------------End of Question (4)------------------------------------------>

// 5. Set the default search input value to "Q4 sales".

/*
Questions:
~ What am I doing?
~ How am I doing it?
~ Why am I doing it this way?
*/

//<----------------------------------------------------------------------->
//<--------------End of Question (5)------------------------------------------>

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

/*
Questions:
~ What am I doing?
~ How am I doing it?
~ Why am I doing it this way?
*/

//<----------------------------------------------------------------------->
//<--------------End of Question (6)------------------------------------------>

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

/*
Questions:
~ What am I doing?
~ How am I doing it?
~ Why am I doing it this way?
*/

//<----------------------------------------------------------------------->
//<--------------End of Question (7)------------------------------------------>

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

/*
Questions:
~ What am I doing?
~ How am I doing it?
~ Why am I doing it this way?
*/

//<----------------------------------------------------------------------->
//<--------------End of Question (8)------------------------------------------>

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

/*
Questions:
~ What am I doing?
~ How am I doing it?
~ Why am I doing it this way?
*/

//<----------------------------------------------------------------------->
//<--------------End of Question (9)------------------------------------------>

// 10. Make each word in the table capitalized.

/*
Questions:
~ What am I doing?
~ How am I doing it?
~ Why am I doing it this way?
*/

//<----------------------------------------------------------------------->
//<--------------End of Question (10)------------------------------------------>
