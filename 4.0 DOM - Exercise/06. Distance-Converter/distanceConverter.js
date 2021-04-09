function attachEventsListeners() {
    let convertor = {mm: 0.001, cm: 0.01, in: 0.0254, ft: 0.3048, yrd: 0.9144, m: 1, km: 1000, mi: 1609.34}

    let from = document.getElementById('inputDistance')
    let to = document.getElementById('outputDistance')
    let fromElement = document.getElementById('inputUnits')
    let toElement = document.getElementById('outputUnits')

    document.getElementById('convert').addEventListener('click', () => {
        let toMeters = from.value * convertor[fromElement.value]
        let converted = toMeters / convertor[toElement.value]
        to.value = converted
    })
}
