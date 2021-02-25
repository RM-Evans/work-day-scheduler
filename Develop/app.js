let timeBlock = $('.time-block') //just a jquery selector
//let inPast = $('.past')
let inPresent = $('.present')
//present should be current time
//translate into something moment can read, preferably a moment object
let inFuture = $('.future')


//timeBlock = [] why are you reassigning it?
//how do I keep track of the timeblocks

//should be working within full hour
//let trackTask = function()
//am "declaring" trackTask - not calling
//only declaring, not calling here
//call it
//check time, then call this - is callback function
//trackTask is my callback in jquery.each(array, callback)
// function trackTask() {
    
//     if (moment().isBefore(inPresent)) {
        
//         //if task before currentTime then grey/or transparent 
//         $('timeBlock').addClass('.past')
//     } if(moment()) {
//         //if task is currentTime then red
//         $('timeBlock').addClass('.present')
//     } if(moment().isAfter(inPresent)){
//         //if task after current time then green
//         $('timeBlock').addClass('.future')
//     }
// }
//not comparable/not gonna work
//what is inPresent

//im assigning a class with a conditional so the colors can be shown
//.each will "gather" it as a collection
//my moment object is my missing piece
//comparing two moment objects
//selecting text area with ta-block
$(".ta-block").each((index, element) => {
    //make object
    const hour =  moment({
        hour: element.id
    })
    console.log(hour)
    console.log(element)
    if (moment().isAfter(hour)) {
        $(element).addClass('future')
    } else if (moment().isBefore(hour)){
        $(element).addClass('past')
    }
})


//print clock
update()

function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do - hh:mm'))

}
setInterval(update, 1000)



