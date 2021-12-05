//var itemNames = {};
var new_values = {};

var courseList = [];

var convertedData = {};
var convertedvalues = {};

var coursedata = {
    Courses: {}
}

var usercoursedata = {
    Courses: {}
}

let seasonKey = "";

let valuesJSON = {};
let saveJSON = {};
let statsJSON = {};
let statsJSONEnglish = {};

let allItems = [];
let allItemsNeglected = [];
let allItemsSort = [];

let allItemsIds = [];

let badgesInOrder = [];
let badgesInCountOrder = [];
let badgesInSortOrder = [];

let coinWorth = { "DKG": { "Drivers": { "HighEnd": 12000, "Super": 3000, "Common": 800 }, "Karts": { "HighEnd": 10000, "Super": 2000, "Common": 500 }, "Gliders": { "HighEnd": 10000, "Super": 2000, "Common": 500 } }, "Items": { "90001": 1, "90005": 50, "90006": 100, "90007": 1000, "90305": 800, "90306": 3000, "90307": 12000, "90309": 500, "90310": 2000, "90311": 10000, "90313": 500, "90314": 2000, "90315": 10000, "90404": 100, "90408": 100, "90412": 100, "90500": 800, "90605": 2000, "90606": 5000, "90607": 20000, "90609": 2000, "90610": 5000, "90611": 20000, "90613": 2000, "90614": 5000, "90615": 20000 } };


function calcValuesStats() {
    inputData();
    convertToUsable();
    convertCourseNames();
    //generateItemArrays(); Already done
    convertInternalCourseValues();
    createCourseData();
    initializeProperties();
    buildStats();
}

function inputData(){
    new_values = JSON.parse(JSON.stringify(values));
    saveJSON = JSON.parse(JSON.stringify(savedata));
}

function convertToUsable() {
    Object.keys(new_values).forEach((t, i) => {
        if (t == "Courses") {
            return;
        }
        convertedData[t] = {};
        convertedData[t].nameEng = new_values[t].nameEng;
        convertedData[t].rarityId = new_values[t].rarityId;
        convertedData[t].itemTypeId = new_values[t].itemTypeId;
        convertedData[t].sortId = new_values[t].sortId;
        convertedData[t].moreGoodAt = [];
        convertedData[t].goodAt = [];
        convertedData[t].unlock3 = [];
        convertedData[t].unlock6 = [];

        Object.values(new_values[t].moreGoodAt).forEach((y, i) => {
            convertedData[t].moreGoodAt.push(y.name);
        });

        Object.values(new_values[t].goodAt).forEach((y, i) => {
            switch (y.promotionLevel) {
                case 0:
                    convertedData[t].goodAt.push(y.name);
                    break;
                case 3:
                    convertedData[t].goodAt.push(y.name);
                    convertedData[t].unlock3.push(y.name);
                    break;
                case 6:
                    convertedData[t].goodAt.push(y.name);
                    convertedData[t].unlock6.push(y.name);
                    break;
            }
        });

        convertedData[t].total = convertedData[t].moreGoodAt.length + convertedData[t].unlock3.length + convertedData[t].unlock6.length;

    });
    convertedvalues = convertedData;
}

function convertCourseNames(){
    Object.keys(coursenames).forEach((t, i) => {
            switch(t){
                case "Classic_G3ds_RainbowRoad":
                coursenames[t] = "3DS Rainbow Road"
                break;
                case "Classic_G3ds_RainbowRoadX":
                coursenames[t] = "3DS Rainbow Road T"
                break;
                case "Classic_G3ds_RainbowRoadR":
                coursenames[t] = "3DS Rainbow Road R"
                break;
                case "Classic_G3ds_RainbowRoadRX":
                coursenames[t] = "3DS Rainbow Road R/T"
                break;
                case "Classic_Gsfc_RainbowRoad":
                coursenames[t] = "SNES Rainbow Road"
                break;
                case "Classic_Gsfc_RainbowRoadX":
                coursenames[t] = "SNES Rainbow Road T"
                break;
                case "Classic_Gsfc_RainbowRoadR":
                coursenames[t] = "SNES Rainbow Road R"
                break;
                case "Classic_Gsfc_RainbowRoadRX":
                coursenames[t] = "SNES Rainbow Road R/T"
                break;
            }
    });
}

