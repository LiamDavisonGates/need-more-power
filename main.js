var PowerData = {
    currentPower: 0,
    totalPower: 0,
    powerPerClick: 1,
    powerPerTick: 1,
    powerPerTickCost: 10,
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
    totalPowerStorage: 100,
}

var TurbineData = {
    turbineSpeed: 0,
    turbineMinSpeed: 0,
    turbineMass: 3,
    turbineMaxSpeed: 500000,
    turbineFriction: 0.005,
    generatorFriction: 0.0005,
    generatorEfficency: 1,
    turbineSpinForce: 10,
}

var MiscellaneousData = {
    numberFormat: 2,
    gameTicks: 0,
    gameSpeed: 250,
}

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

var WorkerStatusData = {
    workers: 9,
    freeWorkers: 0,
    workerCost: 10000,
}

var JobData = {
    energyWorker: 1,
    woodWorker: 1,
    sandWorker: 1,
    glassWorker: 1,
    ironWorker: 1,
    coalWorker: 1,
    steelWorker: 1,
    oilWorker: 1,
    plasticWorker: 1,
}

var JobEfficiencyData = {
    energyWorkerEfficiency: 0.1,
    woodWorkerEfficiency: 0.1,
    sandWorkerEfficiency: 0.05,
    glassWorkerEfficiency: 0.05,
    ironWorkerEfficiency: 0.025,
    coalWorkerEfficiency: 0.025,
    steelWorkerEfficiency: 0.01,
    oilWorkerEfficiency: 0.01,
    plasticWorkerEfficiency: 0.01,
}

var JobTimeData = {
    energyJobTime: 10,
    energyJobTimeCurrent: 10,
    woodJobTime: 10,
    woodJobTimeCurrent: 10,
    sandJobTime: 15,
    sandJobTimeCurrent: 15,
    glassJobTime: 20,
    glassJobTimeCurrent: 20,
    ironJobTime: 60,
    ironJobTimeCurrent: 60,
    coalJobTime: 60,
    coalJobTimeCurrent: 60,
    steelJobTime: 120,
    steelJobTimeCurrent: 120,
    oilJobTime: 300,
    oilJobTimeCurrent: 300,
    plasticJobTime: 600,
    plasticJobTimeCurrent: 600,
}

var JobProductionData = {
    energyJobProduction: 100,
    woodJobProduction: 5,
    sandJobProduction: 5,
    glassJobProduction: 5,
    ironJobProduction: 1,
    coalJobProduction: 1,
    steelJobProduction: 1,
    oilJobProduction: 0.1,
    plasticJobProduction: 0.1,
}

function formatNumber(number) {
    if (number > 5000000000000000000) {
        number /= 1000000000000000000
        number = number.toFixed(MiscellaneousData.numberFormat)
        number = number + "E"
    } else if (number > 5000000000000000) {
        number /= 1000000000000000
        number = number.toFixed(MiscellaneousData.numberFormat)
        number = number + "P"
    } else if (number > 5000000000000) {
        number /= 1000000000000
        number = number.toFixed(MiscellaneousData.numberFormat)
        number = number + "T"
    } else if (number > 5000000000) {
        number /= 1000000000
        number = number.toFixed(MiscellaneousData.numberFormat)
        number = number + "G"
    } else if (number > 5000000) {
        number /= 1000000
        number = number.toFixed(MiscellaneousData.numberFormat)
        number = number + "M"
    } else if (number > 5000) {
        number /= 1000
        number = number.toFixed(MiscellaneousData.numberFormat)
        number = number + "K"
    } else {
        number = number.toFixed(MiscellaneousData.numberFormat)
    }
    return number
}

function spinTurbine(amount = TurbineData.turbineSpinForce) {
    var speedAddition = amount / TurbineData.turbineMass
    if (TurbineData.turbineSpeed + speedAddition <= TurbineData.turbineMaxSpeed) {
        TurbineData.turbineSpeed += speedAddition
    } else if (TurbineData.turbineSpeed + speedAddition > TurbineData.turbineMaxSpeed) {
        TurbineData.turbineSpeed = TurbineData.turbineMaxSpeed
    }
    updateText("Power")
    //document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed) + "RPM"
}

