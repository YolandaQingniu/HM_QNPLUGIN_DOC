# QNBPMachineDevice

血压计设备

#### 成员变量

| 名称      | 类型     | 描述     |
|---------|--------|--------|
| bleName | string | 蓝牙名    |
| mac     | string | mac地址  |
| modelId | string | 设备类型标识 |
| model   | string | 设备显示型号 |
| rssi    | number | 信号强度   |
| protVer | number | 协议版本   |
| hemVer  | number | 血压计版本  |
| bleVer  | number | 蓝牙版本   |

### isSupportWiFi

获取设备是否支持WiFi功能

##### 返回值

| 类型      | 描述         |
|---------|------------|
| boolean | 是否支持WiFi功能 |

### isSupportChangeLanguage

获取设备是否支持语言切换功能(需在设备允许交互后调用有效)

##### 返回值

| 类型      | 描述         |
|---------|------------|
| boolean | 是否支持语言切换功能 |

### isSupportChargeBattery

获取设备是否支持充电功能(需在设备允许交互后调用有效)

##### 返回值

| 类型      | 描述       |
|---------|----------|
| boolean | 是否支持充电功能 |

### getCurrentUnit

获取设备当前单位(需在设备允许交互后调用有效)

##### 返回值

| 类型                                                | 描述 |
|---------------------------------------------------|----|
| [QNBPMachineUnit](../Constant/QNBPMachineUnit.md) | 单位 |

### getCurrentVolume

获取设备当前音量(需在设备允许交互后调用有效)

##### 返回值

| 类型                                                    | 描述 |
|-------------------------------------------------------|----|
| [QNBPMachineVolume](../Constant/QNBPMachineVolume.md) | 音量 |

### getCurrentStandard

获取设备当前血压标准(需在设备允许交互后调用有效)

##### 返回值

| 类型                                                        | 描述   |
|-----------------------------------------------------------|------|
| [QNBPMachineStandard](../Constant/QNBPMachineStandard.md) | 血压标准 |

### getCurrentLanguage

获取设备当前语言(需在设备允许交互后调用有效)

##### 返回值

| 类型                                                        | 描述 |
|-----------------------------------------------------------|----|
| [QNBPMachineLanguage](../Constant/QNBPMachineLanguage.md) | 语言 |
