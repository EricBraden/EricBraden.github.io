const projectsJSON = {
    'roboHand': {
        'name':'Robotic Hand', 
        'pageUrl':'./projects/roboticHand.html', 
        'picUrl':'../images/thumbnail01.png', 
        'projectDate':'currently active, 2022-present', 
        'summary':'A biomimetic robot hand that uses cable-driven fingers and high-resolution tactile sensors.', 
        'skills':'Python, C++, Computer Aided Drafting (CAD), mechanical design, 3D printing, kinematics, absolute optical encoders made from scratch, modified srevos, electronics, microcontrollers, and more...'
    },
    'codingBootcampProject07': {
        'name':'Poetry Editor', 
        'pageUrl':'https://github.com/PhoenixRisen500/FinalProject-Poetry-Creation-Site', 
        'picUrl':'../images/thumbPoetryEditor.png', 
        'projectDate':'Mar., 2020 (coding bootcamp final project)', 
        'summary':'Poetry creation website showcasing the full stack of skills learned at \"We Can Code IT\". Features include: text editor with formatting, example of different types of poems, word search tool to find similar sounding or rhyming words. ', 
        'skills':'teamwork, communication, JPA database with relational mapping, asynchronous JavaScript, single page application, Spring MVC, etc.'
    }, 
    'codingBootcampProject06': {
        'name':'Jukebox Manager Site', 
        'pageUrl':'https://github.com/PhoenixRisen500/Jukebox-Manager-Site', 
        'picUrl':'../images/thumbJukeboxManagerSite.png', 
        'projectDate':'Mar., 2020 (coding bootcamp classwork)', 
        'summary':'Single page application with JPA and the ability to add and remove items from the database. ', 
        'skills':''
    }, 
    'codingBootcampProject05': {
        'name':'Donut Clicker Game', 
        'pageUrl':'https://github.com/PhoenixRisen500/donutMakerGame', 
        'picUrl':'../images/thumbDonutMaker.png', 
        'projectDate':'Feb., 2020 (coding bootcamp classwork)', 
        'summary':'JavaScript game with sound, dynamic HTML and DOM manipulation. ', 
        'skills':''
    }, 
    'codingBootcampProject04': {
        'name':'Music Review Site', 
        'pageUrl':'https://github.com/PhoenixRisen500/Music-Review-Site', 
        'picUrl':'../images/thumbMusicReviewSite.png', 
        'projectDate':'Jan., 2020 (coding bootcamp classwork)', 
        'summary':'Uses an H2 relational database to store comments. Users may add and remove hashtags too.', 
        'skills':''
    }, 
    'codingBootcampProject03': {
        'name':'Virtual Pet Shelter Amok App', 
        'pageUrl':'https://github.com/PhoenixRisen500/Virtual-Pet-Shelter-Amok', 
        'picUrl':'../images/thumbVirtualPetAmok.png', 
        'projectDate':'Dec., 2020 (coding bootcamp classwork)', 
        'summary':'Similar to Virtual Pet Shelter, but with the addition of robotic pets with additional needs. Utilizes inheritance to differentiate between normal and robotic pets\' needs.', 
        'skills':''
    },
    'codingBootcampProject02': {
        'name':'Virtual Pet Shelter App', 
        'pageUrl':'https://github.com/PhoenixRisen500/module-1-week-4-virtual-pet-shelter-targaryen-master', 
        'picUrl':'../images/thumbVirtualPetShelter.png', 
        'projectDate':'Dec., 2020 (coding bootcamp classwork)', 
        'summary':'User input adds & removes entries from a hashMap of pets, randomly generates a 15 digit microchip number for each pet, and pets\' hunger & thirst levels are also updated based upon user input. ', 
        'skills':''
    }, 
    'codingBootcampProject01': {
        'name':'Virtual Pet App', 
        'pageUrl':'https://github.com/PhoenixRisen500/Virtual-Pet-Eric-Braden', 
        'picUrl':'../images/thumbVirtualPet.png', 
        'projectDate':'Dec., 2020 (coding bootcamp classwork)', 
        'summary':'Game loop updates values based upon user input', 
        'skills':''
    }
}
const parentEl = document.getElementById('parentEl');

for (thisProject in projectsJSON){
    console.log(`${thisProject}...name: "${projectsJSON[thisProject].name}"...pageURL: ${projectsJSON[thisProject].pageUrl}...imageURL: ${projectsJSON[thisProject].picUrl}`);

    var newProject = document.createElement('section');
    newProject.classList.add('oneProject');

    var newImgLink = document.createElement('a');
    var newImage = document.createElement('img');
    newImage.src = `${projectsJSON[thisProject].picUrl}`;
    newImage.classList.add('projectThumbnail');
    newImgLink.setAttribute('href', `${projectsJSON[thisProject].pageUrl}`);
    newImgLink.append(newImage);
    newProject.append(newImgLink);

    var wrapperForText = document.createElement('div');
    wrapperForText.classList.add('wrapperForText');

    var newTitleLink = document.createElement('a');
    var newTitle = document.createElement('span');
    newTitle.classList.add('projectTitle');
    newTitle.innerHTML = `${projectsJSON[thisProject].name}`;
    newTitleLink.setAttribute('href', `${projectsJSON[thisProject].pageUrl}`);
    newTitleLink.append(newTitle);
    wrapperForText.append(newTitleLink);

    var newBR = document.createElement('br');
    wrapperForText.append(newBR);

    var newDate = document.createElement('div')
    newDate.classList.add('projectDate');
    newDate.innerHTML = `[DATE: ${projectsJSON[thisProject].projectDate}]`;
    wrapperForText.append(newDate);

    var newBR = document.createElement('br');
    wrapperForText.append(newBR);

    var newSummary = document.createElement('span');
    newSummary.classList.add('projectSummary');
    newSummary.innerHTML = `SUMMARY: ${projectsJSON[thisProject].summary}`;
    wrapperForText.append(newSummary);

    var newBR = document.createElement('br');
    wrapperForText.append(newBR);

    var newSkills = document.createElement('span');
    newSkills.classList.add('projectSkills');
    newSkills.innerHTML = `SKILLS: ${projectsJSON[thisProject].skills}`;
    wrapperForText.append(newSkills);


    newProject.append(wrapperForText);

    parentEl.append(newProject);
}
