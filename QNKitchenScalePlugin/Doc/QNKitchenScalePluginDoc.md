# 概述

该文档介绍厨房秤插件的接入，使用此插件前，必须先初始化[基础鉴权插件](../../QNPlugin/Doc/QNPluginDoc.md)

## 对接步骤

### 1、初始化厨房秤插件

```
   //伪代码示例
   QNKitchenScalePlugin.initPlugin(qnPlugin)
```

### 2、按需设置厨房秤插件的各种监听

```
    //伪代码示例
    
    //扫描监听器
    QNKitchenScalePlugin.scanListener = {
      onDiscoverDevice: (device: QNKitchenScaleDevice) => {
        AppLogger.logD(`发现 QNKitchenScaleDevice ${device}`)
      }
    }

    //状态监听器
    QNKitchenScalePlugin.statusListener = {
      onConnected: (device: QNKitchenScaleDevice) => {
        //设备已失败
      },

      onConnectFailed: (code: number, device: QNKitchenScaleDevice) => {
        //设备连接失败
      },

      onReadyInteractResult: (code: number, device: QNKitchenScaleDevice) => {
        //code == 0时，说明设备已允许交互
      },

      onDisconnected: (device: QNKitchenScaleDevice) => {
        //设备已断开
      }
    }

    //数据监听器
    QNKitchenScalePlugin.dataListener = {
      onGetRealTimeData: (data: QNKitchenScaleData, device: QNKitchenScaleDevice) => {
        //收到实时测量数据
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

> 如果开启扫描后，附近存在已开机的厨房秤设备，会在扫描监听器的`onDiscoverDevice`方法收到发现的设备

```
   //伪代码示例
   
   //已发现设备，停止扫描
   qnPlugin.stopScan()
   //可以按需设置operate的属性，连接前调整想设置的单位
   const operate = new QNKitchenScaleOperate()
   operate.unit = QNKitchenScaleUnit.ML
   //连接发现的设备
   QNKitchenScalePlugin.connectDevice(device, operate)
```

### 5、正常使用

> 发起连接后，会在监听器收到相应的回调，app开发者可按需处理各种状态和数据

### 6、功能设置

> 在收到onReadyInteractResult回调时，如果code == 0，则说明设备已允许交互
> <br/>
> 此时可以调用一些功能设置方法，如[去皮](../QNKitchenScalePlugin.md#setdeviceshelling)、[设置待机时间](../QNKitchenScalePlugin.md#setdevicestandbytime)

### 7、断开连接

> 调用此方法，可断开已连接的设备

```
   //伪代码示例
   QNKitchenScalePlugin.cancelConnectDevice(device)
```