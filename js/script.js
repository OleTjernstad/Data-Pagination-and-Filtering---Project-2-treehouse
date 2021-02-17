/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const itemsPerPage = 9;

/**
 * Loop the students array and append the students items to the dom
 * @param {array} students Students objects
 */
const showPage = (students) => {
    const studentList = document.querySelector(".student-list");
    studentList.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        studentList.appendChild(studentBlock(students[i]));
    }
}

/**
 * Calculate number of pages and render buttons to the dom
 * 
 * @param {number} page the current page number
 */
const addPagination = (page) => {
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  linkList.innerHTML = "";

  for (let i = 1; i <= numberOfPages; i++) {
    linkList.appendChild(paginationBlock(i, page));
  }
};

const calculateStudentChunk = (page) => {
    const start = (page * itemsPerPage) - itemsPerPage;
    const end = page * itemsPerPage;
    return data.slice(start, end);
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
        showPage(calculateStudentChunk(page)); //start on page one when the page loads
        addPagination(page);   
    }
});

/**
 * Get the header element
 */
const header = document.querySelector(".header")

/**
 * Event listener for the searchBar
 */
header.addEventListener('click', (event) => search(event) )

/**
 * Run rendering functions after DOM has loaded
 */
window.addEventListener("DOMContentLoaded", () => {
    showPage(calculateStudentChunk(1)); //start on page one when the page loads
    addPagination(1);

    header.appendChild(searchBarBlock());
});