function slowTurbine() {
    var speedLoss = TurbineData.turbineSpeed * (TurbineData.turbineFriction + TurbineData.generatorFriction)
    TurbineData.turbineSpeed -= speedLoss
    updateText("Power")
    //document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed + gameData.turbineMinSpeed) + "RPM"
}

function makePower(amount) {
    if (PowerData.currentPower < PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) {
        PowerData.currentPower += amount
        PowerData.totalPower += amount
        if (PowerData.currentPower > PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) {
            PowerData.totalPower -= PowerStorageData.currentPower - (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors)
            PowerData.currentPower = PowerStorageData.capasitorsStorage * PowerStorageData.capasitors
        }
        //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
    } else if (PowerData.currentPower < (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)) {
        PowerData.currentPower += amount * PowerStorageData.batteriesEfficency
        PowerData.totalPower += amount
        if (PowerData.currentPower > (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)) {
            PowerData.totalPower -= PowerData.currentPower - (PowerStorageData.capasitorsStorage * PowerStorageData.capasitors) + (PowerStorageData.batteriesStorage * PowerStorageData.batteries)
            PowerData.currentPower = PowerStorageData.capasitorsStorage * PowerStorageData.capasitors
        }
        //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
    }
    updateText("Power")
}

function increasPowerPerTick(amount) {
    PowerData.powerPerTick += amount
}

function updatePowerStorage() {
    PowerStorageData.totalPowerStorage = (PowerStorageData.capasitors * PowerStorageData.capasitorsStorage) + (PowerStorageData.batteries * PowerStorageData.batteriesStorage)
}

function buyCapasitor() {
    if (PowerData.currentPower >= PowerStorageData.capasitorCost) {
        PowerStorageData.capasitors += 1
        PowerData.currentPower -= PowerStorageData.capasitorCost
        PowerStorageData.capasitorCost *= 1.5
        updatePowerStorage()
        updateText("Power")
        updateText("Upgrades")
        //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        //document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + gameData.capasitors + ") Cost: " + formatNumber(gameData.capasitorCost) + "W"
    }
}

function buyBattery() {
    if (PowerData.currentPower >= PowerStorageData.batteryCost) {
        PowerStorageData.batteries += 1
        PowerData.currentPower -= PowerStorageData.batteryCost
        PowerStorageData.batteryCost *= 1.5
        updatePowerStorage()
        updateText("Power")
        updateText("Upgrades")
        //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        //document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + gameData.batteries + ") Cost: " + formatNumber(gameData.batteryCost) + "W"
    }
}

function buyPowerPerTick() {
    if (PowerData.currentPower >= PowerData.powerPerTickCost) {
        PowerData.currentPower -= PowerData.powerPerTickCost
        TurbineData.turbineSpinForce += 10
        PowerData.powerPerTickCost *= 1.25
        PowerData.powerPerTick += 1
        updateText("Power")
        updateText("Upgrades")
        //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
        //document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + gameData.powerPerTick + ") Cost: " + formatNumber(gameData.powerPerTickCost) + "W"
    }
}

function buyDigger() {
    if (StockpillData.wood >= BuildingCostData.diggerCost) {
      StockpillData.wood -= BuildingCostData.diggerCost
      BuildingData.diggers += 1
      BuildingCostData.diggerCost *= 1.25
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(gameData.wood)
      //document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + gameData.diggers + ") Cost: " + formatNumber(gameData.diggerCost) + " Wood"
    }
}

function buyMine() {
    if (StockpillData.wood >= BuildingCostData.mineCost) {
      StockpillData.wood -= BuildingCostData.mineCost
      BuildingData.mines += 1
      BuildingCostData.mineCost *= 1.25
      document.getElementById("getDril").style.display = "block"
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(gameData.wood)
      //document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + gameData.mines + ") Cost: " + formatNumber(gameData.mineCost) + " Wood"
    }
}

function buyDril() {
    if (StockpillData.iron >= BuildingCostData.drilCost) {
      StockpillData.iron -= BuildingCostData.drilCost
      BuildingData.drils += 1
      BuildingCostData.drilCost *= 1.25
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(gameData.iron)
      //document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + gameData.drils + ") Cost: " + formatNumber(gameData.drilCost) + " Iron"
    }
}

