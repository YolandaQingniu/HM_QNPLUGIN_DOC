# QNKitchenScaleStatusListener

设备相关事件监听器

## API

### onConnected

设备连接成功回调

##### 参数

| 名称     | 类型                                                | 说明    |
|:-------|:--------------------------------------------------|:------|
| device | [QNKitchenScaleDevice](../Model/QNKitchenScaleDevice.md) | 厨房秤设备 |

### onConnectFailed

设备连接失败

##### 参数

| 名称     | 类型                                                | 说明    |
|:-------|:--------------------------------------------------|:------|
| device | [QNKitchenScaleDevice](../Model/QNKitchenScaleDevice.md) | 厨房秤设备 |

### onReadyInteractResult

设备是否允许交互的回调,当code == 0时，可以开始设置交互，否则即出现了异常

##### 参数

| 名称     | 类型                                              | 说明    |
|:-------|:------------------------------------------------|:------|
| code   | [number 详情见状态码列表](../../Code.md#设备相关)              | 状态码   |
| device | [QNKitchenScaleDevice](../Model/QNKitchenScaleDevice.md) | 厨房秤设备 |

### onDisconnected

设备已断开连接

##### 参数

| 名称     | 类型                                                | 说明    |
|:-------|:--------------------------------------------------|:------|
| device | [QNKitchenScaleDevice](../Model/QNKitchenScaleDevice.md) | 厨房秤设备 |