$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
}

//función popover


$(function () {
  $('.example-popover').popover({
    container:'body'
  })
})

//función Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.dropdown-toggle').dropdown()