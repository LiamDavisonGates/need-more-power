var GameData = {
    var PowerData = {
        currentPower: 0,
        totalPower: 0,
        powerPerClick: 1,
        powerPerTick: 1,
    }
    var PowerStorageData = {
        capasitors: 1,
        capasitorsStorage: 100,
        capasitorCost: 20,
        batteries: 0,
        batteriesStorage: 3000,
        batteriesEfficency: 0.3,
        batteryCost: 500,
        batteryStorage: 3000,
        powerPerTickCost: 10,
        totalPowerStorage: 100,
    }
    var TurbineData = {
        turbineSpeed: 0,
        turbineMinSpeed : 0,
        turbineMass: 3,
        turbineMaxSpeed: 500000,
        turbineFriction: 0.005,
        generatorFriction: 0.0005,
        generatorEfficency: 1,
        turbineSpinForce: 10,
    }
    var MiscellaneousData = {
        numberFormat: 2,
    }
}

var MaterialData = {
    var StockpillData = {
        wood: 0,
        coal: 0,
        iron: 0,
        steel: 0,
        sand: 0,
        glass: 0,
        plastic: 0,
        paper: 0,
        oil: 0,
        stone: 0,
    }
    var BuildingData = {
        diggers: 0,
        mines: 0,
        drils: 0,
        pumps: 0,
    }
    var BuildingCostData = {
        diggerCost: 50,
        mineCost: 100,
        drilCost: 100,
        pumpCost: 100,
    }
    var BuildingEfficiencyData = {
        diggerEfficiency: 0.01,
        mineEfficiency: 0.01,
        drilEfficiency: 0.01,
        pumpEfficiency: 0.01,
    }
}

var SpaceData = {
    var TelescopeData = {
        telescopeLevel: 0,
        telescopeCost: 100,
        telescopeStatus: "Off",
        telescopeEnergyCost: 0,
        serchArea: 1,
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
        alphaLocation: Math.random()*1000,
    }
    var BataData = {
        bataLocation: Math.random()*1000,
    }
    var GammaData = {
        gammaLocation: Math.random()*1000,
    }
    var DeltaData = {
        deltaLocation: Math.random()*10000,
    }
    var EpsilonData = {
        epsilonLocation: Math.random()*10000,
    }
    var ZetaData = {
        zetaLocation: Math.random()*10000,
    }
    var EtaData = {
        etaLocation: Math.random()*100000,
    }
    var TheataData = {
        theataLocation: Math.random()*100000,
    }
    var IotaData = {
        iotaLocation: Math.random()*100000,
    }
}

var WorkerData = {
    var WorkerStatusData = {
        workers: 0,
        freeWorkers: 0,
        workerCost: 10000,
    }
    var JobData = {
        energyWorker: 0,
        woodWorker: 0,
        sandWorker: 0,
        glassWorker: 0,
        ironWorker: 0,
        coalWorker: 0,
        steelWorker: 0,
        oilWorker: 0,
        plasticWorker: 0,
    }
    var JobEfficiencyData = {
        energyWorkerEfficiency: 5,
        woodWorkerEfficiency: 5,
        sandWorkerEfficiency: 5,
        glassWorkerEfficiency: 0.5,
        ironWorkerEfficiency: 0.01,
        coalWorkerEfficiency: 0.01,
        steelWorkerEfficiency: 0.001,
        oilWorkerEfficiency: 0.001,
        plasticWorkerEfficiency: 0.0001,
    }
}
function formatNumber(number) {
  if (number > 5000000000000000000) {
    number /= 1000000000000000000
    number = number.toFixed(gameData.numberFormat)
    number = number + "E"
  } else if (number > 5000000000000000) {
    number /= 1000000000000000
    number = number.toFixed(gameData.numberFormat)
    number = number + "P"
  } else if (number > 5000000000000) {
    number /= 1000000000000
    number = number.toFixed(gameData.numberFormat)
    number = number + "T"
  } else if (number > 5000000000) {
    number /= 1000000000
    number = number.toFixed(gameData.numberFormat)
    number = number + "G"
  } else if (number > 5000000) {
    number /= 1000000
    number = number.toFixed(gameData.numberFormat)
    number = number + "M"
  } else if (number > 5000) {
    number /= 1000
    number = number.toFixed(gameData.numberFormat)
    number = number + "K"
  } else {
    number = number.toFixed(gameData.numberFormat)
  }
  return number
}

