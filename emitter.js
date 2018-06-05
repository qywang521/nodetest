const events=require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var pushHandler = function connected() {
  console.log('推送成功');
}

// 绑定 connection 事件处理程序
eventEmitter.addListener('push', pushHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('datareceived', function(){
   console.log('数据接收成功。');
   eventEmitter.emit('push');
});

// 触发 connection 事件 
eventEmitter.emit('datareceived');

console.log("程序执行完毕。");