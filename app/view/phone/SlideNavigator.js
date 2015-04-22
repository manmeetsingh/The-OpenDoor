Ext.define("TheOpenDoor.view.phone.SlideNavigator", {
	extend: 'Ext.ux.slidenavigation.View',
	requires: [
	    'Ext.Container',
	    'Ext.MessageBox',
	    'Ext.Panel',
	    'Ext.Toolbar',
	    'Ext.ux.slidenavigation.View',
	    'Ext.event.publisher.Dom',
	],
	           slideNavigatorItemArray : [],
	           config: {
	        	   fullscreen: true,
	        	   slideSelector: false,
	        	   containerSlideDelay: 10,
	        	   selectSlideDuration: 200,
	        	   itemMask: true,
	        	   layout : 'fit',
	        	   slideButtonDefaults: {
	        		   selector: 'toolbar'
	        	   },
	        	   cls: 'slider-cls',
	        	   list: {
	        		   maxDrag: 250,
	        		   width: 250,

	        		   items: [{
	        			   xtype: 'toolbar',
	        			   itemId: 'sliderToolbar',
	        			   docked: 'top',
	        			   ui: 'plain',  
	        			   cls: 'slide-navigator-toolbar',
	        			   html: 'MyMaid'
	        		   }]

	        	   },

	        	   listPosition: 'left',

	        	   items: []
	           },
	           
	           initialize: function(){
	        	   
	        	   var me = this;
	        	   
	        	   me.slideNavigatorItemArray = [{
	        		   
	        		   title : 'DashBoard',
	        		   titlename : 'DashBoard',
	        		   slideButton: true,
	        		   cls: 'newUI-header-style',
	        		   items: [{
	        			   xtype: 'toolbar',
	        			   docked: 'top',
	        			   title: 'DashBoard',
	        			   cls: 'home-slider-toolbar',
	        			   ui:'null'
	        		   },{
	        			   xtype: 'DashboardView',
	        			   maskOnOpen: true
	        		   }]
	        	   },{
	        		   title : 'LOG OUT',
	        		   titlename : 'logout',
	        		   slideButton: true,
	        		   handler: function() {
	        			   var me = this;
	        			   Ext.Msg.confirm('', 'Are you sure you want to logout?',  function(btn,text)
	        				{
	        				   if(btn === 'yes')
	        				   {
	        					   this.fireEvent('logoutyes', this);
	        				   }else{
	        					   this.fireEvent('logoutno', this);
	        				   }
	        				}, this);	        			   
	        		   }
	        	   }];
	    
	        	   
	        	   me.addItems(me.slideNavigatorItemArray);
	        	   
	        	   me.callParent();
	           }
});