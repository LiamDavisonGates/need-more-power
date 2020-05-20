var TelescopeData = {
    telescopeLevel: 0,
    telescopeCost: 100,
    telescopeStatus: "Off",
    telescopeEnergyCost: 0,
    area: 1,
    areaSerchSpeed: 0,
}

var SerchAreaData = {
    freeSpaceArea1: 1000,
    freeSpaceArea2: 10000,
    freeSpaceArea3: 100000,
    area1Clear: 0,
    area2Clear: 0,
    area3Clear: 0,
}

var AlphaData = {
    alphaLocation: Math.random() * 1000,
    powerLaserLevel: 0,
}

var BataData = {
    bataLocation: Math.random() * 1000,
    reaserchLabLevel: 0,
}

var GammaData = {
    gammaLocation: Math.random() * 1000,
    warpArrayGamma: 0,
}

var DeltaData = {
    deltaLocation: Math.random() * 10000,
    observatoryLevel: 0,
}

var EpsilonData = {
    epsilonLocation: Math.random() * 10000,
    solarSatelliteFactoryLevel: 0,
}

var ZetaData = {
    zetaLocation: Math.random() * 10000,
    warpArrayZeat: 0,
}

var EtaData = {
    etaLocation: Math.random() * 100000,
    matterSynthesizerLevel: 0,
}

var TheataData = {
    theataLocation: Math.random() * 100000,
    cloningVatLevel: 0,
}

var IotaData = {
    iotaLocation: Math.random() * 100000,
    warpArrayIota: 0,
}

function buyTelescope () {
  if (PowerData.currentPower >= TelescopeData.telescopeCost) {
    TelescopeData.telescopeLevel += 1
    TelescopeData.currentPower -= TelescopeData.telescopeCost
    TelescopeData.telescopeCost *= 1000
    TelescopeData.areaSerchSpeed += 1
    document.getElementById("turnTelescope_On_Off").style.display = "block"
    document.getElementById("changeSpaceArea").style.display = "block"
    document.getElementById("exploration").style.display = "block"
    document.getElementById("exploration").style.color = "Azure"
    updateText("Space")
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    //document.getElementById("buyTelescopeButton").innerHTML = "Upgrade telescope (Currently Level " + spaceData.telescopeLevel + ") Cost: " + formatNumber(spaceData.telescopeCost) + "W"
  }
}

function turnTelescopeOn_Off() {
  if (TelescopeData.telescopeStatus == "Off") {
    TelescopeData.telescopeStatus = "On"
    TelescopeData.telescopeEnergyCost = TelescopeData.telescopeLevel*10
    //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope On (energy cost " + spaceData.energyCost*4 + "W/s)"
  }
  else if (TelescopeData.telescopeStatus == "On") {
    TelescopeData.telescopeStatus = "Off"
    TelescopeData.telescopeEnergyCost = 0
    //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
  }
  updateText("Space")
}

function selectSpaceArer() {
  if (TelescopeData.area == 1){
      TelescopeData.area = 2
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out out at 1LY to 10LY (" + formatNumber(100 - spaceData.freeSpaceArea2/100) + "% compleat)"
  }
  else if (TelescopeData.area == 2){
      TelescopeData.area = 3
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - spaceData.freeSpaceArea3/1000) + "% compleat)"
  }
  else if (TelescopeData.area == 3){
      TelescopeData.area = 1
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - spaceData.freeSpaceArea1/10) + "% compleat)"
  }
  updateText("Space")
}

