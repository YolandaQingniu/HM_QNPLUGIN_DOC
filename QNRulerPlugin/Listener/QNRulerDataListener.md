# QNRulerDataListener

设备数据监听器，用于监听回调设备测量数据；

## API

### onGetRealTimeData

设备实时测量数据回调

##### 参数

| 名称     | 类型                                | 说明      |
|:-------|:----------------------------------|:--------|
| data   | [QNRulerData](../Model/QNRulerData.md)     | 围度尺测量数据 |
| device | [QNRulerDevice](../Model/QNRulerDevice.md) | 围度尺设备   |

### onGetMeasureResultData

设备测量结果数据回调

##### 参数

| 名称     | 类型                                | 说明      |
|:-------|:----------------------------------|:--------|
| data   | [QNRulerData](../Model/QNRulerData.md)     | 围度尺测量数据 |
| device | [QNRulerDevice](../Model/QNRulerDevice.md) | 围度尺设备   |