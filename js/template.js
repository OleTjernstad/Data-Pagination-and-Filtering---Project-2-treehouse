
/**
 * Build student HTML block
 * 
 * @param {student object} student Student object from data array
 * 
 * @returns {HTMLElement} The student details item
 */
const studentBlock = (student) => {

    const studentDetails = wrapper("div", "student-details", [
      createElement("h3", [
        {
          name: "textContent",
          value: `${student.name.first} ${student.name.last}`,
        },
      ]),
      createElement("span", [
        { name: "className", value: "email" },
        { name: "textContent", value: student.email },
      ]),
      avatar(student.picture.medium),
    ]);

    const joinedDetails = wrapper("div", "joined-details", [
      createElement("span", [
        { name: "className", value: "date" },
        { name: "textContent", value: `Joined ${student.registered.date}` },
      ]),
    ]);
    const block = wrapper("li", "student-item cf", [
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
    return wrapper("li", "", [
      createElement("button", [
        { name: "textContent", value: number },
        { name: "type", value: "button" },
        { name: "className", value: number == page ? "active" : "" },
      ]),
    ]);
}

/**
 * Create the HTML for th searchBar
 * 
 * @returns {HTMLElement} The searchbar block
 */
const searchBarBlock = () => {
    const seachButton = wrapper(
        'button',
        '',
        [
            createElement(
                'img', 
                [
                    {name: 'src', value: "img/icn-search.svg"}, 
                    {name: 'alt', value: 'Search icon'}
                ]
            )
        ],
        [ { name: 'type', value: 'button' } ]
    );
    const searchField = createElement(
        'input', 
        [
            {name: 'id', value: 'search'}, 
            {name: 'placeholder', value: 'Search by name...'}
        ]
    );
    return wrapper(
        "label", 
        'student-search', 
        [
            searchField,
            seachButton
        ],
        [
            {name: 'for', value: 'search'}
        ]
    );
}

/**
 * Setting up the avatar element
 * 
 * @param {string} src URL to the profile picture 
 * 
 * @returns {HTMLElement} The img element
 */
const avatar = (src) => {
    return createElement("img", [
      { name: "className", value: "avatar" },
      { name: "alt", value: "Profile Picture" },
      { name: "src", value: src },
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

    // TODO Switch to object using object
    for (const [key, value] of Object.entries(props)) {
      element[key] = value  
    }

    return element
}

/**
 * Creating the parent element, with classes
 * @param {string} elementName The HTML element name
 * @param {string} className The CSS class name 
 * @param {HTMLElement[]} children An array with children HTML elements
 */
const wrapper = (elementName, className, children = [], props = []) => {
    const element = createElement(elementName, [
      { name: "className", value: className },
      ...props
    ]);
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
    return element;
}
