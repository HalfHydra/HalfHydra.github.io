function generateProfile(){
    let output = document.getElementById('stats')

    let titleDiv = document.createElement('div');
    titleDiv.className = "titleDiv";
    output.appendChild(titleDiv)

    let badgeImg = document.createElement('img');
    badgeImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${savedata.Profile.badge}.png`;
    badgeImg.className = "badgeImg";
    badgeImg.addEventListener('click', function () {
        openList(3);
    });
    titleDiv.appendChild(badgeImg);

    let profileText = document.createElement('p');
    profileText.className = "profileText";
    profileText.innerHTML = `Profile`;
    titleDiv.appendChild(profileText);

    let nameText = document.createElement('p');
    nameText.className = "nameText";
    nameText.innerHTML = `${savedata.Profile.nickname}`;
    titleDiv.appendChild(nameText);

    let contentDiv = document.createElement('div');
    contentDiv.className = "contentDiv";
    output.appendChild(contentDiv);

    let ranksDiv = document.createElement('div');
    ranksDiv.className = "ranksDiv";
    contentDiv.appendChild(ranksDiv);

    let rankDiv = document.createElement('div');
    rankDiv.className = "rankDiv";
    ranksDiv.appendChild(rankDiv);

    let rankImg = document.createElement('img');
    rankImg.src = `./Images/UI/Rank/UserRank1.png`;
    rankImg.className = "rankImg";
    rankDiv.appendChild(rankImg);

    let rankNums = document.createElement('div');
    rankNums.className = "rankNums";

    var charoutput = [];
    for (var i = 0; i < savedata.Profile.user_rank.toLocaleString().length; i++) {
        charoutput.push(savedata.Profile.user_rank.toLocaleString().charAt(i));
    }
    charoutput.forEach((t,i)=>{
      var number = document.createElement('img');
      number.className = `rankNum`;
      number.src = `./Images/UI/Rank/NumberRank0${t}.png`
      if(charoutput.length > 1 && t === "1"){
          rankNums.style.marginLeft = "0px";
      }
      rankNums.appendChild(number);
    });
    rankImg.src = `./Images/UI/Rank/UserRank${charoutput.pop()}.png`;
    rankDiv.appendChild(rankNums);

    //Tier
    let tierDiv = document.createElement('div');
    tierDiv.className = "tierDiv";
    ranksDiv.appendChild(tierDiv);

    let tierImg = document.createElement('img');
    tierImg.src = `./Images/UI/Tier/Tier.png`;
    tierImg.className = "tierImg";
    tierDiv.appendChild(tierImg);

    let tierNums = document.createElement('div');
    tierNums.className = "tierNums";

    var charoutput = [];
    for (var i = 0; i < savedata.Profile.current_tier.toLocaleString().length; i++) {
        charoutput.push(savedata.Profile.current_tier.toLocaleString().charAt(i));
    }
    charoutput.forEach((t,i)=>{
      var number = document.createElement('img');
      number.className = `tierNum`;
      number.src = `./Images/UI/Tier/${t}.png`
      tierNums.appendChild(number);
    });
    tierDiv.appendChild(tierNums);

    //Multiplayer Rank
    let multiImg = document.createElement('img');
    multiImg.src = `./Images/UI/Rank/${savedata.Profile.current_multiplayer_rank}.png`;
    multiImg.className = "multiImg";
    ranksDiv.appendChild(multiImg);

    let tabGrid = document.createElement('div');
    tabGrid.className = "tabGrid";
    contentDiv.appendChild(tabGrid);

    let tab1Div = document.createElement('div');
    tab1Div.className = "tabDiv";
    tab1Div.addEventListener('click', function () {
        toggleProfileRecordTab(0);
    });
    tabGrid.appendChild(tab1Div);

    let tab1Text = document.createElement('p');
    tab1Text.id = "tabSProfile";
    tab1Text.className = "gridText";
    tab1Text.innerHTML = `Profile`;
    tab1Text.style.borderRight = "4px solid ghostwhite";
    tab1Text.style.borderTopLeftRadius = "5px";
    tab1Text.style.borderBottomLeftRadius = "5px";
    tab1Div.appendChild(tab1Text);

    let tab2Div = document.createElement('div');
    tab2Div.className = "tabDiv";

    tab2Div.addEventListener('click', function () {
        toggleProfileRecordTab(1);
    });
    tabGrid.appendChild(tab2Div);

    let tab2Text = document.createElement('p');
    tab2Text.id = "tabSRecords";
    tab2Text.className = "gridText";
    tab2Text.innerHTML = `Tour Records`;
    tab2Text.style.borderTopRightRadius = "5px";
    tab2Text.style.borderBottomRightRadius = "5px";
    tab2Div.appendChild(tab2Text);

    swapProfileTab("tabSProfile");

    let tabProfile = document.createElement('div');
    tabProfile.id = "tabProfile";
    tabProfile.className = "tabProfile";
    contentDiv.appendChild(tabProfile);

    tabProfile.appendChild(generateSubheading("Favorite Drivers"));

    let favDiv = document.createElement('div');
    favDiv.className = "favDiv";
    tabProfile.appendChild(favDiv);

    savedata.Profile.favorite_drivers.forEach((t,i)=>{
        favDiv.appendChild(generateDKGPanel(convertNameToId(t), 1.0, true, false));
    })

    let listBtns = document.createElement('div');
    listBtns.className = "listBtns";
    tabProfile.appendChild(listBtns);

    let driverList = document.createElement('p');
    driverList.className = "driverList";
    driverList.innerHTML = `Driver List`;
    driverList.addEventListener('click', function () {
        openList(0);
    });
    listBtns.appendChild(driverList);

    let kartList = document.createElement('p');
    kartList.className = "driverList";
    kartList.innerHTML = `Kart List`;
    kartList.addEventListener('click', function () {
        openList(1);
    });
    listBtns.appendChild(kartList);

    let gliderList = document.createElement('p');
    gliderList.className = "driverList";
    gliderList.innerHTML = `Glider List`;
    gliderList.addEventListener('click', function () {
        openList(2);
    });
    listBtns.appendChild(gliderList);

    tabProfile.appendChild(generateSubheading("Records"));

    let recordsDiv = document.createElement('div')
    recordsDiv.className = "recordsDiv";
    tabProfile.appendChild(recordsDiv);

    recordsDiv.appendChild(generateRecord("Drivers", savedata.Profile.driver_count))

    recordsDiv.appendChild(generateRecord("Karts", savedata.Profile.kart_count))

    recordsDiv.appendChild(generateRecord("Gliders", savedata.Profile.glider_count))

    recordsDiv.appendChild(generateRecord("Badges", savedata.Profile.badge_count))

    recordsDiv.appendChild(generateRecord("Highest Score", savedata.Profile.all_time_best_course_score.toLocaleString()))

    recordsDiv.appendChild(generateRecord("Standard Race Wins", savedata.Profile.standard_race_wins))

    recordsDiv.appendChild(generateRecord("Gold Race Wins", savedata.Profile.gold_race_wins))

    recordsDiv.appendChild(generateRecord("Highest Grade", savedata.Profile.highest_multiplayer_rank))

    recordsDiv.appendChild(generateRecord("Highest Tier", savedata.Profile.highest_tier))

    recordsDiv.appendChild(generateRecord("Achieved Kart Pro", savedata.Profile.kart_pro_achieved))

    let tabRecords = document.createElement('div');
    tabRecords.id = "tabRecords";
    tabRecords.className = "tabRecords";
    contentDiv.appendChild(tabRecords);

    let pstCenter = document.createElement('div');
    pstCenter.className = "acrCenter";
    tabRecords.appendChild(pstCenter);

    let pstDiv = document.createElement('div');
    pstDiv.className = "acrDiv";
    pstDiv.addEventListener('click', function () {
        openPastTourStats();
    });
    pstCenter.appendChild(pstDiv);

    let pstImg = document.createElement('img');
    pstImg.src = `./Images/UI/Records/Clipboard.png`;
    pstImg.className = "acrImg";
    pstDiv.appendChild(pstImg);

    let pstText = document.createElement('p');
    pstText.className = "acrText";
    pstText.innerHTML = `Past Tours' Stats`;
    pstDiv.appendChild(pstText);

    tabRecords.appendChild(generateSubheading("Total Points"));

    let acrCenter = document.createElement('div');
    acrCenter.className = "acrCenter";
    tabRecords.appendChild(acrCenter);

    let acrDiv = document.createElement('div');
    acrDiv.className = "acrDiv";
    acrDiv.addEventListener('click', function () {
        openAllCupRanking();
    });
    acrCenter.appendChild(acrDiv);

    let acrImg = document.createElement('img');
    acrImg.src = `./Images/UI/Records/IconAllCupRanking00.png`;
    acrImg.className = "acrImg";
    acrDiv.appendChild(acrImg);

    let acrText = document.createElement('p');
    acrText.className = "acrText";
    acrText.innerHTML = `${seasonJSON.Title}`;
    acrDiv.appendChild(acrText);

    let totalPoints = document.createElement('div');
    totalPoints.className = 'totalPoints';
    let nums = [];
    for (let i = 0; i < savedata.Profile.total_score.toLocaleString().length; i++) {
        nums.push(savedata.Profile.total_score.toLocaleString().charAt(i));
    }
    nums.forEach((t, i) => {
        let number = document.createElement('img');
        number.className = `scoreNumberTP`;
        if (t == ",") {
            number.className = `scoreCommaTP`;
        }
        number.src = `./Images/UI/Number/${t}.png`
        totalPoints.appendChild(number);
    });
    tabRecords.appendChild(totalPoints);

    tabRecords.appendChild(generateSubheading("Course High Scores"));

    let cupCourseItr = 1;
    for(let i = 1; i<13; i++){
        let cupDiv = document.createElement('div');
        cupDiv.className = "cupDiv";
        tabRecords.appendChild(cupDiv);

        let cupName = document.createElement('p');
        cupName.className = "cupName";
        cupName.innerHTML = `${seasonJSON[`Cup_${i}`].cupLabel}`;
        cupDiv.appendChild(cupName);


        let totalCupPoints = savedata[seasonKey][i*3].highScore + savedata[seasonKey][i*3-1].highScore + savedata[seasonKey][i*3-2].highScore;

        if(isNaN(totalCupPoints)){
            totalCupPoints = 0;
        }

        let cupPoints = document.createElement('div');
        cupPoints.className = 'totalPoints';
        let cupNums = [];
        for (let i = 0; i < totalCupPoints.toLocaleString().length; i++) {
            cupNums.push(totalCupPoints.toLocaleString().charAt(i));
        }
        cupNums.forEach((t, i) => {
            let numberCup = document.createElement('img');
            numberCup.className = `scoreNumberC`;
            if (t == ",") {
                numberCup.className = `scoreCommaC`;
            }
            numberCup.src = `./Images/UI/Number/${t}.png`
            cupPoints.appendChild(numberCup);
        });
        cupDiv.appendChild(cupPoints);

        seasonJSON[`Cup_${i}`].courses.forEach(t => {
            cupDiv.appendChild(generateSubheading(coursenames[t]));
            if (savedata[seasonKey][cupCourseItr].driver_id != 0) {
                let cupDataDiv = document.createElement('div');
                cupDataDiv.className = "cupDataDiv";
                cupDiv.appendChild(cupDataDiv);

                let driverPanel = document.createElement('div');
                driverPanel.className = "advantageDKGPanel";
                cupDataDiv.appendChild(driverPanel);

                let advantageImg = document.createElement('img');
                advantageImg.src = `./Images/UI/Records/${savedata[seasonKey][cupCourseItr].driver_ta}_d.png`;
                advantageImg.className = "advantageImg";
                driverPanel.appendChild(advantageImg);

                driverPanel.appendChild(generateDKGPanelSpecial(savedata[seasonKey][cupCourseItr].driver_id, savedata[seasonKey][cupCourseItr].driver_bp, savedata[seasonKey][cupCourseItr].driver_sl, 0.85, true, false));

                let kartPanel = document.createElement('div');
                kartPanel.className = "advantageDKGPanel";
                cupDataDiv.appendChild(kartPanel);

                let advantageImg2 = document.createElement('img');
                advantageImg2.src = `./Images/UI/Records/${savedata[seasonKey][cupCourseItr].machine_ta}_kp.png`;
                advantageImg2.className = "advantageImg";
                kartPanel.appendChild(advantageImg2);

                kartPanel.appendChild(generateDKGPanelSpecial(savedata[seasonKey][cupCourseItr].machine_id, savedata[seasonKey][cupCourseItr].machine_bp, savedata[seasonKey][cupCourseItr].machine_sl, 0.85, true, false));

                let gliderPanel = document.createElement('div');
                gliderPanel.className = "advantageDKGPanel";
                cupDataDiv.appendChild(gliderPanel);

                let advantageImg3 = document.createElement('img');
                advantageImg3.src = `./Images/UI/Records/${savedata[seasonKey][cupCourseItr].wing_ta}_kp.png`;
                advantageImg3.className = "advantageImg";
                gliderPanel.appendChild(advantageImg3);

                gliderPanel.appendChild(generateDKGPanelSpecial(savedata[seasonKey][cupCourseItr].wing_id, savedata[seasonKey][cupCourseItr].wing_bp, savedata[seasonKey][cupCourseItr].wing_sl, 0.85, true, false));

                let coursePoints = document.createElement('div');
                coursePoints.className = 'coursePoints';
                let courseNums = [];
                for (let i = 0; i < savedata[seasonKey][cupCourseItr].highScore.toLocaleString().length; i++) {
                    courseNums.push(savedata[seasonKey][cupCourseItr].highScore.toLocaleString().charAt(i));
                }
                courseNums.forEach((t, i) => {
                    let numberCourse = document.createElement('img');
                    numberCourse.className = `scoreNumberT`;
                    if (t == ",") {
                        numberCourse.className = `scoreCommaT`;
                    }
                    numberCourse.src = `./Images/UI/Number/${t}.png`
                    coursePoints.appendChild(numberCourse);
                });
                cupDataDiv.appendChild(coursePoints);
            } else {
                let noRecord = document.createElement('p');
                noRecord.className = "noRecord";
                noRecord.innerHTML = `No current record.`;
                cupDiv.appendChild(noRecord);
            }
            cupCourseItr++;
        })
    }
}

