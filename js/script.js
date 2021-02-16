/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const studentList = document.querySelector(".student-list");


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = () => {
   studentList.innerHTML = "";
   console.log(studentList);

   studentList.appendChild(studentBlock());
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


/**
 * Run rendering functions after DOM has loaded
 */
window.addEventListener("DOMContentLoaded", () => {
   showPage();
});
