-----------------------------------------------
      www.uspcat.com      QQ群 179245118
-----------------------------------------------
数据代理proxy是进行数据读写的主要途径,通过代理操作数据进行CRUD
每一步操作全会得到唯一的Ext.data.Operation实例他包含了所有的请求参数
1.数据代理proxy目录结构
Ext.data.proxy.Proxy 代理类的根类(他分为客户端(Client)代理和服务器代理(Server))
	Ext.data.proxy.Client 客户端代理
		Ext.data.proxy.Memory 普通的内存代理 ----[重点]
		Ext.data.proxy.WebStorage 浏览器客户端存储代理
			Ext.data.proxy.SessionStorage 浏览器级别代理----[重点]
			Ext.data.proxy.LocalStorage 本地化的级别代理(不能夸浏览器)----[重点]
	Ext.data.proxy.Server 服务器端代理
		Ext.data.proxy.Ajax 异步加载的方式----[重点]
			Ext.data.proxy.Rest 一种特使的Ajax--[知道]
		Ext.data.proxy.JsonP 跨域交互的代理----[重点] 跨域是有严重的安全隐患的 extjs的跨域也是需要服务器端坐相应的配合
		Ext.data.proxy.Direct 命令.
		3+方式的代理



资料
REST指Representational State Transfer (有时写作"ReST")，表
示性状态转移，其要求无状态、客户端-服务器、具有缓存机制的通信协议——实际上是使用HTTP协议。
RESTful应用使用HTTP请求来POST数据（创建和/或更新）、读取数据（例如，进行查询）、删除数据。
这样，REST使用HTTP来进行CRUD（Create/Read/Update/Delete）操作