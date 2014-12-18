	Ext.define('code.ux.myWind2',{
				extend:'Ext.window.Window',
				title:"define-create myWin",
				height : 200,
			    width : 400,
			    config:{
			    	price:500
			    },
			    
			    
				initComponent: function() {
					//this.title='init title';
					this.callParent();
				}
				
			});