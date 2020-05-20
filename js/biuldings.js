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