function convertInternalCourseValues() {
    Object.keys(convertedvalues).forEach((t, i) => {
        convertedvalues[t].moreGoodAt.forEach((a, i) => {
            convertedvalues[t].moreGoodAt[i] = coursenames[`${a}`]
            switch(a){
                case "Classic_G3ds_RainbowRoad":
                convertedvalues[t].moreGoodAt[i] = "3DS Rainbow Road"
                break;
                case "Classic_G3ds_RainbowRoadX":
                convertedvalues[t].moreGoodAt[i] = "3DS Rainbow Road T"
                break;
                case "Classic_G3ds_RainbowRoadR":
                convertedvalues[t].moreGoodAt[i] = "3DS Rainbow Road R"
                break;
                case "Classic_G3ds_RainbowRoadRX":
                convertedvalues[t].moreGoodAt[i] = "3DS Rainbow Road R/T"
                break;
                case "Classic_Gsfc_RainbowRoad":
                convertedvalues[t].moreGoodAt[i] = "SNES Rainbow Road"
                break;
                case "Classic_Gsfc_RainbowRoadX":
                convertedvalues[t].moreGoodAt[i] = "SNES Rainbow Road T"
                break;
                case "Classic_Gsfc_RainbowRoadR":
                convertedvalues[t].moreGoodAt[i] = "SNES Rainbow Road R"
                break;
                case "Classic_Gsfc_RainbowRoadRX":
                convertedvalues[t].moreGoodAt[i] = "SNES Rainbow Road R/T"
                break;
            }
        });
        convertedvalues[t].goodAt.forEach((a, i) => {
            convertedvalues[t].goodAt[i] = coursenames[`${a}`]
            switch(a){
                case "Classic_G3ds_RainbowRoad":
                convertedvalues[t].goodAt[i] = "3DS Rainbow Road"
                break;
                case "Classic_G3ds_RainbowRoadX":
                convertedvalues[t].goodAt[i] = "3DS Rainbow Road T"
                break;
                case "Classic_G3ds_RainbowRoadR":
                convertedvalues[t].goodAt[i] = "3DS Rainbow Road R"
                break;
                case "Classic_G3ds_RainbowRoadRX":
                convertedvalues[t].goodAt[i] = "3DS Rainbow Road R/T"
                break;
                case "Classic_Gsfc_RainbowRoad":
                convertedvalues[t].goodAt[i] = "SNES Rainbow Road"
                break;
                case "Classic_Gsfc_RainbowRoadX":
                convertedvalues[t].goodAt[i] = "SNES Rainbow Road T"
                break;
                case "Classic_Gsfc_RainbowRoadR":
                convertedvalues[t].goodAt[i] = "SNES Rainbow Road R"
                break;
                case "Classic_Gsfc_RainbowRoadRX":
                convertedvalues[t].goodAt[i] = "SNES Rainbow Road R/T"
                break;
            }
        });
        convertedvalues[t].unlock3.forEach((a, i) => {
            convertedvalues[t].unlock3[i] = coursenames[`${a}`]
            switch(a){
                case "Classic_G3ds_RainbowRoad":
                convertedvalues[t].unlock3[i] = "3DS Rainbow Road"
                break;
                case "Classic_G3ds_RainbowRoadX":
                convertedvalues[t].unlock3[i] = "3DS Rainbow Road T"
                break;
                case "Classic_G3ds_RainbowRoadR":
                convertedvalues[t].unlock3[i] = "3DS Rainbow Road R"
                break;
                case "Classic_G3ds_RainbowRoadRX":
                convertedvalues[t].unlock3[i] = "3DS Rainbow Road R/T"
                break;
                case "Classic_Gsfc_RainbowRoad":
                convertedvalues[t].unlock3[i] = "SNES Rainbow Road"
                break;
                case "Classic_Gsfc_RainbowRoadX":
                convertedvalues[t].unlock3[i] = "SNES Rainbow Road T"
                break;
                case "Classic_Gsfc_RainbowRoadR":
                convertedvalues[t].unlock3[i] = "SNES Rainbow Road R"
                break;
                case "Classic_Gsfc_RainbowRoadRX":
                convertedvalues[t].unlock3[i] = "SNES Rainbow Road R/T"
                break;
            }
        });
        convertedvalues[t].unlock6.forEach((a, i) => {
            convertedvalues[t].unlock6[i] = coursenames[`${a}`]
            switch(a){
                case "Classic_G3ds_RainbowRoad":
                convertedvalues[t].unlock6[i] = "3DS Rainbow Road"
                break;
                case "Classic_G3ds_RainbowRoadX":
                convertedvalues[t].unlock6[i] = "3DS Rainbow Road T"
                break;
                case "Classic_G3ds_RainbowRoadR":
                convertedvalues[t].unlock6[i] = "3DS Rainbow Road R"
                break;
                case "Classic_G3ds_RainbowRoadRX":
                convertedvalues[t].unlock6[i] = "3DS Rainbow Road R/T"
                break;
                case "Classic_Gsfc_RainbowRoad":
                convertedvalues[t].unlock6[i] = "SNES Rainbow Road"
                break;
                case "Classic_Gsfc_RainbowRoadX":
                convertedvalues[t].unlock6[i] = "SNES Rainbow Road T"
                break;
                case "Classic_Gsfc_RainbowRoadR":
                convertedvalues[t].unlock6[i] = "SNES Rainbow Road R"
                break;
                case "Classic_Gsfc_RainbowRoadRX":
                convertedvalues[t].unlock6[i] = "SNES Rainbow Road R/T"
                break;
            }
        });
    });
}

