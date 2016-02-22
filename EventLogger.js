/**
 * Created by viveksh2 on 9/29/15.
 */
var EventLogger = (function () {

    var loggerInstance;
    var eventLoggerObject = {};
    var baseEventURL = "//tools-dev.cisco.com/smartservices/ajax/SessUsageFeature?action=saveFeatureUsageDetails&";
    eventLoggerObject.ssueContext = {};

    var logEvent = function(data) {
        var trackingParams = "";
        var sntcLoggingEndpoint = "";
        var ssueContextParams = null ;
        var baseUrl = baseEventURL;

        trackingParams = _formatInputForSNTCTracking(data);
        var localDateTime = _getLocalDateTime();

        //check if ssueContext object was set
        if (eventLoggerObject.ssueContext.hasOwnProperty('service')) {
            ssueContextParams = _setSsueContextForSNTCLogging();
        }

        var featureName = "featureName=" + trackingParams;
        var localTime = "&localDateTime=" + localDateTime;
        if (ssueContextParams) {
            ssueContextParams = "&ssueContextValue=" + ssueContextParams;
            sntcLoggingEndpoint = baseUrl + featureName + localTime + ssueContextParams;
        }
        else {
            sntcLoggingEndpoint = baseUrl + featureName + localTime;
        }
        _invokeAjax(sntcLoggingEndpoint, "GET");
    };
    var _setSsueContextForSNTCLogging = function() {
        return JSON.stringify(ssueUsageObject.ssueContext);
    };
    var _invokeAjax = function(url, method, params) {
        var xhr;
        if (typeof XMLHttpRequest !== 'undefined') {
            xhr = new XMLHttpRequest();
        } else {
            var versions = ["MSXML2.XmlHttp.5.0",
                "MSXML2.XmlHttp.4.0",
                "MSXML2.XmlHttp.3.0",
                "MSXML2.XmlHttp.2.0",
                "Microsoft.XmlHttp"]

            for (var i = 0, len = versions.length; i < len; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                }
                catch (e) {}
            }
        }
        xhr.onreadystatechange = ensureReadiness;
        function ensureReadiness() {
            if (xhr.readyState < 4) {
                return;
            }
            if (xhr.status !== 200) {
                return;
            }
            // all is well
            if (xhr.readyState === 4) {
                //callback(xhr);
                console.log("Success");
            }
        };
        xhr.open(method, url, true);
        if (params) {
            xhr.send(params);
        } else {
            xhr.send();
        }
    };
    var _formatInputForSNTCTracking = function(data) {
        //params = ["link", "Contract Management"]
        var params = [];
        for (var key in data) {
            if (key == 'sendSsueContext')
                continue;
            if (data[key]) {
                params.push(data[key]);
            } else {
                params.push('undefined');
            }
            //console.log("watchPmSpaceTracking: "+ key + " : " + data[key]);
        }
        var evtParams = "";
        evtParams = params.join(":");
        //"link:Contract Management"
        return evtParams;
    };
    var _getLocalDateTime = function() {
        var now = new Date();
        var year = "" + now.getFullYear();
        var month = "" + (now.getMonth() + 1);
        if (month.length == 1) {
            month = "0" + month;
        }
        var day = "" + now.getDate();
        if (day.length == 1) {
            day = "0" + day;
        }
        var time = now.toTimeString().substring(0, 8);
        var dateTime = year + "." + month + "." + day + " " + time;
        return dateTime;
    };

    // Create the SNTC EVENT logger instance
    var createLogger = function (ssueContext) {
        eventLoggerObject.ssueContext = ssueContext;
            return {
                logEvent: logEvent

            };

    };
    return {
        getInstance: function (ssueContext) {
            if (!loggerInstance) {
                loggerInstance = createLogger(ssueContext);
            }
            return loggerInstance;
        }
    };
}) ();




// Notice how we use getInstance() and we
// do not use direct object creation with the
// new keyword
var myLogger = EventLogger.getInstance(ssueContext);
console.log(myLogger);
console.log(myLogger.logEvent('Memory use nearing maximum!'));
