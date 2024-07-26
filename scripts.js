document.getElementById('about-button').addEventListener('click', function() {
    document.getElementById('bio-content').classList.toggle('show');
    document.getElementById('bio-content-container').classList.toggle('no-pointer');
});

document.getElementById('resume-button').addEventListener('click', function() {
    document.getElementById('resume-content').classList.toggle('show');
    document.getElementById('resume-content-container').classList.toggle('no-pointer');
});

document.getElementById('closeAboutButton').addEventListener('click', function() {
    document.getElementById('bio-content').classList.toggle('show');
    document.getElementById('bio-content-container').classList.toggle('no-pointer');
});

document.getElementById('closeResumeButton').addEventListener('click', function() {
    document.getElementById('resume-content').classList.toggle('show');
    document.getElementById('resume-content-container').classList.toggle('no-pointer');
});