function generateSubheading(text) {
    let sectionbardiv = document.createElement('div');
    sectionbardiv.className = "subheading";

    let sectionbartxt = document.createElement('p');
    sectionbartxt.innerHTML = text;
    sectionbartxt.className = `subheadingText`;
    sectionbardiv.appendChild(sectionbartxt);

    return sectionbardiv;
}

function swapProfileTab(tab){
    document.getElementById('tabSProfile').style.backgroundColor = "revert";
    document.getElementById('tabSRecords').style.backgroundColor = "revert";
    document.getElementById(tab).style.backgroundColor = "#8A935E";
}

let createdLists = [0,0,0,0];
function openList(list){
    document.getElementById('stats').style.display = "none";
    switch(list){
        case 0:
            if(!createdLists[0]){
                generateDriverList();
                createdLists[0] = 1;
            }
            document.getElementById('drivers').style.display = "block";
            break;
        case 1:
            if(!createdLists[1]){
                generateKartList();
                createdLists[1] = 1;
            }
            document.getElementById('karts').style.display = "block";
            break;
        case 2:
            if(!createdLists[2]){
                generateGliderList();
                createdLists[2] = 1;
            }
            document.getElementById('gliders').style.display = "block";
            break;
        case 3:
            if(!createdLists[3]){
                generateBadgeList();
                createdLists[3] = 1;
            }
            document.getElementById('badges').style.display = "block";
            break;
    }
}

