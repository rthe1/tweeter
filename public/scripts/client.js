/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {

  // Fake data taken from initial-tweets.json

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


  const renderTweets = function (tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      $('#tweet').append(createTweetElement(tweet));
    }
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

  const createTweetElement = function (tweet) {
    let $tweet = `
<article class="tweet-placeholder">
<div class="tweet-con-top">
    <div class="tweet-con-top-left">
      <img width="50px" height="50px"
        src=${tweet.user.avatars}>
      <h5 class="username">${tweet.user.name}</h5>
    </div>
    <!--space between-->
    <h5 class="handle">${tweet.user.handle}</h5>
  </div>
  <!--Top Tweet Con END-->


  <div class="tweet-con-mid">
    <h4>${tweet.content.text}</h4>
  </div>


  <div class="tweet-con-bottom">
    <div class="tweet-con-bottom-left">
      <h6 class="time-ago">${timeago.format(tweet.created_at)}</h6>
    </div>
    <!--space between-->
    <div class="tweet-con-bottom-right">
      <i class="fa-solid fa-flag hovered"></i>
      <i class="fa-solid fa-retweet hovered"></i>
      <i class="fa-solid fa-heart hovered"></i>
    </div>
  </div>
  
    
    `
    // ...
    return $tweet;
  }

  renderTweets(data);


  $('#tweet-form').submit(function (event) {
    
    event.preventDefault();

    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: (data) => {
        console.log('this request succeeded and here\'s the data', data);
      },
      error: (error) => {
        console.log('this request failed and this was the error', error);
      }
    });



  })

 
})