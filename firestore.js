// Initialize user data
function initializeUserData(userId) {
    db.collection("users").doc(userId).set({
        subjects: ["Physics", "Chemistry", "Maths", "Biology"],
        progress: {},
        lastLogin: new Date()
    });
}

// Load user data
function loadUserData(userId) {
    db.collection("users").doc(userId).get()
        .then((doc) => {
            if (doc.exists) {
                renderSubjects(doc.data().subjects);
            }
        });
}

// Save progress
function saveProgress(userId, topic, mastery) {
    db.collection("users").doc(userId).update({
        [`progress.${topic}`]: {
            mastery,
            lastRevised: new Date(),
            nextRevision: calculateNextRevision()
        }
    });
}
