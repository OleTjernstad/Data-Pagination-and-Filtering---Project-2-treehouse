/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const itemsPerPage = 9;

const showPage = (students) => {
    const studentList = document.querySelector(".student-list");
    studentList.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        studentList.appendChild(studentBlock(students[i]));
    }
}

const calculateStudentChunk = (page) => {
    const start = (page * itemsPerPage) - itemsPerPage;
    const end = page * itemsPerPage;
    return data.slice(start, end);
}

const addPagination = (page) => {
    const numberOfPages = Math.ceil(data.length / itemsPerPage);

    linkList.innerHTML = '';
    
    for (let i = 1; i <= numberOfPages; i++) {
      linkList.appendChild(paginationBlock(i, page));
    }
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
 * Run rendering functions after DOM has loaded
 */
window.addEventListener("DOMContentLoaded", () => {
   showPage(calculateStudentChunk(1)); //start on page one when the page loads
   addPagination(1);

   
    header.appendChild(searchBarBlock());
});
