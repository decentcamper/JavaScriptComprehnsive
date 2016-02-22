/**
 * Created by viveksh2 on 10/2/15.
 */

'use strict';

var SSUEUSAGE = (function() {

        var ssueUsageObject = {};
        var basePmSpaceUrl = "//tools-dev.cisco.com/smartservices/ajax/SessUsageFeature?action=saveFeatureUsageDetails&";

        /*
         Public Variable
         ssueContext: Team can set the ssueContext if they want that to be tracked for usage.
         */
        ssueUsageObject.ssueContext = {};

        /*
         Public methods
         sendDataForUsage: This will trigger call to all methods for capturing user metrics.
         The input to this method is JSON object like {'featureName':'ADITI','clickBy':'click','viewType':'test page'}
         It should have all the key value pairs that needs to be sent for tracking.

         */
        ssueUsageObject.sendDataForUsage = function(data) {
            setTimeout(function() {
                    _unicaUsageTracking(data);
                    if (ssueConfig && ssueConfig.inHouseTrackingEnabled == false) {
                        //if ssueConfig.inHouseTrackingEnabled is false dont invoke pm space
                        //for all other condtions pm space should be invoked
                    } else {
                        _pmSpaceUsageTracking(data);
                    }
                }
                , 0);
        }
        ;

        /*
         Private methods
         _unicaUsageTracking: main method to trigger unica call
         _pmSpaceUsageTracking: main method to trigger pm space usage call
         _formatInputForUnicaTracking: method to format the tracking params for Unica
         _formatInputForPmSpaceTracking: method to format the tracking params for Pm Space
         */
        var _unicaUsageTracking = function(data) {
                var trackingParams = "";
                trackingParams = _formatInputForUnicaTracking(data);
                //check if ssueContext object was set
                if (ssueUsageObject.ssueContext.hasOwnProperty('service')) {
                    var ssueContextParams = _setSsueContextForUnica();
                    trackingParams = trackingParams + '&' + ssueContextParams;
                }
                //Unica Tracking {** ntptEventTag("key=value&key1=value&ev=pickcolor") **}
                if (typeof ntptEventTag == 'function') {
                    console.log("Invoking Unica tracking");
                    ntptEventTag(trackingParams);
                } else {
                    console.log('Unica file not included');
                }
            }
            ;

        var _pmSpaceUsageTracking = function(data) {
                var trackingParams = "";
                var urlForPmSpace = "";
                var ssueContextParams = null ;
                var baseUrl = basePmSpaceUrl;

                trackingParams = _formatInputForPmSpaceTracking(data);
                var localDateTime = _getLocalDateTime();

                //check if ssueContext object was set
                if (ssueUsageObject.ssueContext.hasOwnProperty('service')) {
                    ssueContextParams = _setSsueContextForPmSpace();
                }

                var featureName = "featureName=" + trackingParams;
                var localTime = "&localDateTime=" + localDateTime;
                if (ssueContextParams) {
                    ssueContextParams = "&ssueContextValue=" + ssueContextParams;
                    urlForPmSpace = baseUrl + featureName + localTime + ssueContextParams;
                }
                else {
                    urlForPmSpace = baseUrl + featureName + localTime;
                }
                _invokeAjax(urlForPmSpace, "GET");
            }
            ;

        var _formatInputForUnicaTracking = function(data) {
                var evtParams = "";
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        if (key == 'sendSsueContext')
                            continue;
                        evtParams = evtParams + key + '=' + encodeURIComponent(data[key]);
                        evtParams = evtParams + '&';
                    }
                }
                evtParams = evtParams.slice(0, evtParams.length - 1);
                return evtParams;
            }
            ;

        var _formatInputForPmSpaceTracking = function(data) {
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
                return evtParams;
            }
            ;

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
            }
            ;

        var _setSsueContextForUnica = function() {
                var ssueContextParams = "";
                var ssueContextValue = ssueUsageObject.ssueContext;
                var params = {};
                params.servcname = undefined;
                params.capbtyname = undefined;
                params.partname = undefined;
                params.custname = undefined;
                params.invname = undefined;

                if (ssueContextValue) {
                    params.servcname = ssueContextValue.service;
                    if (ssueContextValue.category) {
                        params.capbtyname = ssueContextValue.category;
                    }
                    if (ssueContextValue.partner && ssueContextValue.partner.length > 0) {
                        params.partname = ssueContextValue.partner;
                    }
                    if (ssueContextValue.customer && ssueContextValue.customer.length > 0) {
                        params.custname = ssueContextValue.customer;
                    }
                    if (ssueContextValue.inventory && ssueContextValue.inventory.length > 0) {
                        params.invname = ssueContextValue.inventory;
                    }
                }
                ssueContextParams = _formSsueContextParams(params);
                return ssueContextParams;
            }
            ;

        var _formSsueContextParams = function(params) {
                var ssueContextParams = "";
                for (var key in params) {
                    if (params.hasOwnProperty(key)) {
                        if (params[key]) {
                            var paramValLength = params[key].length;
                            if (paramValLength > 244) {
                                //get the allowed text as per limit
                                var allowedValues = params[key].substring(0, 244);
                                //get the readable valid values
                                var validValues = allowedValues.substring(0, allowedValues.lastIndexOf(","));
                                //get the remaining values to get the count
                                var remainingValues = params[key].substring(244);
                                var countOfRemainingValues = remainingValues.split(',').length;
                                //append the count to the readable values
                                params[key] = validValues + " & " + countOfRemainingValues + " MORE"
                            }
                        }
                        ssueContextParams = ssueContextParams + key + '=' + encodeURIComponent(params[key]);
                        ssueContextParams = ssueContextParams + '&';
                    }
                }
                ssueContextParams = ssueContextParams.slice(0, ssueContextParams.length - 1);
                return ssueContextParams;
            }
            ;

        var _setSsueContextForPmSpace = function() {
                return JSON.stringify(ssueUsageObject.ssueContext);
            }
            ;

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
                }
                ;

                xhr.open(method, url, true);
                if (params) {
                    xhr.send(params);
                } else {
                    xhr.send();
                }
            }
            ;

        return ssueUsageObject;

    }
)();

