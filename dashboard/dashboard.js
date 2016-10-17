// var accounting = require('accounting')
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
var tableRows = document.querySelectorAll('tbody > tr');
//step 4
    console.log(tableRows.length);

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
var dashboardImages = document.querySelectorAll('img');
    console.log(dashboardImages);
//step 2 - 3
dashboardImages[0].setAttribute('src', 'http://unsplash.it/200/200?image=1020');
dashboardImages[0].setAttribute('alt', 'image of winter');
dashboardImages[1].setAttribute('src', 'http://unsplash.it/200/200?image=976');
dashboardImages[1].setAttribute('alt', 'image of spring');
dashboardImages[2].setAttribute('src', 'http://unsplash.it/200/200?image=1016');
dashboardImages[2].setAttribute('alt', 'image of summer');
dashboardImages[3].setAttribute('src', 'http://unsplash.it/200/200?image=1018');
dashboardImages[3].setAttribute('alt', 'image of fall');


//<----------------------------------------------------------------------->
//<--------------End of Question (2)------------------------------------------>

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

/*
Questions:
~ What am I doing?
()Search for the dashboard images and find the tag with the three dots.  Update the dots with random numbers formatted for currency
~ How am I doing it?
(1)Search the HTML document for the tag that holds the three dots
()Update the tag that holds the three dots with a random number
()Format the random number for currency
~ Why am I doing it this way?
*/

var threeDotsUpdates = document.querySelectorAll('.text-muted');

    threeDotsUpdates.forEach(function(updateItem){
        updateItem.innerHTML = accounting.formatMoney(Math.round(((Math.random()*10000 + 1000)*100)/100));
        // updateItem.innerHTML = '$' + Math.round(((Math.random()*10000 + 1000)*100)/100);
    });

//<----------------------------------------------------------------------->
//<--------------End of Question (3)------------------------------------------>

// 4. Change the currently selected left side menu item from Overview to Reports.

/*
Questions:
~ What am I doing?
()Search the HTML document for the left table and change the hover feature from Overview to Reports
~ How am I doing it?
(1)Search the HTML document for the tag that holds the Reports list item
(2)Search the HTML document for the tag that holds the Overview list item
(3)Transition the selection feature to the Reports
~ Why am I doing it this way?
*/
//steps 1 - 2
var activeTag = document.querySelectorAll('.nav-sidebar > li');
//steps 3
    // activeTag[0].setAttribute('class','');
    activeTag[0].classList.remove('active');
    // activeTag[1].setAttribute('class','active');
    activeTag[1].classList.add('active');
    // console.log(activeTag);

//<----------------------------------------------------------------------->
//<--------------End of Question (4)------------------------------------------>

// 5. Set the default search input value to "Q4 sales".

/*
Questions:
~ What am I doing?
()Search for the search input tag and set the value to 'Q4 sales'
~ How am I doing it?
()Search the HTML document for the input tag with a name of search
()Update the HTML document tag with new value of 'Q4 sales'
~ Why am I doing it this way?
*/

var newSearchValues = document.querySelectorAll('input');
    // console.log(newSearchValue); --> original thought path, but not needed any more
    newSearchValues.forEach(function(value){
        value.placeholder = 'Q4 sales'
    })
console.log(newSearchValues)

//<----------------------------------------------------------------------->
//<--------------End of Question (5)------------------------------------------>

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

/*
Questions:
~ What am I doing?
()Add a bootstrap property to create table hover feature on the page table
~ How am I doing it?
(1)ID unique identifier for the table on the page
(2)Add the bootstrap hover class to the table body class list
~ Why am I doing it this way?
*/
//step 1 to focus on the table stripe section
var tableHover = document.querySelector('.table-striped');
//step 2
    // tableHover.setAttribute('class', 'table table-hover');
    tableHover.classList.add('table-hover');

//<----------------------------------------------------------------------->
//<--------------End of Question (6)------------------------------------------>

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

/*
Questions:
~ What am I doing?
()Search the HTML document for the table and focus on the 7th and 10th rows to update
~ How am I doing it?
(1)Search HTML for the table
(2)Search the HTML document and filter out the 7th and 10th rows
(3)Update these rows to add the class success
~ Why am I doing it this way?
*/

//step 1
var updateSuccess = document.querySelectorAll('tbody > tr');

//step 2 - 3
    // updateSuccess[7].setAttribute('class', 'success');
    // updateSuccess[8].setAttribute('class', 'success');
    // updateSuccess[9].setAttribute('class', 'success');
    // updateSuccess[10].setAttribute('class', 'success');
    updateSuccess[7].classList.add('success');
    updateSuccess[8].classList.add('success');
    updateSuccess[9].classList.add('success');
    updateSuccess[10].classList.add('success');


//<----------------------------------------------------------------------->
//<--------------End of Question (7)------------------------------------------>

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

/*
Questions:
~ What am I doing?
()Search for the header rows of the table and update the names
~ How am I doing it?
(1)Search the HTML document for the table header
(2)Identify the the class or id for the table headers
()Update the table headers with ID, First Name, Last Name, Departement, Client
~ Why am I doing it this way?
*/

//step 1 and 2, but just used an array instead of the class or id
var updateThead = document.querySelectorAll('thead > tr > th');
    updateThead[0].innerHTML = 'ID';
    updateThead[1].innerHTML = 'First Name';
    updateThead[2].innerHTML = 'Last Name';
    updateThead[3].innerHTML = 'Department';
    updateThead[4].innerHTML = 'Client';
    console.log(updateThead);

//<----------------------------------------------------------------------->
//<--------------End of Question (8)------------------------------------------>

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

/*
Questions:
~ What am I doing?
(1)Create an empty array to hold the objects we will create
(2)Search the HTML document for the table and focus on the table rows in the table body
(3)Create an empty object variable to hold the collection of items based on the table headers
(4)Add dummy properties to the empty object variable to hold future items as we loop through the various objects in the array
(5)Drill down from table> tbody> tr> td> to update dummy properties with values
(6)Inner of row -> Remove the commas from the ID column and convert it to a Number(e.g. need Number() function)
~ How am I doing it?
~ Why am I doing it this way?
*/

//step 1
var rowObjects = []
//step 2
var arrayObjects = document.querySelectorAll('table > tbody > tr');
    // console.log(arrayObjects);
//step 3
    arrayObjects.forEach(function(item){
//step 4 - 5
        var rowObject = {
//step 6
            id: Number(item.children[0].innerHTML.replace(',', '')),
            firstName: item.children[1].innerHTML,
            lastName: item.children[2].innerHTML,
            department: item.children[3].innerHTML,
            client: item.children[4].innerHTML,
        };
        rowObjects.push(rowObject);
        // console.log(item.innerText);
    });
    console.log(rowObjects);

//<----------------------------------------------------------------------->
//<--------------End of Question (9)------------------------------------------>

// 10. Make each word in the table capitalized.

/*
Questions:
~ What am I doing?
()Capitalize the table data in the web page table
~ How am I doing it?
(1)Search for the table in the web page
(2)Identify the table data in the body of the table
(3)Update the data to be capitalized
~ Why am I doing it this way?
*/

//Hide this temporarily
//Step 1 and 2
var capitalizeItems = document.querySelectorAll('tbody > tr > td');
//Step 3
    capitalizeItems.forEach(function(item){
        // item.setAttribute('class', 'text-capitalize')
        item.classList.add('text-capitalize')
    })
    console.log(capitalizeItems);
//Hide this temporarily

//<----------------------------------------------------------------------->
//<--------------End of Question (10)------------------------------------------>