function spinTurbine() {
  var speedAddition = gameData.turbineSpinForce / gameData.turbineMass
  if (gameData.turbineSpeed + speedAddition <= gameData.turbineMaxSpeed) {
    gameData.turbineSpeed += speedAddition
  } else if (gameData.turbineSpeed + speedAddition > gameData.turbineMaxSpeed) {
    gameData.turbineSpeed = gameData.turbineMaxSpeed
  }
  updateText("Power")
  //document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed) + "RPM"
}

function slowTurbine() {
  var speedLoss = gameData.turbineSpeed * (gameData.turbineFriction + gameData.generatorFriction)
  gameData.turbineSpeed -= speedLoss
  updateText("Power")
  //document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed + gameData.turbineMinSpeed) + "RPM"
}

function makePower(amount) {
  if (gameData.currentPower < gameData.capasitorsStorage * gameData.capasitors) {
    gameData.currentPower += amount
    gameData.totalPower += amount
    if (gameData.currentPower > gameData.capasitorsStorage * gameData.capasitors) {
        gameData.totalPower -= gameData.currentPower - (gameData.capasitorsStorage * gameData.capasitors)
        gameData.currentPower = gameData.capasitorsStorage * gameData.capasitors
    }
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
  } else if (gameData.currentPower < (gameData.capasitorsStorage * gameData.capasitors) + (gameData.batteriesStorage * gameData.batteries)) {
    gameData.currentPower += amount * gameData.batteriesEfficency
    gameData.totalPower += amount
    if (gameData.currentPower > (gameData.capasitorsStorage * gameData.capasitors) + (gameData.batteriesStorage * gameData.batteries)) {
        gameData.totalPower -= gameData.currentPower - (gameData.capasitorsStorage * gameData.capasitors) + (gameData.batteriesStorage * gameData.batteries)
        gameData.currentPower = gameData.capasitorsStorage * gameData.capasitors
    }
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
  }
  updateText("Power")
}

function increasPowerPerTick(amount) {
  gameData.powerPerTick += amount
}

function updatePowerStorage() {
  gameData.totalPowerStorage = (gameData.capasitors * gameData.capasitorsStorage) + (gameData.batteries * gameData.batteriesStorage)
}

function buyCapasitor() {
  if (gameData.currentPower >= gameData.capasitorCost) {
    gameData.capasitors += 1
    gameData.currentPower -= gameData.capasitorCost
    gameData.capasitorCost *= 1.5
    updatePowerStorage()
    updateText("Power")
    updateText("Upgrades")
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    //document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + gameData.capasitors + ") Cost: " + formatNumber(gameData.capasitorCost) + "W"
  }
}

function buyBattery() {
  if (gameData.currentPower >= gameData.batteryCost) {
    gameData.batteries += 1
    gameData.currentPower -= gameData.batteryCost
    gameData.batteryCost *= 1.5
    updatePowerStorage()
    updateText("Power")
    updateText("Upgrades")
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    //document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + gameData.batteries + ") Cost: " + formatNumber(gameData.batteryCost) + "W"
  }
}

function buyDigger() {
    if (gameData.wood >= gameData.diggerCost) {
      gameData.wood -= gameData.diggerCost
      gameData.diggers += 1
      gameData.diggerCost *= 1.25
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(gameData.wood)
      //document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + gameData.diggers + ") Cost: " + formatNumber(gameData.diggerCost) + " Wood"
    }
}

