function generateProfile(){
    let output = document.getElementById('stats')

    // let titletxt = document.createElement('p');
    // titletxt.className = "landingpagetxt titletxt";
    // titletxt.innerHTML = "Account Snapshot";
    // output.appendChild(titletxt);

    let logoImg = document.createElement('img');
    logoImg.src = `./Images/UI/Profile/Logo.png`;
    logoImg.className = "logoImg";
    output.appendChild(logoImg);

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
    nametxt.className = "nametxt";
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
        favDiv.appendChild(generateDKGPanel(convertNameToId(t), 1.0, true, false));
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
        useDiv.appendChild(generateDKGPanel(convertNameToId(t), 1.0, true, false));
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

    output.appendChild(generateSectionBar(`Futhermore...`));

    let nextText = document.createElement('p');
    nextText.className = "landingpagetxt";
    nextText.innerHTML = "Using all of the data collected, I can make calculations that can reveal fun information about your account! <br><br> Before I continue, I just want to clarify that 'copies' means the total amount of an item. A level 3 Pauline means you received her 3 times, hence she has 3 copies.";
    output.appendChild(nextText);

    output.appendChild(generateSectionBar(`Extended Records`));

    let ErecordsDiv = document.createElement('div')
    ErecordsDiv.className = "recordsDiv";
    output.appendChild(ErecordsDiv);

    let playtime = generateRecord("Account Creation Date", new Date(parseInt(`${statsJSON.first_play_time}000`)).toLocaleString());
    playtime.childNodes[1].style.fontSize = "21px";
    console.log(playtime);
    ErecordsDiv.appendChild(playtime);

    ErecordsDiv.appendChild(generateRecord("Total Unique D/K/G", statsJSON.dkg_count.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total D/K/G Copies", statsJSON.total_dkg_count.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Unique High Ends", statsJSON.high_end_count.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total High End Copies", statsJSON.total_high_end_count.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Driver Copies", statsJSON.total_driver_count.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Kart Copies", statsJSON.total_kart_count.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Glider Copies", statsJSON.total_glider_count.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Gained Base Points", statsJSON.total_base_points_dkg.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Driver Base Points", statsJSON.total_base_points_d.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Kart Base Points", statsJSON.total_base_points_k.toLocaleString()))

    ErecordsDiv.appendChild(generateRecord("Total Glider Base Points", statsJSON.total_base_points_g.toLocaleString()))

    output.appendChild(generateSectionBar(`Tutorial Drivers`));

    let tutorialDiv = document.createElement('div');
    tutorialDiv.className = "tutorialDiv";
    output.appendChild(tutorialDiv);

    statsJSON.tutorialDrivers.forEach((t,i)=>{
        tutorialDiv.appendChild(generateDKGPanel(t, 1.0, true, true));
    })

    output.appendChild(generateSectionBar(`First 12 D/K/G`));

    let first10DKGDiv = document.createElement('div');
    first10DKGDiv.className = "favDiv";
    output.appendChild(first10DKGDiv);

    statsJSON.first_10_dkg.forEach((t,i)=>{
        first10DKGDiv.appendChild(generateDKGPanel(t, 1.0, true, true));
    })

    output.appendChild(generateSectionBar(`First 12 High Ends`));

    let first10HEDiv = document.createElement('div');
    first10HEDiv.className = "favDiv";
    output.appendChild(first10HEDiv);

    statsJSON.first_10_high_ends.forEach((t,i)=>{
        first10HEDiv.appendChild(generateDKGPanel(t, 1.0, true, true));
    })

    //IT'S BROKEN NOOOOO
    // output.appendChild(generateSectionBar(`Most Neglected Drivers`));

    // let neglectDDiv = document.createElement('div');
    // neglectDDiv.className = "favDiv";
    // output.appendChild(neglectDDiv);

    // statsJSON.most_neglected_drivers.forEach((t,i)=>{
    //     let boxDiv = document.createElement('div');
    //     boxDiv.className = "neglectDiv";
    //     neglectDDiv.appendChild(boxDiv);

    //     let rankImg = document.createElement('img');
    //     rankImg.src = `./Images/UI/Top/${i+1}.png`;
    //     rankImg.className = "topNum";
    //     boxDiv.appendChild(rankImg);

    //     boxDiv.appendChild(generateDKGPanel(t, 1.0, true, true));

    //     let driverTextDiv = document.createElement('div');
    //     driverTextDiv.className = "lastUseDiv";
    //     boxDiv.appendChild(driverTextDiv);

    //     let driverName = document.createElement('p');
    //     driverName.className = "driverName";
    //     driverName.innerHTML = `${values[t].nameEng}`;
    //     driverTextDiv.appendChild(driverName);

    //     let neglect = 0;

    //     Object.keys(savedata.Drivers).forEach(a => {
    //         if (savedata.Drivers[a].id == t) {
    //             neglect = savedata.Drivers[a].last_used_epoch
    //         }
    //     })

    //     let driverReceived = document.createElement('p');
    //     driverReceived.className = "lastUsed";
    //     driverReceived.innerHTML = `Last Used: ${new Date(neglect * 1000).toLocaleString()}`;
    //     driverTextDiv.appendChild(driverReceived);
    // })

    output.appendChild(generateSectionBar(`Most Neglected Karts`));

    let neglectKDiv = document.createElement('div');
    neglectKDiv.className = "favDiv";
    output.appendChild(neglectKDiv);

    statsJSON.most_neglected_karts.forEach((t,i)=>{
        let boxDiv = document.createElement('div');
        boxDiv.className = "neglectDiv";
        neglectKDiv.appendChild(boxDiv);

        let rankImg = document.createElement('img');
        rankImg.src = `./Images/UI/Top/${i+1}.png`;
        rankImg.className = "topNum";
        boxDiv.appendChild(rankImg);

        boxDiv.appendChild(generateDKGPanel(t, 1.0, true, true));

        let driverTextDiv = document.createElement('div');
        driverTextDiv.className = "lastUseDiv";
        boxDiv.appendChild(driverTextDiv);

        let driverName = document.createElement('p');
        driverName.className = "driverName";
        driverName.innerHTML = `${values[t].nameEng}`;
        driverTextDiv.appendChild(driverName);

        let neglect = 0;

        Object.keys(savedata.Karts).forEach(a => {
            if (savedata.Karts[a].id == t) {
                neglect = savedata.Karts[a].last_used_epoch
            }
        })

        let driverReceived = document.createElement('p');
        driverReceived.className = "lastUsed";
        driverReceived.innerHTML = `Last Used: ${new Date(neglect * 1000).toLocaleString()}`;
        driverTextDiv.appendChild(driverReceived);
    })

    output.appendChild(generateSectionBar(`Most Neglected Gliders`));

    let neglectGDiv = document.createElement('div');
    neglectGDiv.className = "favDiv";
    output.appendChild(neglectGDiv);

    statsJSON.most_neglected_gliders.forEach((t,i)=>{
        let boxDiv = document.createElement('div');
        boxDiv.className = "neglectDiv";
        neglectGDiv.appendChild(boxDiv);

        let rankImg = document.createElement('img');
        rankImg.src = `./Images/UI/Top/${i+1}.png`;
        rankImg.className = "topNum";
        boxDiv.appendChild(rankImg);

        boxDiv.appendChild(generateDKGPanel(t, 1.0, true, true));

        let driverTextDiv = document.createElement('div');
        driverTextDiv.className = "lastUseDiv";
        boxDiv.appendChild(driverTextDiv);

        let driverName = document.createElement('p');
        driverName.className = "driverName";
        driverName.innerHTML = `${values[t].nameEng}`;
        driverTextDiv.appendChild(driverName);

        let neglect = 0;

        Object.keys(savedata.Gliders).forEach(a => {
            if (savedata.Gliders[a].id == t) {
                neglect = savedata.Gliders[a].last_used_epoch
            }
        })

        let driverReceived = document.createElement('p');
        driverReceived.className = "lastUsed";
        driverReceived.innerHTML = `Last Used: ${new Date(neglect * 1000).toLocaleString()}`;
        driverTextDiv.appendChild(driverReceived);
    })

    output.appendChild(generateSectionBar(`Total Used Cap Tickets`));
    
    let tickets = [90605, 90609, 90613, 90606, 90610, 90614, 90607, 90611, 90615]

    let usedCapsDiv = document.createElement('div');
    usedCapsDiv.className = "usedCapsDiv"
    output.appendChild(usedCapsDiv);

    let usedCapText = document.createElement('p');
    usedCapText.className = "usedCapText";
    usedCapText.innerHTML = "Used Cap Tickets";
    usedCapsDiv.appendChild(usedCapText);

    tickets.forEach((t,i) => {
        let ticketDiv = document.createElement('div');
        ticketDiv.className = "ticketDiv";
        usedCapsDiv.appendChild(ticketDiv);

        let ticketImg = document.createElement('img');
        ticketImg.className = "ticketCapImg";
        ticketImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Consumable/${t}.png`;
        ticketDiv.appendChild(ticketImg);

        let ticketCount = document.createElement('p');
        ticketCount.className = "ticketCount";
        ticketCount.innerHTML = `${statsJSON.used_cap_ticket_nums[i]}`;
        ticketDiv.appendChild(ticketCount);
    })

    output.appendChild(generateSectionBar(`Most Obtained Badges`));

    let mostBadgesDiv = document.createElement('div');
    mostBadgesDiv.className = "favDiv";
    output.appendChild(mostBadgesDiv);

    statsJSON.most_obtained_badges.forEach((t,i)=>{
        let boxDiv = document.createElement('div');
        boxDiv.className = "neglectDiv";
        mostBadgesDiv.appendChild(boxDiv);

        let rankImg = document.createElement('img');
        rankImg.src = `./Images/UI/Top/${i+1}.png`;
        rankImg.className = "topNum";
        boxDiv.appendChild(rankImg);

        let badgeMostImg = document.createElement('img');
        badgeMostImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${t}.png`;
        badgeMostImg.className = "badgeMostImg";
        boxDiv.appendChild(badgeMostImg);

        let driverTextDiv = document.createElement('div');
        driverTextDiv.className = "lastUseDiv";
        boxDiv.appendChild(driverTextDiv);

        let driverName = document.createElement('p');
        driverName.className = "driverName";
        driverName.innerHTML = `${t}`;
        driverTextDiv.appendChild(driverName);

        let count = 0;

        Object.keys(savedata.Badges).forEach(a => {
            if (savedata.Badges[a].key == t) {
                count = savedata.Badges[a].count;
            }
        })

        let driverReceived = document.createElement('p');
        driverReceived.className = "lastUsed";
        driverReceived.innerHTML = `Collected x${count}`;
        driverTextDiv.appendChild(driverReceived);
    })

    output.appendChild(generateSectionBar(`Team Rally Badges`));

    let rallyBadgeDiv = document.createElement('div');
    rallyBadgeDiv.className = "quickStartBadgeDiv";
    output.appendChild(rallyBadgeDiv);
    statsJSON.rally_badges.forEach((t,i)=>{
        let badgeMostImg = document.createElement('img');
        badgeMostImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${t}.png`;
        badgeMostImg.className = "badgeDisplayImg";
        rallyBadgeDiv.appendChild(badgeMostImg);
    });
    if(statsJSON.rally_badges.length == 0){
        let noneText = document.createElement('p');
        noneText.className = "landingpagetxt";
        noneText.innerHTML = "None Yet!";
        rallyBadgeDiv.appendChild(noneText);
    }

    output.appendChild(generateSectionBar(`Expert Challenges Badges`));

    let expertBadgeDiv = document.createElement('div');
    expertBadgeDiv.className = "quickStartBadgeDiv";
    output.appendChild(expertBadgeDiv);
    statsJSON.expert_badges.forEach((t,i)=>{
        let badgeMostImg = document.createElement('img');
        badgeMostImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${t}.png`;
        badgeMostImg.className = "badgeDisplayImg";
        expertBadgeDiv.appendChild(badgeMostImg);
    });
    if(statsJSON.expert_badges.length == 0){
        let noneText = document.createElement('p');
        noneText.className = "landingpagetxt";
        noneText.innerHTML = "None Yet!";
        expertBadgeDiv.appendChild(noneText);
    }


    output.appendChild(generateSectionBar(`Today's Challenge Badges`));

    let quickStartBadgeDiv = document.createElement('div');
    quickStartBadgeDiv.className = "quickStartBadgeDiv";
    output.appendChild(quickStartBadgeDiv);
    statsJSON.todays_challenge_badges.forEach((t,i)=>{
        let badgeMostImg = document.createElement('img');
        badgeMostImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${t}.png`;
        badgeMostImg.className = "badgeDisplayImg";
        quickStartBadgeDiv.appendChild(badgeMostImg);
    });
    if(statsJSON.todays_challenge_badges.length == 0){
        let noneText = document.createElement('p');
        noneText.className = "landingpagetxt";
        noneText.innerHTML = "None Yet!";
        quickStartBadgeDiv.appendChild(noneText);
    }

    output.appendChild(generateSectionBar(`All Cup Ranking Badges`));

    let acrBadgeDiv = document.createElement('div');
    acrBadgeDiv.className = "quickStartBadgeDiv";
    output.appendChild(acrBadgeDiv);
    statsJSON.acr_badges.forEach((t,i)=>{
        let badgeMostImg = document.createElement('img');
        badgeMostImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${t}.png`;
        badgeMostImg.className = "badgeDisplayImg";
        acrBadgeDiv.appendChild(badgeMostImg);
    });
    if(statsJSON.acr_badges.length == 0){
        let noneText = document.createElement('p');
        noneText.className = "noneYetText";
        noneText.innerHTML = "None Yet!";
        acrBadgeDiv.appendChild(noneText);
    }

    output.appendChild(generateSectionBar(`Completely Maxed D/K/G`));

    let maxDiv = document.createElement('div');
    maxDiv.className = "favDiv";
    output.appendChild(maxDiv);

    statsJSON.completely_maxed_dkg.forEach((t,i)=>{
        maxDiv.appendChild(generateDKGPanel(t, 1.0, true, false));
    })

    output.appendChild(generateSectionBar(`Triple Capped D/K/G`));

    let cap3Div = document.createElement('div');
    cap3Div.className = "favDiv";
    output.appendChild(cap3Div);

    statsJSON.triple_capped_dkg.forEach((t,i)=>{
        cap3Div.appendChild(generateDKGPanel(t, 1.0, true, false));
    })

    output.appendChild(generateSectionBar(`Double Capped D/K/G`));

    let cap2Div = document.createElement('div');
    cap2Div.className = "favDiv";
    output.appendChild(cap2Div);

    statsJSON.double_capped_dkg.forEach((t,i)=>{
        cap2Div.appendChild(generateDKGPanel(t, 1.0, true, false));
    })

    // output.appendChild(generateSectionBar(`Single Capped D/K/G`));

    // let cap1Div = document.createElement('div');
    // cap1Div.className = "favDiv";
    // output.appendChild(cap1Div);

    // statsJSON.single_capped_dkg.forEach((t,i)=>{
    //     cap1Div.appendChild(generateDKGPanel(t, 1.0, true, false));
    // })

    output.appendChild(generateSectionBar(`Level 7 D/K/G`));

    let level7Div = document.createElement('div');
    level7Div.className = "favDiv";
    output.appendChild(level7Div);

    statsJSON.level_7_dkg.forEach((t,i)=>{
        level7Div.appendChild(generateDKGPanel(t, 1.0, true, false));
    })

    output.appendChild(generateSectionBar(`Account Worth`));

    let coinWorthImg = document.createElement('img');
    coinWorthImg.src = `./Images/UI/Profile/CoinWorth.png`;
    coinWorthImg.className = "coinWorthImg";
    coinWorthImg.loading = "lazy";
    output.appendChild(coinWorthImg);

    let CWrecordsDiv = document.createElement('div')
    CWrecordsDiv.className = "recordsDiv";
    output.appendChild(CWrecordsDiv);

    CWrecordsDiv.appendChild(generateRecord("Account Coin Worth", statsJSON.total_coin_worth.toLocaleString()))

    let rubyWorthImg = document.createElement('img');
    rubyWorthImg.src = `./Images/UI/Profile/RubyWorth.png`;
    rubyWorthImg.loading = "lazy";
    rubyWorthImg.className = "coinWorthImg";
    output.appendChild(rubyWorthImg);

    let RWrecordsDiv = document.createElement('div')
    RWrecordsDiv.className = "recordsDiv";
    output.appendChild(RWrecordsDiv);

    RWrecordsDiv.appendChild(generateRecord("Account Ruby Worth", statsJSON.total_ruby_worth.toLocaleString()))
    

    output.appendChild(generateSectionBar(`Final Word`));

    let lastText = document.createElement('p');
    lastText.className = "landingpagetxt";
    lastText.innerHTML = "That's all for now! I hope you enjoyed this site! More may be added in the future involving courses. I spent a very long time trying to get this right, and look amazing while doing so. <br><br>If you have any feedback, please feel free to reach out to me - the easiest way is via my Discord server at discord.gg/UeJZDXxzun<br><br>One last surprise, tap this button here to access your past tour stats!";
    output.appendChild(lastText);

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
    wiptext.innerHTML = "Created by HalfHydra";
    output.appendChild(wiptext);


}

function generateDKGPanel(itemId, scale, isFav, hideUI){
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

    if (points == 0) {
        dkgPanel.style.filter = "brightness(0.36)"
    } else if(hideUI) {
        //Do Nothing
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