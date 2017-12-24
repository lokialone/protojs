#!/bin/zsh
# author: lokialone
# 密码文件所在位置
filename='/Users/lokalone/record/work/password'
list=()
res=()
# zsh数组下标从1开始。。。
i=1

function diskspace {
	clear
	df -k
}

function getContentFormFile {
    while read line
    do
        list[${i}]=`echo ${line} | awk -F":" '{print $1}'`
        res[${i}]=$line
        (( ++i ))
    done < $filename
}


function menu {
    let j=1
	clear
    for index in ${list[@]}
    do
	    echo -e "\t${j}. ${index}"
        ((j++))
    done
	echo -e "\t0. Exit menu"
	echo -en "\t\tEnter an option: "
	read -n option
}

function showPasswordInfo {
    echo ${res[$option]} | awk -F":" '{print $2}'
}

getContentFormFile
while [ 1 ]
do
	menu
	
	case $option in
	0)  
        exit
		break;;
	*)
		showPasswordInfo;;
	esac
	echo -en "\n\n\t\t\tHit any key to continue"
	read -n 1 line
done
clear