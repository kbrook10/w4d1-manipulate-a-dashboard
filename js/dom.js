//Lesson on using DOM
//<---------------------------->
var  body = document.body
console.log(body)

//How to find the first h1 and display the tags and inner tag information --> need to index
var h1 = document.body.childNodes[1]

//console.log(h1[1]) or var h1 = document.body.childNodes[1]
console.log(h1)

//Use this to search inside HTML tag and the console.log retrieves the data inbetween the opening and closing tags.
var helloWorld = h1.innerHTML
console.log(helloWorld)

h1.innerHTML = 'Hello Universe'

//The 'dir' gives meta data information about the tag
// console.dir(h1) -->
console.log(h1.childNodes)

//How to find things by ID and Classes
//<---------------------------->


//How to obtain specific element from HTML doc based on ID
var helloH1 = document.getElementById('hello')
console.log(helloH1)

//How to obtain specific element from HTML doc based on Class (e.g. won't see this often)
var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)

//Use this to access any normal CSS selector(e.g. this is the new more efficient way) --> Preferred Method
var navItems = document.querySelectorAll('body *')
console.log(navItems)

//Too eliminate this creating an array take out the 'All' on the querySelectorAll pcs below
var helloH1 = document.querySelector('#hello')
console.log(helloH1)

//Loop through the navItems which is an array.
//<---------------------------->


// console.log(Array.from(navItems).includes('li'))

navItems.forEach(function(navItem){
    // console.dir(navItem)
    // console.log(navItem)
    navItem.addEventListener('mouseover', function(e) {
        e.target.classList.add('red');
    })
    //How to add interactivity
        navItem.addEventListener('mouseout', function(e) {
            e.target.classList.remove('red');
        })
        navItem.addEventListener('click', function(e) {
            e.target.remove();
        })
    // // if (navItem.tagName === 'LI' && /*This looks for tag with name 'LI'*/ navItem.classList.contains('active')){ /*This*/
    // //     // navItem.style.color = 'red';
    // //     navItem.classList.add('red')
    // }
})

//Get list of all matches
//<---------------------------->
var navItems = document.querySelectorAll('.nav-item')
navItems.forEach(function(navItem){
    console.log(navItem.className)
    console.log(navItem.tagName)
    console.log(navItem.id)
    console.log(navItem.classList)
    console.log(navItem.getAttribute('title'))
    //This below is example of setting attributes
    console.log(navItem.getAttribute('title', 'Foo'))
    console.log(navItem.getAttribute('data-details'))
    //This changes what is in the HTML text
    navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
    //How to get the the text inside tag
    console.log(navItem.innerHTML)
})

//Modify Form Field Inputs
var searchInput = document.getElementById('search')
var searchInput = document.querySelector('#search')

//Below two ways to change the value inside the attribute tag
searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'

//This accesses the value in the self closing tag of the input tag (e.g. below are two options)
alert(searchInput.value)
// alert(searchInput.getAttribute('value'))

//Review of Homework
//<---------------------------->



//End of Lesson
//<---------------------------->
