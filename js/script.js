/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (students) => {
    const studentList = document.querySelector(".student-list");
    studentList.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        studentList.appendChild(studentBlock(students[i]));
    }
}

const calculateStudentChunk = (page) => {
    const itemsPerPage = 9
    const start = (page * itemsPerPage) - itemsPerPage;
    const end = page * itemsPerPage;
    return data.slice(start, end);
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


/**
 * Run rendering functions after DOM has loaded
 */
window.addEventListener("DOMContentLoaded", () => {
   showPage(calculateStudentChunk(1));
});
