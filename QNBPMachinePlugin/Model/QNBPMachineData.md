# QNBPMachineData

血压计测量数据

#### 成员变量

| 名称          | 类型                                                                            | 描述      |
|-------------|-------------------------------------------------------------------------------|---------|
| timeStamp   | string                                                                        | 时间戳，以秒计算 |
| userIndex   | number                                                                        | 测量用户序号  |
| unit        | [QNBPMachineUnit](../Constant/QNBPMachineUnit.md) &#124; undefined            | 当前单位    |
| systolicBP  | string  &#124; undefined                                                      | 收缩压     |
| diastolicBP | string    &#124; undefined                                                    | 舒张压     |
| heartRate   | string     &#124; undefined                                                   | 心率      |
| resultType  | [QNBPMachineResultType](../Constant/QNBPMachineResultType.md)&#124; undefined | 血压判断结果  |

