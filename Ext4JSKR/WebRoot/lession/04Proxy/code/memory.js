(function(){
	Ext.onReady(function(){
		//创建模型
		Ext.regModel('user',{
			fields:[
				{name:'name',type:'string'},
				{name:'age',type:'int'}
			]
		});
		
		//数据数组
		var userDate=[
			{name:'lily',age:1},
			{name:'lilei',age:23}
		];
		
		//创建model代理类
		var memoryProxy = Ext.create('Ext.data.proxy.Memory',{
			data:userDate,
			model:'user'
		});
		
		userDate.push({name:'小李',age:49});
		//更新
		memoryProxy.update(new Ext.data.Operation({
			action:'update',
			data:userDate
		}),function(result){
		},this);
		
		//crud操作,读取
		memoryProxy.read(new Ext.data.Operation(),function(result){
			var datas=result.resultSet.records;
			Ext.Array.each(datas,function(v){
				alert(v.get('name'));
				
			});
		});
		
		
		
	
		
		
	});
})();