function generateBadgeList(){

    let output = document.getElementById('badges');

    Object.keys(savedata.Badges).forEach((t,i)=>{
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
        console.log(savedata.Badges[t].received_epoch);
        driverReceived.innerHTML = `First Received: ${new Date(savedata.Badges[t].received_epoch * 1000).toLocaleString()}`;
        badgeTextDiv.appendChild(driverReceived);
    })

}