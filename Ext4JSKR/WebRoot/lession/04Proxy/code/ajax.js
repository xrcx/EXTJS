(function(){
	Ext.onReady(function(){
		Ext.regModel('user',{
			fields:[
				{name:'name',type:'string'}
			]
		});
		
		var ajaxProxy=new Ext.data.proxy.Ajax({
			url:'persion.jsp',
			model:'user',
			reader:'json',
			limitParam:'indexLimit'
		});
		
		ajaxProxy.doRequest(new Ext.data.Operation({
			action:'read',
			limit:3,
			start:1,
			sorters:[
				new Ext.util.Sorter({
					property:'name',
					direction:'asc'
				})
			]
		}),function(o){
			
			var test=o.response.responseText;
			alert(Ext.JSON.decode(test).name);
		})
	});
})();