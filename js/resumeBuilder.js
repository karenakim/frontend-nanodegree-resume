var bio = {
	"name" : "Karen JIN",
	"role" : "Super Web Developer",
	"contacts" : {
		"mobile" : "123 456 789",
		"email" : "karen@super.com",
		"github" : "Karen Kim",
		"location" : "Manchester, NH"
	},
	"welcomeMessage" : "Hello world!!!",
	"skills" : [
		"sleep", "drink", "eat"
	],
	"bioPic" : "images/fry.jpg"
}

var work = {
	"jobs" : [
		{
			"employer" : "Home",
			"title" : "Home Maker",
			"location" : "Portsmouth, NH",
			"dates" : "2008-2016",
			"description" : "Worked so so hard!"
		},
		{
			"employer" : "University of Windsor",
			"title" : "Instructor",
			"location" : "Seattle, WA",
			"dates" : "2001-2006",
			"description" : "Teaching is fun."
		},
		{
			"employer" : "AT&T",
			"title" : "Network Admin",
			"location" : "Shanghai, China",
			"dates" : "1997-1999",
			"description" : "Loved working with servers."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "How to made bread",
			"dates" : "2015-2016",
			"description" : "worked so so hard!",
			"images" : ["http://ualr.edu/itservices/files/2006/10/projectManagement.jpg"]
		},
		{
			"title" : "How to clean a house",
			"dates" : "2016-2017",
			"description" : "worked so hard!",
			"images" : ["http://www.novosystems.uk/index_htm_files/1206.png"]
		},
		{
			"title" : "How to clean a room",
			"dates" : "2012-2014",
			"description" : "worked so hard!",
			"images" : ["http://ualr.edu/itservices/files/2006/10/projectManagement.jpg"]
		}
	]
};

var education = {
    "schools" : [
		{
			"name" : "University of Windsor",
			"location" : "Windsor, Ontario",
			"degree" : "Master of Science",
			"major" : ["Computer Science"],
			"description" : "Did a good job"
		},
		{
			"name" : "University of Windsor",
			"location" : "Windsor, Ontario",
			"degree" : "Bachelor of Science",
			"major" : ["Computer Science"],
			"description" : "Did a good job"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBiopic);

$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));


function displayWork() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });

// function locationizer(work_obj){
// 	var locationArray = [];

// 	for (job in work_obj.jobs) {
// 		var newLocation = work_obj.jobs[job].location;
// 		locationArray.push(newLocation);
// 	}
// 	return locationArray;
// }

// console.log(locationizer(work));


projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);


		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0){
			for (image in projects.projects[project].images){
				var formatedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formatedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);