function returnToMain(current){
    document.getElementById(current).style.display = "none";
    document.getElementById('stats').style.display = "block";
}

function generateDriverList(){
    let output = document.getElementById('drivers')

    let titleDiv = document.createElement('div');
    titleDiv.className = "listHeaderDiv";
    output.appendChild(titleDiv)

    let backBtn = document.createElement('img');
    backBtn.src = "./Images/UI/Header/Back.png";
    backBtn.className = "backBtn";
    backBtn.addEventListener('click', function () {
        returnToMain('drivers');
    });
    titleDiv.appendChild(backBtn);

    let ownedDiv = document.createElement('div');
    ownedDiv.className = "ownedDiv";
    titleDiv.appendChild(ownedDiv);

    let ownedText = document.createElement('p');
    ownedText.className = "ownedText";
    ownedText.innerHTML = `Owned Only`;
    ownedDiv.appendChild(ownedText);

    let ownedInput = document.createElement("input");
    ownedInput.id = "ownedInput_drivers";
    ownedInput.className = "ownedInput";
    ownedInput.type = "checkbox";
    ownedInput.addEventListener('input', function () {
        toggleOwned('drivers')
    });
    ownedDiv.appendChild(ownedInput);

    let nameText = document.createElement('p');
    nameText.className = "listHeaderTxt";
    nameText.innerHTML = `Drivers`;
    titleDiv.appendChild(nameText);

    let listDiv = document.createElement('div');
    listDiv.className = "listDiv";
    output.appendChild(listDiv);

    let driverTableSort = [...driverTable].sort(function(a, b) {
        var sortA = new_values[a].sortId
        var sortB = new_values[b].sortId
        if (sortA < sortB) {
            return -1;
        }
        if (sortA > sortB) {
            return 1;
        }
        return 0;
    });

    driverTableSort.forEach((t,i)=>{
        listDiv.appendChild(generateDKGPanel(t, 1.0, true, false));
    })
}

