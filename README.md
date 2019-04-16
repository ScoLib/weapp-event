# weapp-event

## 安装

```sh
npm i weapp-event -S
```



## 使用

### 实例初始化


> 把实例挂载在 App 中，方便每个 Page 去调用

```js
// app.js
import Event from 'weapp-event'
App({
    event: Event,
    ...
})
```



### 监听事件

```js
//page.js
var app = getApp()
Page({
    onLoad: function(){
        app.event.on('do-foo', this, this.doFoo)
    },
    doFoo: function(id) {
        ...
    },
    ...
})
```



### 触发事件

```js
//order_detail.js
var app = getApp()
Page({
    doSomething: function() {
        ... 
        app.event.emit('do-foo', 123)
    },
    ...
})
```



### 注销事件

```js
var app = getApp()

Page({
    onUnload: function(){
        // remove all
        app.event.off()
        // remove all callbacks
        app.event.off('do-foo')
        // remove specific callbacks
        app.event.off('do-foo', this)
    },
    ...
})
```

