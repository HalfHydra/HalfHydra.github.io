let itemsOrdered = [90001,90004,90005,90500,90006,90007,90404,90408,90412,90305, 90309, 90313, 90306, 90310, 90314, 90307, 90311, 90315,90605, 90609, 90613, 90606, 90610, 90614, 90607, 90611, 90615];

function generateNavBarItem(){
    let output = document.getElementById('items');

    let header = document.createElement('div');
    header.className = "header-nocontent";
    output.appendChild(header); 

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

    let headerSpacer = document.createElement('div');
    headerSpacer.className = "headerSpacer";
    header.appendChild(headerSpacer); 
}

function generateItemList(){

    let output = document.getElementById('items');

    generateNavBarItem();

    let badges3 = document.createElement('div');

    itemsOrdered.forEach((t,i)=>{
        let badgeDiv = document.createElement('div');
        badgeDiv.id = `badge_${t}`;
        badgeDiv.className = "itemDiv";
        badges3.appendChild(badgeDiv);

        //generateBadge
        let badgeImg = document.createElement('img');
        badgeImg.className = "itemImg";
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

        if((i+1) % 3 == 0){
            badges3.style.textAlign = "center";
            output.appendChild(badges3);
            badges3 = document.createElement('div');
        }
    })

}