function createCourseData() {
    Object.values(coursenames).forEach((t, i) => {
        coursedata.Courses[t] = {};
        coursedata.Courses[t].moreGoodAt = {};
        coursedata.Courses[t].goodAt = {};
        coursedata.Courses[t].unlock3 = {};
        coursedata.Courses[t].unlock6 = {};
        coursedata.Courses[t].moreGoodAt.Drivers = [];
        coursedata.Courses[t].moreGoodAt.Karts = [];
        coursedata.Courses[t].moreGoodAt.Gliders = [];
        coursedata.Courses[t].goodAt.Drivers = [];
        coursedata.Courses[t].goodAt.Karts = [];
        coursedata.Courses[t].goodAt.Gliders = [];
        coursedata.Courses[t].unlock3.Drivers = [];
        coursedata.Courses[t].unlock3.Karts = [];
        coursedata.Courses[t].unlock3.Gliders = [];
        coursedata.Courses[t].unlock6.Drivers = [];
        coursedata.Courses[t].unlock6.Karts = [];
        coursedata.Courses[t].unlock6.Gliders = [];
        coursedata.Courses[t].total = 0;
        driverTable.forEach((charid, i) => {
            let moreGoodAt = convertedvalues[charid].moreGoodAt;
            let goodAt = convertedvalues[charid].goodAt;
            let unlock3 = convertedvalues[charid].unlock3;
            let unlock6 = convertedvalues[charid].unlock6;
            moreGoodAt.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Drivers'].push(charid);
                }
            }
            );
            goodAt.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Drivers'].push(charid);
                }
            }
            );

            unlock3.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].unlock3['Drivers'].push(charid);
                }
            }
            );
            unlock6.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].unlock6['Drivers'].push(charid);
                }
            }
            );
        });
        machineTable.forEach((karid, i) => {
            let moreGoodAt = convertedvalues[karid].moreGoodAt;
            let goodAt = convertedvalues[karid].goodAt;
            let unlock3 = convertedvalues[karid].unlock3;
            let unlock6 = convertedvalues[karid].unlock6;
            moreGoodAt.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Karts'].push(karid);
                }
            }
            );
            goodAt.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Karts'].push(karid);
                }
            }
            );

            unlock3.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].unlock3['Karts'].push(karid);
                }
            }
            );
            unlock6.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].unlock6['Karts'].push(karid);
                }
            }
            );
        });
        wingTable.forEach((glidid, i) => {
            let moreGoodAt = convertedvalues[glidid].moreGoodAt;
            let goodAt = convertedvalues[glidid].goodAt;
            let unlock3 = convertedvalues[glidid].unlock3;
            let unlock6 = convertedvalues[glidid].unlock6;
            moreGoodAt.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Gliders'].push(glidid);
                }
            }
            );
            goodAt.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Gliders'].push(glidid);
                }
            }
            );

            unlock3.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].unlock3['Gliders'].push(glidid);
                }
            }
            );
            unlock6.forEach((courseid, i) => {
                if (courseid == t) {
                    coursedata.Courses[t].unlock6['Gliders'].push(glidid);
                }
            }
            );
        });
        coursedata.Courses[t].total += coursedata.Courses[t].moreGoodAt.Drivers.length;
        coursedata.Courses[t].total += coursedata.Courses[t].moreGoodAt.Karts.length;
        coursedata.Courses[t].total += coursedata.Courses[t].moreGoodAt.Gliders.length;
        coursedata.Courses[t].total += coursedata.Courses[t].unlock3.Drivers.length;
        coursedata.Courses[t].total += coursedata.Courses[t].unlock3.Karts.length;
        coursedata.Courses[t].total += coursedata.Courses[t].unlock3.Gliders.length;
        coursedata.Courses[t].total += coursedata.Courses[t].unlock6.Drivers.length;
        coursedata.Courses[t].total += coursedata.Courses[t].unlock6.Karts.length;
        coursedata.Courses[t].total += coursedata.Courses[t].unlock6.Gliders.length;
    });
}

function initializeProperties(){
    statsJSON.snapshotTaken = 0;
    statsJSON.first_play_time = 0;
    statsJSON.total_base_points_d = 0;
    statsJSON.total_base_points_k = 0;
    statsJSON.total_base_points_g = 0;
    statsJSON.total_base_points_dkg = 0;
    statsJSON.total_dkg_count = 0;
    statsJSON.tutorialDrivers = [];
    statsJSON.first_10_dkg = [];
    statsJSON.first_10_high_ends = [];
    statsJSON.most_neglected_drivers = [];
    statsJSON.most_neglected_karts = [];
    statsJSON.most_neglected_gliders = [];
    statsJSON.used_cap_ticket_nums = [0,0,0,0,0,0,0,0,0];
    statsJSON.level_7_dkg = [];
    statsJSON.single_capped_dkg = [];
    statsJSON.double_capped_dkg = [];
    statsJSON.triple_capped_dkg = [];
    statsJSON.completely_maxed_dkg = [];
    statsJSON.high_end_count = 0;
    statsJSON.total_high_end_count = 0;
    statsJSON.total_driver_count = 0;
    statsJSON.total_kart_count = 0;
    statsJSON.total_glider_count = 0;
    statsJSON.total_dkg_count = 0;
    statsJSON.most_obtained_badges = [];
    statsJSON.todays_challenge_badges = [];
    statsJSON.acr_badges = [];
    statsJSON.expert_badges = [];
    statsJSON.rally_badges = [];
    statsJSON.nearly_maxed_courses = [];
    statsJSON.maxed_courses = [];
    statsJSON.courseRatingArray = [];
    statsJSON.total_coin_worth = 0;
    statsJSON.total_ruby_worth = 0;
}

function buildStats(){
    //Init
    getProfileStats();
    getFirstPlay();
    //Prep
    getAllItemsInOrder();
    getAllItemsInUseOrder();
    generateBadgesInOrder();
    generateSortOrder();
    generateAllItemsIds();
    generateBadgesInCountOrder();
    createUserCourseData();
    getSeasonKey();
    //Calc
    totalDKGCopies();
    driverBasePoints();
    kartBasePoints();
    gliderBasePoints();
    totalBasePoints();
    getTutorialDrivers();
    firstXItems(12);
    firstXHighEnds(12);
    mostNeglectedDrivers(100);
    mostNeglectedKarts(5);
    mostNeglectedGliders(5);
    getLevel7DKG();
    getSingleCappedDKG();
    getDoubleCappedDKG();
    getTripleCappedDKG();
    getMaxedDKG();
    getCapTicketNums();
    totalHighEnds();
    totalDriverCopies();
    totalKartCopies();
    totalGliderCopies();
    generateQuickStartComplete();
    achievedAllCupRanking();
    completedExpertChallenges();
    teamRallyBadges();
    getMostObtainedBadges(10);
    calcMaxCourses(27);
    mostItemUsesCourses();
    calcCourseRatingArray();
    simulateCoinWorth();
    simulateRubiesSpent();
    //console.log(statsJSON);
    convertStatsJSONEnglish();
    //console.log(statsJSONEnglish);
}

function getProfileStats(){
    statsJSON.snapshotTaken = Math.floor(saveJSON.Profile.snapshotTakenAtEpoch / 1e3);
    statsJSON.dkg_count = saveJSON.Profile.driver_count + saveJSON.Profile.kart_count + saveJSON.Profile.glider_count;
}

function getFirstPlay(){
    statsJSON.first_play_time = saveJSON.Karts[`1`].received_epoch
}

