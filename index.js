// Code your solution here
function findMatching(driverNames, matcher) {
    return driverNames.filter((name) => name.toLowerCase().includes(matcher.toLowerCase()))
}

function fuzzyMatch(driverNames, matcher){
    const driverMatches = driverNames.filter(
        function(name){
            const matcherLetters = matcher.toLowerCase().split('')
            const nameLetters = name.toLowerCase().split('')
            return   nameLetters[0] === matcherLetters[0]

        }
    )
    return driverMatches
}

function matchName(driverNames, matcher) {
    const driverMatches = driverNames.filter(
        function(name){
            if(name.name === matcher){
                return name.name
            }
        }
    )
    return driverMatches
}
