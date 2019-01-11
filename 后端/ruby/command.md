## 命令

// 进入 ruby 环境模式

irb

// 创建项目

rails new hello_app （project name）

// bundle 安装

bundle install

// 启动rails server

rails server

// routes.rb

root 'controller_name#action_name'

// project production install 

bundle install --without production 

// 7位随机数

('a'..'z').to_a.shuffle[0..7].join

('a'..'z').to_a.sam- ple(8).join 

// rails 创建表

rails generate scaffold User name:string email:string 

// 迁移数据库

rails db:migrate

// 控制台是与 Rails 应用交 互常用的工具  启动控制台 

rails console 