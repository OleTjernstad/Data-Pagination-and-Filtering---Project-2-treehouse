
/**
 * Build student HTML block
 * @param {student object} student Student object from data array
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

const paginationBlock = (number, page) => {
    return wrapper("li", "", [
      createElement("button", [
        { name: "textContent", value: number },
        { name: "type", value: "button" },
        { name: "className", value: number == page ? "active" : "" },
      ]),
    ]);
}

const searchBarBlock = () => {
    return wrapper('label')
        //       <label for="search" class="student-search">
        //     <input id="search" placeholder="Search by name...">
        //     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
        //   </label>
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
    for (let i = 0; i < props.length; i++) {
       element[props[i].name] = props[i].value        
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