function getAllItemsInOrder(){
    allItems = [];
    Object.keys(saveJSON.Drivers).forEach((t,i) => {
        allItems.push(saveJSON.Drivers[t]);
    });
    Object.keys(saveJSON.Karts).forEach((t,i) => {
        allItems.push(saveJSON.Karts[t]);
    });
    Object.keys(saveJSON.Gliders).forEach((t,i) => {
        allItems.push(saveJSON.Gliders[t]);
    });
    allItems.sort(function(a, b) {
    var sortA = a.received_epoch
    var sortB = b.received_epoch
    if (sortA < sortB) {
        return -1;
    }
    if (sortA > sortB) {
        return 1;
    }
    return 0;
    });
    //console.log(allItems);
}

function getAllItemsInUseOrder(){
    allItemsNeglected = [];
    Object.keys(saveJSON.Drivers).forEach((t,i) => {
        allItemsNeglected.push(saveJSON.Drivers[t]);
    });
    Object.keys(saveJSON.Karts).forEach((t,i) => {
        allItemsNeglected.push(saveJSON.Karts[t]);
    });
    Object.keys(saveJSON.Gliders).forEach((t,i) => {
        allItemsNeglected.push(saveJSON.Gliders[t]);
    });
    allItemsNeglected.sort(function(a, b) {
    var sortA = a.last_used_epoch
    var sortB = b.last_used_epoch
    if (sortA < sortB) {
        return -1;
    }
    if (sortA > sortB) {
        return 1;
    }
    return 0;
    });
    //console.log(allItemsNeglected);
}

function generateBadgesInOrder(){
    Object.keys(saveJSON.Badges).forEach((t,i) => {
        badgesInOrder.push(saveJSON.Badges[t]);
    });
}

function generateSortOrder(){
    allItemsSort = [...allItems];
    badgesInSortOrder = [...badgesInOrder];
    allItemsSort.sort(function(a, b) {
    var sortA = new_values[a.id].sortId
    var sortB = new_values[b.id].sortId
    if (sortA < sortB) {
        return -1;
    }
    if (sortA > sortB) {
        return 1;
    }
    return 0;
    });
    badgesInSortOrder.sort(function(a, b) {
    var sortA = a.sortId
    var sortB = b.sortId
    if (sortA < sortB) {
        return -1;
    }
    if (sortA > sortB) {
        return 1;
    }
    return 0;
    });
}

function generateAllItemsIds(){
    Object.keys(allItems).forEach((t,i)=>{
        allItemsIds.push(allItems[t].id);
    })
}

function generateBadgesInCountOrder(){
    badgesInCountOrder = [...badgesInOrder];
    badgesInCountOrder.sort(function(a, b) {
    var sortA = a.count
    var sortB = b.count
    if (sortA > sortB) {
        return -1;
    }
    if (sortA < sortB) {
        return 1;
    }
    return 0;
    });
}

function createUserCourseData() {
    Object.values(coursenames).forEach((t, i) => {
        usercoursedata.Courses[t] = {};
        usercoursedata.Courses[t].moreGoodAt = {};
        usercoursedata.Courses[t].goodAt = {};
        usercoursedata.Courses[t].unlock3 = {};
        usercoursedata.Courses[t].unlock6 = {};
        usercoursedata.Courses[t].moreGoodAt.Drivers = [];
        usercoursedata.Courses[t].moreGoodAt.Karts = [];
        usercoursedata.Courses[t].moreGoodAt.Gliders = [];
        usercoursedata.Courses[t].goodAt.Drivers = [];
        usercoursedata.Courses[t].goodAt.Karts = [];
        usercoursedata.Courses[t].goodAt.Gliders = [];
        usercoursedata.Courses[t].unlock3.Drivers = [];
        usercoursedata.Courses[t].unlock3.Karts = [];
        usercoursedata.Courses[t].unlock3.Gliders = [];
        usercoursedata.Courses[t].unlock6.Drivers = [];
        usercoursedata.Courses[t].unlock6.Karts = [];
        usercoursedata.Courses[t].unlock6.Gliders = [];
        usercoursedata.Courses[t].total = 0;
        driverTable.forEach((charid, i) => {
            charid = parseInt(charid);
            let moreGoodAt = convertedvalues[charid].moreGoodAt;
            let goodAt = convertedvalues[charid].goodAt;
            let unlock3 = convertedvalues[charid].unlock3;
            let unlock6 = convertedvalues[charid].unlock6;
            moreGoodAt.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(charid)) {
                    usercoursedata.Courses[t].moreGoodAt['Drivers'].push(charid);
                }
            }
            );
            goodAt.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(charid)) {
                    usercoursedata.Courses[t].goodAt['Drivers'].push(charid);
                }
            }
            );

            unlock3.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(charid)) {
                    if(allItems[allItemsIds.indexOf(charid)].level >= 3){
                        usercoursedata.Courses[t].moreGoodAt['Drivers'].push(charid);
                    } else {
                        usercoursedata.Courses[t].unlock3['Drivers'].push(charid);
                    }
                }
            }
            );
            unlock6.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(charid)) {
                    if(allItems[allItemsIds.indexOf(charid)].level >= 6){
                        usercoursedata.Courses[t].moreGoodAt['Drivers'].push(charid);
                    } else {
                        usercoursedata.Courses[t].unlock6['Drivers'].push(charid);
                    }
                }
            }
            );
        });
        machineTable.forEach((karid, i) => {
            karid = parseInt(karid);
            let moreGoodAt = convertedvalues[karid].moreGoodAt;
            let goodAt = convertedvalues[karid].goodAt;
            let unlock3 = convertedvalues[karid].unlock3;
            let unlock6 = convertedvalues[karid].unlock6;
            moreGoodAt.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(karid)) {
                    usercoursedata.Courses[t].moreGoodAt['Karts'].push(karid);
                }
            }
            );
            goodAt.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(karid)) {
                    usercoursedata.Courses[t].goodAt['Karts'].push(karid);
                }
            }
            );

            unlock3.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(karid)) {
                    if(allItems[allItemsIds.indexOf(karid)].level >= 3){
                        usercoursedata.Courses[t].moreGoodAt['Karts'].push(karid);
                    } else {
                        usercoursedata.Courses[t].unlock3['Karts'].push(karid);
                    }
                }
            }
            );
            unlock6.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(karid)) {
                    if(allItems[allItemsIds.indexOf(karid)].level >= 6){
                        usercoursedata.Courses[t].moreGoodAt['Karts'].push(karid);
                    } else {
                        usercoursedata.Courses[t].unlock6['Karts'].push(karid);
                    }
                }
            }
            );
        });
        wingTable.forEach((glidid, i) => {
            glidid = parseInt(glidid);
            let moreGoodAt = convertedvalues[glidid].moreGoodAt;
            let goodAt = convertedvalues[glidid].goodAt;
            let unlock3 = convertedvalues[glidid].unlock3;
            let unlock6 = convertedvalues[glidid].unlock6;
            moreGoodAt.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(glidid)) {
                    usercoursedata.Courses[t].moreGoodAt['Gliders'].push(glidid);
                }
            }
            );
            goodAt.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(glidid)) {
                    usercoursedata.Courses[t].goodAt['Gliders'].push(glidid);
                }
            }
            );

            unlock3.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(glidid)) {
                    if(allItems[allItemsIds.indexOf(glidid)].level >= 3){
                        usercoursedata.Courses[t].moreGoodAt['Gliders'].push(glidid);
                    } else {
                        usercoursedata.Courses[t].unlock3['Gliders'].push(glidid);
                    }
                }
            }
            );
            unlock6.forEach((courseid, i) => {
                if (courseid == t && allItemsIds.includes(glidid)) {
                    if(allItems[allItemsIds.indexOf(glidid)].level >= 6){
                        usercoursedata.Courses[t].moreGoodAt['Gliders'].push(glidid);
                    } else {
                        usercoursedata.Courses[t].unlock6['Gliders'].push(glidid);
                    }
                }
            }
            );
        });
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].moreGoodAt.Drivers.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].moreGoodAt.Karts.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].moreGoodAt.Gliders.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].unlock3.Drivers.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].unlock3.Karts.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].unlock3.Gliders.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].unlock6.Drivers.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].unlock6.Karts.length;
        usercoursedata.Courses[t].total += usercoursedata.Courses[t].unlock6.Gliders.length;
    });
}

