//引入两个模块：app 和 BrowserWindow

//app 模块，控制整个应用程序的事件生命周期。
//BrowserWindow 模块，它创建和管理程序的窗口。
const { app, BrowserWindow, Tray, Menu, ipcMain, screen } = require('electron')

const path = require('path')
// const reloader = require('electron-reloader')
const url = require('url')

// const iconPath = path.join(__dirname, '/src/assets/img/icon.jpg')
const iconPath = path.join(__dirname, '/build/icon.png')


let mainWindow, tray, remindWindow         // 进行全局引用 防止在函数内定义被垃圾回收

//在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.on('ready', () => {

  //创建一个窗口
  mainWindow = new BrowserWindow({
    frame: false,      // 无边框
    resizable: false,  // 不允许用户改变窗口大小
    width: 800,        // 设置宽高
    height: 600,
    icon: iconPath,    // 应用运行时的标题栏图标
    webPreferences: {
      // backgroundThrottling: false,
      nodeIntegration: true,     // 启用node api
      contextIsolation: false,
    }
  })


  // // mainWindow.loadURL('http://localhost:3000/')
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // // reloader(module)  // 热加载

  tray = new Tray(iconPath)   // 实例化一个tray对象，构造函数的唯一参数是需要在托盘中显示的图标url  
  tray.setToolTip('tasky')          // 鼠标移到托盘中应用程序的图标上时，显示的文本
  tray.on('click', () => {          // 点击托盘图标触发
    if (mainWindow.isVisible()) {   // 判断是否已经显示 true 隐藏 false 则显示
      mainWindow.hide()
    } else {
      mainWindow.show()
    }
  })
  tray.on('right-click', () => {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: '退出',
        click() {
          app.quit()      // 退出程序
        }
      }
    ])
    tray.popUpContextMenu(menuConfig)
  })

  ipcMain.on('mainWindow:close', () => {
    mainWindow.hide()
  })

  ipcMain.on('remindWindow:close', () => {
    remindWindow.close()
  })


  ipcMain.on('setTimer', (event, taskTime, taskName) => {
    let now = new Date()
    let date = new Date()
    date.setHours(taskTime.slice(0, 2), taskTime.slice(3), 0)
    let timeOut = date.getTime() - now.getTime()
    setTimeout(() => {
      createRemindWindow(taskName)
    }, timeOut)
  })

  function createRemindWindow(task) {
    remindWindow = new BrowserWindow({
      height: 450,
      width: 360,
      frame: false,
      resizable: true,
      icon: iconPath,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
    remindWindow.removeMenu()               // 关闭菜单栏
    const size = screen.getPrimaryDisplay().workAreaSize    // 获取屏幕尺寸
    const { y } = tray.getBounds()            // 获取托盘位于屏幕中的y坐标
    const { height, width } = remindWindow.getBounds()      // 获取窗口宽高
    const yPosition = process.platform === 'darwin' ? y : y - height
    remindWindow.setBounds({    // 设置窗口显示位置
      x: size.width - width,
      y: yPosition,
      height,
      width
    })
    remindWindow.setAlwaysOnTop(true)     // 如果有其它应用 是否显示在最顶层
    // remindWindow.loadURL(`file://${__dirname}/src/assets/remind.html`)
    remindWindow.loadURL(url.format({
      pathname: path.join(__dirname, './build/remind.html'),
      protocol: 'file:',
      slashes: true
    }))
    remindWindow.show()                   // 显示并聚焦于窗口
    remindWindow.webContents.send('setTask', task)
    remindWindow.on('closed', () => { remindWindow = null })
    setTimeout(() => {
      remindWindow && remindWindow.close()
    }, 50 * 1000)
  }
})
