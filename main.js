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

var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    label: "Dataset #1",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [65, 59, 20, 81, 56, 55, 40],
  }]
};

var option = {
  responsive: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

Chart.Bar('myChart', {
  options: option,
  data: data
});

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
        document.getElementById("woodDisplay").style.color = "Azure"
        document.getElementById("woodWorkers").style.display = "block"
        document.getElementById("woodWorkers").style.color = "Azure"
        document.getElementById("woodWorkers+").style.display = "block"
        document.getElementById("woodWorkers-").style.display = "block"
    }
    if (StockpillData.sand > 0) {
        document.getElementById("sandDisplay").style.display = "block"
        document.getElementById("sandDisplay").style.color = "Azure"
        document.getElementById("sandWorkers").style.display = "block"
        document.getElementById("sandWorkers").style.color = "Azure"
        document.getElementById("sandWorkers+").style.display = "block"
        document.getElementById("sandWorkers-").style.display = "block"
    }
    if (StockpillData.iron > 0) {
        document.getElementById("ironDisplay").style.display = "block"
        document.getElementById("ironDisplay").style.color = "Azure"
        document.getElementById("ironWorkers").style.display = "block"
        document.getElementById("ironWorkers").style.color = "Azure"
        document.getElementById("ironWorkers+").style.display = "block"
        document.getElementById("ironWorkers-").style.display = "block"
    }
    if (StockpillData.coal > 0) {
        document.getElementById("coalDisplay").style.display = "block"
        document.getElementById("coalDisplay").style.color = "Azure"
        document.getElementById("coalWorkers").style.display = "block"
        document.getElementById("coalWorkers").style.color = "Azure"
        document.getElementById("coalWorkers+").style.display = "block"
        document.getElementById("coalWorkers-").style.display = "block"
    }
    if (StockpillData.oil > 0) {
        document.getElementById("oilDisplay").style.display = "block"
        document.getElementById("oilDisplay").style.color = "Azure"
        document.getElementById("oilWorkers").style.display = "block"
        document.getElementById("oilWorkers").style.color = "Azure"
        document.getElementById("oilWorkers+").style.display = "block"
        document.getElementById("oilWorkers-").style.display = "block"
    }
    if (StockpillData.plastic > 0) {
        document.getElementById("plasticDisplay").style.display = "block"
        document.getElementById("plasticDisplay").style.color = "Azure"
        document.getElementById("plasticWorkers").style.display = "block"
        document.getElementById("plasticWorkers").style.color = "Azure"
        document.getElementById("plasticWorkers+").style.display = "block"
        document.getElementById("plasticWorkers-").style.display = "block"
    }
    if (StockpillData.glass > 0) {
        document.getElementById("glassDisplay").style.display = "block"
        document.getElementById("glassDisplay").style.color = "Azure"
        document.getElementById("glassWorkers").style.display = "block"
        document.getElementById("glassWorkers").style.color = "Azure"
        document.getElementById("glassWorkers+").style.display = "block"
        document.getElementById("glassWorkers-").style.display = "block"
    }
    if (StockpillData.steel > 0) {
        document.getElementById("steelDisplay").style.display = "block"
        document.getElementById("steelDisplay").style.color = "Azure"
        document.getElementById("steelWorkers").style.display = "block"
        document.getElementById("steelWorkers").style.color = "Azure"
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
    makePower(TurbineData.generatorEfficency * ((TurbineData.turbineSpeed + TurbineData.turbineMinSpeed) / 1000))
    TurbineData.turbineMinSpeed = 0
    workers()
    revealTabs()
    useTelescope()
    gatherMaterials()
    planetProduction()
    MiscellaneousData.gameTicks += 1
}, MiscellaneousData.gameSpeed)
