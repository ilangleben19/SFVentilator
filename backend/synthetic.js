module.exports = function (data, socket) {
    setInterval(function () {
        data.arduinoReceiver(`FiO2|${100 * Math.sin(Date.now() / 1e3)}\n`);
        data.arduinoReceiver(`LungPress|${100 * Math.tan(Date.now() / 2e3)}\n`);
        data.arduinoReceiver(`Temp|37.1\n`);
        data.arduinoReceiver(`Hum|78\n`);
        data.arduinoReceiver(`O2inLowAlarm|1\n`);
        data.arduinoReceiver(`HumWarn|1\n`);
    }, 200);
};