
document.addEventListener("DOMContentLoaded", function() {
    const SOCresources = [
        {
            title: "Google Season of Docs",
            description:"Google Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. Together we raise awareness of open source, of docs, and of technical writing...",
            mainUrl: "https://developers.google.com/season-of-docs/",
            timelineContent:"",
            timelineUrl:"https://developers.google.com/season-of-docs/docs/timeline",
            rewardsContent:"3000 USD to 6600 USD",
            rewardsUrl:""
        },
        
        {
            title: "Outreachy",
            description:"Outreachy provides internships in open source and open science. Outreachy provides internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living... ",
            mainUrl: "https://www.outreachy.org/",
            timelineContent:" May to August, or December to March",
            timelineUrl:"",
            rewardsContent:" $7,000 USD",
            rewardsUrl:""
        },
        {
            title: "Google Summer of Code",
            description:"Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors... ",
            mainUrl: "https://summerofcode.withgoogle.com/",
            timelineContent:"Visit",
            timelineUrl:"https://developers.google.com/open-source/gsoc/timeline",
            rewardsContent:" 1500 USD to 3000 USD",
            rewardsUrl:""
        },
        {
            title: "MLH Fellowship",
            description:"A fully remote, 12-week internship alternative where participants earn a stipend and learn to collaborate on real open source projects with peers and engineers from top companies... ",
            mainUrl: "https://fellowship.mlh.io/",
            timelineContent:"May - Aug & Jun - Sep",
            timelineUrl:"",
            rewardsContent:" up to $5000",
            rewardsUrl:""
        },
        {
            title: "XROS Fellowship",
            description:"The XROS Fellowship Program supports Indian XR developers [AR, VR, MR, 3D modeling, etc] through fellowships. It is fully remote, 4 week open-source fellowship that offers stipends, mentoring by industry experts on open-source XR projects.",
            mainUrl: "",
            timelineContent:"Visit",
            timelineUrl:"https://xrosfellowship.ficci.in/",
            rewardsContent:"INR 4 Lakh",
            rewardsUrl:""
        }

    ]

    const OpenSourceCompetitions = [
        {
            title: "Hacktoberfest",
            description:"A month-long celebration of open-source projects, their maintainers, and the entire community of contributors...",
            mainUrl: "",
            timelineContent:"October",
            timelineUrl:"",
            rewardsContent:"Swag rewards",
            rewardsUrl:""
        },
        {
            title:"Girlscript Summer of Code",
            description: "GirlScript Summer of Code is a 3-month long OpenSource program by GirlScript Foundation... ",
            mainUrl: "https://gssoc.girlscript.tech/",
            timelineContent:"May - August",
            timelineUrl:"",
            rewardsContent:"Prizes, swag rewards and internship opportunities for winners",
            rewardsUrl:"",
        },
        {
            title:"Hacksquad",
            description: "Hacksquad is here to enhance your Swag, meet with more community members and participate in workshops from our great sponsors.... ",
            mainUrl: "https://www.hacksquad.dev/",
            timelineContent:" October",
            timelineUrl:"",
            rewardsContent:" Amazing Swags rewards for Top-60 Teams",
            rewardsUrl:"",
        },

    ]

    const UniversityOpenSource = [
        {
            title: "JGEC Winter of Code",
            description:"JWoC is an open-source program organized by Developers' JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development....",
            mainUrl: "https://www.jwoc.tech/",
            timelineContent:" Jan - Feb",
            timelineUrl:"",
            rewardsContent:"Paid Internship Opportunities.Coupons & Free Domains.Goodies & Cool Stickers.Workshops & MasterclassNamees.Verified Certificates.",
            rewardsUrl:""
        },
        {
            title:"Kharagpur Winter Of Code",
            description: "Kharagpur Winter of Code is a 5-week long online program for students who are new to open source software development. The program not only helps students to get involved in open source, but also prepares them for many open source summer programs; Google Summer of Code being one of them.... ",
            mainUrl: "https://kwoc.kossiitkgp.org/",
            timelineContent:" November - February",
            timelineUrl:"",
            rewardsContent:" Amazing Swags rewards",
            rewardsUrl:"",
        },
        {
            title:"NJACK Winter of Code",
            description: "NJACK Winter of Code is an initiative by NJACK, IIT Patna, targeted at students who have never participated in Free or Open Source Software (FOSS) development before, as well as at those who have already become an expert in Open Source Development and are currently contributing to projects of any domain, say Web, Mobile, Machine Learning, Blockchain, IoT etc. It also aims to prepare them for bigger programs and opportunities like Google Summer of Code, Outreachy etc....",
            mainUrl: "https://njackwinterofcode.github.io/",
            timelineContent:"December",
            timelineUrl:"",
            rewardsContent:" Amazing Swags rewards",
            rewardsUrl:"",
        },
        {
            title:"FOSS OverFlow",
            description: "FOSS Overflow is a program by OpenLake and GDSC IIT Bhilai that helps students to get started with the world of open source by helping them build real world open sourced projects under guidance of awesome mentors...",
            mainUrl: "https://fossoverflow.dev/",
            timelineContent:" Dec-Feb ",
            timelineUrl:"",
            rewardsContent:"Stipend upto 10k INR, Swags & Certification.",
            rewardsUrl:"",
        },
    ]

    function createResourceItem(resource){
        var final = `<div class="card">
            <h3>${resource.title}</h3>
            <p>${resource.description} <a href=${resource.mainUrl}>Read More</a>
            </p>
            <p><strong>Timeline:</strong> <a href="${resource.mainUrl}">Visit</a>
          </p>
            <p><strong>Rewards:</strong> ${resource.rewardsContent}</p>
            </div>`
        if (resource.mainUrl == ""){
            final = final.replace(`<a href=${resource.mainUrl}>Read More</a>`,'');
            return final;
        }
        if(resource.timelineUrl==""){
            final = final.replace(`<a href="${resource.mainUrl}">Visit</a>`,resource.timelineContent);
            return final;
        }
        
        return final;

    }

    const SOCResourcesContainer = document.getElementById("SOC");
    const OSCResourcesContainer = document.getElementById("OSC");
    const UNIVResourcesContainer = document.getElementById("UNIV");

    SOCresources.forEach(resource => {
        SOCResourcesContainer.innerHTML += createResourceItem(resource);
    });

    OpenSourceCompetitions.forEach(resource => {
        OSCResourcesContainer.innerHTML += createResourceItem(resource);
    });
    UniversityOpenSource.forEach(resource => {
        UNIVResourcesContainer.innerHTML += createResourceItem(resource);
    })
});  