function useTelescope () {
  if (PowerData.currentPower >= TelescopeData.telescopeEnergyCost && TelescopeData.telescopeStatus == "On") {
    serchSpace(TelescopeData.area)
    PowerData.currentPower -= TelescopeData.telescopeEnergyCost
    updateText("Space")
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
  else if (TelescopeData.telescopeStatus == "On") {
    turnTelescopeOn_Off ()
    updateText("Space")
  }
}

function serchSpace(area) {
  if (area == 1 && SerchAreaData.area1Clear == 0){
    SerchAreaData.freeSpaceArea1 -= TelescopeData.areaSerchSpeed
    if (SerchAreaData.freeSpaceArea1 < AlphaData.alphaLocation){
        AlphaData.alphaLocation = -1
      document.getElementById("planet_alpha").style.display = "block"
      document.getElementById("planet_alpha").style.color = "Azure"
    }
    else if (SerchAreaData.freeSpaceArea1 < BataData.bataLocation){
      BataData.bataLocation = -1
      document.getElementById("planet_bata").style.display = "block"
      document.getElementById("planet_bata").style.color = "Azure"
    }
    else if (SerchAreaData.freeSpaceArea1 < GammaData.gammaLocation){
        GammaData.gammaLocation = -1
      document.getElementById("planet_gamma").style.display = "block"
      document.getElementById("planet_gamma").style.color = "Azure"
    }
    //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - spaceData.freeSpaceArea1/10) + "% compleat)"
    if (SerchAreaData.freeSpaceArea1 <= 0) {
        SerchAreaData.area1Clear = 1
        TelescopeData.telescopeOn = "Off"
        SerchAreaData.freeSpaceArea1 = 0
        turnTelescopeOn_Off()
        //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
        //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (100% compleat)"
    }
    updateText("Space")
  }
  else if (area == 2 && SerchAreaData.area2Clear == 0){
    SerchAreaData.freeSpaceArea2 -= TelescopeData.areaSerchSpeed
    if (SerchAreaData.freeSpaceArea2 < DeltaData.deltaLocation){
      DeltaData.deltaLocation = -1
      document.getElementById("planet_delta").style.display = "block"
      document.getElementById("planet_delta").style.color = "Azure"
    }
    else if (SerchAreaData.freeSpaceArea2 < EpsilonData.epsilonLocation){
        EpsilonData.epsilonLocation = -1
      document.getElementById("planet_epsilon").style.display = "block"
      document.getElementById("planet_epsilon").style.color = "Azure"
    }
    else if (SerchAreaData.freeSpaceArea2 < ZetaData.zetaLocation){
        ZetaData.zetaLocation = -1
      document.getElementById("planet_zeta").style.display = "block"
      document.getElementById("planet_zeta").style.color = "Azure"
    }
    //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (" + formatNumber(100 - spaceData.freeSpaceArea2/100) + "% compleat)"
    if (SerchAreaData.freeSpaceArea2 <= 0) {
      SerchAreaData.area2Clear = 1
      TelescopeData.telescopeOn = "Off"
      SerchAreaData.freeSpaceArea2 = 0
      turnTelescopeOn_Off()
      //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (100% compleat)"
    }
    updateText("Space")
  }
  else if (area == 3 && SerchAreaData.area3Clear == 0){
    SerchAreaData.freeSpaceArea3 -= TelescopeData.areaSerchSpeed
    if (SerchAreaData.freeSpaceArea3 < EtaData.etaLocation){
      EtaData.etaLocation = -1
      document.getElementById("planet_eta").style.display = "block"
      document.getElementById("planet_eta").style.color = "Azure"
    }
    else if (SerchAreaData.freeSpaceArea3 < TheataData.TheataLocation){
      TheataData.TheataLocation = -1
      document.getElementById("planet_theata").style.display = "block"
      document.getElementById("planet_theata").style.color = "Azure"
    }
    else if (SerchAreaData.freeSpaceArea3 < IotaData.iotaLocation){
      IotaData.iotaLocation = -1
      document.getElementById("planet_iota").style.display = "block"
      document.getElementById("planet_iota").style.color = "Azure"
    }
    //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - spaceData.freeSpaceArea3/1000) + "% compleat)"
    if (SerchAreaData.freeSpaceArea3 <= 0) {
        SerchAreaData.area3Clear = 1
        TelescopeData.telescopeOn = "Off"
        SerchAreaData.freeSpaceArea3 = 0
        turnTelescopeOn_Off()
        //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
        //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (100% compleat)"
    }
    updateText("Space")
  }
}

function planetProduction() {
    if (AlphaData.alphaLocation == -1) {
        Pass
    }
    if (BataData.bataLocation == -1) {
        Pass
    }
    if (GammaData.gammaLocation == -1) {
        Pass
    }
    if (DeltaData.deltaLocation == -1) {
        Pass
    }
    if (EpsilonData.epsilonLocation == -1) {
        Pass
    }
    if (ZetaData.zetaLocation == -1) {
        Pass
    }
    if (EtaData.etaLocation == -1) {
        Pass
    }
    if (TheataData.theataLocation == -1) {
        Pass
    }
    if (IotaData.iotaLocation == -1) {
        Pass
    }
}
