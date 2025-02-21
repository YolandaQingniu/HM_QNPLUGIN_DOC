# QNHeightScaleDataListener

设备数据监听器，用于监听回调设备测量数据；

## API

### onGetRealTimeWeight

设备实时体重回调

##### 参数

| 名称     | 类型                                         | 说明      |
|:-------|:-------------------------------------------|:--------|
| weight | string                                     | 体重，单位kg |
| device | [QNHeightScaleDevice](QNHeightScaleDevice) | 身高秤设备 |

### onGetRealTimeHeight

设备实时身高回调

##### 参数

| 名称     | 类型                                         | 说明      |
|:-------|:-------------------------------------------|:--------|
| height | string                                     | 身高，单位cm |
| device | [QNHeightScaleDevice](QNHeightScaleDevice) | 身高秤设备 |

### onGetMeasureResultData

设备测量完成结果数据回调

##### 参数

| 名称     | 类型                                         | 说明      |
|:-------|:-------------------------------------------|:--------|
| data   | [QNHeightScaleData](QNHeightScaleData)     | 测量数据    |
| device | [QNHeightScaleDevice](QNHeightScaleDevice) | 身高秤设备 |

### onMeasureFail

测量失败

##### 参数

| 名称     | 类型                                         | 说明      |
|:-------|:-------------------------------------------|:--------|
| device | [QNHeightScaleDevice](QNHeightScaleDevice) | 身高秤设备 |

### onGetStoredData

设备收到存储数据列表回调

##### 参数

| 名称             | 类型                                         | 说明      |
|:---------------|:-------------------------------------------|:--------|
| storedDataList | [QNHeightScaleData](QNHeightScaleData)[]   | 存储数据列表  |
| device         | [QNHeightScaleDevice](QNHeightScaleDevice) | 身高秤设备 |