function buyPump() {
    if (StockpillData.steel >= BuildingCostData.pumpCost) {
      StockpillData.steel -= BuildingCostData.pumpCost
      BuildingData.pumps += 1
      BuildingCostData.pumpCost *= 1.25
      updateText("Materials")
      updateText("Buildings")
      //document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(gameData.steel)
      //document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + gameData.pumps + ") Cost: " + formatNumber(gameData.pumpCost) + " Steel"
    }
}

function buyWorker() {
    if (PowerData.currentPower >= WorkerStatusData.workerCost) {
        WorkerStatusData.workers += 1
        WorkerStatusData.freeWorkers += 1
        PowerData.currentPower -= WorkerStatusData.workerCost
        WorkerStatusData.workerCost *= 1.5
        updateText("Workers")
        document.getElementById("energyWorkers").style.display = "block"
        document.getElementById("energyWorkers+").style.display = "block"
        document.getElementById("energyWorkers-").style.display = "block"
    }
}

function setWorkerJob(job, workers) {
    if (WorkerStatusData.freeWorkers >= workers) {
        if (job == "energy") {
            JobData.energyWorker += workers
        } else if (job == "wood") {
            JobData.woodWorker += workers
        } else if (job == "sand") {
            JobData.sandWorker += workers
        } else if (job == "glass") {
            JobData.glassWorker += workers
        } else if (job == "iron") {
            JobData.ironWorker += workers
        } else if (job == "coal") {
            JobData.coalWorker += workers
        } else if (job == "steel") {
            JobData.steelWorker += workers
        } else if (job == "oil") {
            JobData.oilWorker += workers
        } else if (job == "plastic") {
            JobData.plasticWorker += workers
        }
        WorkerStatusData.freeWorkers -= workers
        updateText("Workers")
    }
}

function stopWorkerJob(job, workers) {
    if (job == "energy" && JobData.energyWorker >= workers) {
        JobData.energyWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "wood" && JobData.woodWorker >= workers) {
        JobData.woodWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "sand" && JobData.sandWorker >= workers) {
        JobData.sandWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "glass" && JobData.glassWorker >= workers) {
        JobData.glassWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "iron" && JobData.ironWorker >= workers) {
        JobData.ironWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "coal" && JobData.coalWorker >= workers) {
        JobData.coalWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "steel" && JobData.steelWorker >= workers) {
        JobData.steelWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "oil" && JobData.oilWorker >= workers) {
        JobData.oilWorker -= workers
        WorkerStatusData.freeWorkers += workers
    } else if (job == "plastic" && JobData.plasticWorker >= workers) {
        JobData.plasticWorker -= workers
        WorkerStatusData.freeWorkers += workers
    }
    updateText("Workers")
}

