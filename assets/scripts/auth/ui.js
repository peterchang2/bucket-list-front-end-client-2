'use strict'

const store = require('../store.js')

const failure = function (FailureResponse) {
  $('.message-box').show(100)
  $('.message-box').html('Something Went Wrong, Try Again')
  $('.message-box').removeClass('success-message')
  $('.message-box').addClass('error-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const passDoesntMatch = function (FailureResponse) {
  $('.message-box').show(100)
  $('.message-box').html('Passwords Does Not Match')
  $('.message-box').removeClass('success-message')
  $('.message-box').addClass('error-message')
  setTimeout(function () {
    $('.message-box').fadeOut(300).empty()
  }, 5000)
}

const signInFailure = function (FailureResponse) {
  $('.message-box').show(100)
  $('.message-box').html('Email And Password Does Not Match, or Account Does Not Exist')
  $('.message-box').removeClass('success-message')
  $('.message-box').addClass('error-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const changePassFailure = function () {
  $('.message-box').show(100)
  $('.message-box').html('New Password Cannot Match Old Password')
  $('.message-box').removeClass('success-message')
  $('.message-box').addClass('error-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const signUpSuccess = function (signUpResponse) {
  $('.message-box').show(100)
  $('.message-box').html('You Signed Up Successfully')
  $('.sign-up-form').slideUp(200)
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('.logo').hide()
  $('.message-box').show(100)
  $('.user-name').html(`${signInResponse.user.email}'s Life and Dreams`)
  $('.message-box').html('You Signed In Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('.upload-section').addClass('block')
  $('.upload-section').removeClass('hidden')
  $('.sign-up-form').fadeOut(200)
  $('.sign-in-form').fadeOut(200)
  $('.chg-pass-btn').show()
  $('.sign-out-btn').show()
  $('.get-all-item-btn').show()
  $('.get-incomplete-item-btn').show()
  $('.get-completed-item-btn').show()
  $('.delete-image-btn').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
  setTimeout(function () {
    $('.message-box').fadeOut(300).empty()
  }, 3000)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.message-box').show(100)
  $('.message-box').html('You Changed Password Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('#change-password-form').slideUp(500)
  setTimeout(function () {
    $('.message-box').fadeOut(300).empty()
  }, 3000)
}

const signOutSuccess = function () {
  $('.logo').fadeIn(200)
  $('.message-box').show(100)
  $('.message-box').html('You Signed Out Successfully')
  $('.message-box').removeClass('error-message')
  $('.message-box').addClass('success-message')
  $('.user-name').empty()
  $('.chg-pass-btn').hide()
  $('.change-password-form').fadeOut(200)
  $('.get-image-by-id-form').fadeOut(200)
  $('.sign-out-btn').hide()
  $('.get-all-item-btn').hide()
  $('.get-completed-item-btn').hide()
  $('.get-incomplete-item-btn').hide()
  $('.upload-section').removeClass('block')
  $('.upload-section').addClass('hidden')
  $('.item-wall').empty()
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('#change-password-form').trigger('reset')
  setTimeout(function () {
    $('.message-box').fadeOut(200).empty()
  }, 3000)
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  changePassFailure,
  signInFailure,
  passDoesntMatch
}
