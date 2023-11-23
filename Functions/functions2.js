// return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate"

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office"

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
}

/* Implement a function called wrapAdjective:

It should return a function
This "inner" function should:
take a single parameter that should default to "special". Name it however you wish.
return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
It should take as parameter a String that will be used to create visual flair
You may call the parameter whatever you like, but its default value should be "*"
Call example: const encouragingPromptFunction = wrapAdjective("!!!")
Thus a total call should be:

wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
*/

function wrapAdjective(param1 = "*") {
    return function (param2 = "special") {
        return `You are ${param1}${param2}${param1}!`
    };
}