function workers() {
    if (WorkerStatusData.workers > 0) {
        JobTimeData.energyJobTimeCurrent -= JobData.energyWorker * JobEfficiencyData.energyWorkerEfficiency
        JobTimeData.woodJobTimeCurrent -= JobData.woodWorker * JobEfficiencyData.woodWorkerEfficiency
        JobTimeData.sandJobTimeCurrent -= JobData.sandWorker * JobEfficiencyData.sandWorkerEfficiency
        JobTimeData.glassJobTimeCurrent -= JobData.glassWorker * JobEfficiencyData.glassWorkerEfficiency
        JobTimeData.ironJobTimeCurrent -= JobData.ironWorker * JobEfficiencyData.ironWorkerEfficiency
        JobTimeData.coalJobTimeCurrent -= JobData.coalWorker * JobEfficiencyData.coalWorkerEfficiency
        JobTimeData.steelJobTimeCurrent -= JobData.steelWorker * JobEfficiencyData.steelWorkerEfficiency
        JobTimeData.oilJobTimeCurrent -= JobData.oilWorker * JobEfficiencyData.oilWorkerEfficiency
        JobTimeData.plasticJobTimeCurrent -= JobData.plasticWorker * JobEfficiencyData.plasticWorkerEfficiency
        if (JobTimeData.energyJobTimeCurrent <= 0) {
            JobTimeData.energyJobTimeCurrent = JobTimeData.energyJobTime
            spinTurbine(JobProductionData.energyJobProduction)
        } else if (JobTimeData.woodJobTimeCurrent <= 0) {
            JobTimeData.woodJobTimeCurrent = JobTimeData.woodJobTime
            StockpillData.wood += JobProductionData.woodJobProduction
        } else if (JobTimeData.sandJobTimeCurrent <= 0) {
            JobTimeData.sandJobTimeCurrent = JobTimeData.sandJobTime
            StockpillData.sand += JobProductionData.sandJobProduction
        } else if (JobTimeData.glassJobTimeCurrent <= 0) {
            JobTimeData.glassJobTimeCurrent = JobTimeData.glassJobTime
            StockpillData.glass += JobProductionData.glassJobProduction
        } else if (JobTimeData.ironJobTimeCurrent <= 0) {
            JobTimeData.ironJobTimeCurrent = JobTimeData.ironJobTime
            StockpillData.iron += JobProductionData.ironJobProduction
        } else if (JobTimeData.coalJobTimeCurrent <= 0) {
            JobTimeData.coalJobTimeCurrent = JobTimeData.coalJobTime
            StockpillData.coal += JobProductionData.coalJobProduction
        } else if (JobTimeData.steelJobTimeCurrent <= 0) {
            JobTimeData.steelJobTimeCurrent = JobTimeData.steelJobTime
            StockpillData.steel += JobProductionData.steelJobProduction
        } else if (JobTimeData.oilJobTimeCurrent <= 0) {
            JobTimeData.oilJobTimeCurrent = JobTimeData.oilJobTime
            StockpillData.oil += JobProductionData.oilJobProduction
        } else if (JobTimeData.plasticJobTimeCurrent <= 0) {
            JobTimeData.plasticJobTimeCurrent = JobTimeData.plasticJobTime
            StockpillData.plastic += JobProductionData.plasticJobProduction
        }
    }
}

function revealTabs() {
    if (PowerData.currentPower >= 5) {
        document.getElementById("upgradesTab").style.display = "block"
    }
    if (PowerData.currentPower >= 100) {
        document.getElementById("materialsTab").style.display = "block"
    }
    if (StockpillData.wood >= 5) {
        document.getElementById("BuildingsTab").style.display = "block"
    }
    if (PowerData.currentPower >= 500) {
        document.getElementById("spaceTab").style.display = "block"
    }
    if (PowerData.currentPower >= 10000) {
        document.getElementById("WorkersTab").style.display = "block"
    }
    if (StockpillData.wood > 0) {
        document.getElementById("woodDisplay").style.display = "block"
        document.getElementById("woodWorkers").style.display = "block"
        document.getElementById("woodWorkers+").style.display = "block"
        document.getElementById("woodWorkers-").style.display = "block"
    }
    if (StockpillData.sand > 0) {
        document.getElementById("sandDisplay").style.display = "block"
        document.getElementById("sandWorkers").style.display = "block"
        document.getElementById("sandWorkers+").style.display = "block"
        document.getElementById("sandWorkers-").style.display = "block"
    }
    if (StockpillData.iron > 0) {
        document.getElementById("ironDisplay").style.display = "block"
        document.getElementById("ironWorkers").style.display = "block"
        document.getElementById("ironWorkers+").style.display = "block"
        document.getElementById("ironWorkers-").style.display = "block"
    }
    if (StockpillData.coal > 0) {
        document.getElementById("coalDisplay").style.display = "block"
        document.getElementById("coalWorkers").style.display = "block"
        document.getElementById("coalWorkers+").style.display = "block"
        document.getElementById("coalWorkers-").style.display = "block"
    }
    if (StockpillData.oil > 0) {
        document.getElementById("oilDisplay").style.display = "block"
        document.getElementById("oilWorkers").style.display = "block"
        document.getElementById("oilWorkers+").style.display = "block"
        document.getElementById("oilWorkers-").style.display = "block"
    }
    if (StockpillData.plastic > 0) {
        document.getElementById("plasticDisplay").style.display = "block"
        document.getElementById("plasticWorkers").style.display = "block"
        document.getElementById("plasticWorkers+").style.display = "block"
        document.getElementById("plasticWorkers-").style.display = "block"
    }
    if (StockpillData.glass > 0) {
        document.getElementById("glassDisplay").style.display = "block"
        document.getElementById("glassWorkers").style.display = "block"
        document.getElementById("glassWorkers+").style.display = "block"
        document.getElementById("glassWorkers-").style.display = "block"
    }
    if (StockpillData.steel > 0) {
        document.getElementById("steelDisplay").style.display = "block"
        document.getElementById("steelWorkers").style.display = "block"
        document.getElementById("steelWorkers+").style.display = "block"
        document.getElementById("steelWorkers-").style.display = "block"
    }
}

