> ​	写这个方法的原因是因为我们需要改版国际化，因为相同的项目有其他分支做过国际化，但是主版本没有进行过国际化，目前需要修改主版本的国际化，但是因为国际化的方式做了结构上的调整所以写了这个工具方法方便去方便修改。

##### 下面我做一下说明

这个是目前版本的国际化方式，是按照目录模块进行的国际化，每个目录一个文件 放在对应国际化目录中，这样做其实为了方便翻译的时候进行查找和翻译，相同的变量可以更好的复用。

目录：

![](http://media.kitebear.cn/ct/2019-01-21-155942.png)

内容：

![image-20190122000206803](http://media.kitebear.cn/ct/2019-01-21-160206.png)

##### 再看看以前的版本

以前版本也是按照模块去划分的，但是区别是每个组件的文件都做了一次翻译，这样做的好处很明显，扁平化查找翻译文件很方便，因为对应翻译的组件名称就是当前组件的名称。

目录：

![image-20190122000517220](http://media.kitebear.cn/ct/2019-01-21-160517.png)

组件的内容：

![image-20190122002703619](http://media.kitebear.cn/ct/2019-01-21-162703.png)

所以可以看到他们的内容是一个是有层级结构的，另外一个是做了平铺，目前我觉得平铺好一些，因为去掉前面相同的也很容易找到最后的变化的key。

So我写了一个从有层级结构的json转换成平铺json的函数。

```js
const a = {
	TITLE: '基本设置',
	FIELD_TITLE: {
		BASIC_INFO: '基本信息',
		APP_IMAGE: '标题栏图片',
		SPACE_LOGO: '空间logo'
	},
	TIP_MSG: {
		APP_IMAGE: '上传图片定制App中的标题栏显示',
		APP_INSIDE_PREVIEW: 'App内效果预览',
		PREVIEW: '预览',
		SPACE_LOGO: '上传图片定制App中的空间logo显示'
	},
	DESCRIPTION: {
		APP_IMAGE: '请选择背景透明或白色的jpg, jpeg, 或png文件',
        SPACE_LOGO: '请选择jpg, jpeg, 或png文件',
	}
}

function parseJSON (obj, parent) {
    if (typeof obj === 'string') {
        return obj
    }
    const keys = Object.keys(obj)
    const isKeys = keys.length
    if (!isKeys) {
        return obj
    }
    let json = {}
    keys.forEach((value) => {
        const newParent = `${parent ? `${parent}.` : ''}${value.toLowerCase()}`
        const k = typeof obj[value] === 'string' ? null : Object.keys(obj[value])
        if (k) {
            json = {
                ...json,
                ...parseJSON(obj[value], newParent)
            }
        } else {
            json[newParent] = obj[value]
        }
    })
    return json
}

console.log('-------   ', JSON.stringify(parseJSON(a, 'space')))
```

这里可以看到结果，并且支持任何深的层级

```
{
  "space.title": "基本设置",
  "space.field_title.basic_info": "基本信息",
  "space.field_title.app_image": "标题栏图片",
  "space.field_title.space_logo": "空间logo",
  "space.tip_msg.app_image": "上传图片定制App中的标题栏显示",
  "space.tip_msg.app_inside_preview": "App内效果预览",
  "space.tip_msg.preview": "预览",
  "space.tip_msg.space_logo": "上传图片定制App中的空间logo显示",
  "space.description.app_image": "请选择背景透明或白色的jpg, jpeg, 或png文件",
  "space.description.space_logo": "请选择jpg, jpeg, 或png文件"
}
```

在编写程序的过程中，可以自己编写一些小工具去方便的处理相同的事情，我觉得这是我们学编程、学做程序的意义，类似于归类，处理相同事务，这样我们的生活会更美好 O(∩_∩)O哈哈~

我觉得写写文字也挺好的，写的写的就可以总结一些更深刻的道理。