function buyMine() {
    if (gameData.wood >= gameData.mineCost) {
      gameData.wood -= gameData.mineCost
      gameData.mines += 1
      gameData.mineCost *= 1.25
      document.getElementById("getDril").style.display = "block"
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(gameData.wood)
      //document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + gameData.mines + ") Cost: " + formatNumber(gameData.mineCost) + " Wood"
    }
}

function buyDril() {
    if (gameData.iron >= gameData.drilCost) {
      gameData.iron -= gameData.drilCost
      gameData.drils += 1
      gameData.drilCost *= 1.25
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(gameData.iron)
      //document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + gameData.drils + ") Cost: " + formatNumber(gameData.drilCost) + " Iron"
    }
}

function buyPump() {
    if (gameData.steel >= gameData.pumpCost) {
      gameData.steel -= gameData.pumpCost
      gameData.pumps += 1
      gameData.pumpCost *= 1.25
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(gameData.steel)
      //document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + gameData.pumps + ") Cost: " + formatNumber(gameData.pumpCost) + " Steel"
    }
}

function buyPowerPerTick() {
  if (gameData.currentPower >= gameData.powerPerTickCost) {
    gameData.currentPower -= gameData.powerPerTickCost
    gameData.turbineSpinForce += 10
    gameData.powerPerTickCost *= 1.25
    gameData.powerPerTick += 1
    updateText("Power")
    updateText("Upgrades")
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    //document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + gameData.powerPerTick + ") Cost: " + formatNumber(gameData.powerPerTickCost) + "W"
  }
}

