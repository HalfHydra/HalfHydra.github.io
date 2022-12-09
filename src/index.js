let content_container = document.getElementById('container');

let projects = {};

let settings = {};

let content_text = {};

let videos = {};

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

window.addEventListener('load', () => {
    fetch("./src/projects.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            projects = jsondata;
            return fetch("./src/settings.json");
        })
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            settings = jsondata;
            return fetch("./src/content.json");
        })
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            content_text = jsondata;
            return fetch("./src/videos.json");
        })
        .then(response => {
            return response.json();
        })
        .then(response => {
            videos = response;
            generatePage();
        })
});

let generatePage = () => {
    let header_container = document.getElementById('header_container');

    let headers = makeHeaders();
    headers.forEach(header => {
        header_container.appendChild(header);
    })

    let content = makeContent();
    content.forEach(node => {
        container.appendChild(node);
    })

    let project_container = document.getElementById('Projects_content');

    let projectModules = makeProjectModules();
    projectModules.forEach(project => {
        project_container.appendChild(project)
    })

    let video_container = document.getElementById('YouTube_content');

    console.log(content_text);

    let videoHeader = generateTextPanel(content_text["youtube_header"], "project_module", "youtube_header");
    video_container.appendChild(videoHeader);

    let videosDiv = document.createElement('div');
    videosDiv.id = 'videosDiv';
    videosDiv.className = 'videosDiv';
    video_container.appendChild(videosDiv);

    let videoModules = makeVideoModules();
    videoModules.forEach(video => {
        videosDiv.appendChild(video)
    })

    let about_container = document.getElementById('About_content');

    let aboutLangauges = document.createElement('div');
    aboutLangauges.id = 'aboutLangauges';
    aboutLangauges.className = 'project_module';
    about_container.appendChild(aboutLangauges);

    let aboutLanguagesText = generateText(content_text["about_langauges_header"], "about_header");
    aboutLangauges.appendChild(aboutLanguagesText);

    let languagesDiv = document.createElement('div');
    languagesDiv.className = 'languagesDiv';
    aboutLangauges.appendChild(languagesDiv);

    Object.keys(content_text.Languages).forEach(language => {
        let languageObj = content_text.Languages[language];

        let languageDiv = document.createElement('div');
        languageDiv.className = 'languageDiv';
        languagesDiv.appendChild(languageDiv);

        let languageIconDiv = document.createElement('div');
        languageIconDiv.className = 'languageIconDiv';
        languageDiv.appendChild(languageIconDiv);

        let languageIcon = document.createElement('i');
        languageIcon.className = `${languageObj.Icon} colored languageIcon`;
        languageIconDiv.appendChild(languageIcon);

        let languageNameDiv = document.createElement('div');
        languageNameDiv.className = 'languageTextDiv';
        languageDiv.appendChild(languageNameDiv);

        let languageNameText = document.createElement("p");
        languageNameText.innerHTML = language;
        languageNameDiv.appendChild(languageNameText);

        let languageTimeDiv = document.createElement('div');
        languageTimeDiv.className = 'languageTextDiv';
        languageDiv.appendChild(languageTimeDiv);

        let languageText = document.createElement("p");
        languageTimeDiv.innerHTML = languageObj.Time;
        languageTimeDiv.appendChild(languageText);
    });

    let aboutHeader = generateTextPanel(content_text["about_header"], "project_module", "about_header");
    about_container.appendChild(aboutHeader);

    let aboutBody = generateTextPanel(content_text["about_body"], "project_module", "about_body");
    about_container.appendChild(aboutBody);

    aboutBody.appendChild(generateText(content_text["about_body_2"], "about_body"))

    let aboutBodyImg = document.createElement('img');
    aboutBodyImg.src = content_text["img_about_1"];
    aboutBodyImg.className = 'aboutBodyImg';
    aboutBody.appendChild(aboutBodyImg);

    aboutBody.appendChild(generateText(content_text["about_body_3"], "about_body"))

    let aboutBodyImg2 = document.createElement('img');
    aboutBodyImg2.src = content_text["img_about_2"];
    aboutBodyImg2.className = 'aboutBodyImg';
    aboutBody.appendChild(aboutBodyImg2);

    aboutBody.appendChild(generateText(content_text["about_body_4"], "about_body"))

    let aboutBodyImg3 = document.createElement('img');
    aboutBodyImg3.src = content_text["img_about_3"];
    aboutBodyImg3.className = 'aboutBodyImg';
    aboutBody.appendChild(aboutBodyImg3);

    aboutBody.appendChild(generateText(content_text["about_body_5"], "about_body"))

    let aboutBodyImg4 = document.createElement('img');
    aboutBodyImg4.src = content_text["img_about_4"];
    aboutBodyImg4.className = 'aboutBodyImg';
    aboutBody.appendChild(aboutBodyImg4);

    aboutBody.appendChild(generateText(content_text["about_body_6"], "about_body"))

    let aboutBodyImg5 = document.createElement('img');
    aboutBodyImg5.src = content_text["img_about_5"];
    aboutBodyImg5.className = 'aboutBodyImg';
    aboutBody.appendChild(aboutBodyImg5);

    changeTab(settings.Default_Tab);
}

