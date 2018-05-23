
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','https://api.myjson.com/bins/15zsje');
  ourRequest.onload = function(){
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
    console.log("hi2");

  };
  ourRequest.send();


function createHTML(courseData){


    var rawTemplate = document.getElementById("courseTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(courseData);
    console.log("hi");
    console.log(courseData);

    var courseContainer = document.getElementById("course-info");
    courseContainer.innerHTML = ourGeneratedHTML;

}