function chopWood(number){
    if (gameData.currentPower >= number) {
      gameData.wood += number
      gameData.currentPower -= number
      document.getElementById("woodDisplay").style.display = "block"
      document.getElementById("getDigger").style.display = "block"
      document.getElementById("getMine").style.display = "block"
      updateText("Materials")
      updateText("Power")
      //document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(gameData.wood)
      //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    }
}

function makeSteel(number) {
  if (gameData.coal >= 10*number && gameData.iron >= 100*number) {
    gameData.steel += number
    gameData.coal -= 10*number
    gameData.iron -= 100*number
    document.getElementById("getPump").style.display = "block"
    document.getElementById("steelDisplay").style.display = "block"
    updateText("Materials")
    //document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(gameData.steel)
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
}

function makeGlass(number) {
  if (gameData.sand >= 10*number) {
    gameData.glass += number
    gameData.sand -= 10*number
    document.getElementById("glassDisplay").style.display = "block"
    updateText("Materials")
    //document.getElementById("glassDisplay").innerHTML = "glass: " + formatNumber(gameData.glass)
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
}

function makePlastic(number) {
  if (gameData.oil >= 10*number) {
    gameData.plastic += number
    gameData.oil -= 10*number
    document.getElementById("plasticDisplay").style.display = "block"
    updateText("Materials")
    //document.getElementById("plasticDisplay").innerHTML = "plastic: " + formatNumber(gameData.plastic)
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
}

function buyTelescope () {
  if (gameData.currentPower >= spaceData.telescopeCost) {
    spaceData.telescopeLevel += 1
    gameData.currentPower -= spaceData.telescopeCost
    spaceData.telescopeCost *= 1000
    spaceData.spaceSerchSpeed += 1
    document.getElementById("turnTelescope_On_Off").style.display = "block"
    document.getElementById("changeSpaceArea").style.display = "block"
    document.getElementById("exploration").style.display = "block"
    updateText("Space")
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
    //document.getElementById("buyTelescopeButton").innerHTML = "Upgrade telescope (Currently Level " + spaceData.telescopeLevel + ") Cost: " + formatNumber(spaceData.telescopeCost) + "W"
  }
}

function turnTelescopeOn_Off() {
  if (spaceData.telescopeOn == "Off") {
    spaceData.telescopeOn = "On"
    spaceData.energyCost = spaceData.telescopeLevel*10
    //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope On (energy cost " + spaceData.energyCost*4 + "W/s)"
  }
  else if (spaceData.telescopeOn == "On") {
    spaceData.telescopeOn = "Off"
    spaceData.energyCost = 0
    //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
  }
  updateText("Space")
}

function selectSpaceArer() {
  if (spaceData.area == 1){
      spaceData.area = 2
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out out at 1LY to 10LY (" + formatNumber(100 - spaceData.freeSpaceArea2/100) + "% compleat)"
  }
  else if (spaceData.area == 2){
      spaceData.area = 3
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - spaceData.freeSpaceArea3/1000) + "% compleat)"
  }
  else if (spaceData.area == 3){
      spaceData.area = 1
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - spaceData.freeSpaceArea1/10) + "% compleat)"
  }
  updateText("Space")
}

function useTelescope () {
  if (gameData.currentPower >= spaceData.energyCost && spaceData.telescopeOn == "On") {
    serchSpace(spaceData.area)
    gameData.currentPower -= spaceData.energyCost
    updateText("Space")
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
  else if (spaceData.telescopeOn == "On") {
    turnTelescopeOn_Off ()
    updateText("Space")
  }
}

function serchSpace(area) {
  if (area == 1 && spaceData.area1Clear == 0){
    spaceData.freeSpaceArea1 -= spaceData.spaceSerchSpeed
    if (spaceData.freeSpaceArea1 < spaceData.planetAlpha){
      spaceData.planetAlpha = 0
      document.getElementById("planet_alpha").style.display = "block"
    }
    else if (spaceData.freeSpaceArea1 < spaceData.planetBata){
      spaceData.planetBata = 0
      document.getElementById("planet_bata").style.display = "block"
    }
    else if (spaceData.freeSpaceArea1 < spaceData.planetGamma){
      spaceData.planetGamma = 0
      document.getElementById("planet_gamma").style.display = "block"
    }
    //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - spaceData.freeSpaceArea1/10) + "% compleat)"
    if (spaceData.freeSpaceArea1 <= 0) {
        spaceData.area1Clear = 1
        spaceData.telescopeOn = "Off"
        spaceData.freeSpaceArea1 = 0
        turnTelescopeOn_Off()
        //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
        //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (100% compleat)"
    }
    updateText("Space")
  }
  else if (area == 2 && spaceData.area2Clear == 0){
    spaceData.freeSpaceArea2 -= spaceData.spaceSerchSpeed
    if (spaceData.freeSpaceArea2 < spaceData.planetDelta){
      spaceData.planetDelta = 0
      document.getElementById("planet_delta").style.display = "block"
    }
    else if (spaceData.freeSpaceArea2 < spaceData.planetEpsilon){
      spaceData.planetEpsilon = 0
      document.getElementById("planet_epsilon").style.display = "block"
    }
    else if (spaceData.freeSpaceArea2 < spaceData.planetZeta){
      spaceData.planetZeta = 0
      document.getElementById("planet_zeta").style.display = "block"
    }
    //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (" + formatNumber(100 - spaceData.freeSpaceArea2/100) + "% compleat)"
    if (spaceData.freeSpaceArea2 <= 0) {
      spaceData.area2Clear = 1
      spaceData.telescopeOn = "Off"
      spaceData.freeSpaceArea2 = 0
      turnTelescopeOn_Off()
      //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
      //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (100% compleat)"
    }
    updateText("Space")
  }
  else if (area == 3 && spaceData.area3Clear == 0){
    spaceData.freeSpaceArea3 -= spaceData.spaceSerchSpeed
    if (spaceData.freeSpaceArea3 < spaceData.planetEta){
      spaceData.planetEta = 0
      document.getElementById("planet_eta").style.display = "block"
    }
    else if (spaceData.freeSpaceArea3 < spaceData.planetTheata){
      spaceData.planetTheata = 0
      document.getElementById("planet_theata").style.display = "block"
    }
    else if (spaceData.freeSpaceArea3 < spaceData.planetIota){
      spaceData.planetIota = 0
      document.getElementById("planet_iota").style.display = "block"
    }
    //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - spaceData.freeSpaceArea3/1000) + "% compleat)"
    if (spaceData.freeSpaceArea3 <= 0) {
        spaceData.area3Clear = 1
        spaceData.telescopeOn = "Off"
        spaceData.freeSpaceArea3 = 0
        turnTelescopeOn_Off()
        //document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope Off (energy cost 0W/s)"
        //document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (100% compleat)"
    }
    updateText("Space")
  }
}

function buyWorker() {
    if (gameData.currentPower >= workerData.workerCost) {
        workerData.workers += 1
        workerData.freeWorkers += 1
        gameData.currentPower -= workerData.workerCost
        workerData.workerCost *= 1.5
        updateText("Workers")
        document.getElementById("energyWorkers").style.display = "block"
        document.getElementById("energyWorkers+").style.display = "block"
        document.getElementById("energyWorkers-").style.display = "block"
    }
}

function setWorkerJob(job, workers) {
    if (workerData.freeWorkers >= workers) {
        if (job == "energy") {
            workerData.energyWorker += workers
        } else if (job == "wood") {
            workerData.woodWorker += workers
        } else if (job == "sand") {
            workerData.sandWorker += workers
        } else if (job == "glass") {
            workerData.glassWorker += workers
        } else if (job == "iron") {
            workerData.ironWorker += workers
        } else if (job == "coal") {
            workerData.coalWorker += workers
        } else if (job == "steel") {
            workerData.steelWorker += workers
        } else if (job == "oil") {
            workerData.oilWorker += workers
        } else if (job == "plastic") {
            workerData.plasticWorker += workers
        }
        workerData.freeWorkers -= workers
        updateText("Workers")
    }
}

function stopWorkerJob(job, workers) {
    if (job == "energy" && workerData.energyWorker >= workers) {
        workerData.energyWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "wood" && workerData.woodWorker >= workers) {
        workerData.woodWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "sand" && workerData.sandWorker >= workers) {
        workerData.sandWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "glass" && workerData.glassWorker >= workers) {
        workerData.glassWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "iron" && workerData.ironWorker >= workers) {
        workerData.ironWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "coal" && workerData.coalWorker >= workers) {
        workerData.coalWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "steel" && workerData.steelWorker >= workers) {
        workerData.steelWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "oil" && workerData.oilWorker >= workers) {
        workerData.oilWorker -= workers
        workerData.freeWorkers += workers
    } else if (job == "plastic" && workerData.plasticWorker >= workers) {
        workerData.plasticWorker -= workers
        workerData.freeWorkers += workers
    }
    updateText("Workers")
}

function workers() {
    if (workerData.workers > 0) {
        gameData.turbineMinSpeed += workerData.energyWorker * workerData.energyWorkerEfficiency
        gameData.wood += workerData.woodWorker * workerData.woodWorkerEfficiency
        gameData.sand += workerData.sandWorker * workerData.sandWorkerEfficiency
        gameData.glass += workerData.glassWorker * workerData.glassWorkerEfficiency
        gameData.iron += workerData.ironWorker * workerData.ironWorkerEfficiency
        gameData.coal += workerData.coalWorker * workerData.coalWorkerEfficiency
        gameData.steel += workerData.steelWorker * workerData.steelWorkerEfficiency
        gameData.oil += workerData.oilWorker * workerData.oilWorkerEfficiency
        gameData.plastic += workerData.plasticWorker * workerData.plasticWorkerEfficiency
    }
}

function revealTabs() {
    if (gameData.currentPower >= 5) {
        document.getElementById("upgradesTab").style.display = "block"
    }
    if (gameData.currentPower >= 100) {
        document.getElementById("materialsTab").style.display = "block"
    }
    if (gameData.wood >= 5) {
        document.getElementById("BuildingsTab").style.display = "block"
    }
    if (gameData.currentPower >= 500) {
        document.getElementById("spaceTab").style.display = "block"
    }
    if (gameData.currentPower >= 10000) {
        document.getElementById("WorkersTab").style.display = "block"
    }
    if (gameData.wood > 0) {
        document.getElementById("woodDisplay").style.display = "block"
        document.getElementById("woodWorkers").style.display = "block"
        document.getElementById("woodWorkers+").style.display = "block"
        document.getElementById("woodWorkers-").style.display = "block"
    }
    if (gameData.sand > 0) {
        document.getElementById("sandDisplay").style.display = "block"
        document.getElementById("sandWorkers").style.display = "block"
        document.getElementById("sandWorkers+").style.display = "block"
        document.getElementById("sandWorkers-").style.display = "block"
    }
    if (gameData.iron > 0) {
        document.getElementById("ironDisplay").style.display = "block"
        document.getElementById("ironWorkers").style.display = "block"
        document.getElementById("ironWorkers+").style.display = "block"
        document.getElementById("ironWorkers-").style.display = "block"
    }
    if (gameData.coal > 0) {
        document.getElementById("coalDisplay").style.display = "block"
        document.getElementById("coalWorkers").style.display = "block"
        document.getElementById("coalWorkers+").style.display = "block"
        document.getElementById("coalWorkers-").style.display = "block"
    }
    if (gameData.oil > 0) {
        document.getElementById("oilDisplay").style.display = "block"
        document.getElementById("oilWorkers").style.display = "block"
        document.getElementById("oilWorkers+").style.display = "block"
        document.getElementById("oilWorkers-").style.display = "block"
    }
    if (gameData.plastic > 0) {
        document.getElementById("plasticDisplay").style.display = "block"
        document.getElementById("plasticWorkers").style.display = "block"
        document.getElementById("plasticWorkers+").style.display = "block"
        document.getElementById("plasticWorkers-").style.display = "block"
    }
    if (gameData.glass > 0) {
        document.getElementById("glassDisplay").style.display = "block"
        document.getElementById("glassWorkers").style.display = "block"
        document.getElementById("glassWorkers+").style.display = "block"
        document.getElementById("glassWorkers-").style.display = "block"
    }
    if (gameData.steel > 0) {
        document.getElementById("steelDisplay").style.display = "block"
        document.getElementById("steelWorkers").style.display = "block"
        document.getElementById("steelWorkers+").style.display = "block"
        document.getElementById("steelWorkers-").style.display = "block"
    }
}

function updateText(update) {
    if (update == "Power") {
        document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed + gameData.turbineMinSpeed) + " RPM"
        document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        document.getElementById("RPMTipText").innerHTML = formatNumber(gameData.generatorEfficency * ((gameData.turbineSpeed + gameData.turbineMinSpeed)/1000)*4) + "W per sec"
    } else if (update == "Buildings") {
        document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + gameData.pumps + ") Cost: " + formatNumber(gameData.pumpCost) + " Steel"
        document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + gameData.drils + ") Cost: " + formatNumber(gameData.drilCost) + " Iron"
        document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + gameData.mines + ") Cost: " + formatNumber(gameData.mineCost) + " Wood"
        document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + gameData.diggers + ") Cost: " + formatNumber(gameData.diggerCost) + " Wood"
    } else if (update == "Upgrades") {
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + gameData.powerPerTick + ") Cost: " + formatNumber(gameData.powerPerTickCost) + "W"
        document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + gameData.batteries + ") Cost: " + formatNumber(gameData.batteryCost) + "W"
        document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + gameData.capasitors + ") Cost: " + formatNumber(gameData.capasitorCost) + "W"
    } else if (update == "Materials") {
        document.getElementById("oilDisplay").innerHTML = "oil: " + formatNumber(gameData.oil)
        document.getElementById("coalDisplay").innerHTML = "coal: " + formatNumber(gameData.coal)
        document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(gameData.iron)
        document.getElementById("sandDisplay").innerHTML = "sand: " + formatNumber(gameData.sand)
        document.getElementById("plasticDisplay").innerHTML = "plastic: " + formatNumber(gameData.plastic)
        document.getElementById("glassDisplay").innerHTML = "glass: " + formatNumber(gameData.glass)
        document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(gameData.steel)
        document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(gameData.wood)
    } else if (update == "Space") {
        document.getElementById("buyTelescopeButton").innerHTML = "Upgrade telescope (Currently Level " + spaceData.telescopeLevel + ") Cost: " + formatNumber(spaceData.telescopeCost) + "W"
        document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope " + spaceData.telescopeOn + " (energy cost " + spaceData.energyCost*4 + "W/s)"
        if (spaceData.area == 1) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - spaceData.freeSpaceArea1/10) + "% compleat)"
        } else if (spaceData.area == 2) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (" + formatNumber(100 - spaceData.freeSpaceArea2/100) + "% compleat)"
        } else if (spaceData.area == 3) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - spaceData.freeSpaceArea3/1000) + "% compleat)"
        }
    } else if (update == "Workers") {
        document.getElementById("buyWorker").innerHTML = "Buy worker (" + workerData.workers + ") Cost: " + formatNumber(workerData.workerCost) + "W"
        document.getElementById("freeWorkers").innerHTML = "Free workers " + workerData.freeWorkers
        document.getElementById("energyWorkers").innerHTML = "Energy workers " + workerData.energyWorker
        document.getElementById("woodWorkers").innerHTML = "Wood workers " + workerData.woodWorker
        document.getElementById("sandWorkers").innerHTML = "Sand workers " + workerData.sandWorker
        document.getElementById("glassWorkers").innerHTML = "Glass workers " + workerData.glassWorker
        document.getElementById("ironWorkers").innerHTML = "Iron workers " + workerData.ironWorker
        document.getElementById("coalWorkers").innerHTML = "Coal workers " + workerData.coalWorker
        document.getElementById("steelWorkers").innerHTML = "Steel workers " + workerData.steelWorker
        document.getElementById("oilWorkers").innerHTML = "Oil workers " + workerData.oilWorker
        document.getElementById("plasticWorkers").innerHTML = "Plastic workers " + workerData.plasticWorker
    }
}

