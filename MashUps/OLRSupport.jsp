    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

        <%@page import="com.cisco.ca.ast.service.idp.controller.IdpController"%>
            <%
	response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
%>
        <html>
        <head>
            <%  if (request.getServerName().indexOf("cisco") == -1 ) { %>
        <META HTTP-EQUIV="Refresh"
        CONTENT="1; URL=http://<%= request.getServerName() + ".cisco.com:" + request.getLocalPort() +"/" + request.getContextPath()%>">
        </head>
            <% } else { %>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>SodcSvcs Login</title>
        <link href='../styleSheets/globalStyles.css' rel="styleSheet"
        type="text/css">

        <!--[if lte IE 6]>
        <LINK rel="stylesheet"
        href="../styleSheets/ieHacks.css" type="text/css">
        <![endif]-->

        <!--[if IE 7]>
        <style>.clearFix { zoom: 1;}</style>
        <![endif]-->
        <script type="text/javascript" language="JavaScript"
        src="../javaScript/utilities.js"></script>


        <STYLE type="text/css">
        div.label {
        color: #003399;
        width: 35%;
        }


        div.loginDiv {
        position: relative;
        top: -145px;
        left: -165px;
        background-color: #003399;
        color: white;
        width: 337px;
        padding: 0px;
        margin: 0px;
        border: 0px;
        z-index: 1;
        overflow: hidden;
        }

        div.centerPoint {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1px;
        height: 1px;
        overflow: visible;
        z-index: 5;
        }
        div.group {
        float: left;
        margin: 0px;
        margin-bottom: 0.3em;
        white-space: nowrap;
        padding: 0px;
        width: 90%;
        }

        div.label {
        float: left;
        text-align: right;
        padding-right: 5px;
        line-height: 1.6em;
        overflow: hidden;
        white-space: nowrap;
        width: 40%;
        font-weight: bold;
        }

        .input {
        float: left;
        font-weight: bold;
        padding: 0.2em;
        line-height: 1.2em;
        font-size: 1em;
        width: 40%;
        border: 0;
        }


        </STYLE>

        </head>

        <body class="appForm">
        <form method="POST" name="myForm" action="../j_spring_security_check">
        <div class="centerPoint">

        <div class="loginDiv" style="left: -20em; width: 40em; background-color: transparent;">

        <div class="roundArea appShadow" style="width: 35em;">
        <div class="roundAreaHead appShadowTop"><h2>SODC Logon</h2></div>

        <div class="roundAreaBody appShadowLeft" style="padding-top: 1em;">
            <%
								IdpController.loadAllGroups();
								%>
        <div class="appOKMessages" style="float: none; display: block">
        Active directory Group base access control: <br>
        IDP group: <span style="color: red"><%= IdpController.getAdminGroup() %></span><br/>
        <br/>
        Contact Group owner to be added( look up group name above in <a href="http://eman.cisco.com/OPDATA/ActiveDirectory/adam/index.pmcgi?forest=dsx.cisco.com">ADAM</a>)
        if you get a not authorized message, or if you think your userid requires additional roles/permissions
        </div>

        <div class="clearFix" style="">
        <div class="group groupRound">
        <div class="label">CEC User Name:</div>
        <INPUT class="input" id="useridField" name="j_username" >
        </div>

        <div class="group groupRound">
        <div class="label">Password:</div>
        <INPUT class="input" type=password name="j_password""
        value="" onKeyPress="return submitOnEnter(this,event)">
        </div>
        <input type="submit" name="Login" value="Login">
        <div class="newRow">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        </form>

        </body>
            <% } %>
        </html>
