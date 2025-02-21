# QNBPMachineDataListener

设备数据监听器，用于监听回调设备测量数据；

## API

### onGetMeasureResult

设备实时测量完成结果回调

##### 参数

| 名称            | 类型                                                                  | 说明                       |
|:--------------|:--------------------------------------------------------------------|:-------------------------|
| measureResult | [QNBPMachineMeasureResult](../Constant/QNBPMachineMeasureResult.md) | 本次测量结果状态                 |
| data          | [QNBPMachineData](../Model/QNBPMachineData.md) &#124; undefined     | 测量数据结果, 当测量失败时 data为undefined |
| device        | [QNBPMachineDevice](../Model/QNBPMachineDevice.md)                  | 血压计设备                    |

### onGetStoredData

设备收到存储数据回调

##### 参数

| 名称     | 类型                                          | 说明     |
|:-------|:--------------------------------------------|:-------|
| data   | [QNBPMachineData](../Model/QNBPMachineData.md)     | 存储数据结果 |
| device | [QNBPMachineDevice](../Model/QNBPMachineDevice.md) | 血压计设备  |
