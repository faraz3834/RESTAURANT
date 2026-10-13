// Menu Filtering Logic
function filterMenu(category) {
    const cards = document.querySelectorAll('.menu-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add to Order Button Logic (Auto-selects dropdown in Order form)
function addToOrder(itemName) {
    const select = document.getElementById('order-item');
    
    // Loop through options to find matching text and select it
    for(let i = 0; i < select.options.length; i++) {
        if(select.options[i].text.includes(itemName)) {
            select.selectedIndex = i;
            break;
        }
    }
    // Scroll to order section smoothly
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// Order Form Submission with Custom Popup
function submitOrder(e) {
    e.preventDefault();
    const item = document.getElementById('order-item').value;
    
    // Set dynamic text for the popup
    document.getElementById('popup-message').innerText = "Your order for " + item + " has been placed successfully. We are preparing it now!";
    
    // Show the popup
    document.getElementById('order-popup').classList.add('show');
    
    // Reset the form
    e.target.reset();
}

// Close the custom popup
function closePopup() {
    document.getElementById('order-popup').classList.remove('show');
}

// Login Type Switcher (Phone vs Email)
function switchLoginType(type) {
    const tabs = document.querySelectorAll('.login-tab');
    const label = document.querySelector('#dynamic-input-group label');
    const input = document.querySelector('#dynamic-input-group input');

    if (type === 'phone') {
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        label.innerText = 'Phone Number';
        input.type = 'tel';
        input.placeholder = 'Enter 10-digit number';
    } else {
        tabs[1].classList.add('active');
        tabs[0].classList.remove('active');
        label.innerText = 'Email Address';
        input.type = 'email';
        input.placeholder = 'Enter your email';
    }
    input.value = ''; // clear input on switch
}

// Login Form Submission
function submitLogin(e) {
    e.preventDefault();
    alert("Login successful! Welcome to StarFood."); // Left as an alert, or you can use a popup for this too!
    e.target.reset();
}