function getSeasonKey(){
    Object.keys(savedata).forEach(key => {
        if(key.substring(0,6).normalize() == "Season".normalize()){
            seasonKey = key;
        }
    })
}

function driverBasePoints(){
    //count, level
    Object.keys(saveJSON.Drivers).forEach((t,i) => {
        //console.log(saveJSON.Drivers[t]);
        switch(new_values[saveJSON.Drivers[t].id].rarityId){
            case 0:
            statsJSON.total_base_points_d += saveJSON.Drivers[t].basepoints - 400
            break;
            case 1:
            statsJSON.total_base_points_d += saveJSON.Drivers[t].basepoints - 450
            break;
            case 2:
            statsJSON.total_base_points_d += saveJSON.Drivers[t].basepoints - 500
            break;
        }
    });
}

function kartBasePoints(){
    //count, level
    Object.keys(saveJSON.Karts).forEach((t,i) => {
        //console.log(saveJSON.Karts[t]);
        switch(new_values[saveJSON.Karts[t].id].rarityId){
            case 0:
            statsJSON.total_base_points_k += saveJSON.Karts[t].basepoints - 200
            break;
            case 1:
            statsJSON.total_base_points_k += saveJSON.Karts[t].basepoints - 220
            break;
            case 2:
            statsJSON.total_base_points_k += saveJSON.Karts[t].basepoints - 250
            break;
        }
    });
}

function gliderBasePoints(){
    //count, level
    Object.keys(saveJSON.Gliders).forEach((t,i) => {
        //console.log(saveJSON.Gliders[t]);
        switch(new_values[saveJSON.Gliders[t].id].rarityId){
            case 0:
            statsJSON.total_base_points_g += saveJSON.Gliders[t].basepoints - 200
            break;
            case 1:
            statsJSON.total_base_points_g += saveJSON.Gliders[t].basepoints - 220
            break;
            case 2:
            statsJSON.total_base_points_g += saveJSON.Gliders[t].basepoints - 250
            break;
        }
    });
}

function totalBasePoints(){
    statsJSON.total_base_points_dkg = statsJSON.total_base_points_d + statsJSON.total_base_points_k + statsJSON.total_base_points_g;
}

function getTutorialDrivers(){
    let driver_1 = saveJSON.Drivers[`1`];
    let driver_2 = saveJSON.Drivers[`2`];
    statsJSON.tutorialDrivers.push(driver_1.id);
    statsJSON.tutorialDrivers.push(driver_2.id);
}

function firstXItems(x){
    for(let i = 4; i<(x+4);i++){
        statsJSON.first_10_dkg.push(allItems[i].id)
    }
}

function firstXHighEnds(x){
    allItems.forEach((t,i)=>{
        if(new_values[t.id].rarityId == 2 && statsJSON.first_10_high_ends.length < x){
            statsJSON.first_10_high_ends.push(allItems[i].id)
        }
    });
}

function mostNeglectedDrivers(count){
    allItemsNeglected.forEach((t,i)=>{
        if(`${t.id}`.length < 5 && statsJSON.most_neglected_drivers.length < count){
            statsJSON.most_neglected_drivers.push(t.id)
        }
    });
}

