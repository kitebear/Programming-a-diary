# ImageResizer 将图片压缩到2M以内

#### 缘由：

随着设备越来越好，用户随手拍出来的照片的像素也会变高，这时候的文件很有可能超过2M



#### 文件过大的坏处：

1. 超过2M的文件在一些场景就会被第三方业务方限制，比如说营业执照超过2M会调用失败

2. 传输过大的文件会给文件服务器很多存储压力
3. 文件过大图片读取的速度就会受到影响（也可以通过文件裁剪改善）



#### 使用方式

用到一个第三方图片处理工具` react-native-image-resizer `

yarn install react-native-image-resizer

react-native link react-native-image-resizer



#### 文件请求方式

```js
import ImageResizer from 'react-native-image-resizer';
/**
 * 将图片加载前压缩处理
 * response: { 
 *  height: 720, width: 1079,
 *  name: "E36D90E0-6CF9-4C37-AEF0-4030842B8ABB.jpg",
 *  path: "...", uri: "file://..."
 * }
 * 
 */
const compressBeforeImgUpload = async ({
    fileSize,
    limitSize,
    uri
}) => {

    const FILE_STATUS = {
        SUCCESS: 'success',
        FAILED: 'failed',
    }

    if (!uri) {
        return {
            status: FILE_STATUS.FAILED,
            msg: '必须有uri地址'
        }
    }

    // 是否超过限制
    let isExceed = Number(fileSize) > Number(limitSize || 2) * 1024 * 1024
    
    if (!isExceed) {
        return {
            status: FILE_STATUS.SUCCESS,
            file: { uri }
        }
    }

    const file = await ImageResizer.createResizedImage(uri, 1280, 720, 'JPEG', 100)
    return {
        status: FILE_STATUS.SUCCESS,
        file: { 
            ...file,
            uri: file.path
         }
    }
}
```



文件前后压缩对比

| 压缩前 | 压缩后 |
| ------ | ------ |
| 3.37M  | 1.14M  |
| 2.18M  | 0.75M  |
| 4.63M  | 1.37M  |
| 3.30M  | 1.08M  |
| ....   | ....   |

可以看到整体都在2m以下(找了很多超过10M的图片，但是被ImagePicker读取到的fileSize就会变小16M变成3M)