# QNKitchenScalePlugin

厨房秤设备管理

## 成员变量

| 名称             | 类型                                                                                       | 描述    |
|----------------|------------------------------------------------------------------------------------------|-------|
| dataListener   | [QNKitchenScaleDataListener](Listener/QNKitchenScaleDataListener.md) &#124; undefined    | 数据监听器 |
| scanListener   | [QNKitchenScaleScanListener](Listener/QNKitchenScaleScanListener.md) &#124; undefined    | 扫描监听器 |
| statusListener | [QNKitchenScaleStatusListener](Listener/QNKitchenScaleStatusListener.md)&#124; undefined | 状态监听器 |

## API

### initPlugin

初始化 QNKitchenScalePlugin

##### 参数

| 名称     | 类型                                  |   | 说明    |
|:-------|:------------------------------------|---|:------|
| plugin | [QNPlugin](../QNPlugin/QNPlugin.md) |   | 基础管理类 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### connectDevice

连接设备

##### 参数

| 名称      | 类型                                                      | 说明    |
|:--------|:--------------------------------------------------------|:------|
| device  | [QNKitchenScaleDevice](Model/QNKitchenScaleDevice.md)   | 厨房秤设备 |
| operate | [QNKitchenScaleOperate](Model/QNKitchenScaleOperate.md) | 设置项   |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#设备相关)

### cancelConnectDevice

断开设备连接

##### 参数

| 名称     | 类型                                                    | 说明    |
|:-------|:------------------------------------------------------|:------|
| device | [QNKitchenScaleDevice](Model/QNKitchenScaleDevice.md) | 厨房秤设备 |

### setDeviceUnit

设置设备单位

##### 参数

| 名称         | 类型                                                    | 说明    |
|:-----------|:------------------------------------------------------|:------|
| device     | [QNKitchenScaleDevice](Model/QNKitchenScaleDevice.md) | 厨房秤设备 |
| weightUnit | [QNKitchenScaleUnit](Constant/QNKitchenScaleUnit.md)  | 重量单位  |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### setDeviceShelling

设置设备秤端去皮

##### 参数

| 名称     | 类型                                                    | 说明    |
|:-------|:------------------------------------------------------|:------|
| device | [QNKitchenScaleDevice](Model/QNKitchenScaleDevice.md) | 厨房秤设备 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### setDeviceShutDown

设置设备称端关机

##### 参数

| 名称     | 类型                                                    | 说明    |
|:-------|:------------------------------------------------------|:------|
| device | [QNKitchenScaleDevice](Model/QNKitchenScaleDevice.md) | 厨房秤设备 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### setDeviceStandbyTime

设置设备亮屏时长

##### 参数

| 名称          | 类型                                                                                           | 说明    |
|:------------|:---------------------------------------------------------------------------------------------|:------|
| standbyTime | [QNKitchenScaleStandbyTimeType](Model/QNKitchenScaleDevice.md#QNKitchenScaleStandbyTimeType) | 亮屏时长  |
| device      | [QNKitchenScaleDevice](Model/QNKitchenScaleDevice.md)                                        | 厨房秤设备 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### getWeightMl

单位转换（g ==> ml）

##### 参数

| 名称         | 类型                                                                                 | 说明                                              |
|:-----------|:-----------------------------------------------------------------------------------|:------------------------------------------------|
| weight     | string                                                                             | 测量数据返回的[weight](Model/QNKitchenScaleData.md)字符串 |
| numberType | [QNKitchenScaleNumberType](Model/QNKitchenScaleDevice.md#QNKitchenScaleNumberType) | 数据的精度类型                                         |

##### 返回值

| 类型     | 说明                           |
|:-------|:-----------------------------|
| string | ml单位数值的字符串，根据数据精度类型来决定保留几位小数 |

### getWeightMlMilk

单位转换（g ==> ml milk）

##### 参数

| 名称         | 类型                                                                                 | 说明                                              |
|:-----------|:-----------------------------------------------------------------------------------|:------------------------------------------------|
| weight     | string                                                                             | 测量数据返回的[weight](Model/QNKitchenScaleData.md)字符串 |
| numberType | [QNKitchenScaleNumberType](Model/QNKitchenScaleDevice.md#QNKitchenScaleNumberType) | 数据的精度类型                                         |

##### 返回值

| 类型     | 说明                                 |
|:-------|:-----------------------------------|
| string | ml milk 单位数值的字符串，根据数据精度类型来决定保留几位小数 |

### getWeightFlOz

单位转换（g ==> fl.oz）

##### 参数

| 名称         | 类型                                                                                 | 说明                                              |
|:-----------|:-----------------------------------------------------------------------------------|:------------------------------------------------|
| weight     | string                                                                             | 测量数据返回的[weight](Model/QNKitchenScaleData.md)字符串 |
| numberType | [QNKitchenScaleNumberType](Model/QNKitchenScaleDevice.md#QNKitchenScaleNumberType) | 数据的精度类型                                         |

##### 返回值

| 类型     | 说明                               |
|:-------|:---------------------------------|
| string | fl.oz 单位数值的字符串，根据数据精度类型来决定保留几位小数 |

### getWeightLbOz

单位转换（g ==> lb:oz）

##### 参数

| 名称         | 类型                                                                                 | 说明                                              |
|:-----------|:-----------------------------------------------------------------------------------|:------------------------------------------------|
| weight     | string                                                                             | 测量数据返回的[weight](Model/QNKitchenScaleData.md)字符串 |
| numberType | [QNKitchenScaleNumberType](Model/QNKitchenScaleDevice.md#QNKitchenScaleNumberType) | 数据的精度类型                                         |

##### 返回值

| 类型       | 说明                                                                           |
|:---------|:-----------------------------------------------------------------------------|
| string[] | lb:oz单位数值的字符串数组，\[0] 对应lb单位数值的字符串 ，整形 ； \[1] 对应oz单位数值的字符串， 根据数据精度类型来决定保留几位小数 |