let makeHeaders = () => {
    let headers = [];

    let name_header = document.createElement('div');
    name_header.id = `HalfHydra`;
    name_header.className = 'name_header_div';
    name_header.addEventListener('click', () => {
        //some sort of easter egg maybe
    })
    headers.push(name_header);

    let name_header_img = document.createElement('img');
    name_header_img.src = `./Images/Hydra.png`;
    name_header_img.className = 'name_header_img';
    name_header.appendChild(name_header_img);

    let name_header_text = document.createElement('span');
    name_header_text.innerHTML = `HalfHydra`;
    name_header_text.className = 'name_header_text';
    name_header.appendChild(name_header_text);

    let isMobile = window.mobileCheck();

    settings.Tabs.forEach(tab => {
        let header = document.createElement('div');
        header.id = tab;
        header.className = 'header_tab';
        if (isMobile) {
            header.className = 'header_tab_mobile';
        }
        header.addEventListener('click', () => {
            changeTab(tab);
        })
        headers.push(header);

        let header_text = document.createElement('span');
        header_text.innerHTML = tab;
        header_text.className = 'header_text';
        header.appendChild(header_text);
    });
    return headers;
}

let makeContent = () => {
    let content = [];
    settings.Tabs.forEach(tab => {
        let content_div = document.createElement('div');
        content_div.id = `${tab}_content`;
        content_div.className = 'content_div';
        content.push(content_div);
    });
    return content;
}

let makeProjectModules = () => {
    let modules = [];
    Object.keys(projects).forEach(project => {
        let projectObj = projects[project];

        if(!projectObj.Active) { return }

        let module = document.createElement('div');
        module.className = 'project_module';
        module.id = project;

        let module_div_1 = document.createElement('div');
        module_div_1.className = 'project_module_div_1';
        module.appendChild(module_div_1);

        let module_img = document.createElement('img');
        module_img.src = projectObj.Icon;
        module_img.className = 'project_module_img';
        module_div_1.appendChild(module_img);

        let module_div_2 = document.createElement('div');
        module_div_2.className = 'project_module_div_2';
        module.appendChild(module_div_2);

        let module_text = document.createElement('span');
        module_text.innerHTML = projectObj.Name;
        module_text.className = 'project_module_text';
        module_div_2.appendChild(module_text);

        if(projectObj.Archived) {
            module_text.innerHTML = `[Archived] ${projectObj.Name}`;
        }

        let module_desc = document.createElement('span');
        module_desc.innerHTML = projectObj.Description;
        module_desc.className = 'project_module_desc';
        module_div_2.appendChild(module_desc);

        let mobile = window.mobileCheck();
        //console.log(mobile);

        let module_div_3 = document.createElement('div');
        module_div_3.className = (mobile) ? 'project_module_div_3_mobile' : 'project_module_div_3';
        module.appendChild(module_div_3);

        let module_btn_info = document.createElement('button');
        module_btn_info.innerHTML = `View Info`;
        module_btn_info.className = 'module_btn_info';
        module_btn_info.addEventListener('click', () => {
            (module_btn_info.innerHTML == "View Info") ? module_btn_info.innerHTML = "Hide Info" : module_btn_info.innerHTML = "View Info";
            openInfo(project);
        })
        module_div_3.appendChild(module_btn_info);

        if(projectObj.hasOwnProperty(`Source`)){
            let module_btn_source = document.createElement('button');
            module_btn_source.innerHTML = `View Source`;
            module_btn_source.className = 'module_btn_source';
            module_btn_source.addEventListener('click', () => {
                openTab(projectObj.Source);
            })
            module_div_3.appendChild(module_btn_source);
        }

        if(projectObj.hasOwnProperty(`Link`)){
            let module_btn_view = document.createElement('button');
            module_btn_view.innerHTML = `Go to Project Page`;
            module_btn_view.className = 'module_btn_view';
            module_btn_view.addEventListener('click', () => {
                openTab(projectObj.Link);
            })
            module_div_3.appendChild(module_btn_view);
        }

        if(projectObj.hasOwnProperty(`Video`)){
            let module_btn_video = document.createElement('button');
            module_btn_video.innerHTML = `Watch Demo`;
            module_btn_video.className = 'module_btn_video';
            module_btn_video.addEventListener('click', () => {
                openTab(projectObj.Video);
            })
            module_div_3.appendChild(module_btn_video);
        }

        let module_div_4 = document.createElement('div');
        module_div_4.id = `${project}_long_desc`;
        module_div_4.className = 'inactive';
        module.appendChild(module_div_4);

        let module_long_desc = document.createElement('span');
        module_long_desc.innerHTML = projectObj.LongDescription;
        module_long_desc.className = 'project_module_long_desc_text';
        module_div_4.appendChild(module_long_desc);

        modules.push(module);
    });
    return modules;
}

