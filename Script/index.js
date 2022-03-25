let header_container = document.getElementById('header_container');

let content_container = document.getElementById('container');

let projects = {};

let settings = {};

window.addEventListener('load', () => {
    readTextFile("./Script/projects.json", 1);
    readTextFile("./Script/settings.json", 2);

    let headers = makeHeaders();
    headers.forEach(header => {
        header_container.appendChild(header);
    })

    let content = makeContent();
    content.forEach(node => {
        container.appendChild(node);
    })

    changeTab(settings.Default_Tab);
});

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

    settings.Tabs.forEach(tab => {
        let header = document.createElement('div');
        header.id = tab;
        header.className = 'header_tab';
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
    let module = document.createElement('div');
    module.className = 'module';
    modules.push(module);
    return modules;
}

let changeTab = (tab) => {
    document.getElementById('header_container').childNodes.forEach(header => {
        if(header.id == `HalfHydra`) { return; }
        (header.id === `${tab}`) ? header.className = 'header_tab_active' : header.className = 'header_tab';
    });
    document.getElementById('container').childNodes.forEach(container => {
        (container.id === `${tab}_content`) ? container.className = 'content_div_active' : container.className = 'content_div';
    });
}

async function readTextFile(file, a) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                switch (a) {
                    case 1:
                        projects = JSON.parse(allText);
                        break;
                    case 2:
                        settings = JSON.parse(allText);
                        break;
                }
            }
        }
    }
    rawFile.send(null);
}