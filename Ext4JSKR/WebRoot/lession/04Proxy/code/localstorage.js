(function(){
	Ext.onReady(function(){
		//创建模型
		Ext.regModel('user',{
			fields:[
				{name:'name',type:'string'}
			],
			proxy:{
				//不同浏览器计数不一样，关闭浏览器继续累加，家庭电脑模式
			//	type:'localstorage',网吧模式
				
				//关闭浏览器，重新计数
				type:'sessionstorage',
				id:'twitter-Searches'
			}
		});
		
		var store=new Ext.data.Store({
			model:'user'
		});
	
		store.add({name:'王五',age:90});
		store.sync();
		
		store.load();
		var array=[];
		store.each(function(result){
			array.push(result.get('name'));
		});
		alert(array.join('\n'));
		
		
	});
})();