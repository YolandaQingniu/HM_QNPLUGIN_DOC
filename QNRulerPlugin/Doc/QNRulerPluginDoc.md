# 概述

该文档介绍围度尺插件的接入，使用此插件前，必须先初始化[基础鉴权插件](../../QNPlugin/Doc/QNPluginDoc.md)

## 对接步骤

### 1、初始化围度尺插件

```
   //伪代码示例
   QNRulerPlugin.initPlugin(qnPlugin)
```

### 2、按需设置围度尺插件的各种监听

```
    //伪代码示例
    
    //扫描监听器
    QNRulerPlugin.scanListener = {
      onDiscoverDevice: (device: QNRulerDevice) => {
        AppLogger.logD(`发现 QNRulerDevice ${device}`)
      }
    }

    //状态监听器
    QNRulerPlugin.statusListener = {
      onConnected: (device: QNRulerDevice) => {
        //设备已失败
      },

      onConnectFailed: (code: number, device: QNRulerDevice) => {
        //设备连接失败
      },

      onReadyInteractResult: (code: number, device: QNRulerDevice) => {
        //code == 0时，说明设备已允许交互
      },

      onDisconnected: (device: QNRulerDevice) => {
        //设备已断开
      }
    }

    //数据监听器
    QNRulerPlugin.dataListener = {
      onGetRealTimeData: (data: QNRulerData, device: QNRulerDevice) => {
        //收到实时测量数据
      },
      onGetMeasureResult: (data: QNRulerData, device: QNRulerDevice) => {
        //收到测量结果数据
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

> 如果开启扫描后，附近存在已开机的围度尺设备，会在扫描监听器的`onDiscoverDevice`方法收到发现的设备

```
   //伪代码示例
   
   //已发现设备，停止扫描
   qnPlugin.stopScan()
   //连接发现的设备
   QNRulerPlugin.connectDevice(device)
```

### 5、正常使用

> 发起连接后，会在状态监听器和数据监听器收到相应的回调，app开发者可按需处理各种状态和数据

### 6、断开连接

> 调用此方法，可断开已连接的设备

```
   //伪代码示例
   QNRulerPlugin.cancelConnectDevice(device)
```