function updateText(update) {
    if (update == "Power") {
        document.getElementById("RPM").innerHTML = formatNumber(TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) + " RPM"
        document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(PowerData.currentPower) + "W/" + formatNumber(PowerStorageData.totalPowerStorage) + "W"
        document.getElementById("RPMTipText").innerHTML = formatNumber(TurbineData.generatorEfficency * ((TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) / 1000) * 4) + "W per sec"
    } else if (update == "Buildings") {
        document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + BuildingData.pumps + ") Cost: " + formatNumber(BuildingCostData.pumpCost) + " Steel"
        document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + BuildingData.drils + ") Cost: " + formatNumber(BuildingCostData.drilCost) + " Iron"
        document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + BuildingData.mines + ") Cost: " + formatNumber(BuildingCostData.mineCost) + " Wood"
        document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + BuildingData.diggers + ") Cost: " + formatNumber(BuildingCostData.diggerCost) + " Wood"
    } else if (update == "Upgrades") {
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + PowerData.powerPerTick + ") Cost: " + formatNumber(PowerData.powerPerTickCost) + "W"
        document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + PowerStorageData.batteries + ") Cost: " + formatNumber(PowerStorageData.batteryCost) + "W"
        document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + PowerStorageData.capasitors + ") Cost: " + formatNumber(PowerStorageData.capasitorCost) + "W"
    } else if (update == "Materials") {
        document.getElementById("oilDisplay").innerHTML = "oil: " + formatNumber(StockpillData.oil)
        document.getElementById("coalDisplay").innerHTML = "coal: " + formatNumber(StockpillData.coal)
        document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(StockpillData.iron)
        document.getElementById("sandDisplay").innerHTML = "sand: " + formatNumber(StockpillData.sand)
        document.getElementById("plasticDisplay").innerHTML = "plastic: " + formatNumber(StockpillData.plastic)
        document.getElementById("glassDisplay").innerHTML = "glass: " + formatNumber(StockpillData.glass)
        document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(StockpillData.steel)
        document.getElementById("woodDisplay").innerHTML = "wood: " + formatNumber(StockpillData.wood)
    } else if (update == "Space") {
        document.getElementById("buyTelescopeButton").innerHTML = "Upgrade telescope (Currently Level " + TelescopeData.telescopeLevel + ") Cost: " + formatNumber(TelescopeData.telescopeCost) + "W"
        document.getElementById("turnTelescope_On_Off").innerHTML = "Telescope " + TelescopeData.telescopeStatus + " (energy cost " + TelescopeData.telescopeEnergyCost * 4 + "W/s)"
        if (TelescopeData.area == 1) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 0LY to 1LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea1 / 10) + "% compleat)"
        } else if (TelescopeData.area == 2) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 1LY to 10LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea2 / 100) + "% compleat)"
        } else if (TelescopeData.area == 3) {
            document.getElementById("changeSpaceArea").innerHTML = "Looking out at 10LY to 100LY (" + formatNumber(100 - SerchAreaData.freeSpaceArea3 / 1000) + "% compleat)"
        }
    } else if (update == "Workers") {
        document.getElementById("buyWorker").innerHTML = "Buy worker (" + WorkerStatusData.workers + ") Cost: " + formatNumber(WorkerStatusData.workerCost) + "W"
        document.getElementById("freeWorkers").innerHTML = "Free workers " + WorkerStatusData.freeWorkers
        document.getElementById("energyWorkers").innerHTML = "Energy workers " + JobData.energyWorker
        document.getElementById("woodWorkers").innerHTML = "Wood workers " + JobData.woodWorker
        document.getElementById("sandWorkers").innerHTML = "Sand workers " + JobData.sandWorker
        document.getElementById("glassWorkers").innerHTML = "Glass workers " + JobData.glassWorker
        document.getElementById("ironWorkers").innerHTML = "Iron workers " + JobData.ironWorker
        document.getElementById("coalWorkers").innerHTML = "Coal workers " + JobData.coalWorker
        document.getElementById("steelWorkers").innerHTML = "Steel workers " + JobData.steelWorker
        document.getElementById("oilWorkers").innerHTML = "Oil workers " + JobData.oilWorker
        document.getElementById("plasticWorkers").innerHTML = "Plastic workers " + JobData.plasticWorker
    }
}

