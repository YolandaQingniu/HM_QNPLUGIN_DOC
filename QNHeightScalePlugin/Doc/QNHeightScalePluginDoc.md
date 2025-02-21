# 概述

该文档介绍身高秤插件的接入，使用此插件前，必须先初始化[基础鉴权插件](../../QNPlugin/Doc/QNPluginDoc.md)

## 对接步骤

### 1、初始化身高秤插件

```
   //伪代码示例
   QNHeightScalePlugin.initPlugin(qnPlugin)
```

### 2、按需设置身高秤插件的各种监听

```
    //伪代码示例
    
    //扫描监听器
    QNHeightScalePlugin.scanListener = {
      onDiscoverDevice: (device: QNHeightScaleDevice) => {
        AppLogger.logD(`发现 QNHeightScaleDevice ${device}`)
      }
    }

    //状态监听器
    QNHeightScalePlugin.statusListener = {
      onConnected: (device: QNHeightScaleDevice) => {
        //设备已失败
      },

      onConnectFailed: (code: number, device: QNHeightScaleDevice) => {
        //设备连接失败
      },

      onReadyInteractResult: (code: number, device: QNHeightScaleDevice) => {
        //code == 0时，说明设备已允许交互
      },

      onDisconnected: (device: QNHeightScaleDevice) => {
        //设备已断开
      }
    }

    //数据监听器
    QNHeightScalePlugin.dataListener = {
      onGetRealTimeWeight: (weight: string, device: QNHeightScaleDevice) => {
        //收到实时体重
      },
      onGetRealTimeHeight: (height: string, device: QNHeightScaleDevice) => {
        //收到实时身高
      },
      onGetMeasureResult: (data: QNHeightScaleData, device: QNHeightScaleDevice) => {
        //收到测量完成数据
      },
      onMeasureFail: (device: QNHeightScaleDevice) => {
        //测量失败
      },
      onGetStoredData: (storedDataList: QNHeightScaleData[], device: QNHeightScaleDevice) => {
        //收到存储数据
      }
    }
```

### 3、开始扫描

> 正常开始扫描的前提是app已申请`ohos.permission.ACCESS_BLUETOOTH`权限且蓝牙开关是开启的

```
   //伪代码示例
   qnPlugin.startScan()
```

### 4、连接设备

> 如果开启扫描后，附近存在已开机的身高秤设备，会在扫描监听器的`onDiscoverDevice`方法收到发现的设备

```
   //伪代码示例
   
   //已发现设备，停止扫描
   qnPlugin.stopScan()
   //可以按需设置operate的属性，连接前调整想设置的单位
   const operate = new QNHeightScaleOperate()
   operate.weightUnit = QNHeightScaleWeightUnit.KG
   operate.lengthUnit = QNHeightScaleLengthUnit.CM   
   //连接发现的设备
   QNHeightScalePlugin.connectDevice(device, operate)
```

### 5、正常使用

> 发起连接后，会在监听器收到相应的回调，app开发者可按需处理各种状态和数据

### 6、设置测量用户
> onReadyInteractResult回调设备允许交互后，[设置测量用户](../../FAQ.md#设置测量用户)
> <br/>调用[setMeasureUser](../QNHeightScalePlugin.md#setmeasureuser)方法
> <br/>随后在dataListener中可收到相应的数据回调

```
   //伪代码示例
   
   //根据实际情况设置用户的信息
   const user: QNHeightUser | undefined = QNHeightUser.buildQNHeightUser(
     'xxxxxx',
     QNGender.MALE,
     30,
     172.0,
     false, {
     onResult: (code: number, msg: string) => {
       
     }
   })
   if (undefined != user) {
     QNHeightScalePlugin.setMeasureUser(device, user)  
   }    
```

### 7、功能设置

> 在收到onReadyInteractResult回调时，如果code == 0，则说明设备已允许交互
> <br/>此时可以调用一些功能设置方法，如[设置秤端设置项](../QNHeightScalePlugin.md#setdeviceconfig)等

### 8、断开连接

> 调用此方法，可断开已连接的设备

```
   //伪代码示例
   QNHeightScalePlugin.cancelConnectDevice(device)
```