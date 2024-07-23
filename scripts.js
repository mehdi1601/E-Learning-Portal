document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login');
    const portalSection = document.getElementById('portal');
    const studentNameSpan = document.getElementById('student-name');
    const lessonForm = document.getElementById('lesson-form');
    const lessonContentDiv = document.getElementById('lesson-content');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Fake authentication logic
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // In a real application, you would authenticate with a server
        if (username === 'student' && password === 'password') {
            loginSection.classList.add('hidden');
            portalSection.classList.remove('hidden');
            studentNameSpan.textContent = username;
        } else {
            alert('Invalid credentials');
        }
    });

    lessonForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const topic = document.getElementById('topic').value;
        
        // Connect to GPT to generate a lesson (simulated here)
        const lessonContent = await generateLesson(topic);
        lessonContentDiv.textContent = lessonContent;
    });

    async function generateLesson(topic) {
        // This is a placeholder function. In a real application, you would call an API here.
        return `Lesson content for topic: ${topic}`;
    }
});
