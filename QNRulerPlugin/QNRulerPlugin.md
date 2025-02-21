# QNRulerPlugin

围度尺设备管理

## 成员变量

| 名称             | 类型                                                                | 描述    |
|----------------|-------------------------------------------------------------------|-------|
| dataListener   | [QNRulerDataListener](Listener/QNRulerDataListener.md) &#124; undefined    | 数据监听器 |
| scanListener   | [QNRulerScanListener](Listener/QNRulerScanListener.md) &#124; undefined    | 扫描监听器 |
| statusListener | [QNRulerStatusListener](Listener/QNRulerStatusListener.md)&#124; undefined | 状态监听器 |

## API

### initPlugin

初始化 QNRulerPlugin

##### 参数

| 名称     | 类型                                  | 说明    |
|:-------|:------------------------------------|:------|
| plugin | [QNPlugin](../QNPlugin/QNPlugin.md) | 基础管理类 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### connectDevice

连接设备

##### 参数

| 名称     | 类型                                | 说明    |
|:-------|:----------------------------------|:------|
| device | [QNRulerDevice](Model/QNRulerDevice.md) | 围度尺设备 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### cancelConnectDevice

断开设备连接

##### 参数

| 名称     | 类型                                | 说明    |
|:-------|:----------------------------------|:------|
| device | [QNRulerDevice](Model/QNRulerDevice.md) | 围度尺设备 |