let makeVideoModules = () => {
    let modules = [];
    Object.keys(videos).forEach(video => {
        let videoObj = videos[video];

        if(!videoObj.Active) { return }

        let module = document.createElement('div');
        module.className = 'video_module';
        module.id = video;

        let module_div_1 = document.createElement('div');
        module_div_1.className = 'video_module_div_1';
        module.appendChild(module_div_1);

        let module_text = document.createElement('span');
        module_text.innerHTML = videoObj.title;
        module_text.className = 'video_title_text';
        module_div_1.appendChild(module_text);

        let module_img = document.createElement('img');
        module_img.src = videoObj.image;
        module_img.className = 'video_module_img';
        module.appendChild(module_img);

        let module_div_2 = document.createElement('div');
        module_div_2.className = 'video_module_div_2';
        module.appendChild(module_div_2);
        
        let module_desc = document.createElement('span');
        module_desc.innerHTML = videoObj.desc;
        module_desc.className = 'video_module_desc';
        module_div_2.appendChild(module_desc);
        
        let module_div_3 = document.createElement('div');
        module_div_3.className = 'video_module_div_3';
        module.appendChild(module_div_3);
        
        let module_btn_view = document.createElement('button');
        module_btn_view.innerHTML = `Watch Video`;
        module_btn_view.className = 'module_btn_view';
        module_btn_view.addEventListener('click', () => {
            openTab(videoObj.link);
        })
        module_div_3.appendChild(module_btn_view);
        
        modules.push(module);
    });
    return modules;
}

let generateTextPanel = (text, divClass, txtClass) => {
    let textModule = document.createElement('div');
    textModule.className = divClass;

    let textModuleText = document.createElement('span');
    textModuleText.innerHTML = text;
    textModuleText.className = txtClass;
    textModule.appendChild(textModuleText);

    return textModule;
}

let generateText = (text, txtClass) => {
    let textModuleText = document.createElement('span');
    textModuleText.innerHTML = text;
    textModuleText.className = txtClass;
    return textModuleText;
}


let changeTab = (tab) => {
    document.getElementById('header_container').childNodes.forEach(header => {
        if(header.id == `HalfHydra`) { return; }
        (header.id === `${tab}`) ? header.className = 'header_tab_active' : header.className = 'header_tab';
        if(window.mobileCheck()){
            (header.id === `${tab}`) ? header.className = 'header_tab_active_mobile' : header.className = 'header_tab_mobile';
        }
    });
    document.getElementById('container').childNodes.forEach(container => {
        (container.id === `${tab}_content`) ? container.className = 'content_div_active' : container.className = 'content_div';
    });
}

let openTab = (url) => {
    window.open(url, "_blank");
}

let openInfo = (project) => {
    (document.getElementById(`${project}_long_desc`).className == 'inactive') ? document.getElementById(`${project}_long_desc`).className = 'project_module_long_desc' : document.getElementById(`${project}_long_desc`).className = 'inactive';
}

function ratioCalc(unknown, x1, x2, y1, y2){
    switch(unknown){
        case 0:
            // x1/x2 == y1/y2
            return x2 * (y1/y2)
        case 1:
            // x1/x2 == y1/y2
            return x1 * (y2/y1)
        case 2:
            // x1/x2 == y1/y2
            return y2 * (x1/x2)
        case 3:
            // x1/x2 == y1/y2
            return y1 * (x2/x1)
    }
}

window.addEventListener('resize', function(event) {
    changeContentSize();
}, true);

function changeContentSize(){
    //1920 1200 deviceWidth X
    let browserScale = ratioCalc(3, 1920, 1200, window.innerWidth, window.innerHeight);
    let mobile = window.mobileCheck();
    if(!mobile && window.innerWidth > 1920){
        $(document.getElementById("container")).css({ transform: `scale(${browserScale / 1200}, ${browserScale / 1200})`, transformOrigin: "top center" });
    } else {
        $(document.getElementById("container")).css({ transform: `scale(1, 1)`, transformOrigin: "top center" });
    }
}

changeContentSize();