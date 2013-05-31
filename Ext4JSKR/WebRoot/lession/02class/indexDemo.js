(function() {
	//异步加载：空间
		Ext.Loader.setConfig({
		enabled:true,
		paths:{
			'myWind2':'./code/ux'
		}
	});
	
	Ext.onReady(function() {
		//用new创建对象
		Ext.get("bt1").on('click',function(){
			new Ext.window.Window({
							height : 200,
							width : 400,
							title : "new window"
			}).show();
		});
		
		//用create创建对象
		Ext.get("bt2").on('click',function(){
			Ext.create('Ext.window.Window',{
				height : 200,
			    width : 400,
				title : "creat window"
			}).show();
		});
		
		//设置别名
		Ext.get("bt3").on('click',function(){
			var o ={
				say:function(){
					Ext.MessageBox.alert("say hello");
				}
		    }
		    sayAlai=Ext.Function.alias(o,'say');
		    sayAlai();
		});
		
		
		//extend
		Ext.get("bt4").on('click',function(){
			Ext.define('myWind',{
				extend:'Ext.window.Window',
				title:"define-create myWin",
				height : 200,
			    width : 400,
				initComponent: function() {
					//this.title='init title';
					this.callParent();
				}
				
			});
			Ext.create('myWind',{
				title:"in create"
		    }).show();
		});
		
		
	    //myWind2.js在ux中
		Ext.get("bt5").on('click',function(){
		
			Ext.create('myWind2',{
				title:"in create"
		    }).show();
		});
		
		//异步加载
		//1.空间 2调用
		Ext.get("bt6").on('click',function(){
			
			Ext.create('code.ux.myWind2',{
				title:"load-requse",
				requires:['code.ux.myWind2']
		    }).show();
		  
		    
		});
	
		//自动get，set方法
		Ext.get("bt7").on('click',function(){
			
			var mv = Ext.create('code.ux.myWind2',{
				title:"load-requse",
				price:266,
				requires:['code.ux.myWind2']
		    });
		    alert(mv.getPrice());
		});
			
		Ext.get("bt8").on('click',function(){
			
			Ext.define('sing',{
				cansing:function(){
					alert("can sing");
				}
			});
			Ext.define('fly',{
				canfly:function(){
					alert("can fly");
				}
			});
			Ext.define('bird',{
				mixins:{
					sing:'sing',
					fly:'fly'
				}
			});
			
			Ext.create('bird',{}).canfly();
			Ext.create('bird',{}).cansing();
		});
	});
})();