//1. For the given JSON iterate over all for loops (for, for in, for of, forEach)
var StudentName={
    "Name":"Seenivasan",
    "Batch":"B53WE",
    "Gender":"Male",
    "Course":"FSD-MERN"
    }

    let valuesArray = Object.entries(StudentName);
    //For loop
    console.log("ITERATE USING FOR LOOP")
for (let i = 0; i < valuesArray.length; i++) {
    console.log(valuesArray[i].join(": "));
}
//For of
console.log("ITERATE USING FOR OF LOOP")
for (let [key, value] of valuesArray) {
   console.log(`${key}: ${value}`);
}
//For Each
console.log("ITERATE USING FOR EACH LOOP")
valuesArray.forEach(function(value) {
   console.log(value.join(": "));
});

//For In
console.log("ITERATE USING FOR IN LOOP")
    for(var Stud in StudentName){
    console.log(`${Stud}: ${StudentName[Stud]}`);
    }
    
    //2. Create your own resume data in JSON format:
    console.log("RESUME JSON FORMAT")
    var MyResume={
       "personalInformation": {
          "name": "SEENIVASAN K B",
          "mobile": "+91 9025725340",
          "email": "kbseenikb@gmail.com",
          "dateOfBirth": "1st July, 1992",
          "languagesKnown": ["Tamil", "English"],
          "address": "2/214A, Ramathulasipuram Street, Kaitharinagar, Nilayur, Madurai-625005."
       },
       "professionalProfile": {
          "objective": "Seeking challenging software development opportunities to leverage my technical skills and problem-solving abilities in a dynamic and collaborative work environment. Committed to delivering high-quality code and contributing to the success of cutting-edge projects.",
          "profileSynopsis": [
             "Have good experience in presenting prototypes and applications to clients.",
             "Have strong knowledge in Financial Application Development and maintenance.",
             "Have 10 years of experience in web-based programming using .NET framework.",
             "Have 9 years of experience in maintaining Finance Management Application for Poultry domain."
          ]
       },
       "experience": [
          {
             "company": "J.J. Tech. Software Solutions(OPC) PVT LTD",
             "designation": "Manager - Software Development",
             "duration": "Since Sep’13 - till now (10 years 0 months)",
             "keyRoles": [
                "Occupied with the development and support program for different projects to modify the changes and add new requirements of the client.",
                "Provide reliable solutions to a variety of problems and follow-up for client satisfaction.",
                "Estimate level of effort, evaluate new options of similar technology and offer suggestions to improve processes."
             ]
          }
       ],
       "itSkills": {
          "operatingSystem": "Windows",
          "webGUI": ["ASP.NET", "C#", "HTML5"],
          "webServer": "IIS 7 & 8",
          "middleLayer": "WebAPI",
          "scriptingLanguage": "Javascript",
          "database": "Sql server",
          "reporting": "Crystal reports"
       },
       "projectsUndertaken": [
          {
             "project": "PoulFix",
             "client": ["Shanthi Feeds", "Sakthi Hatcheries", "Vangili Feeds", "Sunstars Poultry Products", "MBS Hatcheries", "Super Chicken", "Srinivasa Poultry Farm", "Nutri Feeds", "etc."],
             "technologiesUsed": ["ASP.NET with Framework 4.0, 4.7.2", "Javascript", "SAP Crystal reports", "SQL server 2008 R2, 2019"],
             "modules": ["Accounts", "Integration", "FeedMill", "Breeder", "Layer", "Hatchery", "Transport"],
             "roleAndResponsibility": "Understanding the requirement, Designing Prototype, Presenting the prototype to client, coding, testing, and maintenance."
          },
          {
             "project": "FarmTrac",
             "client": ["Shanthi Feeds", "Sunstars Poultry Products"],
             "technologiesUsed": ["ASP.NET Web API with Framework 4.6.1", "Apachecordova", "HTML5", "bootstrap", "Javascript", "SQL server 2008 R2", "Sqlite", "JSON"],
             "functionalDescription": "This mobile application is capable of keeping track of the records of bird's livestock, farm performance, supervisor performance.",
             "roleAndResponsibility": "Understanding the requirement, Designing Prototype, Presenting the prototype to client, coding, and testing."
          },
          {
             "project": "Retailer",
             "client": ["Super Chicken"],
             "technologiesUsed": ["ASP.NET Web API with Framework 4.6.1", "Apachecordova", "HTML5", "bootstrap", "Javascript", "SQL server 2008 R2"],
             "functionalDescription": "This billing software for retail shops works even when the internet is disconnected. It saves the data on the desktop and later updates to the web server when the internet reconnects.",
             "roleAndResponsibility": "Understanding the requirement, Designing Prototype, Presenting the prototype to client, coding, testing, and maintenance."
          },
          {
             "project": "Sales Plus",
             "client": ["Shanthi Feeds", "Mbs Hatcheries"],
             "technologiesUsed": ["ASP.NET Web API with Framework 4.6.1", "Apachecordova", "HTML5", "bootstrap", "Javascript", "SQL server 2008 R2"],
             "functionalDescription": "This software is capable of getting weight from the weighing scale through Bluetooth attached to the weighing scale and store data in mobile.",
             "roleAndResponsibility": "Understanding the requirement, Designing Prototype, Presenting the prototype to client, coding, testing, and maintenance."
          },
          {
             "project": "Assist Accountant",
             "client": ["Sakthi Hatcheries"],
             "technologiesUsed": ["ASP.NET Web API with Framework 4.6.1", "Apachecordova", "HTML5", "bootstrap", "Javascript", "SQL server 2008 R2"],
             "functionalDescription": "The key feature of this application includes accounts receivable, accounts payable, cash management.",
             "roleAndResponsibility": "Understanding the requirement, Designing Prototype, Presenting the prototype to client, coding, testing, and maintenance."
          }
       ],
       "education": [
          {
             "course": "B.Sc (CS)",
             "institution": "Sourashtra College, Madurai.",
             "boardUniversity": "Madurai Kamaraj University, Madurai.",
             "yearOfPassing": 2012,
             "percentageSecured": 73.47
          },
          {
             "course": "HSC",
             "institution": "Sourashtra Hr.Sec.School, Madurai",
             "boardUniversity": "TN State board",
             "yearOfPassing": 2009,
             "percentageSecured": 81.25
          },
          {
             "course": "SSLC",
             "institution": "Savithabai (Kovai) Hr.Sec.School, Madurai",
             "boardUniversity": "TN State board",
             "yearOfPassing": 2007,
             "percentageSecured": 85
          }
       ]
    }
    console.log(MyResume);