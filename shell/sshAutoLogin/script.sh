#! /usr/bin/expect 
set timeout 30 
spawn ssh root@21.196.206.205
expect "*password"
send "1[2w/sdf)@.As6"
interact
 
# auto_login_ssh 1[2w/sdf\)@.As6;w root@21.196.206.205