var containerForSkillsWordMap = document.getElementById('skillsWordMapDiv');
var jsonOfSkills;
// var colors = ["white", "lime", "red", "blue", "cyan", "magenta", "yellow", "gray"];
// var colors = ["lime", "red", "orange", "yellow", "blue", "indigo", "violet"];
// var colors = ["rgb(0, 255, 0)", "rgb(30, 255, 30)", "rgb(60, 255, 60)", "rgb(90, 255, 90)", "rgb(120, 255, 120)", "rgb(150, 255, 150)", "rgb(180, 255, 180)", "rgb(210, 255, 210)", "rgb(240, 255, 240)", "rgb(255, 255, 255)"];
// var colors = ["rgb(0, 255, 0)", "rgb(60, 255, 60)", "rgb(120, 255, 120)", "rgb(120, 255, 120)", "rgb(60, 255, 60)", "color: rgb(0, 255, 0)"];
// var colors = ["rgb(0, 255, 0)", "rgb(60, 255, 0)", "rgb(120, 255, 0)", "rgb(180, 255, 0)", "rgb(240, 255, 0)", "rgb(255, 255, 0)"];
var colors = ['white'];
var colorsIndex = 0;


function makeSkillsWordMap(jsonOfSkills){

    jsonOfSkills.skillsAndFontSizes.forEach( (el, i) => {
        var obj = el;
        for (var key in obj){
            var value = obj[key];
        }
        // console.log(`key: ${key}, value: ${value}`);
        let thisSkillSpan = document.createElement('span');
        if(i != jsonOfSkills.skillsAndFontSizes.length-1 && i != 0){
            thisSkillSpan.innerHTML = `${key}, `;
        } else {
            thisSkillSpan.innerHTML = `${key}`;
        }
        thisSkillSpan.style.fontSize = `${value}pt`;
        thisSkillSpan.style.color = colors[colorsIndex];
        containerForSkillsWordMap.append(thisSkillSpan);

        colorsIndex ++;
        if(colorsIndex >= colors.length) colorsIndex = 0;
    })
}



function fetchJSON(){
    fetch("../js/skills.json")
        .then( response => jsonOfSkills = response.json() )
        .then( jsonOfSkills => makeSkillsWordMap(jsonOfSkills) )
        .catch((error) => console.log(error));
}
fetchJSON();