let itemsOrdered = [90001,90004,90500,90005,90006,90007,90404,90408,90412,90305, 90309, 90313, 90306, 90310, 90314, 90307, 90311, 90315,90605, 90609, 90613, 90606, 90610, 90614, 90607, 90611, 90615];

function generateItemList(){

    let output = document.getElementById('items');

    itemsOrdered.forEach((t,i)=>{
        let badgeDiv = document.createElement('div');
        badgeDiv.id = `badge_${t}`;
        badgeDiv.className = "itemDiv";
        output.appendChild(badgeDiv);

        //generateBadge
        let badgeImg = document.createElement('img');
        badgeImg.className = "badgeImg";
        badgeImg.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Consumable/${t}.png`;
        badgeDiv.appendChild(badgeImg);

        let badgeTextDiv = document.createElement('div');
        badgeTextDiv.className = "badgeTextDiv";
        badgeDiv.appendChild(badgeTextDiv);

        //generateName
        let badgeName = document.createElement('p');
        badgeName.className = "itemName";
        badgeName.innerHTML = `${savedata.Items[t].name}`;
        badgeTextDiv.appendChild(badgeName);

        //generateName
        let badgeCount = document.createElement('p');
        badgeCount.className = "itemCount";
        badgeCount.innerHTML = `${savedata.Items[t].count.toLocaleString()}`;
        badgeDiv.appendChild(badgeCount);
    })

}