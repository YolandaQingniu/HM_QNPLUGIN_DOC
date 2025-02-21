# QNKitchenScaleDevice

厨房秤设备

#### 成员变量

| 名称       | 类型     | 描述     |
|----------|--------|--------|
| bleName  | string | 蓝牙名    |
| mac      | string | mac地址  |
| modelId  | string | 设备类型标识 |
| model    | string | 设备显示型号 |
| rssi     | number | 信号强度   |
| scaleVer | string | 硬件版本   |
| bleVer   | string | 软件版本   |

### isSupportShelling

获取设备是否支持去皮

##### 返回值

| 类型      | 描述     |
|---------|--------|
| boolean | 是否支持去皮 |

### isSupportSetStandbyTime

获取设备是否支持设置待机时长

##### 返回值

| 类型      | 描述         |
|---------|------------|
| boolean | 是否支持设置待机时长 |

### getStandbyTime

获取设备待机时长

##### 返回值

| 类型                                                                                             | 描述                         |
|------------------------------------------------------------------------------------------------|----------------------------|
| [QNKitchenScaleStandbyTimeType](../Constant/QNKitchenScaleStandbyTimeType.md) &#124; undefined | 待机时长,如果设备不支持获取，返回undefined |

### getRangeType

获取设备量程

##### 返回值

| 类型                                                                | 描述   |
|-------------------------------------------------------------------|------|
| [QNKitchenScaleRangeType](../Constant/QNKitchenScaleRangeType.md) | 设备量程 |

### getSupportUnitList

获取设备前支持单位列表

##### 返回值

| 类型                                                                 | 描述                                |
|--------------------------------------------------------------------|-----------------------------------|
| ArrayList<[QNKitchenScaleUnit](../Constant/QNKitchenScaleUnit.md)> | 当前支持单位列表 数组长度为零时，代表当前设备无法读取支持单位列表 |
