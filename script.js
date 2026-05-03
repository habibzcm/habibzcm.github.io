// JavaScript for Quiz Logic
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('seo-quiz');
    const submitBtn = document.getElementById('submit-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultsDiv = document.getElementById('quiz-results');
    const overallScore = document.getElementById('overall-score');
    const overallResult = document.getElementById('overall-result');

    // Answers
    const answers = {
        q1: ['optimization'],
        q2: 'organic',
        q3: 'content',
        q4: 'terms',
        q5: ['quality', 'mobile', 'backlinks'] // 3 correct choices
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        let score = 0;
        const totalQuestions = 5;

        // Reset feedbacks
        document.querySelectorAll('.feedback').forEach(el => {
            el.innerHTML = '';
            el.className = 'feedback';
        });

        // Clear styling for inputs
        document.querySelectorAll('.question-container').forEach(el => el.classList.remove('correct-bg', 'incorrect-bg'));

        // --- Grade Q1 ---
        const q1Input = document.getElementById('q1').value.trim().toLowerCase();
        const q1Feedback = document.getElementById('q1-feedback');
        let q1Correct = false;
        if (answers.q1.includes(q1Input)) {
            score++;
            q1Correct = true;
            q1Feedback.innerHTML = `<span class="correct-text">Correct! Search Engine <b>Optimization</b>. Score: 1/1</span>`;
        } else {
            q1Feedback.innerHTML = `<span class="incorrect-text">Incorrect. Answer: Optimization. Score: 0/1</span>`;
        }

        // --- Grade Q2 ---
        const q2Value = document.querySelector('input[name="q2"]:checked').value;
        const q2Feedback = document.getElementById('q2-feedback');
        if (q2Value === answers.q2) {
            score++;
            q2Feedback.innerHTML = `<span class="correct-text">Correct! Organic Traffic is unpaid. Score: 1/1</span>`;
        } else {
            q2Feedback.innerHTML = `<span class="incorrect-text">Incorrect. Answer: Organic Traffic. Score: 0/1</span>`;
        }

        // --- Grade Q3 ---
        const q3Value = document.querySelector('input[name="q3"]:checked').value;
        const q3Feedback = document.getElementById('q3-feedback');
        if (q3Value === answers.q3) {
            score++;
            q3Feedback.innerHTML = `<span class="correct-text">Correct! On-page SEO deals with your page's content/HTML. Score: 1/1</span>`;
        } else {
            q3Feedback.innerHTML = `<span class="incorrect-text">Incorrect. Answer: Optimizing individual web pages for content and HTML source code. Score: 0/1</span>`;
        }

        // --- Grade Q4 ---
        const q4Value = document.querySelector('input[name="q4"]:checked').value;
        const q4Feedback = document.getElementById('q4-feedback');
        if (q4Value === answers.q4) {
            score++;
            q4Feedback.innerHTML = `<span class="correct-text">Correct! Score: 1/1</span>`;
        } else {
            q4Feedback.innerHTML = `<span class="incorrect-text">Incorrect. Answer: Words or phrases that users enter into search engines. Score: 0/1</span>`;
        }

        // --- Grade Q5 ---
        const q5Checked = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(el => el.value);
        const q5Feedback = document.getElementById('q5-feedback');

        // Compare arrays (sizes and all elements must match)
        const isQ5Correct = q5Checked.length === answers.q5.length && answers.q5.every(val => q5Checked.includes(val));

        if (isQ5Correct) {
            score++;
            q5Feedback.innerHTML = `<span class="correct-text">Correct! High-quality content, mobile-friendliness, and backlinks are key ranking factors. Score: 1/1</span>`;
        } else {
            q5Feedback.innerHTML = `<span class="incorrect-text">Incorrect. Answer: High-quality, relevant content, Mobile-friendliness, AND Quality backlinks. Score: 0/1</span>`;
        }

        // Show Results
        resultsDiv.classList.remove('hidden');
        overallScore.innerHTML = `<strong>Total Score: ${score} / ${totalQuestions}</strong>`;

        // Calculate pass / fail (3/5 or 60% to pass)
        if (score >= 3) {
            overallResult.innerHTML = `<span class="correct-text">Result: PASS! Great job!</span>`;
            resultsDiv.className = 'correct-bg';
        } else {
            overallResult.innerHTML = `<span class="incorrect-text">Result: FAIL. Please review the material and try again.</span>`;
            resultsDiv.className = 'incorrect-bg';
        }

        // Disable submit button until reset
        submitBtn.disabled = true;

        // Scroll down to results
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });

    // Reset Logic
    resetBtn.addEventListener('click', function () {
        form.reset();
        resultsDiv.classList.add('hidden');
        submitBtn.disabled = false;

        // Clear feedbacks
        document.querySelectorAll('.feedback').forEach(el => {
            el.innerHTML = '';
            el.className = 'feedback';
        });
    });
});