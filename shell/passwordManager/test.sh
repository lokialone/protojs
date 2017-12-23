#!/bin/bash
# author: lokialone

list=()
res=()
i=0

function diskspace {
	clear
	df -k
}

function whoseon {
	clear
	who
}

function memusage {
	clear
	cat /proc/meminfo
}

while read line
do
    list[${i}]=`echo ${line} | awk -F":" '{print $1}'`
    res[${i}]=$line
    (( ++i ))
done < password

function menu {
    let j = 1
	clear
    for index in ${list[@]}
    do
	    echo -e "\t${j}. ${index}\n"
        ((j++))
    done
	echo -e "\t0. Exit menu\n\n"
	echo -en "\t\tEnter an option: "
	read -n 1 option
}

while [ 1 ]
do
	menu
	case $option in
	0)
		break ;;
	1)
		diskspace ;;
	2)
		whoseon ;;
	3)
		memusage ;;
	*)
		clear
		echo "Sorry, wrong selection" ;;
	esac
	echo -en "\n\n\t\t\tHit any key to continue"
	read -n 1 line
done
clear

