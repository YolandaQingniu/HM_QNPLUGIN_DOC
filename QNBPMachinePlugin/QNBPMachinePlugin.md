# QNBPMachinePlugin

血压计设备管理

## 成员变量

| 名称             | 类型                                                                        | 描述      |
|----------------|---------------------------------------------------------------------------|---------|
| dataListener   | [QNBPMachineDataListener](Listener/QNBPMachineDataListener.md) &#124; undefined            | 数据监听器   |
| wifiListener   | [QNBPMachineWiFiListener](Listener/QNBPMachineWiFiListener.md) &#124; undefined    | 配网监听器 |
| scanListener   | [QNBPMachineScanListener](Listener/QNBPMachineScanListener.md) &#124; undefined    | 扫描监听器   |
| statusListener | [QNBPMachineStatusListener](Listener/QNBPMachineStatusListener.md)&#124; undefined | 状态监听器   |
| eventListener  | [QNBPMachineEventListener](Listener/QNBPMachineEventListener.md)&#124; undefined   | 事件监听器   |

## API

### initPlugin

初始化 QNBPMachinePlugin

##### 参数

| 名称     | 类型                                  | 说明    |
|:-------|:------------------------------------|:------|
| plugin | [QNPlugin](../QNPlugin/QNPlugin.md) | 基础管理类 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### connectDevice

连接设备

##### 参数

| 名称     | 类型                                        | 说明    |
|:-------|:------------------------------------------|:------|
| device | [QNBPMachineDevice](Model/QNBPMachineDevice.md) | 血压计设备 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#设备相关)

### cancelConnectDevice

断开设备连接

##### 参数

| 名称     | 类型                                        | 说明    |
|:-------|:------------------------------------------|:------|
| device | [QNBPMachineDevice](Model/QNBPMachineDevice.md) | 血压计设备 |

### startConnectWiFi

开始配置设备WiFi

##### 参数

| 名称       | 类型                                            | 说明     |
|:---------|:----------------------------------------------|:-------|
| device   | [QNBPMachineDevice](Model/QNBPMachineDevice.md)     | 血压计设备  |
| wifiInfo | [QNBPMachineWiFiInfo](Model/QNBPMachineWiFiInfo.md) | WiFi信息 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#wifi相关)

### scanNearbyWiFi

扫描附近WiFi

##### 参数

| 名称     | 类型                                        | 说明    |
|:-------|:------------------------------------------|:------|
| device | [QNBPMachineDevice](Model/QNBPMachineDevice.md) | 血压计设备 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#wifi相关)

### setDeviceFunction

设置设备功能

##### 参数

| 名称     | 类型                                        | 说明    |
|:-------|:------------------------------------------|:------|
| device | [QNBPMachineDevice](Model/QNBPMachineDevice.md) | 血压计设备 |
| deploy | [QNBPMachineDeploy](Model/QNBPMachineDeploy.md) | 功能配置项 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#设备相关)

### readStoredData

读取存储数据

##### 参数

| 名称     | 类型                                        | 说明    |
|:-------|:------------------------------------------|:------|
| device | [QNBPMachineDevice](Model/QNBPMachineDevice.md) | 血压计设备 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#设备相关)

