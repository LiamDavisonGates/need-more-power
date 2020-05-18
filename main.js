
var GameData = {
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
  number = number.toFixed(GameData.MiscellaneousData.numberFormat)
  number = number + "E"
} else if (number > 5000000000000000) {
  number /= 1000000000000000
  number = number.toFixed(GameData.MiscellaneousData.numberFormat)
  number = number + "P"
} else if (number > 5000000000000) {
  number /= 1000000000000
  number = number.toFixed(GameData.MiscellaneousData.numberFormat)
  number = number + "T"
} else if (number > 5000000000) {
  number /= 1000000000
  number = number.toFixed(GameData.MiscellaneousData.numberFormat)
  number = number + "G"
} else if (number > 5000000) {
  number /= 1000000
  number = number.toFixed(GameData.MiscellaneousData.numberFormat)
  number = number + "M"
} else if (number > 5000) {
  number /= 1000
  number = number.toFixed(GameData.MiscellaneousData.numberFormat)
  number = number + "K"
} else {
  number = number.toFixed(GameData.MiscellaneousData.numberFormat)
}
return number
}

function spinTurbine() {
var speedAddition = GameData.TurbineData.turbineSpinForce / GameData.TurbineData.turbineMass
if (GameData.TurbineData.turbineSpeed + speedAddition <= GameData.TurbineData.turbineMaxSpeed) {
  GameData.TurbineData.turbineSpeed += speedAddition
} else if (GameData.TurbineData.turbineSpeed + speedAddition > GameData.TurbineData.turbineMaxSpeed) {
  GameData.TurbineData.turbineSpeed = GameData.TurbineData.turbineMaxSpeed
}
updateText("Power")
//document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed) + "RPM"
}

function slowTurbine() {
var speedLoss = GameData.TurbineData.turbineSpeed * (GameData.TurbineData.turbineFriction + GameData.TurbineData.generatorFriction)
GameData.TurbineData.turbineSpeed -= speedLoss
updateText("Power")
//document.getElementById("RPM").innerHTML =  formatNumber(gameData.turbineSpeed + gameData.turbineMinSpeed) + "RPM"
}

function makePower(amount) {
if (GameData.PowerData.currentPower < GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors) {
  GameData.PowerData.currentPower += amount
  GameData.PowerData.totalPower += amount
  if (GameData.PowerData.currentPower > GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors) {
      GameData.PowerData.totalPower -= GameData.PowerStorageData.currentPower - (GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors)
      GameData.PowerData.currentPower = GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors
  }
  //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
} else if (GameData.PowerData.currentPower < (GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors) + (GameData.PowerStorageData.batteriesStorage * GameData.PowerStorageData.batteries)) {
  GameData.PowerData.currentPower += amount * GameData.PowerStorageData.batteriesEfficency
  GameData.PowerData.totalPower += amount
  if (GameData.PowerData.currentPower > (GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors) + (GameData.PowerStorageData.batteriesStorage * GameData.PowerStorageData.batteries)) {
      GameData.PowerData.totalPower -= GameData.PowerData.currentPower - (GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors) + (GameData.PowerStorageData.batteriesStorage * GameData.PowerStorageData.batteries)
      GameData.PowerData.currentPower = GameData.PowerStorageData.capasitorsStorage * GameData.PowerStorageData.capasitors
  }
  //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  //document.getElementById("totalPower").innerHTML = formatNumber(gameData.totalPower) + "W  (Total Power)"
}
updateText("Power")
}

function increasPowerPerTick(amount) {
GameData.PowerData.powerPerTick += amount
}

function updatePowerStorage() {
GameData.PowerStorageData.totalPowerStorage = (GameData.PowerStorageData.capasitors * GameData.PowerStorageData.capasitorsStorage) + (GameData.PowerStorageData.batteries * GameData.PowerStorageData.batteriesStorage)
}