function chopWood(number){
    if (PowerData.currentPower >= number) {
      StockpillData.wood += number
      PowerData.currentPower -= number
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
  if (StockpillData.coal >= 10*number && gameData.iron >= 100*number) {
    StockpillData.steel += number
    StockpillData.coal -= 10*number
    StockpillData.iron -= 100*number
    document.getElementById("getPump").style.display = "block"
    document.getElementById("steelDisplay").style.display = "block"
    updateText("Materials")
    //document.getElementById("steelDisplay").innerHTML = "steel: " + formatNumber(gameData.steel)
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
}

function makeGlass(number) {
  if (StockpillData.sand >= 10*number) {
    StockpillData.glass += number
    StockpillData.sand -= 10*number
    document.getElementById("glassDisplay").style.display = "block"
    updateText("Materials")
    //document.getElementById("glassDisplay").innerHTML = "glass: " + formatNumber(gameData.glass)
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
}

function makePlastic(number) {
  if (StockpillData.oil >= 10*number) {
    StockpillData.plastic += number
    StockpillData.oil -= 10*number
    document.getElementById("plasticDisplay").style.display = "block"
    updateText("Materials")
    //document.getElementById("plasticDisplay").innerHTML = "plastic: " + formatNumber(gameData.plastic)
    //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  }
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
    }
    else if (SerchAreaData.freeSpaceArea1 < BataData.bataLocation){
      BataData.bataLocation = -1
      document.getElementById("planet_bata").style.display = "block"
    }
    else if (SerchAreaData.freeSpaceArea1 < GammaData.gammaLocation){
        GammaData.gammaLocation = -1
      document.getElementById("planet_gamma").style.display = "block"
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
    }
    else if (SerchAreaData.freeSpaceArea2 < EpsilonData.epsilonLocation){
        EpsilonData.epsilonLocation = -1
      document.getElementById("planet_epsilon").style.display = "block"
    }
    else if (SerchAreaData.freeSpaceArea2 < ZetaData.zetaLocation){
        ZetaData.zetaLocation = -1
      document.getElementById("planet_zeta").style.display = "block"
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
    }
    else if (SerchAreaData.freeSpaceArea3 < TheataData.TheataLocation){
      TheataData.TheataLocation = -1
      document.getElementById("planet_theata").style.display = "block"
    }
    else if (SerchAreaData.freeSpaceArea3 < IotaData.iotaLocation){
      IotaData.iotaLocation = -1
      document.getElementById("planet_iota").style.display = "block"
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

function gatherMaterials() {
    StockpillData.sand += BuildingData.diggers * BuildingEfficiencyData.diggerEfficiency
    //document.getElementById("sandDisplay").innerHTML = "sand: " + formatNumber(gameData.sand)
    StockpillData.iron += BuildingData.mines * BuildingEfficiencyData.mineEfficiency
    //document.getElementById("ironDisplay").innerHTML = "iron: " + formatNumber(gameData.iron)
    StockpillData.coal += BuildingData.drils * BuildingEfficiencyData.drilEfficiency
    //document.getElementById("coalDisplay").innerHTML = "coal: " + formatNumber(gameData.coal)
    StockpillData.oil += BuildingData.pumps * BuildingEfficiencyData.pumpEfficiency
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

var mainGameLoop = window.setInterval(function() {
    slowTurbine()
    makePower(TurbineData.generatorEfficency * ((TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) / 1000))
    TurbineData.turbineMinSpeed = 0
    workers()
    revealTabs()
    useTelescope()
    gatherMaterials()
    planetProduction()
    MiscellaneousData.gameTicks += 1
}, MiscellaneousData.gameSpeed)
