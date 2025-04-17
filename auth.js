// Login function
document.getElementById('loginBtn').addEventListener('click', () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Logged in successfully!");
            loadUserData(userCredential.user.uid);
        })
        .catch((error) => {
            alert("Login failed: " + error.message);
        });
});

// Signup function
document.getElementById('signupBtn').addEventListener('click', () => {
    const email = prompt("Enter your email:");
    const password = prompt("Create a password:");
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account created!");
            initializeUserData(userCredential.user.uid);
        })
        .catch((error) => {
            alert("Signup failed: " + error.message);
        });
});
