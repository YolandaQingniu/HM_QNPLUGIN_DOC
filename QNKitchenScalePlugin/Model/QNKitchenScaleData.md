# QNKitchenScaleData

厨房秤测量数据

#### 成员变量

| 名称         | 类型                                                                       | 描述        |
|------------|:-------------------------------------------------------------------------|-----------|
| weight     | string    &#124; undefined                                               | 重量，单位固定为g |
| unit       | [QNKitchenScaleUnit](../Constant/QNKitchenScaleUnit.md) &#124; undefined | 设备显示单位    |
| numberType | [QNKitchenScaleNumberType](../Constant/QNKitchenScaleNumberType.md)            | 数据精度      |
| timeStamp  | string           &#124; undefined                                        | 时间戳，单位秒   |
| isShelling | boolean                                                                  | 是否去皮      |
| isOverload | boolean                                                                  | 是否超载      |
| isNegative | boolean                                                                  | 是否为负值     |
| isSteady   | boolean                                                                  | 是否稳定      |

