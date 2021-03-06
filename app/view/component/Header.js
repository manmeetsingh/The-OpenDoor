
Ext.define('TheOpenDoor.view.component.Header',{
	extend : 'Ext.Panel',
	xtype : 'headerPanel',
	requires : ['Ext.TitleBar'],
	config : {
		title : '',
		useBackButton : false,
        useNextButton : false,
		ui: 'plain',
        layout: {
            type: 'hbox',
            docked: 'top',
            pack: 'stretch'
        },
        items: [{
            xtype: 'titlebar',
            itemId: 'headerTitleBar',
            cls: 'common-header-background',
            items: [{
                xtype: 'button',
                ui: 'plain',
                itemId : 'backButtonId',
                iconCls: 'header-back',
                iconMask: true,
                align : 'left',
                cls: '',
                hidden : true			
	        },{
                xtype: 'button',
                ui: 'plain',
                itemId : 'nextButtonId',
                iconCls: 'header-next',
                iconMask: true,
                align : 'right',
                cls: '',
                hidden : true
            }]
        }]
    },


	/**
     * @method applyTitle
     * Set the title in the header panel
     * @param title
     */
	applyTitle : function(title) {
		this.down('titlebar').setTitle(title);
	},
    /**
     * @method initialize
     * it will initialize the header panel and will check for types of fields
     * to be displayed
     */
    initialize: function () {

        var me = this;
        me.callParent();

        useBackButton = me.getUseBackButton();
        useNextButton = me.getUseNextButton();
        if (useBackButton) {
            this.down('#backButtonId').show();
        }
        if(useNextButton) {
            this.down('#nextButtonId').show();
        }
    }
});