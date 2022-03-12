var isMobile = false;
let version = "1.5.0";

var currentCup = 0;
var isDataEntered = false;
var values;
var itemData;
var coursenames;
var courseimages;
var seasonJSON;

var startToggle = true;

var dataFieldsMade = false;

var courseListMade = false;

var disableDataUsage = false;

let savedata = {
    Items: {
        Drivers: {},
        Karts: {},
        Gliders: {}
    }
}

let createdMenus = [0,0,0,0,0];

var characterid = [];
var charrarity = [];
var charitem = [];
var kartid = [];
var kartrarity = [];
var kartitem = [];
var gliderid = [];
var gliderrarity = [];
var glideritem = [];

let itemarray = [`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`22`,`23`,`24`,`26`,`27`,`31`,`32`,`33`,`44`,`45`,`47`,`48`,`49`,`50`,`51`,`52`,`55`,`57`,`58`,`99`];

let driverTable = [];
let machineTable = [];
let wingTable = [];

let currentScroll = [];

    let driverN = { "0": 400, "8": 408, "17": 416, "27": 424, "38": 432, "50": 440, "63": 448, "77": 456, "92": 464, "108": 472, "126": 480, "146": 488, "168": 496, "192": 504, "218": 512, "246": 520, "276": 528, "308": 536, "342": 544, "378": 552, "417": 560, "459": 568, "504": 576, "552": 584, "603": 592, "657": 600, "714": 608, "772": 616, "831": 624, "891": 632, "952": 640, "1014": 648, "1077": 656, "1141": 664, "1206": 672, "1272": 680, "1339": 688, "1407": 696, "1476": 704, "1546": 712, "1617": 720, "1689": 728, "1762": 736, "1836": 744, "1911": 752, "1987": 760 };
    let driverS = { "0": 450, "8": 459, "17": 468, "27": 477, "38": 486, "50": 495, "63": 504, "77": 513, "92": 522, "108": 531, "126": 540, "146": 549, "168": 558, "192": 567, "218": 576, "246": 585, "276": 594, "308": 603, "342": 612, "378": 621, "417": 630, "459": 639, "504": 648, "552": 657, "603": 666, "657": 675, "714": 690, "772": 705, "831": 720, "891": 735, "952": 750, "1014": 765, "1077": 780, "1141": 795, "1206": 810, "1272": 825, "1339": 840, "1407": 855, "1476": 870, "1546": 885, "1617": 900, "1689": 915, "1762": 930, "1836": 945, "1911": 960, "1987": 975 };
    let driverH = { "0": 500, "8": 512, "17": 524, "27": 536, "38": 548, "50": 560, "63": 572, "77": 584, "92": 596, "108": 608, "126": 620, "146": 632, "168": 644, "192": 656, "218": 668, "246": 680, "276": 692, "308": 704, "342": 716, "378": 728, "417": 740, "459": 752, "504": 764, "552": 776, "603": 788, "657": 800, "714": 830, "772": 860, "831": 890, "891": 920, "952": 950, "1014": 980, "1077": 1010, "1141": 1040, "1206": 1070, "1272": 1100, "1339": 1130, "1407": 1160, "1476": 1190, "1546": 1220, "1617": 1250, "1689": 1280, "1762": 1310, "1836": 1340, "1911": 1370, "1987": 1400 };
    let kartsN = { "0": 200, "6": 204, "13": 208, "21": 212, "30": 216, "40": 220, "51": 224, "63": 228, "76": 232, "90": 236, "105": 240, "121": 244, "138": 248, "156": 252, "175": 256, "195": 260, "216": 264, "238": 268, "261": 272, "285": 276, "311": 280, "339": 284, "369": 288, "401": 292, "435": 296, "471": 300, "509": 304, "548": 308, "588": 312, "629": 316, "671": 320, "714": 324, "758": 328, "803": 332, "849": 336, "896": 340, "944": 344, "993": 348, "1043": 352, "1094": 356, "1146": 360, "1199": 364, "1253": 368, "1308": 372, "1364": 376, "1421": 380 };
    let kartsS = { "0": 220, "6": 224, "13": 228, "21": 232, "30": 236, "40": 240, "51": 244, "63": 248, "76": 252, "90": 256, "105": 260, "121": 264, "138": 268, "156": 272, "175": 276, "195": 280, "216": 285, "238": 290, "261": 295, "285": 300, "311": 305, "339": 310, "369": 315, "401": 320, "435": 325, "471": 330, "509": 336, "548": 342, "588": 348, "629": 354, "671": 360, "714": 366, "758": 372, "803": 378, "849": 384, "896": 390, "944": 396, "993": 402, "1043": 408, "1094": 414, "1146": 420, "1199": 426, "1253": 432, "1308": 438, "1364": 444, "1421": 450 };
    let kartsH = { "0": 250, "6": 256, "13": 262, "21": 268, "30": 274, "40": 280, "51": 286, "63": 292, "76": 298, "90": 304, "105": 310, "121": 316, "138": 322, "156": 328, "175": 334, "195": 340, "216": 346, "238": 352, "261": 358, "285": 364, "311": 370, "339": 376, "369": 382, "401": 388, "435": 394, "471": 400, "509": 415, "548": 430, "588": 445, "629": 460, "671": 475, "714": 490, "758": 505, "803": 520, "849": 535, "896": 550, "944": 565, "993": 580, "1043": 595, "1094": 610, "1146": 625, "1199": 640, "1253": 655, "1308": 670, "1364": 685, "1421": 700 };


function generateArrays(){

    Object.keys(values).forEach(itemId => {
    if(itemId != 29 && itemId != 70057){
      if(itemId.toString().length < 5){
        driverTable.push(itemId);
      }
      if(itemId.toString().length == 5 && Math.round(itemId / 1000) == 30){
        wingTable.push(itemId);
      }
      if(itemId.toString().length == 5 && Math.round(itemId / 1000) == 70){
        machineTable.push(itemId);
      }
    }

    }); 

    let sortIdArray = [];

    driverTable.forEach((id, i) => {
        let anObject = {};
        anObject.sort = values[id].sortId;
        anObject.partId = id;
        anObject.rarity = values[id].rarityId + 1;
        anObject.item = values[id].itemTypeId;
        sortIdArray.push(anObject);
        //console.log(id);
    });
    sortIdArray.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
    sortIdArray.forEach(it => {
        characterid.push(it.partId);
        charrarity.push(it.rarity.toString());
        charitem.push(it.item);
    });

    sortIdArray = [];
    machineTable.forEach((id, i) => {
        let anObject = {};
        anObject.sort = values[id].sortId;
        anObject.partId = id;
        anObject.rarity = values[id].rarityId + 1;
        anObject.item = values[id].itemTypeId;
        sortIdArray.push(anObject);
        //console.log(id);
    });
    sortIdArray.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
    sortIdArray.forEach(it => {
        kartid.push(it.partId);
        kartrarity.push(it.rarity.toString());
        kartitem.push(it.item);
    });

    sortIdArray = [];
    wingTable.forEach((id, i) => {
        let anObject = {};
        anObject.sort = values[id].sortId;
        anObject.partId = id;
        anObject.rarity = values[id].rarityId + 1;
        anObject.item = values[id].itemTypeId;
        sortIdArray.push(anObject);
        //console.log(id);
    });
    sortIdArray.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
    sortIdArray.forEach(it => {
        gliderid.push(it.partId);
        gliderrarity.push(it.rarity.toString());
        glideritem.push(it.item);
    });

}

// window.onclick = function(event) {
//   if (event.target == inventorymodal) {
//     inventorymodal.style.display = "none";
//     document.getElementById('singleinv').innerHTML = "";
//   }
// }

function openPastTourStats(){
    location.href = `https://support.mariokarttour.com/en-US/players/${savedata.Profile.playerId}/season_summaries/${parseInt(seasonKey.substring(6)) - 1}`;
}

