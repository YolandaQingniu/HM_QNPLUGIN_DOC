# QNHeightScalePlugin

身高秤设备管理

## 成员变量

| 名称             | 类型                                                                          | 描述    |
|----------------|-----------------------------------------------------------------------------|-------|
| dataListener   | [QNHeightScaleDataListener](Listener/QNHeightScaleDataListener.md)  &#124; undefined    | 数据监听器 |
| scanListener   | [QNHeightScaleScanListener](Listener/QNHeightScaleScanListener.md) &#124; undefined     | 扫描监听器 |
| statusListener | [QNHeightScaleStatusListener](Listener/QNHeightScaleStatusListener.md) &#124; undefined | 状态监听器 |

## API

### initPlugin

初始化 QNHeightScalePlugin

##### 参数

| 名称     | 类型                                  | 说明    |
|:-------|:------------------------------------|:------|
| plugin | [QNPlugin](../QNPlugin/QNPlugin.md) | 基础管理类 |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#初始化相关)

### connectDevice

连接设备

##### 参数

| 名称      | 类型                                              | 说明    |
|:--------|:------------------------------------------------|:------|
| device  | [QNHeightScaleDevice](Model/QNHeightScaleDevice.md)   | 身高秤设备 |
| operate | [QNHeightScaleOperate](Model/QNHeightScaleOperate.md) | 设置项   |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#设备相关)

### cancelConnectDevice

断开设备连接

##### 参数

| 名称     | 类型                                         | 说明    |
|:-------|:-------------------------------------------|:------|
| device | [QNHeightScaleDevice](Model/QNHeightScaleDevice.md) | 身高秤设备 |

### getWeightLb

单位转换（kg ==> lb）

##### 参数

| 名称     | 类型     | 说明                                    |
|:-------|:-------|:--------------------------------------|
| weight | string | 测量数据返回的[weight](Model/QNHeightScaleData.md)字符串 |

##### 返回值

| 类型     | 说明                  |
|:-------|:--------------------|
| string | 对应lb单位数值的字符串,一位有效数字 |

### getWeightJin

单位转换（kg ==> 斤）

##### 参数

| 名称     | 类型     | 说明                                    |
|:-------|:-------|:--------------------------------------|
| weight | string | 测量数据返回的[weight](Model/QNHeightScaleData.md)字符串 |

##### 返回值

| 类型     | 说明                 |
|:-------|:-------------------|
| string | 对应斤单位数值的字符串,一位有效数字 |

### getWeightStLb

单位转换（kg ==> st:lb）

##### 参数

| 名称     | 类型     | 说明                                    |
|:-------|:-------|:--------------------------------------|
| weight | string | 测量数据返回的[weight](Model/QNHeightScaleData.md)字符串 |

##### 返回值

| 类型         | 说明                                                |
|:-----------|:--------------------------------------------------|
| string [ ] | \[0] 对应St单位数值的字符串 ，整形 ； \[1] 对应Lb单位数值的字符串， 一位有效数字 |

### getWeightSt

单位转换（kg ==> st）

##### 参数

| 名称     | 类型     | 说明                                    |
|:-------|:-------|:--------------------------------------|
| weight | string | 测量数据返回的[weight](Model/QNHeightScaleData.md)字符串 |

##### 返回值

| 类型     | 说明                  |
|:-------|:--------------------|
| string | 对应st单位数值的字符串,两位有效数字 |

### getLengthFtIn

单位转换（kg ==> ft:in）

##### 参数

| 名称     | 类型     | 说明                                    |
|:-------|:-------|:--------------------------------------|
| height | string | 测量数据返回的[height](Model/QNHeightScaleData.md)字符串 |

##### 返回值

| 类型         | 说明                                                 |
|:-----------|:---------------------------------------------------|
| string [ ] | \[0]  对应Ft单位数值的字符串 ，整形 ； \[1] 对应In单位数值的字符串， 一位有效数字 |

### getHeightIn

单位转换（kg ==> in）

##### 参数

| 名称     | 类型     | 说明                                    |
|:-------|:-------|:--------------------------------------|
| height | string | 测量数据返回的[height](Model/QNHeightScaleData.md)字符串 |

##### 返回值

| 类型     | 说明                  |
|:-------|:--------------------|
| string | 对应In单位数值的字符串,一位有效数字 |

### getHeightFt

单位转换（kg ==> ft）

##### 参数

| 名称     | 类型     | 说明                                    |
|:-------|:-------|:--------------------------------------|
| height | string | 测量数据返回的[height](Model/QNHeightScaleData.md)字符串 |

##### 返回值

| 类型     | 说明                  |
|:-------|:--------------------|
| string | 对应Ft单位数值的字符串,两位有效数字 |

### setDeviceConfig

设置身高秤的秤端设置参数

##### 参数

| 名称         | 类型                                         | 说明    |
|:-----------|:-------------------------------------------|:------|
| device     | [QNHeightScaleDevice](Model/QNHeightScaleDevice.md) | 身高秤设备 |
| weightUnit | [QNHwWeightUnit](Model/QNHeightScaleOperate.md)     | 重量单位  |
| heightUnit | [QNHwLengthUnit](Model/QNHeightScaleOperate.md)     | 身高单位  |

##### 返回值

类型：[number 详情见状态码列表](../Code.md#设备相关)

### setMeasureUser

设置测量用户相关信息

##### 参数

| 名称     | 类型                                            | 说明    |
|:-------|:----------------------------------------------|:------|
| device | [QNHeightScaleDevice](Model/QNHeightScaleDevice.md) | 身高秤设备 |
| user   | [QNHeightUser](Model/QNHeightUser.md)               | 用户信息  |

##### 返回值

类型：[number 详情见状态码列表](../Code.md)