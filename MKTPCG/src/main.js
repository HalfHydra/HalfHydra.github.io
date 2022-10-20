let settings = {};

function updateBoxes(type) {
    switch (type) {
        case 0:
            generateItemsBox(document.getElementById("drivers"), 0, 0.6);
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
            generateItemsBox(document.getElementById("karts"), 1, 0.6);
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
            generateItemsBox(document.getElementById("gliders"), 2, 0.6);
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
    generateItemsBox(document.getElementById("drivers"), 0, 0.6);
    generateItemsBox(document.getElementById("karts"), 1, 0.6);
    generateItemsBox(document.getElementById("gliders"), 2, 0.6);
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

function generateItemsBox(output, type, scale) {
    output.innerHTML = "";
    output.style.width = `${(settings.countPerRow[type] * ((scale * 216) + 3) < 400 ? 500 : settings.countPerRow[type] * ((scale * 216) + 5))}px`;

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
                    switch(type){
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
    itemsDiv.style.width = `${settings.countPerRow[type] * ((scale * 216) + 3)}px`;

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
}

function generateDKGPanel(settings, id, image, itemTypeId, scale, isNew) {
    let rarityId = settings.rarity;

    let dkgPanel = document.createElement('div');
    dkgPanel.id = `${id}_${itemTypeId}`;
    dkgPanel.className = 'dkgPanel';
    dkgPanel.addEventListener('click', function () {
        generateEditModal(settings, image, itemTypeId, id);
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
            switch (settings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}UpperBody.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${settings.image}`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
            }
            break;
        case 1:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (settings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/Machine_${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${settings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                    newDKGBox.appendChild(newDKGKartPartImage);
                    break;
            }
            break;
        case 2:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (settings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${settings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                    newDKGBox.appendChild(newDKGKartPartImage);
                    break;
            }
            break;
    }

    let frameImg = document.createElement('img');
    frameImg.src = `./Images/UI/Panel/frame${rarityId}_${itemTypeId}.png`;
    frameImg.className = 'frameImg';
    dkgPanel.appendChild(frameImg);
    if (settings.isNew) {
        let newImg = document.createElement('img');
        newImg.src = `./Images/UI/Panel/New.png`;
        newImg.className = 'panelNewIcon';
        newImg.style.width = `${(76.8) * scale}px`;
        newImg.style.marginTop = `${scale * -10}px`;
        newImg.style.marginLeft = `${scale * -7}px`;
        dkgPanel.appendChild(newImg);
    }

    return dkgPanel;
}

function generateEditDKGPanel(settings, image, itemTypeId, scale, isNew) {
    let rarityId = settings.rarity;

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
            switch (settings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}UpperBody.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${settings.image}`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.width = `${newDKGKartPartImage.naturalWidth * scale}px`;
                        newDKGKartPartImage.style.height = `${newDKGKartPartImage.naturalHeight * scale}px`;
                        newDKGKartPartImage.style.transform = `scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
            }
            break;
        case 1:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (settings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/Machine_${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${settings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                    newDKGBox.appendChild(newDKGKartPartImage);
                    break;
            }
            break;
        case 2:
            newDKGKartPartImage = document.createElement('img');
            newDKGKartPartImage.className = 'newKartPart';

            switch (settings.origin) {
                case "Site":
                    newDKGKartPartImage.src = `./Images/UI/Default/${image}_Large.png`;
                    newDKGKartPartImage.onload = function (event) {
                        newDKGKartPartImage.style.left = `${25 * scale}px`;
                        newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                        newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                        newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
                        newDKGBox.appendChild(newDKGKartPartImage);
                    }
                    break;
                case "File":
                    newDKGKartPartImage.src = `data:image/png;base64,${settings.image}`;
                    newDKGKartPartImage.style.transform = `translate(0, -50%) scale(${settings.scale})`;
                    newDKGKartPartImage.style.left = `${25 * scale}px`;
                    newDKGKartPartImage.style.marginLeft = `${settings.xOffset * scale}px`;
                    newDKGKartPartImage.style.marginTop = `${settings.yOffset * scale}px`;
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

    bgImg.id = 'edit_bgImg';
    frameImg.id = "edit_frameImg"
    newImg.id = "edit_newImg"
    newDKGKartPartImage.id = "edit_newDKGKartPartImage"

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
    itemsDiv.style.width = `${settings.countPerRow[type] * ((scale * 216) + 3)}px`;

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

    livePanel.appendChild(generateEditDKGPanel(localSettings, item, type, 1, settings.isNew));

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

    let saveBtn = document.createElement('button');
    saveBtn.className = 'saveBtn';
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = function () {
        localSettings.rarity = raritySelect.value;
        localSettings.scale = scaleInput.value;
        localSettings.xOffset = xOffsetInput.value;
        localSettings.yOffset = yOffsetInput.value;
        localSettings.isNew = toggleInput.checked;
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
        .then(jsondata => settings = jsondata
        )
        .then(response => main()
        )
        document.getElementById("editModal").style.display = "none";
    };
    inputBtns.appendChild(loadDefault);

    document.getElementById("editModal").style.display = "block";
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
            main();
            document.getElementById("editModal").style.display = "none";
        }
        reader.readAsText(file);
    }

    input.click();
}

function startFresh(){
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
    main();
    document.getElementById("editModal").style.display = "none";
}

function loadFromLocalStorage(){
    settings = JSON.parse(localStorage.getItem("MKTPCG_Settings"));
    main();
    document.getElementById("editModal").style.display = "none";
}

function updateLocalStorage(){
    localStorage.setItem("MKTPCG_Settings", JSON.stringify(settings));
}

function exportLocalStorage(){
    let data = JSON.stringify(settings);
    let filename = `MKTPCG_${new Date().toLocaleDateString()}.json`;
    let a = document.createElement("a")
      , file = new Blob([data],{
        type: "text"
    });
    let url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
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
        downloadContainer(0,1);
    }
    dkgImgPanel.appendChild(driverBtn);

    let driverBtnImg = document.createElement('img');
    driverBtnImg.className = "itemBtnImg";
    driverBtnImg.src = "./Images/UI/Header/Driver.png";
    driverBtn.appendChild(driverBtnImg);

    let kartBtn = document.createElement('button');
    kartBtn.className = 'itemBtn';
    kartBtn.onclick = function () {
        downloadContainer(1,1);
    }
    dkgImgPanel.appendChild(kartBtn);

    let kartBtnImg = document.createElement('img');
    kartBtnImg.className = "itemBtnImg";
    kartBtnImg.src = "./Images/UI/Header/Kart.png";
    kartBtn.appendChild(kartBtnImg);

    let gliderBtn = document.createElement('button');
    gliderBtn.className = 'itemBtn';
    gliderBtn.onclick = function () {
        downloadContainer(2,1);
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
                    "type": 0,
                    "arrangement": 0,
                    "isNew": false
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