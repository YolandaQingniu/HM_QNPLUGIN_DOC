# QNBPMachineWiFiListener

设备配网监听器，用于监听回调设备配置WiFi状态

## API

### onStartWiFiConnect

开始为设备配置WiFi

##### 参数

| 名称     | 类型                                                 | 说明    |
|:-------|:---------------------------------------------------|:------|
| device | [QNBPMachineDevice](../Model/QNBPMachineDevice.md) | 血压计设备 |

### onConnectWiFiStatus

设备配置WiFi结果

##### 参数

| 名称     | 类型                                                 | 说明    |
|:-------|:---------------------------------------------------|:------|
| code   | [number 详情见状态码列表](../../Code.md#wifi相关)            | 状态码   |
| device | [QNBPMachineDevice](../Model/QNBPMachineDevice.md) | 血压计设备 |

### onDiscoveryNearbyWiFi

发现附近WiFi

##### 参数

| 名称     | 类型                                                 | 说明       |
|:-------|:---------------------------------------------------|:---------|
| ssid   | string                                             | WiFi名称   |
| rssi   | number                                             | WiFi信号强度 |
| device | [QNBPMachineDevice](../Model/QNBPMachineDevice.md) | 血压计设备    |