# 概述

该文档介绍血压计插件的接入，使用此插件前，必须先初始化[基础鉴权插件](../../QNPlugin/Doc/QNPluginDoc.md)

## 对接步骤

### 1、初始化血压计插件

```
   //伪代码示例
   QNBPMachinePlugin.initPlugin(qnPlugin)
```

### 2、按需设置血压计插件的各种监听

```
    //伪代码示例
    
    //扫描监听器
    QNBPMachinePlugin.scanListener = {
      onDiscoverDevice: (device: QNBPMachineDevice) => {
        AppLogger.logD(`发现 QNBPMachineDevice ${device}`)
      }
    }

    //状态监听器
    QNBPMachinePlugin.statusListener = {
      onConnected: (device: QNBPMachineDevice) => {
        //设备已失败
      },

      onConnectFailed: (code: number, device: QNBPMachineDevice) => {
        //设备连接失败
      },

      onReadyInteractResult: (code: number, device: QNBPMachineDevice) => {
        //code == 0时，说明设备已允许交互
      },

      onDisconnected: (device: QNBPMachineDevice) => {
        //设备已断开
      }
    }

    //数据监听器
    QNBPMachinePlugin.dataListener = {
      onGetMeasureResult: (measureResult: QNBPMachineMeasureResult, data: QNBPMachineData | undefined, device: QNBPMachineDevice) => {
        //收到测量结果
      },
      onGetStoredData: (data: QNBPMachineData, device: QNBPMachineDevice) => {
        //收到存储数据
      }
    }
    
    //事件监听器
    QNBPMachinePlugin.eventListener = {
      onSetFunctionResult: (code: number, device: QNBPMachineDevice) => {
        //code == 0时，说明设置设备功能成功
      }
    }
    
    //配网监听器
    QNBPMachinePlugin.wifiListener = {
      onStartWiFiConnect: (device: QNBPMachineDevice) => {
        //开始配网
      },

      onConnectWiFiStatus: (code: number, device: QNBPMachineDevice) => {
        //配网结果
      },

      onDiscoveryNearbyWiFi: (ssid: string, rssi: number, device: QNBPMachineDevice) => {
        //扫描到周围wifi
      },
    }        
```

### 3、开始扫描

> 正常开始扫描的前提是app已申请`ohos.permission.ACCESS_BLUETOOTH`权限且蓝牙开关是开启的

```
   //伪代码示例
   qnPlugin.startScan()
```

### 4、连接设备

> 如果开启扫描后，附近存在已开机的血压计设备，会在扫描监听器的`onDiscoverDevice`方法收到发现的设备

```
   //伪代码示例
   
   //已发现设备，停止扫描
   qnPlugin.stopScan()
   //连接发现的设备
   QNBPMachinePlugin.connectDevice(device)
```

### 5、状态监听

> 发起连接后，会在状态监听器收到相应的回调，app开发者可按需处理各种状态

### 6、设置血压计功能参数

> 在收到onReadyInteractResult回调时，如果code == 0，则说明设备已允许交互
> <br/>在血压计允许交互后，需要[设置血压计功能参数](../QNBPMachinePlugin.md#setdevicefunction)后，才能进行其他操作
> <br/>设置结果会在onSetFunctionResult中回调

```
   //伪代码示例
   
   //开发者可根据需求改变deploy的属性的值
   const deploy = new QNBPMachineDeploy()
   deploy.unit = QNBPMachineUnit.xxx
   deploy.volume = QNBPMachineVolume.xxx
   deploy.standard = QNBPMachineStandard.xxx
   deploy.language = QNBPMachineLanguage.xxx   
   QNBPMachinePlugin.setDeviceFunction(deploy, device)
```

### 7.1、正常测量

> 设置血压计功能参数成功后，完成测量，会在onGetMeasureResult收到测量结果

### 7.2、读取[存储数据](../../FAQ.md#存储数据)

> 血压计的存储数据需要主动读取，设置血压计功能参数成功后，调用[readStoredData方法](../QNBPMachinePlugin.md#readstoreddata)
> <br/>会在onGetStoredData收到存储数据

### 7.3、[配网](../../FAQ.md#配网)

> 血压计支持扫描周围wifi，设置血压计功能参数成功后，调用[scanNearbyWiFi方法](../QNBPMachinePlugin.md#scannearbywifi),会在onDiscoveryNearbyWiFi收到周围wifi信息
> <br/>传入配网信息进行配网，会在wifiListener中收到相应的回调

```
   //伪代码示例
   const info = new QNBPMachineWiFiInfo()
   info.ssid = ‘xxxxxxxx’
   info.pwd = ‘xxxxxxxx’
   info.serverUrl = ‘xxxxxxxx’
   //传入wifi信息，进行配网
   QNBPMachinePlugin.startConnectWiFi(device, info)   
```

### 8、断开连接

> 调用此方法，可断开已连接的设备

```
   //伪代码示例
   QNBPMachinePlugin.cancelConnectDevice(device)
```