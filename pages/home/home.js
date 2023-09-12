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
      imageIconList: [
        'https://tdesign.gtimg.com/miniprogram/images/icon1.png',
        'https://tdesign.gtimg.com/miniprogram/images/<AddCircleIcon />',
      ],
        // originFiles: [
        //   {
        //     url: 'https://tdesign.gtimg.com/miniprogram/images/example4.png',
        //     name: 'uploaded1.png',
        //     type: 'image',
        //   },
        //   {
        //     url: 'https://tdesign.gtimg.com/miniprogram/images/example6.png',
        //     name: 'uploaded2.png',
        //     type: 'image',
        //   },
        //   {
        //     url: 'https://tdesign.gtimg.com/miniprogram/images/example5.png',
        //     name: 'uploaded1.png',
        //     type: 'image',
        //   },
        // ],
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
        // handleSuccess(e) {
        //     const { files } = e.detail;
        //     this.setData({
        //       originFiles: files,
        //     });
        //   },
        //   handleRemove(e) {
        //     const { index } = e.detail;
        //     const { originFiles } = this.data;
        //     originFiles.splice(index, 1);
        //     this.setData({
        //       originFiles,
        //     });
        //   },
          handleClick(e) {
            console.log(e.detail.file);
          },
          uploadImage() {
            wx.chooseImage({
              count: 1, // 可以选择的图片数量，根据需要修改
              sizeType: ['original', 'compressed'], // 图片的尺寸类型
              sourceType: ['album', 'camera'], // 图片的来源，可以选择相册或相机
              success: (res) => {
                // 选择成功后的回调函数
                const tempFilePaths = res.tempFilePaths;
                
                // 在这里可以上传图片或进行其他处理
                // 例如：将图片显示在页面上
                this.setData({
                  originFiles: [{ url: tempFilePaths[0], type: 'image' }],
                });
              },
            });
          },
        
    }
})
