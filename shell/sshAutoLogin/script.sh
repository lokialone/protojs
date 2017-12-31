#! /usr/bin/expect 
# 设定超时时间为3秒
set timeout 3   
spawn ssh root@123.206.192.21
expect "*password*"
send "mypassword"
interact
