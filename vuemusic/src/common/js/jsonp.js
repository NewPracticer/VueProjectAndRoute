// 使用jsonp 来获取数据 
// 利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。
// 当需要通讯时，本站脚本创建一个<script>元素，地址指向第三方的API网址
// 并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。
// 第三方产生的响应为json数据的包装（故称之为jsonp，即json padding）
// callback({"name":"hax","gender":"Male"})
// 这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。
// 前端网页中写一个fun1，接受跨域传来的数据并处理。
// 请求的跨域script标签中的代码则是执行这个函数，里面包含跨域的数据：fun1(data)。这
// 样跨域的数据就可以被原有的前端js接受并处理了
import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  // 获取url 拼接后面的data
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
