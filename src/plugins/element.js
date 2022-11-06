import Vue from 'vue'
import { Button, Input, Form, FormItem, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)

// Message需要全局挂载
Vue.prototype.$message = Message
