# Vue生命周期


###  vue响应式系统

* 任何一个Vue components 都有一个watcher实例与之相对应，
* vue data上的数据都会被劫持，有一个getter\setter，当vue component render被触发的时候，data数据会被读取，所以会触发getter，此时Vue回去记录vue component所依赖的数据，这一过程被称为依赖收集

* data数据更新的时候，会触发setter，此时vue会通知所有依赖此data数据的组件去调用render函数更新

### diff对比

diff程可以概括为：oldCh和newCh各有两个头尾的变量StartIdx和EndIdx，它们的2个变量相互⽐较，⼀共有4种 ⽐较⽅式。如果4种⽐较都没匹配，如果设置了key，就会⽤key进⾏⽐较，在⽐较的过程中，变量会往中间靠， ⼀旦StartIdx>EndIdx表明oldCh和newCh⾄少有⼀个已经遍历完了，就会结束⽐较,这四种⽐较⽅式就是⾸、尾、 旧尾新头、旧头新尾.

### key的作用
- key作为vnode中的唯一标识id，在diff比较的时候更精确、首先进行收尾比较，当无法匹配的时候，就使用key快速地找出新旧节点的差别
- 准确: 如果不使用key, vue的就地使用策略会选择复用节点，导致之前的节点被保留，产生一系列bug
- 快速：key的唯一性可以被Map数据结构充分使用，相比遍历查找的时间复杂的O(N)，map的时间复杂的为O(1)

