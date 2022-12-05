let settings = {};

let baseItems = {};

function updateBoxes(type) {
    switch (type) {
        case 0:
            generateItemsBox(document.getElementById("drivers"), 0, 0.6, settings.margin);
            let panels = document.getElementById("drivers").querySelectorAll('.dkgPanel');
            panels.forEach(function (item) {
                item.addEventListener('dragstart', handleDragStart, false);
                item.addEventListener('dragenter', handleDragEnter, false);
                item.addEventListener('dragover', handleDragOver, false);
                item.addEventListener('dragleave', handleDragLeave, false);
                item.addEventListener('drop', handleDrop, false);
            });
            break;
        case 1:
            generateItemsBox(document.getElementById("karts"), 1, 0.6, settings.margin);
            let panels2 = document.getElementById("karts").querySelectorAll('.dkgPanel');
            panels2.forEach(function (item) {
                item.addEventListener('dragstart', handleDragStart, false);
                item.addEventListener('dragenter', handleDragEnter, false);
                item.addEventListener('dragover', handleDragOver, false);
                item.addEventListener('dragleave', handleDragLeave, false);
                item.addEventListener('drop', handleDrop, false);
            });
            break;
        case 2:
            generateItemsBox(document.getElementById("gliders"), 2, 0.6, settings.margin);
            let panels3 = document.getElementById("gliders").querySelectorAll('.dkgPanel');
            panels3.forEach(function (item) {
                item.addEventListener('dragstart', handleDragStart, false);
                item.addEventListener('dragenter', handleDragEnter, false);
                item.addEventListener('dragover', handleDragOver, false);
                item.addEventListener('dragleave', handleDragLeave, false);
                item.addEventListener('drop', handleDrop, false);
            });
            break;
    }
}

function main() {
    generateHeader();
    generateItemsBox(document.getElementById("drivers"), 0, 0.6, settings.margin);
    generateItemsBox(document.getElementById("karts"), 1, 0.6, settings.margin);
    generateItemsBox(document.getElementById("gliders"), 2, 0.6, settings.margin);
    let items = document.querySelectorAll('.dkgPanel');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
    });
    generateOutputContainer();
}

function changeBackground(background) {
    switch (background) {
        case "mkt_gradient":
            break;
        default:
            break;
    }
}

function generateSettingsBox(output, type) {
    let settingDiv = document.createElement('div');
    settingDiv.className = 'settingDiv';
    output.appendChild(settingDiv);

    let settingAmountDiv = document.createElement('div');
    settingAmountDiv.className = 'settingAmountDiv';
    settingDiv.appendChild(settingAmountDiv);

    let settingLabel = document.createElement('p');
    settingLabel.className = "settingLabel";
    settingLabel.innerHTML = `${Math.ceil(Object.keys(settings.drivers).length / settings.countPerRow[type])} ${((Object.keys(settings.drivers).length / settings.countPerRow[type]) > 1) ? "rows" : "row"} , Per row:`;
    settingAmountDiv.appendChild(settingLabel);

    let settingAmount = document.createElement('input');
    settingAmount.className = "settingAmount";
    settingAmount.type = "number";
    settingAmount.value = settings.countPerRow[type];
    settingAmount.addEventListener('change', function () {
        settings.countPerRow[type] = settingAmount.value;
        main();
    });

    settingAmountDiv.appendChild(settingAmount);

    let settingAdd = document.createElement('button');
    settingAdd.className = "settingAdd";
    settingAdd.innerHTML = "Add Item";
    settingAdd.addEventListener('click', function () {
        switch (type) {
            case 0:
                addItem(0);
                break;
            case 1:
                addItem(1);
                break;
            case 2:
                addItem(2);
                break;
        }
    });
    settingDiv.appendChild(settingAdd);

    let settingSpace = document.createElement('button');
    settingSpace.className = "settingRemove";
    settingSpace.innerHTML = "Change Spacing";
    settingSpace.addEventListener('click', function () {
        let xSpace = prompt("Enter the X spacing in pixels (number only). Default is 1.5.");
        let ySpace = prompt("Enter the Y spacing in pixels (number only). Default is 1.5.");
        settings.margin = [xSpace, ySpace];
        updateBoxes(type)
    });
    settingDiv.appendChild(settingSpace);

    let settingRemove = document.createElement('button');
    settingRemove.className = "settingRemove";
    settingRemove.innerHTML = "Remove All New";
    settingRemove.addEventListener('click', function () {
        removeAllNew(type)
        updateBoxes(type)
    });
    settingDiv.appendChild(settingRemove);

    switch (type) {
        case 0:
            settingLabel.innerHTML = `${Math.ceil(Object.keys(settings.drivers).length / settings.countPerRow[type])} ${((Object.keys(settings.drivers).length / settings.countPerRow[type]) > 1) ? "rows" : "row"}, Per row:`;
            break;
        case 1:
            settingLabel.innerHTML = `${Math.ceil(Object.keys(settings.karts).length / settings.countPerRow[type])} ${((Object.keys(settings.karts).length / settings.countPerRow[type]) > 1) ? "rows" : "row"}, Per row:`;
            break;
        case 2:
            settingLabel.innerHTML = `${Math.ceil(Object.keys(settings.gliders).length / settings.countPerRow[type])} ${((Object.keys(settings.gliders).length / settings.countPerRow[type]) > 1) ? "rows" : "row"}, Per row:`;
            break;
    }
}

function generateItemsBox(output, type, scale, margin) {
    output.innerHTML = "";
    output.style.width = `${(settings.countPerRow[type] * ((scale * 216) + (margin[1] * 2))  + settings.countPerRow[type] < 670 ? 670 : settings.countPerRow[type] * ((scale * 216) + (margin[1] * 2)))}px`;

    let headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    output.appendChild(headerDiv);

    let headerImg = document.createElement('img');
    headerImg.className = "headerImg";
    headerImg.addEventListener("click", updateCounter, false);
    var count = 0;
    function updateCounter() {
        count++;
        if (count % 5 == 0) {
            if (confirm(`THIS WILL OVERWRITE THE CURRENT SAVE. Do you want to remove all items in this category? Please save a backup of the file first so that you do not lose the current drivers karts and gliders!`)) {
                switch (type) {
                    case 0:
                        settings.drivers = {};
                        break;
                    case 1:
                        settings.karts = {};
                        break;
                    case 2:
                        settings.gliders = {};
                        break;
                }
                updateBoxes(type);
                count = 0;
            } else {

            }
        }
    }
    headerDiv.appendChild(headerImg);


    let headerText = document.createElement('p');
    headerText.className = "headerText";
    headerDiv.appendChild(headerText);

    let headerSeparator = document.createElement('div');
    headerSeparator.className = "headerSeparator";
    output.appendChild(headerSeparator);

    generateSettingsBox(output, type);

    let itemsDiv = document.createElement('div');
    itemsDiv.id = `${output.id}_items`;
    itemsDiv.className = 'itemsDiv';
    output.appendChild(itemsDiv);
    itemsDiv.style.width = `${settings.countPerRow[type] * ((scale * 216) + (margin[1] * 2) )}px`;

    switch (type) {
        case 0:
            headerImg.src = "./Images/UI/Header/Driver.png";
            headerText.innerHTML = "Drivers";
            Object.keys(settings.drivers).forEach((driver, i) => {
                driver = settings.drivers[driver];
                itemsDiv.appendChild(generateDKGPanel(driver, i, driver.image, 0, 0.6, driver.isNew));
            })
            break;
        case 1:
            headerImg.src = "./Images/UI/Header/Kart.png";
            headerText.innerHTML = "Karts";
            Object.keys(settings.karts).forEach((kart, i) => {
                kart = settings.karts[kart];
                itemsDiv.appendChild(generateDKGPanel(kart, i, kart.image, 1, 0.6, kart.isNew));
            })
            break;
        case 2:
            headerImg.src = "./Images/UI/Header/Glider.png";
            headerText.innerHTML = "Gliders";
            Object.keys(settings.gliders).forEach((glider, i) => {
                glider = settings.gliders[glider];
                itemsDiv.appendChild(generateDKGPanel(glider, i, glider.image, 2, 0.6, glider.isNew));
            })
            break;
    }

    let children = itemsDiv.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.margin = `${margin[0]}px ${margin[1]}px`;
    }
}