function mostNeglectedKarts(count){
    allItemsNeglected.forEach((t,i)=>{
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 70 && statsJSON.most_neglected_karts.length < count){
            statsJSON.most_neglected_karts.push(t.id)
        }
    });
}

function mostNeglectedGliders(count){
    allItemsNeglected.forEach((t,i)=>{
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 30 && statsJSON.most_neglected_gliders.length < count){
            statsJSON.most_neglected_gliders.push(t.id)
        }
    });
}

function getLevel7DKG(){
    allItemsSort.forEach((t,i)=>{
        let level = t.level;
        if(level == 7){
            statsJSON.level_7_dkg.push(t.id);
        }
    });
}

function getSingleCappedDKG(){
    allItemsSort.forEach((t,i)=>{
        let pointCapLevel = t.pointCapLevel;
        if(pointCapLevel == 1){
            statsJSON.single_capped_dkg.push(t.id);
        }
    });
}

function getDoubleCappedDKG(){
    allItemsSort.forEach((t,i)=>{
        let pointCapLevel = t.pointCapLevel;
        if(pointCapLevel == 2){
            statsJSON.double_capped_dkg.push(t.id);
        }
    });
}

function getTripleCappedDKG(){
    allItemsSort.forEach((t,i)=>{
        let pointCapLevel = t.pointCapLevel;
        if(pointCapLevel == 3){
            statsJSON.triple_capped_dkg.push(t.id);
        }
    });
}

function getMaxedDKG(){
    allItemsSort.forEach((t,i)=>{
        let level = t.level;
        let pointCapLevel = t.pointCapLevel;
        if(level == 7 && pointCapLevel == 3){
            statsJSON.completely_maxed_dkg.push(t.id);
        }
    });
}

function getCapTicketNums(){
    allItems.forEach((t,i)=>{
        let level = t.pointCapLevel;
        let tickets = 0;
        switch(level){
            case 1:
            tickets = 1
            break;
            case 2:
            tickets = 6
            break;
            case 3:
            tickets = 16
            break;
        }
        let rarity = new_values[t.id].rarityId;
        let type = 0;
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 70){ type = 1}
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 30){ type = 2}
        switch(rarity){
            case 0:
            switch(type){
                case 0:
                statsJSON.used_cap_ticket_nums[0] += tickets
                break;
                case 1:
                statsJSON.used_cap_ticket_nums[1] += tickets
                break;
                case 2:
                statsJSON.used_cap_ticket_nums[2] += tickets
                break;
            }
            break;
            case 1:
            switch(type){
                case 0:
                statsJSON.used_cap_ticket_nums[3] += tickets
                break;
                case 1:
                statsJSON.used_cap_ticket_nums[4] += tickets
                break;
                case 2:
                statsJSON.used_cap_ticket_nums[5] += tickets
                break;
            }
            break;
            case 2:
            switch(type){
                case 0:
                statsJSON.used_cap_ticket_nums[6] += tickets
                break;
                case 1:
                statsJSON.used_cap_ticket_nums[7] += tickets
                break;
                case 2:
                statsJSON.used_cap_ticket_nums[8] += tickets
                break;
            }
            break;
        }

    })
}

function totalHighEnds(x){
    allItems.forEach((t,i)=>{
        if(new_values[t.id].rarityId == 2){
            //statsJSON.total.push(allItems[i].id)
            statsJSON.high_end_count += 1;
            statsJSON.total_high_end_count += t.totalCount;
        }
    });
}

function totalDriverCopies(){
    allItems.forEach((t,i)=>{
        if(`${t.id}`.length < 5){
            statsJSON.total_driver_count += t.totalCount;
        }
    });
}

function totalKartCopies(){
    allItems.forEach((t,i)=>{
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 70){
            statsJSON.total_kart_count += t.totalCount;
        }
    });
}

function totalGliderCopies(){
    allItems.forEach((t,i)=>{
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 30){
            statsJSON.total_glider_count += t.totalCount;
        }
    });
}

function totalDKGCopies(){
    allItems.forEach((t,i)=>{
        statsJSON.total_dkg_count += t.totalCount;
    });
}

function generateQuickStartComplete(){
    badgesInOrder.forEach((t,i)=>{
        if(t.key.substring(0,3) === "Qpb"){
            statsJSON.todays_challenge_badges.push(t.key);
        }
    })
}

function achievedAllCupRanking(){
    badgesInOrder.forEach((t,i)=>{
        if(t.key.substring(0,3) === "Tpb"){
            statsJSON.acr_badges.push(t.key);
        }
    })
}

function completedExpertChallenges(){
    badgesInOrder.forEach((t,i)=>{
        if(t.key.substring(0,4) === "KHpb"){
            statsJSON.expert_badges.push(t.key);
        }
    })
}

function teamRallyBadges(){
    badgesInOrder.forEach((t,i)=>{
        if(t.key.substring(0,3) === "Fpb"){
            statsJSON.rally_badges.push(t.key);
        }
    })
}

function getMostObtainedBadges(x){
    //Self Explanitory
    let most_obtained = [];
    for(let i=0; i<x; i++){
        most_obtained[i] = badgesInCountOrder[i].key;
    }
    statsJSON.most_obtained_badges = most_obtained;
}

