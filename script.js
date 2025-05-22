
// Reusable function to toggle "selected" class
function toggleSelection(groupId) {
  const group = document.getElementById(groupId);
  group.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-option')) {
      [...group.children].forEach(btn => btn.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  });
}

toggleSelection('property-types');
toggleSelection('property-types1');
toggleSelection('bhk-options');
toggleSelection('CarParking');
toggleSelection('bathroom-options');
toggleSelection('property-typesab');
toggleSelection('property-types12');



//form ke liye js
  const input = document.getElementById("superBuiltup");
const error = document.getElementById("superBuiltup-error");
const label = document.querySelector("label[for='superBuiltup']");
input.addEventListener("focus", () => {
    label.style.color = "orange";
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      input.classList.add("invalid");
      error.style.display = "block";
    } else {
      input.classList.remove("invalid");
      error.style.display = "none";
    }
  });

  

  document.querySelectorAll(".form-field").forEach((field) => {
    const input = field.querySelector("input");
    const label = field.querySelector("label");
    const error = field.querySelector(".error-msg");
  
    input.addEventListener("focus", () => {
      label.style.color = "orange";
    });
  
    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        input.classList.add("invalid");
        error.style.display = "block";
        label.style.color = "red";
      } else {
        input.classList.remove("invalid");
        error.style.display = "none";
        label.style.color = "#222";
      }
    });
  });
  



 

  
    function updateCount(id, max) {
      const input = document.getElementById(id);
      const countSpan = document.getElementById(id + 'Count');
      countSpan.textContent = `${input.value.length} / ${max}`;
    }

    function validateAdTitle() {
      const input = document.getElementById('adTitle');
      const countSpan = document.getElementById('adTitleCount');
      const errorText = document.getElementById('adTitleError');
      const length = input.value.length;

      countSpan.textContent = `${length} / 70`;

      if (length > 0 && length < 10) {
        input.classList.add('invalid');
        errorText.classList.add('visible');
      } else {
        input.classList.remove('invalid');
        errorText.classList.remove('visible');
      }
    }

    function validatePrice() {
      const input = document.getElementById('price');
      const error = document.getElementById('priceError');
      if (input.value.trim() === '') {
        input.classList.add('invalid');
        error.classList.add('visible');
      } else {
        input.classList.remove('invalid');
        error.classList.remove('visible');
      }
    }
 


    
    const uploadGrid = document.getElementById('uploadGrid');
    const maxPhotos = 20;

    for (let i = 0; i < maxPhotos; i++) {
      const photoBox = document.createElement('div');
      photoBox.className = 'photo-box';

      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = function () {
        if (input.files && input.files[0]) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            photoBox.innerHTML = ''; // Clear icon
            photoBox.appendChild(img);
            photoBox.appendChild(input); // Re-attach input
          };
          reader.readAsDataURL(input.files[0]);
        }
      };

      const iconDiv = document.createElement('div');
      iconDiv.className = 'icon';
      iconDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M4.5 7.5h2.25l1.5-1.5h6l1.5 1.5H19.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V9a1.5 1.5 0 0 1 1.5-1.5z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
        <div>Add Photo</div>
      `;

      photoBox.appendChild(iconDiv);
      photoBox.appendChild(input);

      photoBox.addEventListener('click', () => {
        // Remove selected from all boxes
        document.querySelectorAll('.photo-box').forEach(box => box.classList.remove('selected'));
        // Add selected to clicked one
        photoBox.classList.add('selected');
        // Trigger file input
        input.click();
      });

      uploadGrid.appendChild(photoBox);
    }
  
 // Tab switching logic
 function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }

  // Validation
  document.getElementById('state').addEventListener('blur', () => {
    const state = document.getElementById('state');
    const error = document.getElementById('state-error');
    error.style.display = state.value === "" ? "block" : "none";
  });


  const fileInput = document.getElementById('file-upload');
  const profilePic = document.getElementById('profile-pic');
  const deleteBtn = document.getElementById('delete-btn');
  const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

  // Change profile picture
  fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePic.src = e.target.result;
        deleteBtn.style.display = 'inline';
      };
      reader.readAsDataURL(file);
    }
  });

  // Reset profile picture
  deleteBtn.addEventListener('click', function () {
    profilePic.src = defaultImage;
    fileInput.value = '';
    deleteBtn.style.display = 'none';
  });



    const dropdown = document.getElementById("customDropdown");
    const selected = dropdown.querySelector(".dropdown-selected");
    const options = dropdown.querySelectorAll(".dropdown-options li");
    const facingError = document.getElementById("facing-error");

    selected.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });

    options.forEach(option => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        selected.setAttribute("data-value", option.getAttribute("data-value"));
        dropdown.classList.remove("open");
        dropdown.classList.remove("error-border");
        facingError.style.display = "none";
      });
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });

    document.getElementById("myForm").addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      const stateValue = document.getElementById("state").value;
      const stateError = document.getElementById("state-error");

      if (!stateValue) {
        stateError.style.display = "block";
        isValid = false;
      } else {
        stateError.style.display = "none";
      }

      const facingValue = selected.getAttribute("data-value");

      if (!facingValue) {
        facingError.style.display = "block";
        dropdown.classList.add("error-border");
        isValid = false;
      } else {
        facingError.style.display = "none";
        dropdown.classList.remove("error-border");
      }

      if (isValid) {
        alert("Form submitted successfully!");
      }
    });
  
