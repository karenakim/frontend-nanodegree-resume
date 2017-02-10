	var bio = {
	    "name": "Karen JIN",
	    "role": "Super Web Developer",
	    "contacts": {
	        "mobile": "123 456 789",
	        "email": "karen@super.com",
	        "github": "karenakim",
	        "location": "Manchester, NH"
	    },
	    "welcomeMessage": "Inspired to change to world...one page at a time,  as a web developer",
	    "skills": [
	        "sleep", "drink", "eat"
	    ],
	    "biopic": "images/me.jpg"
	};

	var education = {
	    "schools": [{
	            "name": "University of Windsor",
	            "location": "Windsor, Ontario",
	            "degree": "Master of Science",
	            "majors": ["Computer Science"],
	            "description": "Did a good job",
	            "dates": "June 2011 - 2016"
	        },
	        {
	            "name": "University of Windsor",
	            "location": "Windsor, Ontario",
	            "degree": "Bachelor of Science",
	            "majors": ["Computer Science"],
	            "description": "Did a good job",
	            "dates": "June 1999 - 2005"
	        }
	    ],

	    "onlineCourses": [{
	        "title": "Web Front End development",
	        "school": "Udacity",
	        "dates": "June 2016 - now",
	        "url": "www.example.com"
	    }]
	};

	var work = {
	    "jobs": [{
	            "employer": "Home",
	            "title": "Home Maker",
	            "location": "Portsmouth, NH",
	            "dates": "2008-2016",
	            "description": "Worked so so hard!"
	        },
	        {
	            "employer": "University of Windsor",
	            "title": "Instructor",
	            "location": "Seattle, WA",
	            "dates": "2001-2006",
	            "description": "Teaching is fun."
	        },
	        {
	            "employer": "AT&T",
	            "title": "Network Admin",
	            "location": "Shanghai, China",
	            "dates": "1997-1999",
	            "description": "Loved working with servers."
	        }
	    ]
	};

	var projects = {
	    "projects": [{
	            "title": "How to made bread",
	            "dates": "2015-2016",
	            "description": "worked so so hard!",
	            "images": ["images/project1.jpg"]
	        },
	        {
	            "title": "How to clean a house",
	            "dates": "2016-2017",
	            "description": "worked so hard!",
	            "images": ["images/project2.png"]
	        },
	        {
	            "title": "How to clean a room",
	            "dates": "2012-2014",
	            "description": "worked so hard!",
	            "images": ["images/project3.png"]
	        }
	    ]
	};

	bio.display = function() {
	    var formattedName = HTMLheaderName.replace("%data%", bio.name);
	    $("#header").append(formattedName);

	    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	    $("#header").append(formattedRole);


	    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	    $("#header").append(formattedWelcomeMsg);

	    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	    $("#header").append(formattedBiopic);

	    // $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	    // $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
	    // $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));


	    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	    $("#header").append(HTMLskillsStart);
	    bio.skills.forEach(function(skill) {
	        $("#header").append(HTMLskills.replace("%data%", skill));
	    });

	    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	};


	education.display = function() {
	    education.schools.forEach(function(school) {
	        $("#education").append(HTMLschoolStart);
	        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
	        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
	        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
	        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
	        school.majors.forEach(function(major) {
	        	$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
	    	});
	    });

	    education.onlineCourses.forEach(function(onlineCourse) {
	        $(".education-entry:last").append(HTMLonlineClasses.replace("%data%", onlineCourse.school));
	        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", onlineCourse.title));
	        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
	        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", onlineCourse.url));
	    });
	};

	work.display = function() {
	    work.jobs.forEach(function(job) {
	        $("#workExperience").append(HTMLworkStart);

	        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
	        var formattedEmployerTitle = formattedEmployer + formattedTitle;
	        $(".work-entry:last").append(formattedEmployerTitle);

	        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
	        $(".work-entry:last").append(formattedDates);

	        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
	        $(".work-entry:last").append(formattedDescription);

	        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
	        $(".work-entry:last").append(formattedLocation);

	    });
	};


	projects.display = function() {
	    projects.projects.forEach(function(project) {
	        $("#projects").append(HTMLprojectStart);

	        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
	        $(".project-entry:last").append(formattedTitle);

	        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
	        $(".project-entry:last").append(formattedDates);

	        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
	        $(".project-entry:last").append(formattedDescription);

	        if (project.images.length > 0) {
	            project.images.forEach(function(image) {
	                var formatedImage = HTMLprojectImage.replace("%data%", image);
	                $(".project-entry:last").append(formatedImage);
	            });
	        }
	    });
	};

	bio.display();
	work.display();
	projects.display();
	education.display();

	$("#mapDiv").append(googleMap);



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