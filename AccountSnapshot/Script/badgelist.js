function generateNavBarBadge(){
    let output = document.getElementById('badges');

    let header = document.createElement('div');
    header.className = "header";
    output.appendChild(header); 

    let inGame = document.createElement('img');
    inGame.src = "./Images/UI/Header/InGame.png";
    inGame.className = "headerBtn";
    inGame.addEventListener('click', function () {
        generateBadgeList(2);
    });
    header.appendChild(inGame);

    let descendDR = document.createElement('img');
    descendDR.src = "./Images/UI/Header/DateReceivedD.png";
    descendDR.className = "headerBtn";
    descendDR.addEventListener('click', function () {
        generateBadgeList(0);
    });
    header.appendChild(descendDR);

    let ascendDR = document.createElement('img');
    ascendDR.src = "./Images/UI/Header/DateReceivedA.png";
    ascendDR.className = "headerBtn";
    ascendDR.addEventListener('click', function () {
        generateBadgeList(1);
    });
    header.appendChild(ascendDR);

    let returnTop = document.createElement('img');
    returnTop.src = "./Images/UI/Header/ReturnToTop.png";
    returnTop.className = "returnTop";
    returnTop.addEventListener('click', function () {
        ReturnToTop();
    });
    header.appendChild(returnTop);

    let backBtn = document.createElement('img');
    backBtn.src = "./Images/UI/Header/Back.png";
    backBtn.className = "backBtn";
    backBtn.addEventListener('click', function () {
        switchTab(0);
    });
    header.appendChild(backBtn);
}

function generateBadgeList(type){

    let output = document.getElementById('badges');
    output.innerHTML = "";

    generateNavBarBadge();

    let items = [];

    switch(type){
        case 0:
            items = Object.keys(savedata.Badges)
            break;
        case 1:
            items = Object.keys(savedata.Badges)
            items.reverse();
            break;
        case 2:
            items = Object.keys(savedata.Badges)
            items.sort(function (a, b) {
                return savedata.Badges[a].sortId - savedata.Badges[b].sortId;
            });
            break;
    }

    items.forEach((t,i)=>{
        let badgeDiv = document.createElement('div');
        badgeDiv.id = `badge_${t}`;
        badgeDiv.className = "badgeDiv";
        output.appendChild(badgeDiv);

        //generateBadge
        let badgeImg = document.createElement('img');
        badgeImg.className = "badgeImg";
        badgeImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Badges/${savedata.Badges[t].key}.png`;
        badgeDiv.appendChild(badgeImg);

        let badgeTextDiv = document.createElement('div');
        badgeTextDiv.className = "badgeTextDiv";
        badgeDiv.appendChild(badgeTextDiv);

        //generateName
        let badgeName = document.createElement('p');
        badgeName.className = "badgeName";
        badgeName.innerHTML = `${savedata.Badges[t].key}`;
        badgeTextDiv.appendChild(badgeName);

        //generateName
        let badgeCount = document.createElement('p');
        badgeCount.className = "badgeName";
        badgeCount.innerHTML = `Collected: x${savedata.Badges[t].count}`;
        badgeTextDiv.appendChild(badgeCount);

        //generateDateReceived
        let driverReceived = document.createElement('p');
        driverReceived.className = "badgeReceived";
        //console.log(savedata.Badges[t].received_epoch);
        driverReceived.innerHTML = `First Received: ${new Date(savedata.Badges[t].received_epoch * 1000).toLocaleString()}`;
        badgeTextDiv.appendChild(driverReceived);
    })

}