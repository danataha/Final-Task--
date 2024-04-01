document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const displayArea = document.getElementById('displayArea');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value;

        const card = `
        <div class="col-md-3 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${firstName} ${lastName}</h5>
              <p class="card-text"><strong>Email:</strong> ${email}</p>
              <p class="card-text"><strong>Phone:</strong> ${phone}</p>
              <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
              <p class="card-text"><strong>Gender:</strong> ${gender}</p>
              <p class="card-text"><strong>Address:</strong> ${address}</p>
            </div>
          </div>
        </div>
      `;

        displayArea.insertAdjacentHTML('beforeend', card);
        form.reset();
    });

    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function () {
        form.reset();
        displayArea.innerHTML = '';
    });
});