function generateKartList(){
    let output = document.getElementById('karts')

    let titleDiv = document.createElement('div');
    titleDiv.className = "listHeaderDiv";
    output.appendChild(titleDiv)

    let backBtn = document.createElement('img');
    backBtn.src = "./Images/UI/Header/Back.png";
    backBtn.className = "backBtn";
    backBtn.addEventListener('click', function () {
        returnToMain('karts');
    });
    titleDiv.appendChild(backBtn);

    let ownedDiv = document.createElement('div');
    ownedDiv.className = "ownedDiv";
    titleDiv.appendChild(ownedDiv);

    let ownedText = document.createElement('p');
    ownedText.className = "ownedText";
    ownedText.innerHTML = `Owned Only`;
    ownedDiv.appendChild(ownedText);

    let ownedInput = document.createElement("input");
    ownedInput.id = "ownedInput_karts";
    ownedInput.className = "ownedInput";
    ownedInput.type = "checkbox";
    ownedInput.addEventListener('input', function () {
        toggleOwned('karts')
    });
    ownedDiv.appendChild(ownedInput);

    let nameText = document.createElement('p');
    nameText.className = "listHeaderTxt";
    nameText.innerHTML = `Karts`;
    titleDiv.appendChild(nameText);

    let listDiv = document.createElement('div');
    listDiv.className = "listDiv";
    output.appendChild(listDiv);

    let machineTableSort = [...machineTable].sort(function(a, b) {
        var sortA = new_values[a].sortId
        var sortB = new_values[b].sortId
        if (sortA < sortB) {
            return -1;
        }
        if (sortA > sortB) {
            return 1;
        }
        return 0;
    });

    machineTableSort.forEach((t,i)=>{
        listDiv.appendChild(generateDKGPanel(t, 1.0, true, false));
        // if (itemId.toString().length == 5 && Math.round(itemId / 1000) == 70) {
        //     listDiv.appendChild(generateDKGPanel(itemId, 1.0, true, false));
        // }
    })
}

