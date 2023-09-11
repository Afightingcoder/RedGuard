// pages/home/home.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        originFiles: [
          {
            url: 'https://tdesign.gtimg.com/miniprogram/images/example4.png',
            name: 'uploaded1.png',
            type: 'image',
          },
          {
            url: 'https://tdesign.gtimg.com/miniprogram/images/example6.png',
            name: 'uploaded2.png',
            type: 'image',
          },
          {
            url: 'https://tdesign.gtimg.com/miniprogram/images/example5.png',
            name: 'uploaded1.png',
            type: 'image',
          },
        ],
        gridConfig: {
          column: 4,
          width: 160,
          height: 250,
        },
        config: {
          count: 1,
        },
      },

    /**
     * 组件的方法列表
     */
    methods: {
        handleSuccess(e) {
            const { files } = e.detail;
            this.setData({
              originFiles: files,
            });
          },
          handleRemove(e) {
            const { index } = e.detail;
            const { originFiles } = this.data;
            originFiles.splice(index, 1);
            this.setData({
              originFiles,
            });
          },
          handleClick(e) {
            console.log(e.detail.file);
          },
    }
})
