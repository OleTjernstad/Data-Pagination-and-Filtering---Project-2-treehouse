/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/**
 * Items to place pr paginated list
 */
const itemsPerPage = 9;
/**
 * The array of student objects
 */
let students = data; // data from the data.js file

/**
 * Loop the students array and append the students items to the dom
 * @param {array} students Students objects
 */
const showPage = (page) => {
    const studentList = document.querySelector(".student-list");
    addPagination(page); // run add pagination for the correct number of page buttons

    const slicedStudents = calculateStudentChunk(page);
    studentList.innerHTML = "";
    for (let i = 0; i < slicedStudents.length; i++) {
        studentList.appendChild(studentBlock(slicedStudents[i]));
    }
}

/**
 * Calculate number of pages and render buttons to the dom
 * 
 * @param {number} page the current page number
 */
const addPagination = (page) => {
  const numberOfPages = Math.ceil(students.length / itemsPerPage);

  linkList.innerHTML = "";

  for (let i = 1; i <= numberOfPages; i++) {
    linkList.appendChild(paginationBlock(i, page));
  }
};

const calculateStudentChunk = (page) => {
    const start = (page * itemsPerPage) - itemsPerPage;
    const end = page * itemsPerPage;
    return students.slice(start, end);
}

const search = (searchString) => {
    students = data.filter(
        (student) =>
            student.name.first.toLowerCase().includes(searchString.toLowerCase() ) || 
            student.name.last.toLowerCase().includes(searchString.toLowerCase() )
    ); // filter the array for matching students

    showPage(1); // start on page one when the page loads  
}

/**
 * Get the link list
 */
const linkList = document.querySelector(".link-list");

/**
 * Event listener for pagination buttons
 */
linkList.addEventListener("click", (event) => {
    
    if (event.target.tagName == 'BUTTON') {
        const page = event.target.textContent;
        showPage(page); // Load the page
    }
});

/**
 * Get the header element
 */
const header = document.querySelector(".header");

/**
 * Event listener for the searchBar
 */
header.addEventListener('click', (event) => {
    if (event.target.tagName == 'IMG') {
        search(event.target.parentNode.previousElementSibling.value);
    } else if (event.target.tagName == "BUTTON") {
        // if somehow the button element is clicked and not the IMG
        search(event.target.previousElementSibling.value);
    }
    
} );

header.addEventListener('keyup', (event) => {
    if (event.target.tagName == "INPUT") {
      search(event.target.value);
    }
});

/**
 * Run rendering functions after DOM has loaded
 */
window.addEventListener("DOMContentLoaded", () => {
    showPage(1); //start on page one when the page loads
    
    header.appendChild(searchBarBlock());
});