function generateGliderList(){
    let output = document.getElementById('gliders')

    let titleDiv = document.createElement('div');
    titleDiv.className = "listHeaderDiv";
    output.appendChild(titleDiv)

    let backBtn = document.createElement('img');
    backBtn.src = "./Images/UI/Header/Back.png";
    backBtn.className = "backBtn";
    backBtn.addEventListener('click', function () {
        returnToMain('gliders');
    });
    titleDiv.appendChild(backBtn);

    let ownedDiv = document.createElement('div');
    ownedDiv.className = "ownedDiv";
    titleDiv.appendChild(ownedDiv);

    let ownedText = document.createElement('p');
    ownedText.className = "ownedText";
    ownedText.innerHTML = `Owned Only`;
    ownedDiv.appendChild(ownedText);

    let ownedInput = document.createElement("input");
    ownedInput.id = "ownedInput_gliders";
    ownedInput.className = "ownedInput";
    ownedInput.type = "checkbox";
    ownedInput.addEventListener('input', function () {
        toggleOwned('gliders')
    });
    ownedDiv.appendChild(ownedInput);

    let nameText = document.createElement('p');
    nameText.className = "listHeaderTxt";
    nameText.innerHTML = `Gliders`;
    titleDiv.appendChild(nameText);

    let listDiv = document.createElement('div');
    listDiv.className = "listDiv";
    output.appendChild(listDiv);

    let wingTableSort = [...wingTable].sort(function(a, b) {
        var sortA = new_values[a].sortId
        var sortB = new_values[b].sortId
        if (sortA < sortB) {
            return -1;
        }
        if (sortA > sortB) {
            return 1;
        }
        return 0;
    });

    wingTableSort.forEach((t,i)=>{
        listDiv.appendChild(generateDKGPanel(t, 1.0, true, false));
    })
}