function generateDKGPanel(localSettings, id, image, itemTypeId, scale, isNew) {
    let rarityId = localSettings.rarity;

    let dkgPanel = document.createElement('div');
    dkgPanel.id = `${id}_${itemTypeId}`;
    dkgPanel.className = 'dkgPanel';
    dkgPanel.addEventListener('click', function () {
        generateEditModal(localSettings, image, itemTypeId, id);
    })
    dkgPanel.style.width = `${216 * scale}px`;
    dkgPanel.style.height = `${280 * scale}px`;

    let bgImg = document.createElement('img');
    bgImg.src = `./Images/UI/Panel/bg${rarityId}_${itemTypeId}.png`;
    bgImg.className = 'bgImg';
    dkgPanel.appendChild(bgImg);

    let newDKGBox = document.createElement('div');
    switch (itemTypeId) {
        case 0:
            newDKGBox.className = 'newDKGBox';
            break;
        case 1:
        case 2:
            newDKGBox.className = 'newKartWingBox';
            break;
    }
    newDKGBox.style.height = `${(dkgPanel.style.height * 0.9) * scale}px`;
    dkgPanel.appendChild(newDKGBox);

    let newDKGKartPartImage;

    switch (itemTypeId) {
        case 0:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newDriver';
            switch (localSettings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}UpperBody.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${localSettings.image}`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
            }
            break;
        case 1:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (localSettings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/Machine_${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${localSettings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                    newDKGBox.appendChild(newDKGKartPartImage);
                    break;
            }
            break;
        case 2:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (localSettings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${localSettings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                    newDKGBox.appendChild(newDKGKartPartImage);
                    break;
            }
            break;
    }

    let frameImg = document.createElement('img');
    frameImg.src = `./Images/UI/Panel/frame${rarityId}_${itemTypeId}.png`;
    frameImg.className = 'frameImg';
    dkgPanel.appendChild(frameImg);
    if (localSettings.isNew) {
        let newImg = document.createElement('img');
        newImg.src = `./Images/UI/Panel/New.png`;
        newImg.className = 'panelNewIcon';
        newImg.style.width = `${(76.8) * scale}px`;
        newImg.style.marginTop = `${scale * -10}px`;
        newImg.style.marginLeft = `${scale * -7}px`;
        dkgPanel.appendChild(newImg);
    }

    if (localSettings.isExtended) {

        let pointsCount = document.createElement('div');
        pointsCount.className = "pointsPanel";

        let points = parseInt(localSettings.points);
        let charoutput = [];
        for (let i = 0; i < points.toLocaleString().length; i++) {
            charoutput.push(points.toLocaleString().charAt(i));
        }
        charoutput.forEach((t, i) => {
            let number = document.createElement('img');
            number.className = `scoreNumber`;
            if (t == ",") {
                number.className = `scoreComma`;
            }
            if (scale != 1.0) {
                number.style.height = `${38 * scale}px`;
                if (t == ",") {
                    number.style.height = `${14 * scale}px`;
                }
            }
            number.src = `./Images/UI/Number/${t}.png`
            pointsCount.appendChild(number);
        });
        dkgPanel.appendChild(pointsCount);

        let levelNum = document.createElement('img');
        levelNum.src = `./Images/UI/LeftNum/${localSettings.level}.png`;
        levelNum.className = 'levelNumber';
        dkgPanel.appendChild(levelNum);

        let lvImg = document.createElement('img');
        lvImg.src = './Images/UI/LeftNum/lv.png';
        lvImg.className = 'lvImg';
        dkgPanel.appendChild(lvImg);

        pointsCount.style.bottom = `${13 * scale}px`;
        pointsCount.style.right = `${9 * scale}px`;

        lvImg.style.width = `${42 * scale}px`;
        lvImg.style.right = `${38 * scale}px`;
        lvImg.style.bottom = `${60 * scale}px`;

        if (localSettings.level == 1) {
            lvImg.style.right = `${30 * scale}px`;
        }

        levelNum.style.width = `${40 * scale}px`;
        levelNum.style.height = `${40 * scale}px`;
        levelNum.style.right = `${2 * scale}px`;
        levelNum.style.bottom = `${58 * scale}px`;

    }

    if (localSettings.isUseItem) {
        let itemImg = document.createElement('img');
        itemImg.className = 'itemImgPanel';
        dkgPanel.appendChild(itemImg);

        if (settings.specialSkills[localSettings.specialSkill] == null) {
            console.log("Special Skill is null, replacing with Item0000");
            console.log(localSettings)
            localSettings.specialSkill = "Item0000";
        }

        switch (settings.specialSkills[localSettings.specialSkill].storage) {
            case "link":
                itemImg.src = `./Images/UI/Items/${localSettings.specialSkill}.png`;
                break;
            case "local":
                itemImg.src = settings.specialSkills[localSettings.specialSkill].image;
                break;
        }


        itemImg.style.left = `${12 * scale}px`;
        itemImg.style.bottom = `${17 * scale}px`;
        
        //itemImg.style.width = `${67 * scale}px`;
        itemImg.onload = function (event) {
            console.log('onload fired')
            console.log(`width: ${itemImg.naturalWidth}, height: ${itemImg.naturalHeight}`)
            switch(itemTypeId){
                case 1:
                    itemImg.style.bottom = `${15 * scale}px`;
                default:
                if(itemImg.naturalWidth > itemImg.naturalHeight){
                    console.log('1 fired')
                    let sizeX = 67 * scale;
                    itemImg.style.width = `${sizeX}px`;
                    itemImg.style.height = `${ratioCalc(1, sizeX, 0, itemImg.naturalWidth, itemImg.naturalHeight)}px`;
                    console.log(ratioCalc(1, sizeX, 0, itemImg.naturalWidth, itemImg.naturalHeight))
                } else {
                    console.log('2 fired')
                    let sizeX = 67 * scale;
                    itemImg.style.width = `${sizeX}px`;
                    itemImg.style.width = `${ratioCalc(1, sizeX, 0, itemImg.naturalHeight, itemImg.naturalWidth)}px`;
                    console.log(ratioCalc(1, sizeX, 0, itemImg.naturalHeight, itemImg.naturalWidth))
                }
                break;
            }
        }
        // itemImg.style.width = `${67 * scale}px`;
    }

    return dkgPanel;
}

function generateEditDKGPanel(localSettings, image, itemTypeId, scale, isNew) {
    let rarityId = localSettings.rarity;

    let dkgPanel = document.createElement('div');
    dkgPanel.className = 'dkgPanel';
    dkgPanel.style.width = `${216 * scale}px`;
    dkgPanel.style.height = `${280 * scale}px`;

    let bgImg = document.createElement('img');
    bgImg.src = `./Images/UI/Panel/bg${rarityId}_${itemTypeId}.png`;
    bgImg.className = 'bgImg';
    dkgPanel.appendChild(bgImg);

    let newDKGBox = document.createElement('div');
    switch (itemTypeId) {
        case 0:
            newDKGBox.className = 'newDKGBox';
            break;
        case 1:
        case 2:
            newDKGBox.className = 'newKartWingBox';
            break;
    }
    newDKGBox.style.height = `${(dkgPanel.style.height * 0.9) * scale}px`;
    dkgPanel.appendChild(newDKGBox);

    let newDKGKartPartImage;

    switch (itemTypeId) {
        case 0:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newDriver';
            switch (localSettings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}UpperBody.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${localSettings.image}`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
            }
            break;
        case 1:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (localSettings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/Machine_${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${localSettings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                    newDKGBox.appendChild(newDKGKartPartImage);
                    break;
            }
            break;
        case 2:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (localSettings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${localSettings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${localSettings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${localSettings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${localSettings.yOffset * scale}px`;
                    newDKGBox.appendChild(newDKGKartPartImage);
                    break;
            }
            break;
    }

    let frameImg = document.createElement('img');
    frameImg.src = `./Images/UI/Panel/frame${rarityId}_${itemTypeId}.png`;
    frameImg.className = 'frameImg';
    dkgPanel.appendChild(frameImg);

    let newImg = document.createElement('img');
    newImg.src = `./Images/UI/Panel/New.png`;
    newImg.className = 'panelNewIcon';
    newImg.style.width = `${(76.8) * scale}px`;
    newImg.style.marginTop = `${scale * -10}px`;
    newImg.style.marginLeft = `${scale * -7}px`;
    dkgPanel.appendChild(newImg);

    if (!isNew) {
        newImg.style.display = "none";
    }

    let pointsCount = document.createElement('div');
    pointsCount.className = "pointsPanel";

    let points = parseInt(localSettings.points);
    let charoutput = [];
    for (let i = 0; i < points.toLocaleString().length; i++) {
        charoutput.push(points.toLocaleString().charAt(i));
    }
    charoutput.forEach((t, i) => {
        let number = document.createElement('img');
        number.className = `scoreNumber`;
        if (t == ",") {
            number.className = `scoreComma`;
        }
        number.style.height = `${38 * scale}px`;
        if (t == ",") {
            number.style.height = `${14 * scale}px`;
        }
        number.src = `./Images/UI/Number/${t}.png`
        pointsCount.appendChild(number);
    });
    dkgPanel.appendChild(pointsCount);

    let levelNum = document.createElement('img');
    levelNum.src = `./Images/UI/LeftNum/${localSettings.level}.png`;
    levelNum.className = 'levelNumber';
    dkgPanel.appendChild(levelNum);

    let lvImg = document.createElement('img');
    lvImg.src = './Images/UI/LeftNum/lv.png';
    lvImg.className = 'lvImg';
    dkgPanel.appendChild(lvImg);

    pointsCount.style.bottom = `${13 * scale}px`;
    pointsCount.style.right = `${9 * scale}px`;

    lvImg.style.width = `${42 * scale}px`;
    lvImg.style.right = `${38 * scale}px`;
    lvImg.style.bottom = `${60 * scale}px`;

    if (localSettings.level == 1) {
        lvImg.style.right = `${30 * scale}px`;
    }

    levelNum.style.width = `${40 * scale}px`;
    levelNum.style.height = `${40 * scale}px`;
    levelNum.style.right = `${2 * scale}px`;
    levelNum.style.bottom = `${58 * scale}px`;

    levelNum.id = "edit_level"
    lvImg.id = "edit_level2"
    pointsCount.id = "edit_points"

    let itemImg = document.createElement('img');
    itemImg.className = 'itemImgPanel';
    itemImg.addEventListener('click', function () {
        changeEditItem(localSettings);
    });
    dkgPanel.appendChild(itemImg);

    if (settings.specialSkills[localSettings.specialSkill] == null) {
        console.log("Special Skill is null, replacing with Item0000");
        localSettings.specialSkill = "Item0000";
    }

    switch (settings.specialSkills[localSettings.specialSkill].storage) {
        case "link":
            itemImg.src = `./Images/UI/Items/${localSettings.specialSkill}.png`;
            break;
        case "local":
            itemImg.src = settings.specialSkills[localSettings.specialSkill].image;
            break;
    }

    itemImg.style.width = `${67 * scale}px`;
    itemImg.style.left = `${8 * scale}px`;
    itemImg.style.bottom = `${17 * scale}px`;

    itemImg.id = "edit_item"

    bgImg.id = 'edit_bgImg';
    frameImg.id = "edit_frameImg"
    newImg.id = "edit_newImg"
    newDKGKartPartImage.id = "edit_newDKGKartPartImage"

    if (!localSettings.isExtended) {
        levelNum.style.display = "none";
        lvImg.style.display = "none";
        pointsCount.style.display = "none";
    }

    if (!localSettings.isUseItem) {
        itemImg.style.display = "none";
    }

    return dkgPanel;
}

function removeAllNew(type) {
    saveSettings();
    switch (type) {
        case 0:
            Object.keys(settings.drivers).forEach(driver => {
                settings.drivers[driver].isNew = false;
            })
            break;
        case 1:
            Object.keys(settings.karts).forEach(kart => {
                settings.karts[kart].isNew = false;
            })
            break;
        case 2:
            Object.keys(settings.gliders).forEach(glider => {
                settings.gliders[glider].isNew = false;
            })
            break;
    }
}

function generateOutputContainer() {
    let container = document.getElementById('settings_final');
    document.getElementById('settings_final').innerHTML = "";

    let downloadButton = document.createElement('img');
    downloadButton.className = 'downloadButton';
    downloadButton.src = "./Images/UI/Modal/Finished.png";
    downloadButton.onclick = function () {
        generateSaveModal();
    }
    container.appendChild(downloadButton);
}

function downloadContainer(type, scale) {
    saveSettings();

    let downloadBtns = document.querySelectorAll('.itemBtn');
    downloadBtns.forEach(btn => {
        btn.setAttribute("disabled", "");
    })

    let output = document.getElementById("secret_processor");
    output.innerHTML = "";

    let itemsDiv = document.createElement('div');
    itemsDiv.id = "secret_processor_items";
    itemsDiv.className = 'itemsDiv';
    itemsDiv.style.paddingLeft = "7px";
    itemsDiv.style.position = "relative";
    itemsDiv.style.paddingTop = "12px";
    output.appendChild(itemsDiv);
    itemsDiv.style.width = `${settings.countPerRow[type] * ((scale * 216) + (settings.margin[1] * 2))}px`;

    switch (type) {
        case 0:
            Object.keys(settings.drivers).forEach((driver, i) => {
                driver = settings.drivers[driver];
                itemsDiv.appendChild(generateDKGPanel(driver, i, driver.image, 0, 1, driver.isNew));
            })
            break;
        case 1:
            Object.keys(settings.karts).forEach((kart, i) => {
                kart = settings.karts[kart];
                itemsDiv.appendChild(generateDKGPanel(kart, i, kart.image, 1, 1, kart.isNew));
            })
            break;
        case 2:
            Object.keys(settings.gliders).forEach((glider, i) => {
                glider = settings.gliders[glider];
                itemsDiv.appendChild(generateDKGPanel(glider, i, glider.image, 2, 1, glider.isNew));
            })
            break;
    }

    let children = itemsDiv.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.margin = `${settings.margin[0]}px ${settings.margin[1]}px`;
    }

    document.getElementById('loadingimg').style.display = "block";
    document.getElementById('secret_processor').style.display = "block";
    setTimeout(function () {
        html2canvas(document.getElementById(`secret_processor_items`), {
            backgroundColor: null,
            useCORS: true,
            scale: 1
        }).then(function (canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'MarioKartTourSettings.png';
            a.click();
            document.getElementById('loadingimg').style.display = "none";
        }).then(function () {
            downloadBtns.forEach(btn => {
                btn.removeAttribute("disabled");
            })
            document.getElementById('secret_processor').style.display = "none";
        })
    }, 1000);
}

function generateEditModal(localSettings, item, type, id) {
    let modal = document.getElementById('editModalContainer');
    modal.innerHTML = "";

    let panelEdit = document.createElement('div');
    panelEdit.className = 'panelEdit';
    modal.appendChild(panelEdit);

    let livePanel = document.createElement('div');
    livePanel.id = 'livePanel';
    livePanel.className = 'livePanel';
    panelEdit.appendChild(livePanel);

    livePanel.appendChild(generateEditDKGPanel(localSettings, item, type, 1, localSettings.isNew));

    let panelSettings = document.createElement('div');
    panelSettings.className = 'panelSettings';
    panelEdit.appendChild(panelSettings);

    let flexBox = document.createElement('div');
    flexBox.className = 'flexBox';
    panelSettings.appendChild(flexBox);

    let replaceImgBtn = document.createElement('button');
    replaceImgBtn.className = 'replaceImgBtn';
    replaceImgBtn.innerHTML = "Replace Image";
    replaceImgBtn.onclick = function () {
        console.log("replace image!")
        replaceItem(type, localSettings)
    }
    flexBox.appendChild(replaceImgBtn);

    let raritySelect = document.createElement('select');
    raritySelect.className = 'raritySelect';
    raritySelect.onchange = function () {
        console.log(raritySelect.value);
        document.getElementById(`edit_bgImg`).src = `./Images/UI/Panel/bg${raritySelect.value}_${type}.png`;
        document.getElementById(`edit_frameImg`).src = `./Images/UI/Panel/frame${raritySelect.value}_${type}.png`;
    }
    flexBox.appendChild(raritySelect);

    let rarityOption2 = document.createElement('option');
    rarityOption2.value = '2';
    rarityOption2.innerHTML = "High-End";
    raritySelect.appendChild(rarityOption2);

    let rarityOption1 = document.createElement('option');
    rarityOption1.value = '1';
    rarityOption1.innerHTML = "Super";
    raritySelect.appendChild(rarityOption1);

    let rarityOption0 = document.createElement('option');
    rarityOption0.value = '0';
    rarityOption0.innerHTML = "Normal";
    raritySelect.appendChild(rarityOption0);

    // let rarityOption5 = document.createElement('option');
    // rarityOption2.value = '5';
    // rarityOption2.innerHTML = "Item High-End";
    // raritySelect.appendChild(rarityOption5);

    // let rarityOption4 = document.createElement('option');
    // rarityOption1.value = '4';
    // rarityOption1.innerHTML = "Item Super";
    // raritySelect.appendChild(rarityOption4);

    // let rarityOption3 = document.createElement('option');
    // rarityOption0.value = '3';
    // rarityOption0.innerHTML = "Item Normal";
    // raritySelect.appendChild(rarityOption3);

    //since the indexes and order of the options are backwards, a little math is in order to make it proper...
    raritySelect.selectedIndex = Math.abs((localSettings.rarity - 4)) - 2;
    // (2) - 4 -> abs(-2) - 2 = 0
    // (1) - 4 -> abs(-3) - 2 = 1
    // (0) - 4 -> abs(-4) - 2 = 2

    let scaleDiv = document.createElement('div');
    scaleDiv.className = 'scaleDiv';
    flexBox.appendChild(scaleDiv);

    let scaleLabel = document.createElement('label');
    scaleLabel.className = 'scaleLabel';
    scaleLabel.innerHTML = "Scale";
    scaleDiv.appendChild(scaleLabel);

    let scaleInput = document.createElement('input');
    scaleInput.type = 'range';
    scaleInput.min = '0.5';
    scaleInput.max = '1.5';
    scaleInput.step = '0.01';
    scaleInput.value = localSettings.scale || '1';
    scaleInput.className = 'scaleInput';
    scaleInput.oninput = function () {
        console.log(scaleInput.value);
        if (parseInt(type) > 0) {
            document.getElementById(`edit_newDKGKartPartImage`).style.transform = `translate(0, -50%) scale(${scaleInput.value})`;
        } else {
            document.getElementById(`edit_newDKGKartPartImage`).style.transform = `scale(${scaleInput.value})`;
        }
    }
    scaleDiv.appendChild(scaleInput);

    let xOffsetDiv = document.createElement('div');
    xOffsetDiv.className = 'xOffsetDiv';
    flexBox.appendChild(xOffsetDiv);

    let xOffsetLabel = document.createElement('label');
    xOffsetLabel.className = 'xOffsetLabel';
    xOffsetLabel.innerHTML = "X Offset";
    xOffsetDiv.appendChild(xOffsetLabel);

    let xOffsetInput = document.createElement('input');
    xOffsetInput.type = 'range';
    xOffsetInput.min = '-50';
    xOffsetInput.max = '50';
    xOffsetInput.step = '1';
    xOffsetInput.value = localSettings.xOffset || '0';
    xOffsetInput.className = 'xOffsetInput';
    xOffsetInput.oninput = function () {
        console.log(xOffsetInput.value);
        document.getElementById(`edit_newDKGKartPartImage`).style.marginLeft = `${xOffsetInput.value}px`;
    }
    xOffsetDiv.appendChild(xOffsetInput);

    let yOffsetDiv = document.createElement('div');
    yOffsetDiv.className = 'yOffsetDiv';
    flexBox.appendChild(yOffsetDiv);

    let yOffsetLabel = document.createElement('label');
    yOffsetLabel.className = 'yOffsetLabel';
    yOffsetLabel.innerHTML = "Y Offset";
    yOffsetDiv.appendChild(yOffsetLabel);

    let yOffsetInput = document.createElement('input');
    yOffsetInput.type = 'range';
    yOffsetInput.min = '-50';
    yOffsetInput.max = '50';
    yOffsetInput.step = '1';
    yOffsetInput.value = localSettings.yOffset || '0';
    yOffsetInput.className = 'yOffsetInput';
    yOffsetInput.oninput = function () {
        console.log(yOffsetInput.value);
        document.getElementById(`edit_newDKGKartPartImage`).style.marginTop = `${yOffsetInput.value}px`;
    }
    yOffsetDiv.appendChild(yOffsetInput);

    let resetSliders = document.createElement('button');
    resetSliders.className = 'resetSliders';
    resetSliders.innerHTML = "Reset Sliders";
    resetSliders.onclick = function () {
        scaleInput.value = '1';
        xOffsetInput.value = '0';
        yOffsetInput.value = '0';
        switch (type) {
            case 0:
                document.getElementById(`edit_newDKGKartPartImage`).style.transform = `scale(1)`;
                break;
            case 1:
            case 2:
                document.getElementById(`edit_newDKGKartPartImage`).style.transform = `translate(0, -50%) scale(1)`;
                break;
        }
        document.getElementById(`edit_newDKGKartPartImage`).style.marginLeft = `${xOffsetInput.value}px`;
        document.getElementById(`edit_newDKGKartPartImage`).style.marginTop = `${yOffsetInput.value}px`;
    }
    flexBox.appendChild(resetSliders);

    let extendDiv = document.createElement('div');
    extendDiv.className = 'extendDiv';
    modal.appendChild(extendDiv);

    let extendToggleDiv = document.createElement('div');
    extendToggleDiv.className = 'extendToggleDiv';
    extendDiv.appendChild(extendToggleDiv);

    let extendTxt = document.createElement('p');
    extendTxt.className = 'extendTxt';
    extendTxt.innerHTML = "Use Level and Points? ";
    extendToggleDiv.appendChild(extendTxt);

    let extendInput = document.createElement("input");
    extendInput.className = "toggleInput";
    extendInput.type = "checkbox";
    extendInput.checked = localSettings.isExtended;
    extendInput.onchange = function () {
        //(extendInput.checked) ? document.getElementById(`edit_newImg`).style.display = "block" : document.getElementById(`edit_newImg`).style.display = "none"
        localSettings.isExtended = extendInput.checked;
        (extendInput.checked) ? document.getElementById(`edit_points`).style.display = "block" : document.getElementById(`edit_points`).style.display = "none";
        (extendInput.checked) ? document.getElementById(`edit_level`).style.display = "block" : document.getElementById(`edit_level`).style.display = "none";
        (extendInput.checked) ? document.getElementById(`edit_level2`).style.display = "block" : document.getElementById(`edit_level2`).style.display = "none";
    }
    extendToggleDiv.appendChild(extendInput);

    let levelDiv = document.createElement('div');
    levelDiv.className = 'levelEditDiv';
    extendDiv.appendChild(levelDiv);

    let levelImg = document.createElement('img');
    levelImg.src = `./Images/UI/LeftNum/lv.png`;
    levelImg.className = 'toggleNewImg';
    levelDiv.appendChild(levelImg);

    let levelInput = document.createElement("input");
    levelInput.className = "levelInput";
    // pointInput.type = "number";
    levelInput.min = 1;
    levelInput.max = 9;
    levelInput.value = localSettings.level;
    levelInput.onchange = function () {
        // (toggleInput.checked) ? document.getElementById(`edit_newImg`).style.display = "block" : document.getElementById(`edit_newImg`).style.display = "none"
        localSettings.level = levelInput.value;
        changeEditModalLevel(levelInput.value)
    }
    levelDiv.appendChild(levelInput);

    let pointsDiv = document.createElement('div');
    pointsDiv.className = 'pointsEditDiv';
    extendDiv.appendChild(pointsDiv);

    let pointsImg = document.createElement('img');
    pointsImg.src = `./Images/UI/Modal/Ticket.png`;
    pointsImg.className = 'toggleNewImg';
    pointsDiv.appendChild(pointsImg);

    let pointInput = document.createElement("input");
    pointInput.className = "pointsInput";
    // pointInput.type = "number";
    pointInput.min = 1;
    pointInput.max = 9;
    pointInput.value = localSettings.points;
    pointInput.onchange = function () {
        // (toggleInput.checked) ? document.getElementById(`edit_newImg`).style.display = "block" : document.getElementById(`edit_newImg`).style.display = "none"
        localSettings.points = pointInput.value;
        changeEditModalPoints(parseInt(pointInput.value))
    }
    pointsDiv.appendChild(pointInput);



    let footerDiv = document.createElement('div');
    footerDiv.className = 'footerDiv';
    modal.appendChild(footerDiv);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function () {
        removeItem(type, id);
    }
    footerDiv.appendChild(deleteBtn);

    let newToggleDiv = document.createElement('div');
    newToggleDiv.className = 'newToggleDiv';
    footerDiv.appendChild(newToggleDiv);

    let newImg = document.createElement('img');
    newImg.src = `./Images/UI/Panel/New.png`;
    newImg.className = 'toggleNewImg';
    newToggleDiv.appendChild(newImg);

    let toggleInput = document.createElement("input");
    toggleInput.className = "toggleInput";
    toggleInput.type = "checkbox";
    toggleInput.checked = localSettings.isNew;
    toggleInput.onchange = function () {
        (toggleInput.checked) ? document.getElementById(`edit_newImg`).style.display = "block" : document.getElementById(`edit_newImg`).style.display = "none"
    }
    newToggleDiv.appendChild(toggleInput);

    let itemToggleDiv = document.createElement('div');
    itemToggleDiv.className = 'itemToggleDiv';
    footerDiv.appendChild(itemToggleDiv);

    let itemTxt = document.createElement('p');
    itemTxt.className = 'itemToggleTxt';
    itemTxt.innerHTML = "Use Item? ";
    itemToggleDiv.appendChild(itemTxt);

    let itemInput = document.createElement("input");
    itemInput.className = "itemInput";
    itemInput.type = "checkbox";
    itemInput.checked = localSettings.isUseItem;
    itemInput.onchange = function () {
        (itemInput.checked) ? document.getElementById(`edit_item`).style.display = "block" : document.getElementById(`edit_item`).style.display = "none";
    }
    itemToggleDiv.appendChild(itemInput);

    let saveBtn = document.createElement('button');
    saveBtn.className = 'saveBtn';
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = function () {
        localSettings.rarity = raritySelect.value;
        localSettings.scale = scaleInput.value;
        localSettings.xOffset = xOffsetInput.value;
        localSettings.yOffset = yOffsetInput.value;
        localSettings.isNew = toggleInput.checked;
        localSettings.isExtended = extendInput.checked;
        localSettings.level = levelInput.value;
        localSettings.points = pointInput.value;
        localSettings.isUseItem = itemInput.checked;
        //localSettings.specialSkill = document.getElementById("edit_item").value;
        saveSettings();
        updateBoxes(type);
        document.getElementById("editModal").style.display = "none";
    }
    footerDiv.appendChild(saveBtn);

    document.getElementById("editModal").style.display = "block";

}

function generateIntroModal() {
    let modal = document.getElementById('editModalContainer');
    modal.innerHTML = "";

    let panelEdit = document.createElement('div');
    panelEdit.className = 'introModal';
    modal.appendChild(panelEdit);

    let ribbonDiv = document.createElement('div');
    ribbonDiv.className = 'ribbonDiv';
    panelEdit.appendChild(ribbonDiv);

    let newImg = document.createElement('img');
    newImg.src = `./Images/UI/Modal/Ribbon.png`;
    newImg.className = 'introRibbon';
    ribbonDiv.appendChild(newImg);

    let ribbonTxt = document.createElement('p');
    ribbonTxt.className = 'ribbonTxt';
    ribbonTxt.innerHTML = "Mario Kart Tour Panel\nContainer Generator";
    ribbonDiv.appendChild(ribbonTxt);

    let centerBtns = document.createElement('div');
    centerBtns.className = 'centerBtns';
    panelEdit.appendChild(centerBtns);

    let startFreshBtn = document.createElement('button');
    startFreshBtn.className = 'startFresh';
    startFreshBtn.innerHTML = "Start New";
    startFreshBtn.onclick = function () {
        startFresh();
    }
    centerBtns.appendChild(startFreshBtn);

    // temporarily disabled until I can find another solution for localStorage,  it turns out localStorage cannot exceed 5 mb which will quickly be reached if someone adds a lot of items.

    // let toolGuide = document.createElement('button');
    // toolGuide.className = 'toolGuide';
    // toolGuide.innerHTML = "Continue";
    // toolGuide.onclick = function () {
    //     loadFromLocalStorage();
    // }
    // panelEdit.appendChild(toolGuide);
    // if(localStorage.getItem("MKTPCG_Settings") == null){
    //     toolGuide.style.display = "none";
    // }

    let inputBtns = document.createElement('div');
    inputBtns.className = 'inputBtns';
    panelEdit.appendChild(inputBtns);

    let loadFile = document.createElement('button');
    loadFile.className = 'loadFile';
    loadFile.innerHTML = "Load File";
    loadFile.onclick = function () {
        inputData();
    };
    inputBtns.appendChild(loadFile);

    let loadDefault = document.createElement('button');
    loadDefault.className = 'loadFile';
    loadDefault.innerHTML = "Load Battle Tour";
    loadDefault.onclick = function () {
        fetch("./src/Season90.json")
            .then(response => {
                return response.json();
            })
            .then(jsondata => {
                settings = jsondata;
                updateOlderSave();
            })
            .then(response => main()
            )
        document.getElementById("editModal").style.display = "none";
    };
    inputBtns.appendChild(loadDefault);

    document.getElementById("editModal").style.display = "block";

    fetch("./src/baseItems.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            baseItems = jsondata;
        })
}

function inputData() {
    let input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            let result = e.target.result;
            settings = JSON.parse(result);
            updateOlderSave();
            main();
            document.getElementById("editModal").style.display = "none";
        }
        reader.readAsText(file);
    }

    input.click();
}

function startFresh() {
    settings = {
        "countPerRow": [
            5,
            5,
            5
        ],
        drivers: {},
        karts: {},
        gliders: {}
    }
    updateOlderSave();
    main();
    document.getElementById("editModal").style.display = "none";
}

function loadFromLocalStorage() {
    settings = JSON.parse(localStorage.getItem("MKTPCG_Settings"));
    updateOlderSave();
    main();
    document.getElementById("editModal").style.display = "none";
}

function updateLocalStorage() {
    localStorage.setItem("MKTPCG_Settings", JSON.stringify(settings));
}

function exportLocalStorage() {
    let data = JSON.stringify(settings);
    let filename = `MKTPCG_${new Date().toLocaleDateString()}.json`;
    let a = document.createElement("a")
        , file = new Blob([data], {
            type: "text"
        });
    let url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

function generateSaveModal() {
    let modal = document.getElementById('editModalContainer');
    modal.innerHTML = "";

    let savePanel = document.createElement('div');
    savePanel.className = 'savePanel';
    modal.appendChild(savePanel);

    let saveTxt = document.createElement('p');
    saveTxt.className = 'saveTxt';
    saveTxt.innerHTML = "Export PNG of Item Containers";
    savePanel.appendChild(saveTxt);

    let dkgImgPanel = document.createElement('div');
    dkgImgPanel.id = 'dkgImgPanel';
    dkgImgPanel.className = 'dkgImgPanel';
    savePanel.appendChild(dkgImgPanel);

    let driverBtn = document.createElement('button');
    driverBtn.className = 'itemBtn';
    driverBtn.onclick = function () {
        downloadContainer(0, 1);
    }
    dkgImgPanel.appendChild(driverBtn);

    let driverBtnImg = document.createElement('img');
    driverBtnImg.className = "itemBtnImg";
    driverBtnImg.src = "./Images/UI/Header/Driver.png";
    driverBtn.appendChild(driverBtnImg);

    let kartBtn = document.createElement('button');
    kartBtn.className = 'itemBtn';
    kartBtn.onclick = function () {
        downloadContainer(1, 1);
    }
    dkgImgPanel.appendChild(kartBtn);

    let kartBtnImg = document.createElement('img');
    kartBtnImg.className = "itemBtnImg";
    kartBtnImg.src = "./Images/UI/Header/Kart.png";
    kartBtn.appendChild(kartBtnImg);

    let gliderBtn = document.createElement('button');
    gliderBtn.className = 'itemBtn';
    gliderBtn.onclick = function () {
        downloadContainer(2, 1);
    }
    dkgImgPanel.appendChild(gliderBtn);

    let gliderBtnImg = document.createElement('img');
    gliderBtnImg.className = "itemBtnImg";
    gliderBtnImg.src = "./Images/UI/Header/Glider.png";
    gliderBtn.appendChild(gliderBtnImg);

    let autosaveTxt = document.createElement('p');
    autosaveTxt.className = 'autosaveTxt';
    autosaveTxt.innerHTML = "You can download an image for the driver, kart, and glider containers using the 3 buttons above. Please save the settings JSON file by using the button below if you wish to return to your session. Any image files you uploaded will be stored in the file itself.";
    savePanel.appendChild(autosaveTxt);

    let localStorageDiv = document.createElement('div');
    localStorageDiv.className = 'localStorageDiv';
    savePanel.appendChild(localStorageDiv);

    let saveSettingsFile = document.createElement('button');
    saveSettingsFile.className = 'saveSettingsFile';
    saveSettingsFile.innerHTML = "Export Settings File";
    saveSettingsFile.onclick = function () {
        saveSettings();
        exportLocalStorage();
    }
    localStorageDiv.appendChild(saveSettingsFile);

    let footerDiv = document.createElement('div');
    footerDiv.className = 'okDiv';
    savePanel.appendChild(footerDiv);

    let okButton = document.createElement('button');
    okButton.className = 'okButton';
    okButton.innerHTML = "OK";
    okButton.onclick = function () {
        document.getElementById("editModal").style.display = "none";
    }
    footerDiv.appendChild(okButton);

    document.getElementById("editModal").style.display = "block";
}

function addItem(dest) {
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = "multiple";

    input.onchange = e => {
        var files = e.target.files;
        console.log(files);
        Object.keys(files).forEach(i => {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                var result = e.target.result;
                let newEntry = {
                    "origin": "File",
                    "image": result.replace(/^data:image\/(png|jpg);base64,/, ""),
                    "rarity": 2,
                    "scale": "1",
                    "xOffset": "0",
                    "yOffset": "0",
                    "type": dest,
                    "arrangement": 0,
                    "isNew": false,
                    "isExtended": false,
                    "level": 1,
                    "points": 500
                }
                switch(dest) {
                    case 0:
                        newEntry.type = dest;
                        newEntry.points = 550;
                        break;
                    case 1:
                        newEntry.type = dest;
                        newEntry.points = 250;
                        break;
                    case 2:
                        newEntry.type = dest;
                        newEntry.points = 250;
                        break;
                }
                console.log(newEntry);
                switch (dest) {
                    case 0:
                        settings.drivers[Object.keys(settings.drivers).length] = newEntry;
                        let item = generateDKGPanel(newEntry, Object.keys(settings.drivers).length - 1, newEntry.image, 0, 0.6, newEntry.isNew);
                        item.addEventListener('dragstart', handleDragStart, false);
                        item.addEventListener('dragenter', handleDragEnter, false);
                        item.addEventListener('dragover', handleDragOver, false);
                        item.addEventListener('dragleave', handleDragLeave, false);
                        item.addEventListener('drop', handleDrop, false);
                        document.getElementById(`drivers_items`).appendChild(item);
                        break;
                    case 1:
                        settings.karts[Object.keys(settings.karts).length] = newEntry;
                        let item2 = generateDKGPanel(newEntry, Object.keys(settings.karts).length - 1, newEntry.image, 1, 0.6, newEntry.isNew);
                        item2.addEventListener('dragstart', handleDragStart, false);
                        item2.addEventListener('dragenter', handleDragEnter, false);
                        item2.addEventListener('dragover', handleDragOver, false);
                        item2.addEventListener('dragleave', handleDragLeave, false);
                        item2.addEventListener('drop', handleDrop, false);
                        document.getElementById(`karts_items`).appendChild(item2);
                        break;
                    case 2:
                        settings.gliders[Object.keys(settings.gliders).length] = newEntry;
                        let item3 = generateDKGPanel(newEntry, Object.keys(settings.gliders).length - 1, newEntry.image, 2, 0.6, newEntry.isNew);
                        item3.addEventListener('dragstart', handleDragStart, false);
                        item3.addEventListener('dragenter', handleDragEnter, false);
                        item3.addEventListener('dragover', handleDragOver, false);
                        item3.addEventListener('dragleave', handleDragLeave, false);
                        item3.addEventListener('drop', handleDrop, false);
                        document.getElementById(`gliders_items`).appendChild(item3);
                        break;
                }
            }
            reader.readAsDataURL(file);
        })
    }

    input.click();
}

function replaceItem(dest, localSettings) {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        var file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            var result = e.target.result;
            let newEntry = {
                "origin": "File",
                "image": result.replace(/^data:image\/(png|jpg);base64,/, ""),
                "rarity": 2,
                "scale": "1",
                "xOffset": "0",
                "yOffset": "0",
                "type": 0,
                "arrangement": 0,
                "isNew": false
            }
            console.log(newEntry);
            switch (dest) {
                case 0:
                    localSettings.image = result.replace(/^data:image\/(png|jpg);base64,/, "");
                    localSettings.origin = "File";
                    document.getElementById(`edit_newDKGKartPartImage`).src = result;
                    break;
                case 1:
                    localSettings.image = result.replace(/^data:image\/(png|jpg);base64,/, "");
                    localSettings.origin = "File";
                    document.getElementById(`edit_newDKGKartPartImage`).src = result;
                    break;
                case 2:
                    localSettings.image = result.replace(/^data:image\/(png|jpg);base64,/, "");
                    localSettings.origin = "File";
                    document.getElementById(`edit_newDKGKartPartImage`).src = result;
                    break;
            }
        }
        reader.readAsDataURL(file);
    }

    input.click();
}

function removeItem(type, id) {
    switch (type) {
        case "0":
            delete settings.drivers[id];
            break;
        case "1":
            delete settings.karts[id];
            break;
        case "2":
            delete settings.gliders[id];
            break;
    }
    document.getElementById(`${id}_${type}`).remove();
    document.getElementById(`editModal`).style.display = "none";
    saveSettings();
    updateBoxes(type);
}

function saveSettings() {
    console.log("Saving settings...");
    let newOrder = {
        drivers: {},
        karts: {},
        gliders: {}
    }

    let drivers = document.getElementById('drivers_items').querySelectorAll('.dkgPanel');

    drivers.forEach((div, i) => {
        let numId = div.id.substring(0, div.id.indexOf('_'));
        newOrder.drivers[i] = settings.drivers[numId];
    })

    let karts = document.getElementById('karts_items').querySelectorAll('.dkgPanel');

    karts.forEach((div, i) => {
        let numId = div.id.substring(0, div.id.indexOf('_'));
        newOrder.karts[i] = settings.karts[numId];
    })

    let gliders = document.getElementById('gliders_items').querySelectorAll('.dkgPanel');

    gliders.forEach((div, i) => {
        let numId = div.id.substring(0, div.id.indexOf('_'));
        newOrder.gliders[i] = settings.gliders[numId];
    })

    let settingsCopy = JSON.parse(JSON.stringify(settings));
    settingsCopy.drivers = newOrder.drivers;
    settingsCopy.karts = newOrder.karts;
    settingsCopy.gliders = newOrder.gliders;

    settings = settingsCopy;
    // updateLocalStorage();
    return settingsCopy;
}

function generateHeader() {
    let headerDiv = document.getElementById("tool_settings");
    headerDiv.innerHTML = "";

    let header = document.createElement('div');
    header.id = "header";
    header.className = "header";
    header.innerHTML = `
        <div class="tool_settings_header">Mario Kart Tour Panel Container Generator</div>
    `;
    headerDiv.appendChild(header);

    let buttons = document.createElement('div');
    buttons.id = "header_buttons";
    buttons.className = "header";
    buttons.innerHTML = `
        <button class="settingAdd" onclick="generateIntroModal()">Main Menu</button>
        <button class="settingAdd" onclick="flipItemUsage()">Toggle Special Items</button>
        <button class="settingAdd" onclick="generateItemManagerModal()">Manage Special Items</button>
        <button class="settingAdd" onclick="generateSaveModal()">Export</button>
    `;
    headerDiv.appendChild(buttons);
}

function generateItemManagerModal() {
    let modal = document.getElementById('editModalContainer');
    modal.innerHTML = "";

    let itemPanel = document.createElement('div');
    itemPanel.className = 'savePanel';
    modal.appendChild(itemPanel);

    let itemTxt = document.createElement('p');
    itemTxt.className = 'saveTxt';
    itemTxt.innerHTML = "Special Item Manager";
    itemPanel.appendChild(itemTxt);

    let itemButtonsDiv = document.createElement('div');
    itemButtonsDiv.className = 'itemButtons';
    itemPanel.appendChild(itemButtonsDiv);

    let typeSelect = document.createElement('select');
    typeSelect.className = 'typeSelect';
    typeSelect.onchange = function () {
        console.log(typeSelect.value);
        makeSpecialItemsBox(typeSelect.value);
    }
    itemButtonsDiv.appendChild(typeSelect);

    let typeDriver = document.createElement('option');
    typeDriver.value = 'driver';
    typeDriver.innerHTML = "Driver";
    typeSelect.appendChild(typeDriver);

    let typeKart = document.createElement('option');
    typeKart.value = 'kart';
    typeKart.innerHTML = "Kart";
    typeSelect.appendChild(typeKart);

    let typeGlider = document.createElement('option');
    typeGlider.value = 'glider';
    typeGlider.innerHTML = "Glider";
    typeSelect.appendChild(typeGlider);

    // button to add items to the list
    let addItemButton = document.createElement('button');
    addItemButton.className = 'typeSelect';
    addItemButton.innerHTML = "Add Item";
    addItemButton.onclick = function () {
        addSpecialItem(typeSelect.value);
    }
    itemButtonsDiv.appendChild(addItemButton);

    let restoreItemsButton = document.createElement('button');
    restoreItemsButton.className = 'typeSelect';
    restoreItemsButton.style.width = "105px"
    restoreItemsButton.innerHTML = "Reset Item List";
    restoreItemsButton.onclick = function () {
        if (confirm('Are you sure you want to reset all items back to the list included with the tool? This will delete any images you have added.')) {
            console.log('did the thing')
            settings.specialSkills = JSON.parse(JSON.stringify(baseItems));
            makeSpecialItemsBox(typeSelect.value);
        }
    }
    itemButtonsDiv.appendChild(restoreItemsButton);


    let specialItemDiv = document.createElement('div');
    specialItemDiv.id = 'specialItemDiv';
    specialItemDiv.className = 'specialItemDiv';
    itemPanel.appendChild(specialItemDiv);

    makeSpecialItemsBox("driver");

    let footerDiv = document.createElement('div');
    footerDiv.className = 'okDiv';
    itemPanel.appendChild(footerDiv);

    let okButton = document.createElement('button');
    okButton.className = 'okButton';
    okButton.innerHTML = "OK";
    okButton.onclick = function () {
        document.getElementById("editModal").style.display = "none";
    }
    footerDiv.appendChild(okButton);

    document.getElementById("editModal").style.display = "block";
}

function updateOlderSave() {
    if (!settings.hasOwnProperty('margin')) {
        settings.margin = ["1.5", "1.5"];
    }


    if (!settings.hasOwnProperty('specialSkills')) {
        settings.specialSkills = JSON.parse(JSON.stringify(baseItems));
    }

    Object.keys(settings.drivers).forEach((key) => {
        if (!settings.drivers[key].hasOwnProperty('isExtended')) {
            settings.drivers[key].isExtended = false;
        }
        if (!settings.drivers[key].hasOwnProperty('level')) {
            settings.drivers[key].level = 1;
        }
        if (!settings.drivers[key].hasOwnProperty('points')) {
            settings.drivers[key].points = 500;
        }
        if (!settings.drivers[key].hasOwnProperty('isUseItem')) {
            settings.drivers[key].isUseItem = true;
        }
        if (!settings.drivers[key].hasOwnProperty('specialSkill')) {
            settings.drivers[key].specialSkill = "Item0000";
        }
    });

    Object.keys(settings.karts).forEach((key) => {
        if (!settings.karts[key].hasOwnProperty('isExtended')) {
            settings.karts[key].isExtended = false;
        }
        if (!settings.karts[key].hasOwnProperty('level')) {
            settings.karts[key].level = 1;
        }
        if (!settings.karts[key].hasOwnProperty('points')) {
            settings.karts[key].points = 250;
        }
        if (!settings.karts[key].hasOwnProperty('isUseItem')) {
            settings.karts[key].isUseItem = true;
        }
        if (!settings.karts[key].hasOwnProperty('specialSkill')) {
            settings.karts[key].specialSkill = "Item0000";
        }
    });

    Object.keys(settings.gliders).forEach((key) => {
        if (!settings.gliders[key].hasOwnProperty('isExtended')) {
            settings.gliders[key].isExtended = false;
        }
        if (!settings.gliders[key].hasOwnProperty('level')) {
            settings.gliders[key].level = 1;
        }
        if (!settings.gliders[key].hasOwnProperty('points')) {
            settings.gliders[key].points = 250;
        }
        if (!settings.gliders[key].hasOwnProperty('isUseItem')) {
            settings.gliders[key].isUseItem = true;
        }
        if (!settings.gliders[key].hasOwnProperty('specialSkill')) {
            settings.gliders[key].specialSkill = "Item0000";
        }
    });
}
function makeSpecialItemsBox(type) {
    let specialItemDiv = document.getElementById('specialItemDiv');
    specialItemDiv.innerHTML = "";
    Object.keys(settings.specialSkills).forEach((item) => {
        if (settings.specialSkills[item].type === type) {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'specialItem';
            specialItemDiv.appendChild(itemDiv);
            let itemImg = document.createElement('img');
            itemImg.className = 'specialItemImage';
            itemDiv.appendChild(itemImg);
            switch (settings.specialSkills[item].storage) {
                case "link":
                    itemImg.src = `./Images/UI/Items/${item}.png`;
                    break;
                case "local":
                    itemImg.src = settings.specialSkills[item].image;
                    break;
            }

            let itemXbtn = document.createElement('img');
            itemXbtn.className = 'specialItemX';
            itemXbtn.src = './Images/UI/Items/Item9999.png';
            itemXbtn.onclick = function () {
                delete settings.specialSkills[item];
                makeSpecialItemsBox(type);
            }
            itemDiv.appendChild(itemXbtn);
        }
    })
}

function addSpecialItem(dest) {
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = "multiple";

    input.onchange = e => {
        var files = e.target.files;
        console.log(files);
        Object.keys(files).forEach(i => {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                var result = e.target.result;
                let newEntry = {
                    "type": dest,
                    "storage": "local",
                    "image": result
                }
                console.log(newEntry);
                if (!settings.specialSkills.hasOwnProperty(file.name)) {
                    settings.specialSkills[file.name] = newEntry;
                }
                makeSpecialItemsBox(dest);
            }
            reader.readAsDataURL(file);
        })
    }

    input.click();
}

function changeEditModalPoints(points) {
    let output = document.getElementById("edit_points");
    output.innerHTML = "";

    let charoutput = [];
    for (let i = 0; i < points.toLocaleString().length; i++) {
        charoutput.push(points.toLocaleString().charAt(i));
    }
    console.log(charoutput);
    charoutput.forEach((t, i) => {
        let number = document.createElement('img');
        number.className = `scoreNumber`;
        if (t == ",") {
            number.className = `scoreComma`;
        }
        number.style.height = `${38}px`;
        if (t == ",") {
            number.style.height = `${14}px`;
        }
        number.src = `./Images/UI/Number/${t}.png`
        output.appendChild(number);
    });
}

function changeEditModalLevel(level) {
    let output = document.getElementById("edit_level");
    output.src = `./Images/UI/LeftNum/${level}.png`;

    let output2 = document.getElementById("edit_level2");
    output2.innerHTML = "";

    if (level == 1) {
        output2.style.right = `${30}px`;
    } else {
        output2.style.right = `${38}px`;
    }
}

function changeEditItem(localSettings) {

    let modal = document.getElementById('itemModalContainer');
    modal.innerHTML = "";

    let itemPanel = document.createElement('div');
    itemPanel.className = 'savePanel';
    modal.appendChild(itemPanel);

    let itemTxt = document.createElement('p');
    itemTxt.className = 'saveTxt';
    itemTxt.innerHTML = "Choose a Special Skill:";
    itemPanel.appendChild(itemTxt);

    let specialItemDiv = document.createElement('div');
    specialItemDiv.id = 'specialItemDiv';
    specialItemDiv.className = 'selectItemDiv';
    itemPanel.appendChild(specialItemDiv);
    specialItemDiv.style.height = "340px";

    let translatedType = 0;
    switch (localSettings.type) {
        case 0:
            translatedType = "driver";
            break;
        case 1:
            translatedType = "kart";
            break;
        case 2:
            translatedType = "glider";
            break;
    }

    Object.keys(settings.specialSkills).forEach((item) => {
        if (settings.specialSkills[item].type === translatedType) {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'specialItem';
            specialItemDiv.appendChild(itemDiv);
            let itemImg = document.createElement('img');
            itemImg.className = 'specialItemImage';
            itemDiv.appendChild(itemImg);
            switch (settings.specialSkills[item].storage) {
                case "link":
                    itemImg.src = `./Images/UI/Items/${item}.png`;
                    break;
                case "local":
                    itemImg.src = settings.specialSkills[item].image;
                    break;
            }
            itemDiv.addEventListener('click', function () {
                localSettings.specialSkill = item;
                switch (settings.specialSkills[item].storage) {
                    case "link":
                        document.getElementById('edit_item').src = `./Images/UI/Items/${item}.png`;
                        break;
                    case "local":
                        document.getElementById('edit_item').src = settings.specialSkills[item].image;
                        break;
                }
                document.getElementById("itemModal").style.display = "none";
            });
        }
    })

    document.getElementById("itemModal").style.display = "block";

}

function flipItemUsage(){
    Object.keys(settings.drivers).forEach((item) => {
        settings.drivers[item].isUseItem = !settings.drivers[item].isUseItem;
    });
    Object.keys(settings.karts).forEach((item) => {
        settings.karts[item].isUseItem = !settings.karts[item].isUseItem;
    });
    Object.keys(settings.gliders).forEach((item) => {
        settings.gliders[item].isUseItem = !settings.gliders[item].isUseItem;
    });
    updateBoxes(0);
    updateBoxes(1);
    updateBoxes(2);
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

