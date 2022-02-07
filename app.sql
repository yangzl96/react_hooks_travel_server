create database react_hooks_egg;

use react_hooks_egg;

-- 用户表
create table `user`(
  `id` int not null auto_increment,
  `username` varchar(20) default null comment '用户名',
  `password` varchar(64) default null comment '密码',
  `avatar` text comment '头像',
  `phone` varchar(20) default null comment '电话',
  `sign` varchar(300) default null comment '用户签名',
  `createTime` timestamp default null comment '创建时间',
  `updateTime` timestamp default null comment '更新时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='用户表';

-- 民宿表
create table `house`(
  `id` int not null auto_increment,
  `name` varchar(50) default null comment '房屋名称',
  `info` varchar(150) default null comment '房屋简介',
  `addres` varchar(200) default null comment '房屋地址',
  `price` int default null comment '房屋价格',
  `publishTime` timestamp default null comment '发布时间',
  `cityCode` varchar(10) not null comment '城市编码',
  `showCount` int(5) not null default 0 comment '展示次数',
  `startTime` timestamp default null comment '开始出租时间',
  `endTime` timestamp default null comment '出租结束时间',
  primary key(`id`)
) engine=InnoDB auto_increment=1 default charset=utf8 comment='房屋表';

-- 图片表
create table `imgs`(
  `id` int not null auto_increment,
  `url` varchar(500) default null comment '图片地址',
  `houseId` int not null comment '房屋id',
  `createTime` timestamp default null comment '创建时间',
  primary key(`id`)
) engine=InnoDB auto_increment=1 default charset=utf8 comment='图片表';

-- 评论表
create table `comment`(
  `id` int not null auto_increment,
  `userId` int not null comment '用户表id',
  `houseId` int not null comment '房屋表id',
  `msg` varchar(500) default null comment '评论内容',
  `createTime` timestamp default null comment '创建时间',
  primary key(`id`)
) engine=InnoDB auto_increment=1 default charset=utf8 comment='评论表';

INSERT INTO `house` VALUES 
(1,'东城民宿','东区 临近地铁','东城区',200,'2020-08-10 13:37:57','10001',1,'2020-08-10 13:37:57','2020-10-20 13:37:57'),
(2,'西城民宿','西区 临近地铁','西城区',100,'2020-08-10 13:38:23','10001',1,'2020-08-10 13:37:57','2020-11-10 13:37:57'),
(3,'新区民宿','新区民宿位置优越','新城区',150,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(4,'老城民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(5,'西苑民宿','西苑风景秀美','西城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-11-10 13:37:57'),
(6,'紫金巷民宿','紧邻老城区风景秀美','东城区',120,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-11-10 13:37:57'),
(7,'北戴河民宿','风景秀美适合放松身心','北城区',100,'2020-08-10 13:38:23','10002',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(8,'南苑民宿','南苑民宿风景秀美','东城区',150,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-10-10 13:37:57'),
(9,'北苑民宿','北苑民宿风景秀美','北城区',100,'2020-08-10 13:38:23','10002',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(10,'三厢和民宿','紧邻地铁交通方便','东城区',200,'2020-08-10 13:38:23','10003',0,'2020-08-10 13:37:57','2020-10-10 13:37:57'),
(11,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(12,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(13,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(14,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(15,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57');

INSERT INTO `imgs` VALUES
(1,'https://imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg',1,'2020-08-11 13:37:57'),
(2,'https://imgs.qunarzz.com/vs_ceph_vs_tts/dc23ea95-d6e7-4ad8-b65b-140d3a46567d.jpg_r_240x160x95_ce08e125.jpg',1,'2020-08-11 13:37:57'),
(3,'https://imgs.qunarzz.com/vs_ceph_b2c_001/45b3e40a-f9f5-4b1a-ae2f-fcd18767fb46.png_r_240x160x95_74fd5986.png',1,'2020-08-11 13:37:57'),
(4,'https://imgs.qunarzz.com/vs_ceph_b2c_001/07a8aafb-8b1c-49e2-974b-1938bf721fd7.jpg_r_240x160x95_d5856c92.jpg',2,'2020-08-11 13:37:57'),
(5,'https://imgs.qunarzz.com/p/tts7/1606/4c/e3c5ab21bc61f5f7.jpg_r_240x160x90_437c469f.jpg',2,'2020-08-11 13:37:57'),
(6,'https://imgs.qunarzz.com/vs_ceph_b2c_001/d6090ef2-7919-4bcf-9877-25da4d2769d1.jpg_r_240x160x95_612a508e.jpg',3,'2020-08-11 13:37:57'),
(7,'https://imgs.qunarzz.com/p/tts8/1804/9f/6a07c93b20527702.jpg_r_240x160x90_04b636d5.jpg',4,'2020-08-11 13:37:57'),
(8,'https://imgs.qunarzz.com/p/tts9/1803/25/6f18e5b3ae5b8102.jpg_r_240x160x90_1bcff59c.jpg',5,'2020-08-11 13:37:57'),
(9,'https://imgs.qunarzz.com/p/tts7/1612/f1/ae688444ba505902.jpg_r_240x160x90_0230df4d.jpg',6,'2020-08-11 13:37:57'),
(10,'https://imgs.qunarzz.com/vs_ceph_b2c_001/07a8aafb-8b1c-49e2-974b-1938bf721fd7.jpg_r_240x160x95_d5856c92.jpg',7,'2020-08-11 13:37:57'),
(11,'https://imgs.qunarzz.com/p/tts7/1606/4c/e3c5ab21bc61f5f7.jpg_r_240x160x90_437c469f.jpg',8,'2020-08-11 13:37:57'),
(12,'https://imgs.qunarzz.com/vs_ceph_b2c_001/d6090ef2-7919-4bcf-9877-25da4d2769d1.jpg_r_240x160x95_612a508e.jpg',9,'2020-08-11 13:37:57'),
(13,'https://imgs.qunarzz.com/p/tts8/1804/9f/6a07c93b20527702.jpg_r_240x160x90_04b636d5.jpg',10,'2020-08-11 13:37:57'),
(14,'https://imgs.qunarzz.com/p/tts9/1803/25/6f18e5b3ae5b8102.jpg_r_240x160x90_1bcff59c.jpg',11,'2020-08-11 13:37:57'),
(15,'https://imgs.qunarzz.com/p/tts7/1612/f1/ae688444ba505902.jpg_r_240x160x90_0230df4d.jpg',12,'2020-08-11 13:37:57'),
(16,'https://imgs.qunarzz.com/vs_ceph_b2c_001/8ae084cd-0e06-4b40-b63a-6cf78d0a6bb0.jpg_r_240x160x95_acbc6779.jpg',13,'2020-08-11 13:37:57'),
(17,'https://imgs.qunarzz.com/p/tts7/1606/4c/e3c5ab21bc61f5f7.jpg_r_240x160x90_437c469f.jpg',14,'2020-08-11 13:37:57'),
(18,'https://imgs.qunarzz.com/vs_ceph_b2c_001/d6090ef2-7919-4bcf-9877-25da4d2769d1.jpg_r_240x160x95_612a508e.jpg',15,'2020-08-11 13:37:57')
;

-- 订单表
create table `orders`(
  `id` int not null auto_increment,
  `order_number` varchar(20) default null comment '订单编号',
  `userId` int not null comment '用户id',
  `houseId` int not null comment '房屋id',
  `isPayed` int default 0 comment '是否支付，0未支付，1已支付',
  `createTime` timestamp default null comment '创建时间',
  `updateTime` timestamp default null comment '更新时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='订单表';

