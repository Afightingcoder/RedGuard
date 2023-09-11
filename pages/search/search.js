// pages/search/search.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    options: {
        styleIsolation: 'apply-shared',
      },
    data: {
        value: '',
      },
    /**
     * 组件的初始数据
     */
    

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(e) {
            console.log(e.detail.value);
        },
    }
})
