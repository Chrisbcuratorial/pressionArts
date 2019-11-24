var skin = 2;

/////

//Setting up the category references

  //ideally I would be able to sort through the existing files automatically and determine how many images are in each without any
  //extensive preparation, yet at this early stage I decided to use a linked list to make sure the application functioned as intended

  //names of various folders
var categories = ['Asymmetry',
                  'CremonaEchoes',
                  'Ddd',
                  'Essential',
                  'FertilePlains',
                  'JewelryWindow',
                  'LITHOgraphs',
                  'NobleCommissions',
                  'PrintedEditions',
                  'RareImages',
                  'Shocking',
                  'Tower100',
                  'VirtualRunway',
                  'World',
                  '漫画'];

var phrases = ['Bazaar tents line weekend streets',
               'The Brothers Amati and their impact',
               'Width + height + depth',
               'Thesis: oppression, impression, expression',
               'Foundational urban art',
               'Just admiring',
               'Rosin-sprinkled limestone plates',
               'Chambers of physical receipts',
               'On pages, with text or near it',
               'Casual photos are the rarest',
               'Your reaction as the art',
               'Minimal yet special for it',
               'Found details in local styles',
               'Cultural desensitization',
               'Whimsical pictures'];

  //linked list with number of images per folder updated before each commit
var tally = [86, 41, 198, 404, 51, 33, 76, 121, 428, 94, 58, 221, 225, 122, 78];

/////

//Function that displays the image contents of the category that the user has chosen

function imageDisplay(name) {

  //determining linked list position of the catgory
  listCursor = categories.indexOf(name);
  console.log(listCursor);
  //determining the number of images associated with this category at position listCursor
  numberOfImages = tally[listCursor];
  console.log(numberOfImages);
  //setting an image cursor that will iterate negatively until (and including) 1
  NOIparallel = numberOfImages;

  //Because images are iteratively named (and image hunting missions typically contain similar images), I built an array to randomly pull numbers from
  //until it is depeleted.
  randomizer = [];
  while (NOIparallel > 0) {
    randomizer.push(NOIparallel);
    NOIparallel -= 1;
  }

  //clear out console elements every time a new category is chosen
  $('#console').empty();

  $("#console").append('<div id="phrase" style="width: 100%; text-align: center; letter-spacing: 2px;">' + phrases[listCursor] + '</div>');

  //appends each image in the chosen category to the console; exhausts randomizer array until there are no units left
  while (randomizer.length > 0) {
    imageCursor = randomizer[Math.round(randomizer.length*Math.random())];
    randomizer.splice(randomizer.indexOf(imageCursor), 1);
    console.log(randomizer);
    //without this, there would always be 1 image that showed up as "image not defined" with a console error
    if (imageCursor != undefined) {
      $('#console').append('<div class="artwork"><img width="100%" src="foundARTs/' + name + '/' + imageCursor + '.jpg" alt="image ' + imageCursor +'"></div>');
    }
  }
}

//Creates buttons for users to select a category at a time
//Click listener to execute the imageDisplay function at the click of a specific category button
for (category in categories) {
    $('#buttons').append('<div><a onclick="return false;" style="letter-spacing: 2px;" href=# class="category" id="' + categories[category] + '">' + categories[category] + '</a></div>');
}

$('a.category').click(function() {
  var id = $(this).attr('id');
  imageDisplay(id);
})

$('#skins').click(function() {
  if (skin == 0) {
    skin = 1;
    $("#logo").attr("src", "pressionArtsr.png")
    $("body").css("background-image", "url(redscape.png)");
    $("body").css("background-size", "cover");
    $("button").css("color", "white");
    $("button").css("background-color", "black");
    $("a").css("color", "black");
    $("p").css("color", "black");
    $("#console").css("color", "black");
  }
  else if (skin == 1) {
    skin = 2;
    $("#logo").attr("src", "pressionArts.png");
    $("body").css("background-image", "url(wavescape.png)");
    $("body").css("background-size", "cover");
    $("button").css("color", "whitesmoke");
    $("button").css("background-color", "black");
    $("a").css("color", "black");
    $("p").css("color", "black");
    $("#console").css("color", "black");
  }
  else {
    skin = 0;
    $("#logo").attr("src", "pressionArts.png");
    $("body").css("background-image", "url(indigoscape.png)");
    $("body").css("background-size", "cover");
    $("button").css("color", "black");
    $("button").css("background-color", "white");
    $("a").css("color", "whitesmoke");
    $("p").css("color", "whitesmoke");
    $("#console").css("color", "whitesmoke");
  }

})
