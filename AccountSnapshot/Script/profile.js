function generateProfile(){
    let output = document.getElementById('stats')

    let titletxt = document.createElement('p');
    titletxt.className = "landingpagetxt titletxt";
    titletxt.innerHTML = "Account Snapshot";
    output.appendChild(titletxt);

    let takentxt = document.createElement('p');
    takentxt.className = "landingpagetxt takentxt";
    takentxt.innerHTML = `Snapshot Taken: ${new Date(savedata.Profile.snapshotTakenAtEpoch).toLocaleString()}`;
    output.appendChild(takentxt);

    let sectionDiv = document.createElement('div');
    sectionDiv.className = "sectionDiv";
    output.appendChild(sectionDiv);

    let nameDiv = document.createElement('div');
    nameDiv.className = "nameDiv";
    sectionDiv.appendChild(nameDiv);

    let nametxt = document.createElement('p');
    nametxt.className = "landingpagetxt nametxt";
    nametxt.innerHTML = savedata.Profile.nickname;
    nameDiv.appendChild(nametxt);

    let badgerank = document.createElement('div');
    badgerank.className = "badgeRank";
    sectionDiv.appendChild(badgerank);

    let badgeImg = document.createElement('img');
    badgeImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${savedata.Profile.badge}.png`;
    badgeImg.className = "badgeImgProf";
    badgerank.appendChild(badgeImg);

    let rankDiv = document.createElement('div');
    rankDiv.className = "rankDiv";
    badgerank.appendChild(rankDiv);

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
    badgerank.appendChild(tierDiv);

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
    badgerank.appendChild(multiImg);

    //Total Points
    let totalPoints = document.createElement('div');
    totalPoints.className = 'totalPoints';
    var nums = [];
    for (var i = 0; i < savedata.Profile.total_score.toLocaleString().length; i++) {
        nums.push(savedata.Profile.total_score.toLocaleString().charAt(i));
    }
    nums.forEach((t, i) => {
        var number = document.createElement('img');
        number.className = `scoreNumberTP`;
        if (t == ",") {
            number.className = `scoreCommaTP`;
        }
        number.src = `./Images/UI/Number/${t}.png`
        totalPoints.appendChild(number);
    });
    output.appendChild(totalPoints);

    //Favorite Drivers
    output.appendChild(generateSectionBar(`Favorite Drivers`));

    let favDiv = document.createElement('div');
    favDiv.className = "favDiv";
    output.appendChild(favDiv);

    savedata.Profile.favorite_drivers.forEach((t,i)=>{
        favDiv.appendChild(generateDKGPanel(convertNameToId(t), true));
    })

    // driverTable.forEach((t,i)=>{
    //     favDiv.appendChild(generateDKGPanel(t));
    // })

    output.appendChild(generateSectionBar(`Detailed Item Lists`));

    let listD = document.createElement('div');
    listD.className = "headerDiv";
    listD.addEventListener('click', function () {
        switchTab(1);
    });
    output.appendChild(listD);

    let listD_img = document.createElement('img');
    listD_img.src = "./Images/UI/Header/Driver.png";
    listD_img.className = "headerImg";
    listD.appendChild(listD_img);

    let listD_txt = document.createElement('p');
    listD_txt.className = "whiteoutline listBtnTxt"
    listD_txt.innerHTML = "Driver List";
    listD.appendChild(listD_txt);

    let listA = document.createElement('div');
    listA.className = "headerDiv";
    listA.addEventListener('click', function () {
        switchTab(2);
    });
    output.appendChild(listA);

    let listA_img = document.createElement('img');
    listA_img.src = "./Images/UI/Header/Kart.png";
    listA_img.className = "headerImg";
    listA.appendChild(listA_img);

    let listA_txt = document.createElement('p');
    listA_txt.className = "whiteoutline listBtnTxt"
    listA_txt.innerHTML = "Kart List";
    listA.appendChild(listA_txt);

    let listG = document.createElement('div');
    listG.className = "headerDiv";
    listG.addEventListener('click', function () {
        switchTab(3);
    });
    output.appendChild(listG);

    let listG_img = document.createElement('img');
    listG_img.src = "./Images/UI/Header/Glider.png";
    listG_img.className = "headerImg";
    listG.appendChild(listG_img);

    let listG_txt = document.createElement('p');
    listG_txt.className = "whiteoutline listBtnTxt"
    listG_txt.innerHTML = "Glider List";
    listG.appendChild(listG_txt);

    let listB = document.createElement('div');
    listB.className = "headerDiv";
    listB.addEventListener('click', function () {
        switchTab(4);
    });
    output.appendChild(listB);

    let listB_img = document.createElement('img');
    listB_img.src = "./Images/UI/Header/Badge.png";
    listB_img.className = "headerImg";
    listB.appendChild(listB_img);

    let listB_txt = document.createElement('p');
    listB_txt.className = "whiteoutline listBtnTxt"
    listB_txt.innerHTML = "Badge List";
    listB.appendChild(listB_txt);

    let listI = document.createElement('div');
    listI.className = "headerDiv";
    listI.addEventListener('click', function () {
        switchTab(5);
    });
    output.appendChild(listI);

    let listI_img = document.createElement('img');
    listI_img.src = "./Images/UI/Header/Inventory.png";
    listI_img.className = "headerImg";
    listI.appendChild(listI_img);

    let listI_txt = document.createElement('p');
    listI_txt.className = "whiteoutline listBtnTxt"
    listI_txt.innerHTML = "Item List";
    listI.appendChild(listI_txt);

    output.appendChild(generateSectionBar(`Tour Most Used Drivers`));

    let useDiv = document.createElement('div');
    useDiv.className = "favDiv";
    output.appendChild(useDiv);

    savedata.Profile.most_used_drivers_current_tour.forEach((t,i)=>{
        useDiv.appendChild(generateDKGPanel(convertNameToId(t), true));
    })

    output.appendChild(generateSectionBar(`Records`));

    let recordsDiv = document.createElement('div')
    recordsDiv.className = "recordsDiv";
    output.appendChild(recordsDiv);

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

    recordsDiv.appendChild(generateRecord("Current Multiplayer XP", savedata.Profile.current_multiplayer_rate.toLocaleString()))

    recordsDiv.appendChild(generateRecord("Highest Multiplayer XP", savedata.Profile.highest_multiplayer_rate.toLocaleString()))

    recordsDiv.appendChild(generateRecord("User Rank", savedata.Profile.user_rank))

    recordsDiv.appendChild(generateRecord("User Rank XP", savedata.Profile.total_rank_xp.toLocaleString()))

    output.appendChild(generateSectionBar(`Open Past Tour Stats`));

    let btnPTS = document.createElement('div');
    btnPTS.className = "headerDiv";
    btnPTS.addEventListener('click', function () {
        openPastTourStats();
    });
    output.appendChild(btnPTS);

    let btnPTS_img = document.createElement('img');
    btnPTS_img.src = "./Images/UI/Header/PastTourStats.png";
    btnPTS_img.className = "headerImg";
    btnPTS.appendChild(btnPTS_img);

    let btnPTS_txt = document.createElement('p');
    btnPTS_txt.className = "whiteoutline listBtnTxt"
    btnPTS_txt.innerHTML = "Past Tour Stats";
    btnPTS.appendChild(btnPTS_txt);

    let wiptext = document.createElement('p');
    wiptext.className = "landingpagetxt wipText";
    wiptext.innerHTML = "This is a work in progress. More to come soon...";
    output.appendChild(wiptext);
}

function generateDKGPanel(itemId, isFav){
    console.log(itemId);
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
    
    var dkgPanel = document.createElement('div');
    dkgPanel.className = 'dkgPanel';
    if(isFav){
        dkgPanel.className = 'dkgPanel favDriver';
    }

    let bgImg = document.createElement('img');
    bgImg.src = `./Images/UI/Panel/bg${rarityId}_${itemTypeId}.png`;
    bgImg.className = 'bgImg';
    dkgPanel.appendChild(bgImg);

    switch(itemTypeId){
        case 0:
            let newDriver = document.createElement('img');
            newDriver.className = 'newDriver';
            newDriver.src = `https://halfhydra.github.io/MarioKartTourValues/Images/UpperBody/${values[itemId].nameInternal}UpperBody.png`;
            //newDriver.src = `C:/Users/justi/Documents/GitHub/HalfHydra.github.io/MarioKartTourValues/Images/UpperBody/${values[itemId].nameInternal}UpperBody.png`
            dkgPanel.appendChild(newDriver);
            break;
        case 1:
            let newKartPart = document.createElement('img');
            newKartPart.className = 'newKartPart';
            newKartPart.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Machine/Machine_${itemId}_Large.png`;
            dkgPanel.appendChild(newKartPart);
            break;
        case 2:
            newKartPart = document.createElement('img');
            newKartPart.className = 'newKartPart';
            newKartPart.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${values[itemId].nameInternal}_Large.png`;
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
    Object.keys(savedata.Drivers).forEach(t =>{
        if(savedata.Drivers[t].id == itemId){
            points = savedata.Drivers[t].basepoints
            level = savedata.Drivers[t].level
        }
    })

    if (points == 0) {
        dkgPanel.style.filter = "brightness(0.36)"
    } else {
        var charoutput = [];
        for (var i = 0; i < points.toLocaleString().length; i++) {
            charoutput.push(points.toLocaleString().charAt(i));
        }
        charoutput.forEach((t, i) => {
            var number = document.createElement('img');
            number.className = `scoreNumber`;
            if (t == ",") {
                number.className = `scoreComma`;
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
    }

    return dkgPanel;
}

function generateSectionBar(text) {
    let sectionbardiv = document.createElement('div');
    sectionbardiv.className = "sectionbardiv";

    let sectionbartxt = document.createElement('p');
    sectionbartxt.innerHTML = text;
    sectionbartxt.className = `sectionbartxt`;
    sectionbardiv.appendChild(sectionbartxt);

    return sectionbardiv;
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