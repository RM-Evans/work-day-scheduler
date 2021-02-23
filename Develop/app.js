
// $('#currentDay').html(update)
//print clock
update()

function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do - hh:mm'))

}
setInterval(update, 1000)


//let rightNow = new Date()