function calcMaxCourses(minRating){
    Object.keys(usercoursedata.Courses).forEach((t,i)=>{
        let rating = 0;
        let bestLoadout = [0,0,0,0,0,0];
        usercoursedata.Courses[t].moreGoodAt.Drivers.forEach(a => {
            a = allItems[allItemsIds.indexOf(parseInt(a))]
            if(a.level > bestLoadout[0]){
                bestLoadout[0] = a.level;
            }
        })
        usercoursedata.Courses[t].moreGoodAt.Karts.forEach(a => {
            a = allItems[allItemsIds.indexOf(parseInt(a))]
            if(a.level > bestLoadout[1]){
                bestLoadout[1] = a.level;
            }
        })
        usercoursedata.Courses[t].moreGoodAt.Gliders.forEach(a => {
            a = allItems[allItemsIds.indexOf(parseInt(a))]
            if(a.level > bestLoadout[2]){
                bestLoadout[2] = a.level;
            }
        })
        usercoursedata.Courses[t].moreGoodAt.Drivers.forEach(a => {
            a = allItems[allItemsIds.indexOf(parseInt(a))]
            if(a.level == bestLoadout[0] && a.pointCapLevel > bestLoadout[3]){
                bestLoadout[3] = a.pointCapLevel;
            }
        })
        usercoursedata.Courses[t].moreGoodAt.Karts.forEach(a => {
            a = allItems[allItemsIds.indexOf(parseInt(a))]
            if(a.level == bestLoadout[1] && a.pointCapLevel > bestLoadout[4]){
                bestLoadout[4] = a.pointCapLevel;
            }
        })
        usercoursedata.Courses[t].moreGoodAt.Gliders.forEach(a => {
            a = allItems[allItemsIds.indexOf(parseInt(a))]
            if(a.level == bestLoadout[2] && a.pointCapLevel > bestLoadout[5]){
                bestLoadout[5] = a.pointCapLevel;
            }
        })
        rating = bestLoadout[0] + bestLoadout[1] + bestLoadout[2] + bestLoadout[3] + bestLoadout[4] + bestLoadout[5]
        if(rating == 30){
            statsJSON.maxed_courses.push(t);
        }
        if(rating >= minRating){
            statsJSON.nearly_maxed_courses.push(t);
        }
    })
}

function calcCourseRatingArray(){
    let seasonId = getSeasonKey();
    let ratingArray = [];
    //instead of this, make the way to get the courseRating of a single course and use that in a loop with each course.
    Object.keys(saveJSON[seasonKey]).forEach(t => {
        let rating = calcCourseRating(saveJSON[seasonKey][t].courseName);
        ratingArray.push(rating);
    })
    //console.log(ratingArray);
    statsJSON.courseRatingArray = ratingArray;
}

function calcCourseRating(t){
    let rating = 0;
    let bestLoadout = [0,0,0,0,0,0];
    usercoursedata.Courses[t].moreGoodAt.Drivers.forEach(a => {
        a = allItems[allItemsIds.indexOf(parseInt(a))]
        if(a.level > bestLoadout[0]){
            bestLoadout[0] = a.level;
        }
    })
    usercoursedata.Courses[t].moreGoodAt.Karts.forEach(a => {
        a = allItems[allItemsIds.indexOf(parseInt(a))]
        if(a.level > bestLoadout[1]){
            bestLoadout[1] = a.level;
        }
    })
    usercoursedata.Courses[t].moreGoodAt.Gliders.forEach(a => {
        a = allItems[allItemsIds.indexOf(parseInt(a))]
        if(a.level > bestLoadout[2]){
            bestLoadout[2] = a.level;
        }
    })
    usercoursedata.Courses[t].moreGoodAt.Drivers.forEach(a => {
        a = allItems[allItemsIds.indexOf(parseInt(a))]
        if(a.level == bestLoadout[0] && a.pointCapLevel > bestLoadout[3]){
            bestLoadout[3] = a.pointCapLevel;
        }
    })
    usercoursedata.Courses[t].moreGoodAt.Karts.forEach(a => {
        a = allItems[allItemsIds.indexOf(parseInt(a))]
        if(a.level == bestLoadout[1] && a.pointCapLevel > bestLoadout[4]){
            bestLoadout[4] = a.pointCapLevel;
        }
    })
    usercoursedata.Courses[t].moreGoodAt.Gliders.forEach(a => {
        a = allItems[allItemsIds.indexOf(parseInt(a))]
        if(a.level == bestLoadout[2] && a.pointCapLevel > bestLoadout[5]){
            bestLoadout[5] = a.pointCapLevel;
        }
    })
    rating = bestLoadout[0] + bestLoadout[1] + bestLoadout[2] + bestLoadout[3] + bestLoadout[4] + bestLoadout[5]
    return rating;
}

function simulateCoinWorth(){
    //make table with every item value
    let totalWorth = 0;
    //Add coins
    totalWorth = saveJSON.Items[`90001`].count;
    //console.log(totalWorth);
    //Add DKG
    allItems.forEach(t => {
        //console.log(totalWorth);
        let multiplier = 0;
        let type = 0;
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 70){ type = 1 }
        if(`${t.id}`.length == 5 && Math.floor(t.id / 1000) == 30){ type = 2 }
        switch(new_values[t.id].rarityId){
            case 0:
            switch(type){
                case 0:
                multiplier = coinWorth.DKG.Drivers.Common
                break;
                case 1:
                multiplier = coinWorth.DKG.Karts.Common
                break;
                case 2:
                multiplier = coinWorth.DKG.Gliders.Common
                break;
            }
            break;
            case 1:
            switch(type){
                case 0:
                multiplier = coinWorth.DKG.Drivers.Super
                break;
                case 1:
                multiplier = coinWorth.DKG.Karts.Super
                break;
                case 2:
                multiplier = coinWorth.DKG.Gliders.Super
                break;
            }
            break;
            case 2:
            switch(type){
                case 0:
                multiplier = coinWorth.DKG.Drivers.HighEnd
                break;
                case 1:
                multiplier = coinWorth.DKG.Karts.HighEnd
                break;
                case 2:
                multiplier = coinWorth.DKG.Gliders.HighEnd
                break;
            }
            break;
        }
        totalWorth += t.totalCount * multiplier;
        //console.log(`[${t.id}] ${type} ${new_values[t.id].rarityId} ${multiplier}`);
    })
    //Add DKG Caps
    statsJSON.used_cap_ticket_nums.forEach((t,i) => {
        //console.log(totalWorth);
        switch(i){
            case 0:
            totalWorth += t * coinWorth.Items[`90305`]
            break;
            case 1:
            totalWorth += t * coinWorth.Items[`90309`]
            break;
            case 2:
            totalWorth += t * coinWorth.Items[`90313`]
            break;
            case 3:
            totalWorth += t * coinWorth.Items[`90306`]
            break;
            case 4:
            totalWorth += t * coinWorth.Items[`90310`]
            break;
            case 5:
            totalWorth += t * coinWorth.Items[`90314`]
            break;
            case 6:
            totalWorth += t * coinWorth.Items[`90307`]
            break;
            case 7:
            totalWorth += t * coinWorth.Items[`90311`]
            break;
            case 8:
            totalWorth += t * coinWorth.Items[`90315`]
            break;
        }
    });
    //console.log(totalWorth);
    //Add Items
    Object.keys(saveJSON.Items).forEach(t =>{
        //console.log(totalWorth);
        if(coinWorth.Items.hasOwnProperty(`${t}`)){
        let multiplier = coinWorth.Items[t]
        totalWorth += saveJSON.Items[t].count * multiplier;
        //console.log(`[${t}] ${multiplier}`);
        }
    })
    //console.log(totalWorth);
    statsJSON.total_coin_worth = totalWorth;
}