function gatherMaterials() {
    gameData.sand += gameData.diggers * gameData.diggerEfficiency
    //document.getElementById("sandDisplay").innerHTML = "sand: " + formatNumber(gameData.sand)
    gameData.iron += gameData.mines * gameData.mineEfficiency
    //document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(gameData.iron)
    gameData.coal += gameData.drils * gameData.drilEfficiency
    //document.getElementById("coalDisplay").innerHTML = "coal: " + formatNumber(gameData.coal)
    gameData.oil += gameData.pumps * gameData.pumpEfficiency
    //document.getElementById("oilDisplay").innerHTML = "oil: " + formatNumber(gameData.oil)
    updateText("Materials")
}

let setUpToolTip = function() {
    let toolTip = "",
        toolTipDiv = document.querySelector(".dev-tooltip"),
        toolTipElements = Array.from(document.querySelectorAll(".hover-reveal"))

    let displayToolTip = function(e, obj) {
        tooltip = obj.dataset.tooltip
        toolTipDiv.innerHTML = tooltip
        toolTipDiv.style.top = e.pageY + "px"
        toolTipDiv.style.left = e.pageX + "px"
        toolTipDiv.style.opacity = 1
    }

    toolTipElements.forEach(function(elem) {
        elem.addEventListener("mouseenter", function(e) {
            displayToolTip(e, this)
        })
    })
}

setUpToolTip()

var mainGameLoop = window.setInterval(function() {
  slowTurbine()
  makePower(gameData.generatorEfficency * ((gameData.turbineSpeed + gameData.turbineMinSpeed)/1000))
  gameData.turbineMinSpeed = 0
  useTelescope()
  workers()
  revealTabs()
  gatherMaterials()
}, 250)
