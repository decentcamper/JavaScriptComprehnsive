test={
    "packageDefinition": {
        "name": "CS-AP Core",
        "architect": "pnightin",
        "description": "The primary development package for CS-AP",
        "emailNotifications": "cstg-release@cisco.com,cstg-infra@cisco.com"
    },
    "capability": {
        "name": "IR",
        "ajpSecret": "csapDemoAjp",
        "vdc": "None",
        "scm": "http://savi-svn/svn/ir_sedraft/trunk/CsapDefinition",
        "repoUrl": "http://maven.cisco.com:8081/nexus/content/groups/sstg-nls-group",
        "helpMenuItems": {
            "About SNTC": "http://iwe.cisco.com/web/smart-net-total-care-sntc/new-to-sntc",
            "CS-AP Community": "http://iwe.cisco.com/web/c-sap/home",
            "CSAP Installation": "http://wikicentral.cisco.com/display/SFAECSAP/Installation",
            "CSAP Release Notes": "http://wikicentral.cisco.com/display/SFAECSAP/Console+Release+Notes",
            "Cisco NGM Queues": "http://wwwin-tools.cisco.com/ccpadmin/instance.event?serviceName=mmx",
            "Cisco Oracle Dashboard": "http://wwwin.cisco.com/it/dba/std-db_tool.shtml",
            "CsAgent Javadoc": "https://csap-secure.cisco.com/admin/apidocs/index.html",
            "Contact Point": "http://iwe.cisco.com/web/subdasgu"
        },
        "releasePackages": []
    },
    "clusterDefinitions": {
        "dev": {
            "settings": {
                "operatorNotifications": [
                    "paranant@cisco.com",
                    "dummy@cisco.com",
                    "invalideEmail"
                ],
                "newsItems": [
                    "_noteIcon_ IR Migrated to CSAP",
                    "_newIcon_ CS-AP Definition located at http://savi-svn/svn/irdraft/trunk/CsapDefinition"
                ],
                "portRange": {
                    "start": 8200,
                    "end": 9300
                },
                "numberWorkerThreads": "4",
                "defaultUiDisplayVersion": "all",
                "defaultUiDisplayCluster": "all",
                "lbUrl": "http://cairapp-dev-01.cisco.com:8080",
                "consoleHistoryUi": "/AuditService/show/history",
                "autoRestartHttpdOnClusterReload": "yes",
                "useSmartLogger": "no",
                "useCsapAudit": "/AuditService/api/audit/addAuditJsonRecord",
                "launchUrls": {
                    "1) http(Tomcat Embed)": "default",
                    "2) ajp(LB - Internal)": "http://cairapp-dev-01.cisco.com:8080"
                },
                "useCsapMetrics": "/AuditService/api/metrics",
                "monitorDefaults": {
                    "maxDiskPercent": "96",
                    "maxLoad": "2",
                    "minFreeMemoryMb": "700"
                },
                "metricsCollectionInSeconds": {
                    "maxDaysToStore": 25,
                    "processDumps": {
                        "resouceInterval": 30,
                        "maxInInterval": 3,
                        "lowMemoryInMb": "1000"
                    },
                    "resource": [
                        30,
                        300,
                        1800
                    ],
                    "service": [
                        30,
                        300
                    ],
                    "jmx": [
                        "20",
                        300
                    ]
                }
            },
            "csspTestServices": {
                "jvmPorts": {
                    "ServletSample": [
                        "804x"
                    ],
                    "Cssp1Sample": [
                        "802x"
                    ]
                },
                "osProcessesList": [],
                "multiVm": {
                    "1": {
                        "hosts": [
                            "cairapp-dev-13"
                        ]
                    }
                }
            },
            "csapAdminServices": {
                "jvmPorts": {
                    "admin": [
                        "891x"
                    ],
                    "AuditService": [
                        "820x"
                    ]
                },
                "osProcessesList": [
                    "httpd"
                ],
                "multiVm": {
                    "1": {
                        "hosts": [
                            "cairapp-dev-01",
                            "cairapp-dev-02"
                        ]
                    }
                }
            },
            "irSupporting": {
                "osProcessesList": [],
                "jvmPorts": {
                    "SchedulerSvc": [
                        "821x"
                    ],
                    "ProcesslogSvc": [
                        "809x"
                    ],
                    "DseService": [
                        "824x"
                    ],
                    "PrfService": [
                        "826x"
                    ],
                    "OlrService": [
                        "827x"
                    ],
                    "ExporterService": [
                        "829x"
                    ],
                    "ExtSvc": [
                        "830x"
                    ],
                    "IpeSvc": [
                        "832x"
                    ],
                    "MailerSvc": [
                        "835x"
                    ]
                },
                "multiVmPartition": {
                    "0": {
                        "hosts": [
                            "cairapp-dev-01",
                            "cairapp-dev-02"
                        ]
                    },
                    "1": {
                        "hosts": [
                            "cairapp-dev-07",
                            "cairapp-dev-08"
                        ]
                    }
                }
            },
            "irAlertsMpc": {
                "osProcessesList": [],
                "jvmPorts": {
                    "AlertsService": [
                        "822x"
                    ],
                    "IrAlertsService": [
                        "825x"
                    ],
                    "IrMpcSvc": [
                        "833x"
                    ],
                    "IrOvSvc": [
                        "834x"
                    ]
                },
                "multiVmPartition": {
                    "0": {
                        "hosts": [
                            "cairapp-dev-04",
                            "cairapp-dev-05"
                        ]
                    },
                    "1": {
                        "hosts": [
                            "cairapp-dev-10",
                            "cairapp-dev-11"
                        ]
                    }
                }
            },
            "vmConfiguration": {
                "osProcessesList": [
                    "jdk",
                    "oracleDriver",
                    "RedHatLinux",
                    "vmmemctl"
                ],
                "jvmPorts": {
                    "Factory2Sample": [
                        "838x"
                    ]
                },
                "multiVm": {
                    "1": {
                        "hosts": [
                            "cairapp-dev-01",
                            "cairapp-dev-02",
                            "cairapp-dev-03",
                            "cairapp-dev-04",
                            "cairapp-dev-05",
                            "cairapp-dev-06",
                            "cairapp-dev-07",
                            "cairapp-dev-08",
                            "cairapp-dev-09",
                            "cairapp-dev-10",
                            "cairapp-dev-11",
                            "cairapp-dev-12",
                            "cairapp-dev-13"
                        ]
                    }
                }
            },
            "SnasSvc": {
                "osProcessesList": [],
                "jvmPorts": {
                    "SnpidService": [
                        "828x"
                    ]
                },
                "multiVmPartition": {
                    "0": {
                        "hosts": [
                            "cairapp-dev-02",
                            "cairapp-dev-07"
                        ]
                    },
                    "1": {
                        "hosts": [
                            "cairapp-dev-08",
                            "cairapp-dev-09"
                        ]
                    }
                }
            },
            "SnasTools": {
                "osProcessesList": [
                    "httpd"
                ],
                "jvmPorts": {
                    "SnpidRefreshTool": [
                        "836x"
                    ],
                    "SonarQubeSvc": [
                        "837x"
                    ]
                },
                "multiVmPartition": {
                    "0": {
                        "hosts": [
                            "cairapp-dev-06"
                        ]
                    },
                    "1": {
                        "hosts": [
                            "cairapp-dev-12"
                        ]
                    }
                }
            },
            "IDP": {
                "osProcessesList": [],
                "jvmPorts": {
                    "IDPSvc": [
                        "823x"
                    ]
                },
                "multiVm": {
                    "1": {
                        "hosts": [
                            "cairapp-dev-01",
                            "cairapp-dev-07"
                        ]
                    }
                }
            },
            "SnasSvcInt": {
                "osProcessesList": [],
                "jvmPorts": {
                    "SnpidService": [
                        "831x"
                    ]
                },
                "multiVm": {
                    "1": {
                        "hosts": [
                            "cairapp-dev-06"
                        ]
                    }
                }
            }
        }
    },
    "jvms": {
        "CsAgent": {
            "description": "CsAgent provides core service management capabilities, along with runtimes. admin services uses it extensively.",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/CsAgent",
            "autoStart": "04",
            "java": "-Xms256M -Xmx256M -XX:MaxPermSize=128m -DskipPlatformEscape=y",
            "server": "cssp-2.x",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/CsAgent",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.csap:CsAgent:3.0.1:war"
            },
            "version": {
                "1": {
                    "dev": {},
                    "stage": {},
                    "lt": {},
                    "prod": {}
                },
                "2": {
                    "dev": {},
                    "stage": {},
                    "lt": {},
                    "prod": {}
                }
            },
            "osProcessPriority": "-12",
            "customMetrics": {
                "TotalVmCpu": {
                    "mbean": "java.lang:type=OperatingSystem",
                    "attribute": "SystemCpuLoad"
                },
                "ProcessCpu": {
                    "mbean": "java.lang:type=OperatingSystem",
                    "attribute": "ProcessCpuLoad"
                }
            }
        },
        "admin": {
            "description": "CsManager provides UI for capability management",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/CsAgent",
            "autoStart": "04",
            "java": "-XX:-UseSplitVerifier -Xms128M -Xmx128M -XX:MaxPermSize=128m  -DmgrUi=mgrUi",
            "server": "cssp-2.x",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/CsAgent",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.csap:CsAgent:3.0.1:war"
            },
            "version": {
                "1": {
                    "dev": {},
                    "stage": {},
                    "lt": {},
                    "prod": {}
                },
                "2": {
                    "dev": {},
                    "stage": {},
                    "lt": {},
                    "prod": {}
                }
            },
            "metaData": "placeHolder",
            "customMetrics": {
                "TotalVmCpu": {
                    "mbean": "java.lang:type=OperatingSystem",
                    "attribute": "SystemCpuLoad"
                },
                "ProcessCpu": {
                    "mbean": "java.lang:type=OperatingSystem",
                    "attribute": "ProcessCpuLoad"
                },
                "GetServiceSummary": {
                    "simon": "users.getSummary",
                    "simonTotalPerInterval": "Delete this entry for simon attribute you want to divide by collection interval"
                },
                "GetServiceInstances": {
                    "simon": "users.getInstances",
                    "simonTotalPerInterval": "Delete this entry for simon attribute you want to divide by collection interval"
                }
            }
        },
        "Factory2Sample": {
            "description": "Provides cssp-2.x reference implementation for engineering, along with core platform regression tests.",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/Code+Samples",
            "java": "-XX:-UseSplitVerifier -Xms128M -Xmx128M -XX:MaxPermSize=128m",
            "server": "cssp-2.x",
            "autoStart": "55",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/client/samples/Cssp2FactorySample",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.cssp:Cssp2FactorySample:2.0.35:war"
            },
            "customMetrics": {
                "TotalVmCpu": {
                    "mbean": "java.lang:type=OperatingSystem",
                    "attribute": "SystemCpuLoad"
                },
                "ProcessCpu": {
                    "mbean": "java.lang:type=OperatingSystem",
                    "attribute": "ProcessCpuLoad"
                },
                "Spring_JmsListeners": {
                    "mbean": "com.cisco:application=csap,name=SpringBeans",
                    "attribute": "JmsActive"
                },
                "Spring_JmsOnMessage": {
                    "simon": "zmetrics.Demo_JmsListener.onMessage()"
                },
                "Spring_DbcpActive": {
                    "mbean": "com.cisco:application=csap,name=SpringBeans",
                    "attribute": "DbActive"
                },
                "Spring_DbcpIdle": {
                    "mbean": "com.cisco:application=csap,name=SpringBeans",
                    "attribute": "DbIdle"
                },
                "DB_AddItem": {
                    "simon": "zmetrics.Demo_DataAccessObject.addSchedule()"
                },
                "DB_ShowItem": {
                    "simon": "zmetrics.Demo_DataAccessObject.showScheduleItemsJpql()"
                }
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {},
                    "stage": {},
                    "lt": {},
                    "prod": {}
                }
            },
            "metaData": "exportWeb, -nio",
            "servletMaxConnections": "400",
            "servletTimeoutMs": "10000",
            "servletThreadCount": "100"
        },
        "ServletSample": {
            "description": "ServletSample provides a simple tomcat 7 implementation to validate the tomcat runtime",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/Code+Samples",
            "java": "-Xms128M -Xmx128M -XX:MaxPermSize=128m",
            "autoStart": "91",
            "server": "tomcat7.x",
            "osProcessPriority": "-3",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/client/samples/Servlet3Sample",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0:war"
            },
            "version": {
                "1": {
                    "dev": {},
                    "stage": {
                        "java": "-Xms192M -Xmx192M -XX:MaxPermSize=128m"
                    },
                    "lt": {},
                    "prod": {}
                }
            }
        },
        "AuditService": {
            "description": "Provides history of all management operations performed on cluster",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/AuditService",
            "java": "-Xms256M -Xmx256M -XX:MaxPermSize=128m",
            "server": "cssp-2.x",
            "autoStart": "06",
            "metaData": "killWarnings,isDataStore",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn.cisco.com/svn/csap/trunk/AuditService",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.csap:AuditService:1.3.3:war"
            },
            "version": {
                "1": {
                    "dev": {},
                    "stage": {
                        "java": "-Xms192M -Xmx192M -XX:MaxPermSize=128m"
                    },
                    "lt": {},
                    "prod": {}
                }
            }
        },
        "SchedulerSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms128M -Xmx128M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/irdraft/trunk/SchedulerSvc",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.ir:SchedulerSvc:1.0.0-SNAPSHOT:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "AlertsService": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms2048M -Xmx2048M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/AlertsService",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {},
                "1": {}
            }
        },
        "ProcesslogSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms512M -Xmx512M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/ProcesslogSvc",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "DseService": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms512M -Xmx512M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/DseService",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "IrAlertsService": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms1024M -Xmx1024M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/ir_sedraft/branches/IR_2_6_SE_1_0_PROD_BRANCH/sodcSvcs/IrAlertsService",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH"
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "PrfService": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms640M -Xmx640M -DIR_ENV_VARIABLE=CstgIr!99 -javaagent:$STAGING/mavenRepo/org/springframework/spring-instrument/3.0.1.RELEASE/spring-instrument-3.0.1.RELEASE.jar",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/PrfService",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "OlrService": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms1024M -Xmx1024M -DIR_ENV_VARIABLE=CstgIr!99 -Djava.awt.headless=true  -DnoTomcatVersion",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/OlrService",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "SnpidService": {
            "description": "Serial Number Assessment Service",
            "docUrl": "http://collaboratory.cisco.com/confluence/display/CAWIKI/SNAS+CSO+Arch+Overview",
            "autoStart": "55",
            "java": "-Xms512M -Xmx512M",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ca/csp/cso/snas/SnpidService",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "ExporterService": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms256M -Xmx256M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/ExporterService",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "ExtSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms1024M -Xmx1024M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/ExtSvc",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "IDPSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms512M -Xmx512M -DIR_ENV_VARIABLE=CstgIr!99 -DnoTomcatVersion",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/IDPSvc",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "IpeSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms256M -Xmx256M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/IpeSvc",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "IrMpcSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms512M -Xmx512M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/IrMpcSvc",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "IrOvSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms1024M -Xmx1024M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/IrOvSvc",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {
                    "dev": {}
                }
            }
        },
        "MailerSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms256M -Xmx256M -DIR_ENV_VARIABLE=CstgIr!99",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/MailerSvc",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.ir:MailerSvc:2.6.0-SNAPSHOT:war"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {}
            }
        },
        "SnpidRefreshTool": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wwwin-tools.cisco.com/dir/reports/viveksh2",
            "autoStart": "55",
            "java": "-Xms512M -Xmx512M",
            "osProcessPriority": "0",
            "server": "tomcat7.x",
            "source": {
                "scm": "cvs",
                "path": "Applications/ir/sodcSvcs/SnpidRefreshTool",
                "branch": "IR_2_6_SE_1_0_PROD_BRANCH "
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "0": {},
                "1": {}
            }
        },
        "SonarQubeSvc": {
            "description": "Enter a description. Default jvm is ServletSample. Clicking in UI will lauch sample docUrl for CsAgent",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/CsAgent",
            "autoStart": "55",
            "java": "-Xms512M -Xmx512M",
            "osProcessPriority": "0",
            "server": "cssp-1.x",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/client/samples/Servlet3Sample",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.cssp:Servlet3Sample:1.0.0rc1:war"
            },
            "version": {
                "1": {}
            }
        },
        "Cssp1Sample": {
            "description": "Provides reference implementation for engineering, along with core platform regression tests.",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/Code+Samples",
            "cookieName": "csapTestCookieName",
            "cookiePath": "/",
            "cookieDomain": ".cisco.com",
            "context": "csspSample",
            "autoStart": "50",
            "java": "-XX:-UseSplitVerifier  -Xms128M -Xmx133M -XX:MaxPermSize=128m",
            "server": "cssp-1.x",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/client/samples/CsspSampleJms",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.cssp:CsspSampleJms:1.0.25:war"
            },
            "version": {
                "1": {
                    "dev": {},
                    "stage": {
                        "java": "-Xms192M -Xmx192M -XX:MaxPermSize=128m",
                        "maven": {
                            "dependency": "com.cisco.cssp:CsspSampleJms:1.0.23:war"
                        }
                    },
                    "lt": {},
                    "prod": {}
                }
            },
            "metaData": "secure,exportWeb"
        }
    },
    "osProcesses": {
        "httpd": {
            "description": "httpd includes modjk for routing to services.  It will use the $STAGING/httpConf files without the *Export*",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/Httpd+Wrapper",
            "url": "http://$host.cisco.com:8080/server-status,http://$host.cisco.com:8080/status,http://$host.cisco.com:8080",
            "autoStart": "05",
            "propDirectory": "/apps/ir/processing/csap/staging/httpdConf",
            "deployTimeoutMinutes": "10",
            "port": "8080",
            "server": "wrapper",
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/irdraft/trunk/IrHttpdWrapper",
                "branch": "HEAD"
            },
            "maven": {
                "dependency": "com.cisco.ir.web:IrHttpdWrapper:2.4.6.8-SNAPSHOT:zip"
            },
            "version": {
                "1": {
                    "dev": {},
                    "stage": {},
                    "lt": {},
                    "prod": {}
                },
                "2": {
                    "dev": {},
                    "stage": {},
                    "lt": {},
                    "prod": {}
                }
            },
            "processFilter": ".*httpd_8080.*httpd.*",
            "jmxPort": "-1",
            "metaData": "skipJmxCollection,killWarnings,generateWorkerProperties",
            "osProcessPriority": "-12"
        },
        "vmmemctl": {
            "description": "Test Of Os Wrapper. VM memory controller",
            "docUrl": "http://pubs.vmware.com/vsphere-4-esx-vcenter/index.jsp?topic=/com.vmware.vsphere.resourcemanagement.doc_41/managing_memory_resources/c_memory_balloon_driver.html",
            "autoStart": "12",
            "url": "http://pubs.vmware.com/vsphere-4-esx-vcenter/index.jsp?topic=/com.vmware.vsphere.resourcemanagement.doc_41/managing_memory_resources/c_memory_balloon_driver.html",
            "port": "1212",
            "scmVersion": "Redhat 5.5",
            "user": "root",
            "disk": "sda1",
            "server": "os",
            "metaData": "skipJmxCollection",
            "logDirectory": "/var/logs",
            "logRegEx": ".*\\.log",
            "propDirectory": "/",
            "maven": {
                "dependency": "com.cisco.cssp:dummy:5.6.0:zip"
            },
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/smartservices/coreservices/trunk/cssp/dummy",
                "branch": "HEAD"
            },
            "version": {
                "1": {}
            },
            "processFilter": ".*vmmemctl.*",
            "jmxPort": "-1"
        },
        "jmeter": {
            "description": "Used to show maven consumption, including jmeter plugin",
            "docUrl": "http://wikicentral.cisco.com/display/SFAECSAP/JVM+Tuning+and+Testing",
            "autoStart": "40",
            "url": "http://wikicentral.cisco.com/display/SFAECSAP/JVM+Tuning+and+Testing",
            "port": "1213",
            "scmVersion": "Redhat 5.5",
            "user": "root",
            "disk": "sda1",
            "server": "os",
            "metaData": "skipJmxCollection",
            "logDirectory": "/var/logs",
            "logRegEx": ".*\\.log",
            "propDirectory": "/",
            "maven": {
                "dependency": "com.cisco.cssp:dummy:5.6.0:zip"
            },
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/smartservices/coreservices/trunk/cssp/dummy",
                "branch": "HEAD"
            },
            "version": {
                "1": {}
            },
            "processFilter": ".*maven.*",
            "jmxPort": "-1"
        },
        "oracleDriver": {
            "description": "Oracle 64 bit driver and generate TNS Entries",
            "docUrl": "http://iwe.cisco.com/web/dtandon",
            "autoStart": "03",
            "url": "http://www.oracle.com/technetwork/database/features/instant-client/index.html",
            "port": "1521",
            "scmVersion": "none",
            "user": "iradmin",
            "disk": "someOsDiskName",
            "server": "wrapper",
            "metaData": "isScript",
            "logDirectory": "/apps/ir/processing/csap/oracleInstant64_11_2",
            "propDirectory": "/apps/ir/processing/csap/oracleInstant64_11_2",
            "maven": {
                "dependency": "com.cisco.ir:OracleDriver:11.2.0.3.1-SNAPSHOT:zip"
            },
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/irdraft/trunk/OracleDriver",
                "branch": "HEAD"
            },
            "version": {
                "0": {},
                "1": {}
            }
        },
        "jdk": {
            "description": "Oracle JDK",
            "docUrl": "http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html",
            "autoStart": "02",
            "url": "http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html",
            "port": "7999",
            "scmVersion": "none",
            "user": "iradmin",
            "disk": "/apps/ir/processing/csap/java",
            "server": "wrapper",
            "metaData": "isScript",
            "logDirectory": "/apps/ir/processing/csap/java",
            "propDirectory": "/apps/ir/processing/csap/java",
            "maven": {
                "dependency": "com.cisco.csap:JavaDevKitPackage:7u45.1-SNAPSHOT:zip"
            },
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/JavaDevKitPackage",
                "branch": "HEAD"
            },
            "version": {
                "0": {
                    "dev": {}
                },
                "1": {}
            },
            "jmxPort": "-1"
        },
        "RedHatLinux": {
            "description": "RedHat Linux",
            "docUrl": "http://www.redhat.com/products/enterprise-linux/server/",
            "autoStart": "01",
            "url": "http://$host.cisco.com:8011/CsAgent/ui/getStats",
            "port": "7997",
            "scmVersion": "none",
            "user": "ssadmin",
            "disk": "/home/ssadmin",
            "server": "wrapper",
            "metaData": "isScript",
            "logDirectory": "/opt/java",
            "propDirectory": "/opt/java",
            "maven": {
                "dependency": "com.cisco.csap:RedHatLinux:1.0.0:zip"
            },
            "source": {
                "scm": "svn",
                "path": "http://savi-svn/svn/csap/trunk/RedHatLinux",
                "branch": "HEAD"
            },
            "version": {
                "0": {},
                "1": {}
            },
            "jmxPort": "-1"
        }
    }
}