function simulateRubiesSpent(){
    //get algorithm from pipe simulator, and apply to total item count
    let rubiesSpent = 0;
    let times = statsJSON.total_dkg_count;
    let decrement = times;
    while (decrement >= 10) {
        rubiesSpent += 45;
        decrement -= 10;
    }
    rubiesSpent += (decrement * 5);
    statsJSON.total_ruby_worth = rubiesSpent;
}


//Beyond here is unused
//I don't remember what this one did
function firstXDrivers(count){
    //TODO
}

function firstXKarts(count){
    //TODO
}

function firstXGliders(count){
    //TODO
}

function mostItemUsesCourses(){
    //create json with count of all items used in the tour
    let usedJSON = {};
    Object.keys(saveJSON[`${seasonKey}`]).forEach(t => {
        let driver_id = saveJSON[seasonKey][t].driver_id;
        let kart_id = saveJSON[seasonKey][t].machine_id;
        let glider_id = saveJSON[seasonKey][t].wing_id;
        if(!usedJSON.hasOwnProperty(driver_id)){
            usedJSON[driver_id] = 0;
        }
        usedJSON[driver_id] += 1;
        if(!usedJSON.hasOwnProperty(kart_id)){
            usedJSON[kart_id] = 0;
        }
        usedJSON[kart_id] += 1;
        if(!usedJSON.hasOwnProperty(glider_id)){
            usedJSON[glider_id] = 0;
        }
        usedJSON[glider_id] += 1;
    })
    // usedJSON.sort(function(a, b) {
    //     return a - b;
    // });
    //console.log(usedJSON);
}

function missingCourseCoverage(){
    //loops usercoursedata 3 times for d/k/g, creates 3 arrays for missing top shelf d/k/g
    let top_shelf_driver_missing = [];
    let top_shelf_kart_missing = [];
    let top_shelf_glider_missing = [];
    Object.keys(usercoursedata.Courses).forEach(t =>{
        if(usercoursedata.Courses[t].moreGoodAt.Drivers.length == 0){
            top_shelf_driver_missing.push(t);
        }
    })
    Object.keys(usercoursedata.Courses).forEach(t =>{
        if(usercoursedata.Courses[t].moreGoodAt.Karts.length == 0){
            top_shelf_kart_missing.push(t);
        }
    })
    Object.keys(usercoursedata.Courses).forEach(t =>{
        if(usercoursedata.Courses[t].moreGoodAt.Gliders.length == 0){
            top_shelf_glider_missing.push(t);
        }
    })
    //console.log(top_shelf_driver_missing);
    //console.log(top_shelf_kart_missing);
    //console.log(top_shelf_glider_missing);
}

function convertStatsJSONEnglish(){
    statsJSONEnglish = JSON.parse(JSON.stringify(statsJSON));
    statsJSONEnglish.tutorialDrivers.forEach((t,i) => {
        statsJSONEnglish.tutorialDrivers[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.first_10_dkg.forEach((t,i) => {
        statsJSONEnglish.first_10_dkg[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.first_10_high_ends.forEach((t,i) => {
        statsJSONEnglish.first_10_high_ends[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.most_neglected_drivers.forEach((t,i) => {
        statsJSONEnglish.most_neglected_drivers[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.most_neglected_karts.forEach((t,i) => {
        statsJSONEnglish.most_neglected_karts[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.most_neglected_gliders.forEach((t,i) => {
        statsJSONEnglish.most_neglected_gliders[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.level_7_dkg.forEach((t,i) => {
        statsJSONEnglish.level_7_dkg[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.single_capped_dkg.forEach((t,i) => {
        statsJSONEnglish.single_capped_dkg[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.double_capped_dkg.forEach((t,i) => {
        statsJSONEnglish.double_capped_dkg[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.triple_capped_dkg.forEach((t,i) => {
        statsJSONEnglish.triple_capped_dkg[i] = new_values[t].nameEng;
    })
    statsJSONEnglish.completely_maxed_dkg.forEach((t,i) => {
        statsJSONEnglish.completely_maxed_dkg[i] = new_values[t].nameEng;
    })
}

function generateCourseList() {
    Object.keys(coursedata.Courses).forEach((t, i) => {
        //console.log(t);
        courseList.push(t);
    });
    //console.log(courseList);
}

function convertNameToId(input) {
    let itemId = 0;
    Object.keys(values).forEach((t, i) => {
        if (input === values[t].nameEng) {
            itemId = t;
        }
    });
    return itemId;
}