function openAllCupRanking(){
    location.href = `https://mariokarttour.com/en-US/ranking/allcup/backnumbers/detail?seasonKey=${parseInt(seasonKey.substring(6))}`;
}

function ReturnToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

function updatesavedata() {
    generateCourseList();
    document.getElementById('json').innerHTML = JSON.stringify(savedata, null, 2);
}

function updateLocalSaveData(){
    localStorage.setItem("MKTVSaveData",JSON.stringify(savedata, null, 2));
}

function deleteLocalSaveData(){
    localStorage.removeItem("MKTVSaveData");
    localStorage.removeItem("MKTVSettingData");
    alert('Deleted Save File. This option is VERY unstable and may require you to clear your browser cache or restart your browser to function properly.')
}

function downloadDataCSV(type){
    var data = "";
    switch(type){
        case 0:
        data = generateLevelsCSV();
        break;
        case 1:
        data = generateBGCSV();
        break;
        case 2:
        let flags = [];
        for(let i = 1; i<10;i++){
            (document.getElementById(`flag_${i}`).checked) ? flags.push(1) : flags.push(0);
        }
        data = generateCustomCSV(flags);
        break;
    }
    var filename = "";
    switch(type){
        case 0:
        filename = `itemDataCSV_${new Date().toLocaleDateString()}.csv`;
        break;
        case 1:
        filename = `B&G_CSV_${new Date().toLocaleDateString()}.csv`;
        break;
        case 2:
        filename = `customItemDataCSV_${new Date().toLocaleDateString()}.csv`;
        break;
    }
    var a = document.createElement("a")
      , file = new Blob([data],{
        type: "text"
    });
    if (window.navigator.msSaveOrOpenBlob)
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function switchTab(tab){
    switch(tab){
        case 0:
            hideAllTabsButOne('stats');
            window.scroll(0, currentScroll);
            break;
        case 1:
            currentScroll = window.scrollY;
            if(!createdMenus[0]){
                console.log("created");
                generateDriverList(0);
                createdMenus[0] = 1;
            }
            hideAllTabsButOne('drivers');
            ReturnToTop();
            break;
        case 2:
            currentScroll = window.scrollY;
            if(!createdMenus[1]){
                generateKartList(0);
                createdMenus[1] = 1;
            }
            hideAllTabsButOne('karts');
            ReturnToTop();
            break;
        case 3:
            currentScroll = window.scrollY;
            if(!createdMenus[2]){
                generateGliderList(0);
                createdMenus[2] = 1;
            }
            hideAllTabsButOne('gliders');
            ReturnToTop();
            break;
        case 4:
            currentScroll = window.scrollY;
            if(!createdMenus[3]){
                generateBadgeList(2);
                createdMenus[3] = 1;
            }
            hideAllTabsButOne('badges');
            ReturnToTop();
            break;
        case 5:
            currentScroll = window.scrollY;
            if(!createdMenus[4]){
                generateItemList();
                createdMenus[4] = 1;
            }
            hideAllTabsButOne('items');
            ReturnToTop();
            break;
    }
    zoomOutMobile();
}

function hideAllTabsButOne(tab){
    document.getElementById('stats').style.display = "none";
    document.getElementById('drivers').style.display = "none";
    document.getElementById('karts').style.display = "none";
    document.getElementById('gliders').style.display = "none";
    document.getElementById('badges').style.display = "none";
    document.getElementById('items').style.display = "none";
    document.getElementById(tab).style.display = "block";
}

function convertToLevel(input, rarity){
    let level = 0;
    let remainder = input;
    let levels = {"2":[1,1,1,2,2,3,5],"1":[1,1,2,3,4,5,8],"0":[1,2,5,8,11,14,20]};
    let required = 0;
    while(remainder - levels[rarity][level] >= 0){
      remainder -= levels[rarity][level];
      level++;
    }
    required = levels[rarity][level];
    return [level, remainder, required];
}

function calcPoints(input, rarity, type) {
    //console.log(`input = ${input}, rarity = ${rarity}, type = ${type}`);
    let points = 0;
    let iterate = 0;
    let remainder = input;
    let amounts = [];
    switch (rarity) {
        case 0:
            switch (type) {
                case 0:
                    Object.keys(driverN).forEach((k, i) => {
                        amounts.push(parseInt(k));
                    });
                    break;
                case 1:
                    Object.keys(kartsN).forEach((k, i) => {
                        amounts.push(parseInt(k));
                    });
                    break;
            }
            break;
        case 1:
            switch (type) {
                case 0:
                    Object.keys(driverS).forEach((k, i) => {
                        amounts.push(parseInt(k));
                    });
                    break;
                case 1:
                    Object.keys(kartsS).forEach((k, i) => {
                        amounts.push(parseInt(k));
                    });
                    break;
            }
            break;
        case 2:
            switch (type) {
                case 0:
                    Object.keys(driverH).forEach((k, i) => {
                        amounts.push(parseInt(k));
                    });
                    break;
                case 1:
                    Object.keys(kartsH).forEach((k, i) => {
                        amounts.push(parseInt(k));
                    });
                    break;
            }
            break;
    }
    let amountItr = 0;
    while ((remainder - amounts[amountItr]) > 0) {
        amountItr++;
    }
    points = amounts[amountItr - 1];
    remainder = input - amounts[amountItr - 1];
    if (input == amounts[amounts.length - 1]) {
        points = amounts[amounts.length - 1];
        remainder = 0;
    }
    if (input == amounts[31]) {
        points = amounts[31];
        remainder = 0;
    }
    if (input == amounts[38]) {
        points = amounts[38];
        remainder = 0;
    }
    if (input == 0) {
        points = 0;
        remainder = 0;
    }
    switch (rarity) {
        case 0:
            switch (type) {
                case 0:
                    return [`${points}`, remainder, amounts[amountItr] - points];
                case 1:
                    return [`${points}`, remainder, amounts[amountItr] - points];
            }
            break;
        case 1:
            switch (type) {
                case 0:
                    return [`${points}`, remainder, amounts[amountItr] - points];
                case 1:
                    return [`${points}`, remainder, amounts[amountItr] - points];
            }
            break;
        case 2:
            switch (type) {
                case 0:
                    return [`${points}`, remainder, amounts[amountItr] - points];
                case 1:
                    return [`${points}`, remainder, amounts[amountItr] - points];
            }
            break;
    }
    return [points, remainder];
}

function generateDKGPanel(itemId, scale, isFav, hideUI){
    let itemTypeId = 0;
    if (itemId.toString().length < 5) {
        itemTypeId = 0
    }
    if (itemId.toString().length == 5 && Math.round(itemId / 1000) == 30) {
        itemTypeId = 2
    }
    if (itemId.toString().length == 5 && Math.round(itemId / 1000) == 70) {
        itemTypeId = 1
    }

    let rarityId = values[`${itemId}`].rarityId;
    
    let dkgPanel = document.createElement('div');
    dkgPanel.className = 'dkgPanel';
    if(scale != 1.0){
        dkgPanel.style.width = `${150 * scale}px`;
        dkgPanel.style.height = `${194 * scale}px`;
    }

    let bgImg = document.createElement('img');
    bgImg.src = `./Images/UI/Panel/bg${rarityId}_${itemTypeId}.png`;
    bgImg.className = 'bgImg';
    dkgPanel.appendChild(bgImg);

    let newKartPart;

    switch(itemTypeId){
        case 0:
            let newDriver = document.createElement('img');
            newDriver.className = 'newDriver';
            newDriver.src = `https://halfhydra.github.io/MarioKartTourValues/Images/UpperBody/${values[itemId].nameInternal}UpperBody.png`;
            newDriver.loading = "lazy";
            //newDriver.src = `C:/Users/justi/Documents/GitHub/HalfHydra.github.io/MarioKartTourValues/Images/UpperBody/${values[itemId].nameInternal}UpperBody.png`
            dkgPanel.appendChild(newDriver);
            break;
        case 1:
            newKartPart = document.createElement('img');
            newKartPart.className = 'newKartPart';
            newKartPart.loading = "lazy";
            newKartPart.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Machine/Machine_${itemId}_Large.png`;
            dkgPanel.appendChild(newKartPart);
            break;
        case 2:
            newKartPart = document.createElement('img');
            newKartPart.className = 'newKartPart';
            newKartPart.loading = "lazy";
            newKartPart.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Wing/${values[itemId].nameInternal}_Large.png`;
            dkgPanel.appendChild(newKartPart);
            break;
    }

    let frameImg = document.createElement('img');
    frameImg.src = `./Images/UI/Panel/frame${rarityId}_${itemTypeId}.png`;
    frameImg.className = 'frameImg';
    dkgPanel.appendChild(frameImg);

    let pointsCount = document.createElement('div');
    pointsCount.className = "pointsPanel";

    let points = 0;
    let level = 0;
    switch (itemTypeId) {
        case 0:
            Object.keys(savedata.Drivers).forEach(t => {
                if (savedata.Drivers[t].id == itemId) {
                    points = savedata.Drivers[t].basepoints
                    level = savedata.Drivers[t].level
                }
            })
            break;
        case 1:
            Object.keys(savedata.Karts).forEach(t => {
                if (savedata.Karts[t].id == itemId) {
                    points = savedata.Karts[t].basepoints
                    level = savedata.Karts[t].level
                }
            })
            break;
        case 2:
            Object.keys(savedata.Gliders).forEach(t => {
                if (savedata.Gliders[t].id == itemId) {
                    points = savedata.Gliders[t].basepoints
                    level = savedata.Gliders[t].level
                }
            })
            break;
    }

    if (points == 0 || level == 0) {
        dkgPanel.className = "dkgPanelUnowned"
    } else if(hideUI) {
        //Do Nothing
    } else {
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
            if(scale != 1.0){
                number.style.height = `${30 * scale}px`;
                if (t == ",") {
                    number.style.height = `${11 * scale}px`;
                }
            }
            number.src = `./Images/UI/Number/${t}.png`
            pointsCount.appendChild(number);
        });
        dkgPanel.appendChild(pointsCount);

        let levelNum = document.createElement('img');
        levelNum.src = `./Images/UI/LeftNum/${level}.png`;
        levelNum.className = 'levelNum';
        dkgPanel.appendChild(levelNum);

        let lvImg = document.createElement('img');
        lvImg.src = './Images/UI/LeftNum/lv.png';
        lvImg.className = 'lvImg';
        dkgPanel.appendChild(lvImg);

        let itemImg = document.createElement('img');
        itemImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Items/${values[itemId].itemTypeId}.png`;
        itemImg.className = 'itemImgPanel';
        dkgPanel.appendChild(itemImg);

        if(scale != 1.0){
            pointsCount.style.bottom = `${8 * scale}px`;
            pointsCount.style.right = `${6 * scale}px`;

            lvImg.style.width = `${38 * scale}px`;
            lvImg.style.right = `${31 * scale}px`;
            lvImg.style.bottom = `${44 * scale}px`;

            levelNum.style.width = `${36 * scale}px`;
            levelNum.style.right = `${-2 * scale}px`;
            levelNum.style.bottom = `${42 * scale}px`;

            itemImg.style.width = `${41 * scale}px`;
            itemImg.style.left = `${4 * scale}px`;
            itemImg.style.bottom = `${9 * scale}px`;
        }
    }

    if(isFav){
        dkgPanel.classList.add('favDriver');
    }

    return dkgPanel;
}

function generateDKGPanelSpecial(itemId, points, level, scale, isFav, hideUI){
    let itemTypeId = 0;
    if (itemId.toString().length < 5) {
        itemTypeId = 0
    }
    if (itemId.toString().length == 5 && Math.round(itemId / 1000) == 30) {
        itemTypeId = 2
    }
    if (itemId.toString().length == 5 && Math.round(itemId / 1000) == 70) {
        itemTypeId = 1
    }

    let rarityId = values[`${itemId}`].rarityId;
    
    let dkgPanel = document.createElement('div');
    dkgPanel.className = 'dkgPanel';
    if(scale != 1.0){
        dkgPanel.style.width = `${150 * scale}px`;
        dkgPanel.style.height = `${194 * scale}px`;
    }

    let bgImg = document.createElement('img');
    bgImg.src = `./Images/UI/Panel/bg${rarityId}_${itemTypeId}.png`;
    bgImg.className = 'bgImg';
    dkgPanel.appendChild(bgImg);

    let newKartPart;

    switch(itemTypeId){
        case 0:
            let newDriver = document.createElement('img');
            newDriver.className = 'newDriver';
            newDriver.src = `https://halfhydra.github.io/MarioKartTourValues/Images/UpperBody/${values[itemId].nameInternal}UpperBody.png`;
            newDriver.loading = "lazy";
            //newDriver.src = `C:/Users/justi/Documents/GitHub/HalfHydra.github.io/MarioKartTourValues/Images/UpperBody/${values[itemId].nameInternal}UpperBody.png`
            dkgPanel.appendChild(newDriver);
            break;
        case 1:
            newKartPart = document.createElement('img');
            newKartPart.className = 'newKartPart';
            newKartPart.loading = "lazy";
            newKartPart.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Machine/Machine_${itemId}_Large.png`;
            dkgPanel.appendChild(newKartPart);
            break;
        case 2:
            newKartPart = document.createElement('img');
            newKartPart.className = 'newKartPart';
            newKartPart.loading = "lazy";
            newKartPart.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Wing/${values[itemId].nameInternal}_Large.png`;
            dkgPanel.appendChild(newKartPart);
            break;
    }

    let frameImg = document.createElement('img');
    frameImg.src = `./Images/UI/Panel/frame${rarityId}_${itemTypeId}.png`;
    frameImg.className = 'frameImg';
    dkgPanel.appendChild(frameImg);

    let pointsCount = document.createElement('div');
    pointsCount.className = "pointsPanel";

    if (points == 0 || level == 0) {
        dkgPanel.className = "dkgPanelUnowned"
    } else if(hideUI) {
        //Do Nothing
    } else {
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
            if(scale != 1.0){
                number.style.height = `${30 * scale}px`;
                if (t == ",") {
                    number.style.height = `${11 * scale}px`;
                }
            }
            number.src = `./Images/UI/Number/${t}.png`
            pointsCount.appendChild(number);
        });
        dkgPanel.appendChild(pointsCount);

        let levelNum = document.createElement('img');
        levelNum.src = `./Images/UI/LeftNum/${level}.png`;
        levelNum.className = 'levelNum';
        dkgPanel.appendChild(levelNum);

        let lvImg = document.createElement('img');
        lvImg.src = './Images/UI/LeftNum/lv.png';
        lvImg.className = 'lvImg';
        dkgPanel.appendChild(lvImg);

        let itemImg = document.createElement('img');
        itemImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Items/${values[itemId].itemTypeId}.png`;
        itemImg.className = 'itemImgPanel';
        dkgPanel.appendChild(itemImg);

        if(scale != 1.0){
            pointsCount.style.bottom = `${8 * scale}px`;
            pointsCount.style.right = `${6 * scale}px`;

            lvImg.style.width = `${38 * scale}px`;
            lvImg.style.right = `${31 * scale}px`;
            lvImg.style.bottom = `${44 * scale}px`;

            levelNum.style.width = `${36 * scale}px`;
            levelNum.style.right = `${-2 * scale}px`;
            levelNum.style.bottom = `${42 * scale}px`;

            itemImg.style.width = `${41 * scale}px`;
            itemImg.style.left = `${4 * scale}px`;
            itemImg.style.bottom = `${9 * scale}px`;
        }
    }

    if(isFav){
        dkgPanel.classList.add('favDriver');
    }

    return dkgPanel;
}

function generateCoursePanel(course, scale, txtColor){

    let courseName = coursenames[course];

    course = course.replace('Classic_','');
    course = course.replace('New_','');
    course = course.replace('Remix_','');

    let coursePanel = document.createElement('div');
    coursePanel.className = 'coursePanel';
    if(scale != 1.0){
        coursePanel.style.width = `${300 * scale}px`;
        coursePanel.style.height = `${130 * scale}px`;
    }

    let courseImg = document.createElement('img');
    courseImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/CourseIcons/${course}_sub.png`;
    courseImg.className = 'courseImg';
    if(scale != 1.0){
        courseImg.style.width = `${300 * scale}px`;
        courseImg.style.height = `${130 * scale}px`;
    }
    coursePanel.appendChild(courseImg);

    let courseTxt = document.createElement('p');
    courseTxt.innerHTML = `${courseName}`;
    courseTxt.className = 'courseTxt';
    if(scale != 1.0){
        courseTxt.style.width = `${300 * scale}px`;
        courseTxt.style.height = `${30 * scale}px`;
    }
    if(txtColor != null){
        courseTxt.style.color = txtColor;
    }
    coursePanel.appendChild(courseTxt);

    return coursePanel;
}