function generateBadgeList(){
    let output = document.getElementById('badges')

    let titleDiv = document.createElement('div');
    titleDiv.className = "listHeaderDiv";
    output.appendChild(titleDiv)

    let backBtn = document.createElement('img');
    backBtn.src = "./Images/UI/Header/Back.png";
    backBtn.className = "backBtn";
    backBtn.addEventListener('click', function () {
        returnToMain('badges');
    });
    titleDiv.appendChild(backBtn);

    let nameText = document.createElement('p');
    nameText.className = "badgeHeaderTxt";
    nameText.innerHTML = `Badges`;
    titleDiv.appendChild(nameText);

    let countText = document.createElement('p');
    countText.className = "badgeCountTxt";
    countText.innerHTML = `You have: ${savedata.Profile.badge_count}`;
    titleDiv.appendChild(countText);

    let listDiv = document.createElement('div');
    listDiv.className = "listDiv";
    output.appendChild(listDiv);

    badgesInSortOrder.forEach((t,i)=>{
        let badgeImg = document.createElement('img');
        badgeImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${t.key}.png`;
        badgeImg.className = "badgeList";
        listDiv.appendChild(badgeImg);
    })
}

function toggleOwned(source) {
    if (document.getElementById(`ownedInput_${source}`).checked) {
        let unownedItems = document.getElementById(source).querySelectorAll(".dkgPanelUnowned");

        unownedItems.forEach(function (e) {
            e.style.display = "none"
        });
    } else {
        let unownedItems = document.getElementById(source).querySelectorAll(".dkgPanelUnowned");

        unownedItems.forEach(function (e) {
            e.style.display = "inline-block"
        });
    }
}

function generateRecord(key, value){
    let recordDiv = document.createElement('div');
    recordDiv.className = "recordDiv"

    let leftSide = document.createElement('p')
    leftSide.className = "leftSide";
    leftSide.innerHTML = key;
    recordDiv.appendChild(leftSide)

    let rightSide = document.createElement('p');
    rightSide.className = "rightSide";
    rightSide.innerHTML = value;
    recordDiv.appendChild(rightSide)

    return recordDiv;
}

function toggleProfileRecordTab(tab){
    switch(tab){
        case 0:
            document.getElementById('tabRecords').style.display = "none";
            document.getElementById('tabProfile').style.display = "block";
            swapProfileTab("tabSProfile");
            break;
        case 1:
            document.getElementById('tabRecords').style.display = "block";
            document.getElementById('tabProfile').style.display = "none";
            swapProfileTab("tabSRecords");
            break;
    }
}