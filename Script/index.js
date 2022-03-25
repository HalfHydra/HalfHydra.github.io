let container = document.getElementById('container');

let projects = {};

let settings = {};

window.addEventListener('load', () => {
    let projects = {};
    let settings = {};
    readTextFile("./Script/projects.json", 1);
    readTextFile("./Script/settings.json", 2);

    let headers = makeHeaders();
    headers.forEach(header => {
        container.appendChild(header);
    })
});

let makeHeaders = () => {
    let headers = [];
    settings.Tabs.forEach(tab => {
        let header = document.createElement('div');
        header.id = tab;
        header.className = 'header';
        headers.push(header);

        let header_text = document.createElement('span');
        header_text.innerHTML = tab;
        header.appendChild(header_text);
    });
    return headers;
}

let makeProjectModules = () => {
    let modules = [];
    let module = document.createElement('div');
    module.className = 'module';
    modules.push(module);
    return modules;
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