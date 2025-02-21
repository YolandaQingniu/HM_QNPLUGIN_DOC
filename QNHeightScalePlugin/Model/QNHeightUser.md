# QNHeightUser

用户信息

#### 成员变量

| 名称        | 类型                                              | 描述           |
|-----------|-------------------------------------------------|--------------|
| userId    | string                                          | 用户ID: 用户唯一标识 |
| gender    | [QNGender](../../QNPlugin/Constant/QNGender.md) | 性别           |
| age       | number                                          | 年龄：3 - 80岁   |
| sportMode | boolean                                         | 是否是运动员       |

### buildQNHeightUser

构建一个QNHeightUser实例对象

##### 参数

| 名称        | 类型                                       | 描述                                                |
|-----------|------------------------------------------|---------------------------------------------------|
| userId    | string                                   | 用户ID: 用户唯一标识                                      |
| gender    | [QNGender](../../QNPlugin/Constant/QNGender.md) | 性别                                                |
| age       | number                                   | 年龄：3 - 80岁                                        |
| sportMode | boolean                                  | 是否是运动员                                            |
| callback  | QnResultCallback                         | 回调方法，返回构造的状态码 [number 详情见状态码列表](../../Code.md#初始化相关) |

##### 返回值

| 类型           | 描述 |
|--------------|----|
| QNHeightUser | 用户 |

