
/**
 * Function for rendering element blocks
 */
const renderTemplate = {
    student: () => {
        const li = document.createElement('li');
        li.className = "student-item cf";

        const studentDetails = document.createElement('div');
        studentDetails.className = "student-details";

        const avatar = document.createElement('img');
        avatar.className = "avatar";
        avatar.alt = "Profile Picture";

        const name = document.createElement('h3');
        
        const email = document.createElement('span');
        email.className = 'email';

        studentDetails.appendChild(avatar);
        studentDetails.appendChild(name);
        studentDetails.appendChild(email);

        const joinedDetails = document.createElement('div');
        joinedDetails.classList = "joined-details";

        const date = document.createElement('span');
        date.className = "date";

        joinedDetails.appendChild(date);

        li.appendChild(studentDetails);
        li.appendChild(joinedDetails);
        
        return li;
        return `<li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <h3>Ethel Dean</h3>
            <span class="email">ethel.dean@example.com</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined 12-15-2005</span>
          </div>
        </li>`;
    }
}