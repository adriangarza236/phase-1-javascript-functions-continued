// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
saturdayFun();
mondayWork();
function wrapAdjective(wrap = "*") {
    return function (comp = "special") {
        return `You are ${wrap}${comp}${wrap}!`
    }
}