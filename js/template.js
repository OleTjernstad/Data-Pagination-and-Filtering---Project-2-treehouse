
/**
 * Build student HTML block
 * 
 * @param {student object} student Student object from data array
 * 
 * @returns {HTMLElement} The student details item
 */
const studentBlock = (student) => {

    const studentDetails = wrapper("div", { className: "student-details" }, [
        createElement("img", {
            className: "avatar",
            alt: "Profile Picture",
            src: student.picture.medium,
        }),
        createElement("h3", {
            textContent: `${student.name.first} ${student.name.last}`,
        }),
        createElement("span", {
            className: "email",
            textContent: student.email,
        }),
    ]);

    const joinedDetails = wrapper("div", { className: "joined-details" }, [
        createElement("span", {
            className: "date",
            textContent: `Joined ${student.registered.date}`,
        }),
    ]);
    const block = wrapper("li", { className: "student-item cf" }, [
        studentDetails,
        joinedDetails,
    ]);
    
    return block;
}

/**
 * Create the HTML for the pagination buttons
 * 
 * @param {number} number number to print in button
 * @param {number} page The current page number to set active
 * 
 * @returns {HTMLElement} The pagination li
 */
const paginationBlock = (number, page) => {
    return wrapper("li", undefined, [
        createElement("button", {
            textContent: number,
            type: "button",
            className: number == page ? "active" : "",
        }),
    ]);
}

/**
 * Create the HTML for th searchBar
 * 
 * @returns {HTMLElement} The searchbar block
 */
const searchBarBlock = () => {
    const searchButton = wrapper("button", { type: "button" }, [
        createElement("img", { src: "img/icn-search.svg", alt: "Search icon" }),
    ]);
    const searchField = createElement("input", {
        id: "search",
        placeholder: "Search by name...",
    });
    return wrapper("label", { className: "student-search", for: "search" }, [
        searchField,
        searchButton,
    ]);
}

/**
 * Creating the DOM element with different props
 * @param {string} elementName The HTML element name
 * @param {array} prop prop object {name: property name, value: property value}
 * 
 * @returns {HTMLElement}
 */
const createElement =  (elementName, props = []) => {
    const element = document.createElement(elementName);

    for (const [key, value] of Object.entries(props)) {
        element[key] = value;
    }

    return element
}

/**
 * Creating the parent element, with classes
 * @param {string} elementName The HTML element name
 * @param {string} className The CSS class name 
 * @param {HTMLElement[]} children An array with children HTML elements
 */
const wrapper = (elementName, props, children = []) => {
    const element = createElement(elementName, props );

    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }

    return element;
};
