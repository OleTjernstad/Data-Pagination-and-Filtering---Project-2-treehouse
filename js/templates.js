
/**
 * Function for rendering element blocks
 */
const studentBlock = () => {

    const studentDetails = wrapper('div', "student-details", [
        createElement(
            'h3', 
            [
                {name: 'textContent', value: 'student name'}
            ]
        ),
        createElement(
            'span', 
            [
                {name: 'className', value: 'email'}, 
                {name: 'textContent', value: 'Student email'}
            ]
        ),
        avatar()
    ]);

    const joinedDetails = wrapper('div', "joined-details", [
        createElement(
            'span', 
            [
                {name: 'className', value: 'date'}, 
                {name: 'textContent', value: 'student date'}
            ]
        ),

    ])
    const block = wrapper('li',"student-item cf", [
        studentDetails,
        joinedDetails
    ] );
    
    return block;
}

/**
 * Setting up the avatar element
 * 
 * @param {string} src URL to the profile picture 
 * 
 * @returns {DOMElement} The img element
 */
const avatar = (src) => {
    return createElement(
        'img', 
        [
            {name: 'className', value: 'avatar'},
            {name: 'alt', value: "Profile Picture"},
            {name: 'src', value: src}
        ]
    );  
}
/**
 * Creating the DOM element with different props
 * @param {string} elementName The HTML element name
 * @param {array} prop prop object {name: property name, value: property value}
 * 
 * @returns {DOMElement}
 */
const createElement =  (elementName, prop = []) => {
    const element = document.createElement(elementName);
    for (let i = 0; i < prop.length; i++) {
       element[prop[i].name] = prop[i].value        
    }
    return element
}
/**
 * Creating the parent element, with classes
 * @param {string} elementName The HTML element name
 * @param {string} className The CSS class name 
 * @param {array} children An array with children DOM elements
 */
const wrapper = (elementName, className, children = []) => {
    const element = createElement(elementName, [{name: 'className', value: className}]);
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
    return element;
}
