let timeBlock = $('.time-block') //just a jquery selector
//let inPast = $('.past')
let inPresent = $('.present')
//present should be current time
//translate into something moment can read, preferably a moment object
let inFuture = $('.future')

//how do I keep track of the timeblocks

//should be working within full hour
//let trackTask = function()
//am "declaring" trackTask - not calling
//only declaring, not calling here
//call it
//check time, then call this - is callback function

//im assigning a class with a conditional so the colors can be shown
//.each will "gather" it as a collection
//my moment object is my missing piece
//comparing two moment objects
//selecting text area with ta-block
//element = <textarea>
$(".ta-block").each((index, element) => {

    const id = element.id

    //make object
    const hour =  moment({
        hour: id
    })
    //actual hour
    //console.log(moment().get('hour'))
    //object hour 
    //console.log(hour.get('hour'))
    //compare these two so I can use 'present' class
    //console.log(element)

    const value = localStorage.getItem(id)
    //value in dom element 
    element.value = value
    



    if (moment().get('hour') === hour.get('hour')){
        $(element).addClass('present')
    }
    if (moment().isAfter(hour)) {
        $(element).addClass('past')
    } else if (moment().isBefore(hour)){
        $(element).addClass('future')
    }
})

//TODO: this 2/25
$('.sections').on('click', 'button', function(e){
    //closest parent that text area shares
    const ta = $(e.target).closest('section')
        .find('textarea')
    console.log(ta)
    const id = ta.attr('id')
    const value = ta.val()
    console.log(id, value)
    //use id as key so i can use id of each textarea
    //then use value to grab actual text
    localStorage.setItem(id, value)
})
//the things we need - input
//console.log($('.saveBtn'))
//console.log($('.ta-block'))
//console log every button in array - pass function into each
//setting parameter through another this,
//$('.saveBtn').each(index, saveBtnEl) => console.log(saveBtnEl)
// console.log($(saveBtn))

//print clock
update()

function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do - hh:mm'))

}
setInterval(update, 1000)



