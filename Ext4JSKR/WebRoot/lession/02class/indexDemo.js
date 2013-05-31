(function() {
	//�첽���أ��ռ�
		Ext.Loader.setConfig({
		enabled:true,
		paths:{
			'myWind2':'./code/ux'
		}
	});
	
	Ext.onReady(function() {
		//��new��������
		Ext.get("bt1").on('click',function(){
			new Ext.window.Window({
							height : 200,
							width : 400,
							title : "new window"
			}).show();
		});
		
		//��create��������
		Ext.get("bt2").on('click',function(){
			Ext.create('Ext.window.Window',{
				height : 200,
			    width : 400,
				title : "creat window"
			}).show();
		});
		
		//���ñ���
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
		
		
	    //myWind2.js��ux��
		Ext.get("bt5").on('click',function(){
		
			Ext.create('myWind2',{
				title:"in create"
		    }).show();
		});
		
		//�첽����
		//1.�ռ� 2����
		Ext.get("bt6").on('click',function(){
			
			Ext.create('code.ux.myWind2',{
				title:"load-requse",
				requires:['code.ux.myWind2']
		    }).show();
		  
		    
		});
	
		//�Զ�get��set����
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