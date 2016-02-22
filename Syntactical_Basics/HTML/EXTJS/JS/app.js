// Define the model for a State
Ext.regModel('ApplicationState', {
    fields: [
        {type: 'string', name: 'abbr'},
        {type: 'string', name: 'name'}

    ]
});

Ext.onReady(function(){



    var app_states = [
        {"abbr":"0","name":"RESUME NORMAL OPERATION"},
        {"abbr":"1","name":"NOTIFY COMPLETE DOWNTIME"},
        {"abbr":"2","name":"NOTIFY AN UPCOMING DOWNTIME OPERATION"}

    ]
// The data store holding the states
    var store = Ext.create('Ext.data.Store', {
        model: 'ApplicationState',
        data: app_states
    });


    var formPanel = Ext.create('Ext.form.Panel', {
        frame: true,
        title: 'Form Fields',
        //  anchor: '100%',
        //  height: '100%',
        layout: 'vbox',

        bodyPadding: 5,
        width:700,


        fieldDefaults: {
            labelAlign: 'centre',
            labelWidth: 90,
            width: 600,
            align : 'center'
//            anchor: '100%',

        },

        items: [
            {
                xtype:'combo',
                border :false,
                editable : false,
                fieldLabel: 'Application State',
                displayField: 'name',
                valueField: 'abbr',
                queryMode: 'local',
                itemId :'id_AttrCombo',
                store: store



            }
            ,  {
                xtype: 'textareafield',
                name: 'textarea1',
                fieldLabel: 'The Comments',
                value: 'Textarea value'

            }

            ,

            {
                xtype: 'datefield',
                name: 'date1',
                fieldLabel: 'Start Date'
            },{
                xtype: 'datefield',
                name: 'date1',
                fieldLabel: 'End Date'

            }

            , {
                xtype: 'timefield',
                name: 'time1',
                fieldLabel: 'Time Field',
                minValue: '1:30 AM',
                maxValue: '9:15 PM'
            }
        ],
        buttons: [{
            text: 'Save',
            handler: function() {
                this.up('form').getForm().isValid();
            }
        },{
            text: 'Cancel',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
    });

    formPanel.render('mytraditionalform');



});/**
 * Created by viveksh2 on 2/4/14.
 */
