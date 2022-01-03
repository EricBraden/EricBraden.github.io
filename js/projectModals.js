var JSONofProjects;
const projectThumbnailsDiv = document.getElementById('div-projectThumbnails');
const projectsContainer = document.getElementById('section-projects');
const modalBackground = document.createElement('div');
var mouseX = 0;
var mouseY = 0;


function createModalBackground(){
    modalBackground.setAttribute('id', 'modalBackground');
    projectsContainer.append(modalBackground);
}
createModalBackground();




function growModalFromCursor(thisModal) {
    setModalTransitionTime(thisModal, 0);
    // resizeModal(thisModal, 0, 0) // to 0 x 0 px
    thisModal.style.transform = 'scale(0)';
    moveModal(thisModal, mouseX, mouseY)
    setTimeout(()=>{ // need this to work properly
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        setModalTransitionTime(thisModal, 700);
        showModal(thisModal);
        thisModal.style.transform = 'scale(1)';
        resizeModal(thisModal, viewportWidth-(viewportWidth*0.3), viewportHeight-(viewportHeight*0.3)) // to fill most of center of screen (-30%, and centered by dividing in half)
        moveModal(thisModal, ((viewportWidth/2)-(viewportWidth-(viewportWidth*0.3))/2), ((viewportHeight/2)-(viewportHeight-(viewportHeight*0.3))/2)); // to center of screen (subtract original values)
    }, 1)
}





function showModal(thisModal){
    thisModal.classList.remove('hiddenModal');
    thisModal.classList.add('visibleModal');
    modalBackground.style.display = 'block';
    modalBackground.addEventListener('click', () => {
        hideModal(thisModal);
    })
}
function hideModal(thisModal){
    setModalTransitionTime(thisModal, 0); // to 0 ms
    modalBackground.style.display = 'none';
    thisModal.classList.remove('visibleModal');
    thisModal.classList.add('hiddenModal');
}
function getMousePosition(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
}
function setModalTransitionTime(thisModal, time){
    thisModal.style.transition = `${time}ms`
}
function moveModal(divToMove, x, y){
    divToMove.style.left = `${x}px`;
    divToMove.style.top = `${y}px`;
}
function resizeModal(thisModal, newXDim, newYDim){
    thisModal.style.width = `${newXDim}px`;
    thisModal.style.height = `${newYDim}px`;
}







function createThumbnails(JSONofProjects){
    JSONofProjects.allProjects.forEach( (thisProject) => {

        let newDivForThisProject = document.createElement('div');
        newDivForThisProject.classList.add('projectThumbnail');
        projectThumbnailsDiv.append(newDivForThisProject);

        let newImage = document.createElement('img');
        newImage.setAttribute('src', `./images/${thisProject.id}.png`);
        newDivForThisProject.append(newImage);

        let newDivForThumbnailCaption = document.createElement('div');
        newDivForThumbnailCaption.classList.add('projectThumbnailCaptionDiv');
        newDivForThumbnailCaption.innerText = `${thisProject.thumbnailCaption}`;
        newDivForThisProject.append(newDivForThumbnailCaption);

        let thisModal = document.getElementById(`div-${thisProject.id}`);
        newDivForThisProject.addEventListener('click', (e) => {
            getMousePosition(e);
            growModalFromCursor(thisModal);
        });
        newImage.addEventListener('click', (e) => {
            getMousePosition(e);
            growModalFromCursor(thisModal);
        })
        newDivForThumbnailCaption.addEventListener('click', (e) => {
            getMousePosition(e);
            growModalFromCursor(thisModal);
        })

        projectThumbnailsDiv.append(newDivForThisProject);
    })
}

function createModals(JSONofProjects){
    JSONofProjects.allProjects.forEach( (element) => {
        createOneModal(
            element.id, 
            element.projectTitle, 
            element.projectDate, 
            element.projectSummary, 
            element.projectSkillsUsed, 
            element.gitHubRepoAddress
            )
        })
}
function createOneModal(
    projectFileName, 
    projectTitle, 
    projectDate, 
    projectSummary, 
    projectSkillsUsed, 
    gitHubRepoAddress){

        var newDivForThisProject = document.createElement('div');
        newDivForThisProject.classList.add('projectModal');
        newDivForThisProject.setAttribute('id', `div-${projectFileName}`)

        newDivForThisProject.classList.add('hiddenModal');

        var newImg = document.createElement('img');
        newImg.classList.add('modalImage');
        newImg.setAttribute('src', `./images/big-${projectFileName}.png`);
        newDivForThisProject.append(newImg);

        var newBigProjectSummaryDiv = document.createElement('div');
        newBigProjectSummaryDiv.classList.add('newBigProjectSummaryDiv');
        
        var titleDiv = document.createElement('span');
        titleDiv.innerText = `${projectTitle}`;
        titleDiv.classList.add('modalTitle');
        newBigProjectSummaryDiv.append(titleDiv);
        
        var closeX = document.createElement('span');
        closeX.innerHTML = '&times;';
        closeX.setAttribute('title', 'Close');
        closeX.classList.add('close');
        closeX.addEventListener('click', ()=>{
            hideModal(newDivForThisProject);
        })
        newBigProjectSummaryDiv.append(closeX);
        
        var dateDiv = document.createElement('div');
        dateDiv.innerText = `Date: ${projectDate}`;
        dateDiv.classList.add('modalDate');
        newBigProjectSummaryDiv.append(dateDiv);

        var summaryDiv = document.createElement('div');
        summaryDiv.innerText = `Summary: ${projectSummary}`;
        summaryDiv.classList.add('modalSummary')
        newBigProjectSummaryDiv.append(summaryDiv);

        var skillsDiv = document.createElement('div');
        skillsDiv.innerText = `Skills: ${projectSkillsUsed}`;
        skillsDiv.classList.add('modalSkills');
        newBigProjectSummaryDiv.append(skillsDiv);

        var linkToGitHubRepoAddress = document.createElement('div');
        var linkToRepo = document.createElement('a');
        linkToRepo.innerText = gitHubRepoAddress;
        linkToRepo.setAttribute('href', gitHubRepoAddress)
        linkToGitHubRepoAddress.innerHTML = 'GitHub Repo: ';
        linkToGitHubRepoAddress.append(linkToRepo);
        linkToGitHubRepoAddress.classList.add('modalGitHubRepoAddress');
        newBigProjectSummaryDiv.append(linkToGitHubRepoAddress);
        
        newDivForThisProject.append(newBigProjectSummaryDiv);
        projectsContainer.append(newDivForThisProject);
    }




function createThumbnailsAndModals(JSONofProjects){
    createModals(JSONofProjects);
    createThumbnails(JSONofProjects);
}


function fetchJSON(){
    fetch("../js/projects.json")
        .then( response => JSONofProjects = response.json() )
        .then( JSONofProjects => createThumbnailsAndModals(JSONofProjects) )
        .catch((error) => console.log(error));
}
fetchJSON();

