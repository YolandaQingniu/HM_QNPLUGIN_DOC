# QNHeightScaleData

身高秤测量数据

#### 成员变量

> 并非每个指标都一定会有值，某个指标有值与否由具体设备和配置文件共同决定，详询我司商务人员
> <br/> 需要对指标的含义做进一步了解，也请咨询我司商务人员

| 名称                  | 类型                                                                              | 描述       | 单位 | 精度       |    
|---------------------|---------------------------------------------------------------------------------|----------|----|----------|
| isDataComplete      | boolean                                                                         | 数据是否完整   |    |          |
| workMode            | [QNHeightScaleWorkMode](../Constant/QNHeightScaleWorkMode.md)  &#124; undefined | 身高秤测量模式  |    |          |
| timeStamp           | string &#124; undefined                                                         | 时间戳，以秒计算 |    | 整形       | 
| hmac                | string &#124; undefined                                                         | 数据加密字符串  |    |          |
| user                | [QNHeightUser](QNHeightUser.md)    &#124; undefined                             | 用户信息     |    |          |
| weight              | string &#124; undefined                                                         | 体重       | kg | 小数点后 2 位 | 
| height              | string &#124; undefined                                                         | 身高       | cm | 小数点后 1 位 | 
| bmi                 | string &#124; undefined                                                         | bmi      |    | 小数点后 1 位 | 
| bodyFatRate         | string &#124; undefined                                                         | 体脂肪率     | %  | 小数点后 1 位 | 
| subcutaneousFatRate | string &#124; undefined                                                         | 皮下脂肪率    | %  | 小数点后 1 位 | 
| visceralFatLevel    | string &#124; undefined                                                         | 内脏脂肪等级   |    | 整形       | 
| bodyWaterRate       | string &#124; undefined                                                         | 身体水分率    | %  | 小数点后 1 位 | 
| skeletalMuscleRate  | string &#124; undefined                                                         | 骨骼肌率     | %  | 小数点后 1 位 | 
| boneMass            | string &#124; undefined                                                         | 骨量       | kg | 小数点后 2 位 | 
| bmr                 | string &#124; undefined                                                         | 基础代谢量    |    | 整形       | 
| bodyType            | string &#124; undefined                                                         | 体型       |    | 整形       | 
| proteinRate         | string &#124; undefined                                                         | 蛋白质率     | %  | 小数点后 1 位 | 
| leanBodyMass        | string &#124; undefined                                                         | 去脂体重     | kg | 小数点后 2 位 | 
| muscleMass          | string &#124; undefined                                                         | 肌肉量      | kg | 小数点后 2 位 | 
| bodyAge             | string &#124; undefined                                                         | 体年龄      |    | 整形       | 
| healthScore         | string &#124; undefined                                                         | 健康分数     |    | 小数点后 1 位 | 
| heartRate           | string &#124; undefined                                                         | 心率       |    | 整形       | 
| heartIndex          | string &#124; undefined                                                         | 心脏指数     |    | 小数点后 1 位 | 
| fattyLiverRiskLevel | string &#124; undefined                                                         | 脂肪肝风险等级  |    | 整形       | 
| bodyFatMass         | string &#124; undefined                                                         | 脂肪量      | kg | 小数点后 2 位 | 
| obesity             | string &#124; undefined                                                         | 肥胖度      |    | 小数点后 1 位 | 
| bodyWaterMass       | string &#124; undefined                                                         | 含水量      | kg | 小数点后 2 位 | 
| proteinMass         | string &#124; undefined                                                         | 蛋白质量     | kg | 小数点后 2 位 | 
| mineralLevel        | string &#124; undefined                                                         | 无机盐状况    |    | 整形       | 
| dreamWeight         | string &#124; undefined                                                         | 理想视觉体重   | kg | 小数点后 2 位 | 
| standWeight         | string &#124; undefined                                                         | 标准体重     | kg | 小数点后 2 位 | 
| weightControl       | string &#124; undefined                                                         | 体重控制量    | kg | 小数点后 2 位 | 
| bodyFatControl      | string &#124; undefined                                                         | 脂肪控制量    | kg | 小数点后 2 位 | 
| muscleMassControl   | string &#124; undefined                                                         | 肌肉控制量    | kg | 小数点后 2 位 | 
| muscleRate          | string &#124; undefined                                                         | 肌肉率      | %  | 小数点后 1 位 | 

#### makeDataComplete:

若数据的isDataComplete为false，即数据不完整，调用此方法，传入用户信息以计算完整的测量数据
<br>若数据的isDataComplete为true，则数据已经是完整的，不需要调用此方法。如果调用，则直接返回数据本身
<br>若传入的user为undefined，则不计算直接返回数据本身

##### 参数

| 名称   | 类型                              | 描述   |
|------|---------------------------------|------|
| user | [QNHeightUser](QNHeightUser.md) | 用户信息 |

##### 返回值

| 名称        | 类型                | 描述   |
|-----------|-------------------|------|
| scaleData | QNHeightScaleData | 测量数据 |