function buyCapasitor() {
if (GameData.PowerData.currentPower >= GameData.PowerStorageData.capasitorCost) {
  GameData.PowerStorageData.capasitors += 1
  GameData.PowerData.currentPower -= GameData.PowerStorageData.capasitorCost
  GameData.PowerStorageData.capasitorCost *= 1.5
  updatePowerStorage()
  updateText("Power")
  updateText("Upgrades")
  //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  //document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + gameData.capasitors + ") Cost: " + formatNumber(gameData.capasitorCost) + "W"
}
}

function buyBattery() {
if (GameData.PowerData.currentPower >= GameData.PowerStorageData.batteryCost) {
  GameData.PowerStorageData.batteries += 1
  GameData.PowerData.currentPower -= GameData.PowerStorageData.batteryCost
  GameData.PowerStorageData.batteryCost *= 1.5
  updatePowerStorage()
  updateText("Power")
  updateText("Upgrades")
  //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  //document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + gameData.batteries + ") Cost: " + formatNumber(gameData.batteryCost) + "W"
}
}

function buyPowerPerTick() {
if (GameData.PowerData.currentPower >= GameData.PowerData.powerPerTickCost) {
  GameData.PowerData.currentPower -= GameData.PowerData.powerPerTickCost
  GameData.TurbineData.turbineSpinForce += 10
  GameData.PowerData.powerPerTickCost *= 1.25
  GameData.PowerData.powerPerTick += 1
  updateText("Power")
  updateText("Upgrades")
  //document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(gameData.currentPower) + "W/" + formatNumber(gameData.totalPowerStorage) + "W"
  //document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + gameData.powerPerTick + ") Cost: " + formatNumber(gameData.powerPerTickCost) + "W"
}
}

function updateText(update) {
  if (update == "Power") {
      document.getElementById("RPM").innerHTML =  formatNumber(GameData.TurbineData.turbineSpeed + GameData.TurbineData.turbineMinSpeed) + " RPM"
      document.getElementById("currentPower").innerHTML = 'Stored power: ' + formatNumber(GameData.PowerData.currentPower) + "W/" + formatNumber(GameData.PowerStorageData.totalPowerStorage) + "W"
      document.getElementById("RPMTipText").innerHTML = formatNumber(GameData.TurbineData.generatorEfficency * ((GameData.TurbineData.turbineSpeed + GameData.TurbineData.turbineMinSpeed)/1000)*4) + "W per sec"
  } else if (update == "Buildings") {
      document.getElementById("getPump").innerHTML = "Buy pump (Currently Ownd " + gameData.pumps + ") Cost: " + formatNumber(gameData.pumpCost) + " Steel"
      document.getElementById("getDril").innerHTML = "Buy dril (Currently Ownd " + gameData.drils + ") Cost: " + formatNumber(gameData.drilCost) + " Iron"
      document.getElementById("getMine").innerHTML = "Buy mine (Currently Ownd " + gameData.mines + ") Cost: " + formatNumber(gameData.mineCost) + " Wood"
      document.getElementById("getDigger").innerHTML = "Buy digger (Currently Ownd " + gameData.diggers + ") Cost: " + formatNumber(gameData.diggerCost) + " Wood"
  } else if (update == "Upgrades") {
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Turbine (Currently Level " + GameData.PowerData.powerPerTick + ") Cost: " + formatNumber(GameData.PowerData.powerPerTickCost) + "W"
      document.getElementById("buyBatteryButton").innerHTML = "Buy Battery (Currently Ownd " + GameData.PowerStorageData.batteries + ") Cost: " + formatNumber(GameData.PowerStorageData.batteryCost) + "W"
      document.getElementById("buyCapasitorButton").innerHTML = "Buy Capasitor (Currently Ownd " + GameData.PowerStorageData.capasitors + ") Cost: " + formatNumber(GameData.PowerStorageData.capasitorCost) + "W"
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

var mainGameLoop = window.setInterval(function() {
slowTurbine()
makePower(GameData.TurbineData.generatorEfficency * ((GameData.TurbineData.turbineSpeed + GameData.TurbineData.turbineMinSpeed)/1000))
GameData.TurbineData.turbineMinSpeed = 0
}, 250)
