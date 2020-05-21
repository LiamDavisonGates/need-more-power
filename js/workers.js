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

var JobProgressBarData = {
    energyBarWidth: 0.00,
}

function buyWorker() {
    if (PowerData.currentPower >= WorkerStatusData.workerCost) {
        WorkerStatusData.workers += 1
        WorkerStatusData.freeWorkers += 1
        PowerData.currentPower -= WorkerStatusData.workerCost
        WorkerStatusData.workerCost *= 1.5
        updateText("Workers")
        document.getElementById("energyWorkers").style.display = "block"
        document.getElementById("energyWorkers").style.color = "Azure"
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
            document.getElementById("energyWorkersBar").style.width = 0
            JobProgressBarData.energyBarWidth = 0
        } else {
            JobProgressBarData.energyBarWidth = ((JobData.energyWorker * JobEfficiencyData.energyWorkerEfficiency)/JobTimeData.energyJobTime)*100
            document.getElementById("energyWorkersBar").style.width = JobProgressBarData.energyBarWidth + "%"
        }
        if (JobTimeData.woodJobTimeCurrent <= 0) {
            JobTimeData.woodJobTimeCurrent = JobTimeData.woodJobTime
            StockpillData.wood += JobProductionData.woodJobProduction
        }
        if (JobTimeData.sandJobTimeCurrent <= 0) {
            JobTimeData.sandJobTimeCurrent = JobTimeData.sandJobTime
            StockpillData.sand += JobProductionData.sandJobProduction
        }
        if (JobTimeData.glassJobTimeCurrent <= 0) {
            JobTimeData.glassJobTimeCurrent = JobTimeData.glassJobTime
            StockpillData.glass += JobProductionData.glassJobProduction
        }
        if (JobTimeData.ironJobTimeCurrent <= 0) {
            JobTimeData.ironJobTimeCurrent = JobTimeData.ironJobTime
            StockpillData.iron += JobProductionData.ironJobProduction
        }
        if (JobTimeData.coalJobTimeCurrent <= 0) {
            JobTimeData.coalJobTimeCurrent = JobTimeData.coalJobTime
            StockpillData.coal += JobProductionData.coalJobProduction
        }
        if (JobTimeData.steelJobTimeCurrent <= 0) {
            JobTimeData.steelJobTimeCurrent = JobTimeData.steelJobTime
            StockpillData.steel += JobProductionData.steelJobProduction
        }
        if (JobTimeData.oilJobTimeCurrent <= 0) {
            JobTimeData.oilJobTimeCurrent = JobTimeData.oilJobTime
            StockpillData.oil += JobProductionData.oilJobProduction
        }
        if (JobTimeData.plasticJobTimeCurrent <= 0) {
            JobTimeData.plasticJobTimeCurrent = JobTimeData.plasticJobTime
            StockpillData.plastic += JobProductionData.plasticJobProduction
        }

    }
}
