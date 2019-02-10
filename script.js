var skin = 0;

/////

//Setting up the category references

  //ideally I would be able to sort through the existing files automatically and determine how many images are in each without any 
  //extensive preparation, yet at this early stage I decided to use a linked list to make sure the application functioned as intended

  //names of various folders
var categories = ['Asymmetry', 'CremonaITL', 'Ddd', 
                  'Essence', 'FertilePlains', 'ƒ(Products)', 'IterationsOfRoark', 'ImaginaryThings', 
                  'JewelryWindow', 'LaPistaDelPueblo', 'LITHOgraphs', 
                  'MoneyWalls', 'NobleCommissions', 'OpposingNature', 
                  'PrintedEditions', 'RetroDigital', 'Shock', 
                  'Tower100', 'Unreplicable', 'World', '漫画'];

var phrases = ['Bazaar tents line the crowded streets', 'The Brothers Amati and the echoes of Lombardy', 'Width, height, depth', 
'Oppressions, impressions, expressions', 'Historical foundations of urban art', 'under construction. . .', 'under construction. . .', 'Assorted experiments in playing god', 'Just admiring', 'Found details of lived-in styles', 
'Limestone plates with sprinkled rosin', 'Ubiquitous messages to direct profitable attention', 'Of chambers from various feudal societies', 'Proof that nature is unoriginal, you are not the one, and art is made in opposition to nature',
'Bound pages, lettering, posters, sleeves, motifs', 'Virtual atoms as carefully arranged colorful squares', 'Each piece here is meant to induce some internal response', 'Something special about this collection',
'Casual photographs of powerful persons and one-off events', 'Cultural desensitization and why the center of the world is the world itself', 'Whimsical pictures'];

  //linked list with number of images per folder updated before each commit
var tally = [55, 33, 132, 302, 33, 0, 0, 20, 22, 158, 36, 85, 78, 77, 243, 135, 22, 138, 79, 62, 57];

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
    $("body").css("background-image", "url(blackscape.png)");
    $("body").css("background-size", "cover");
    $("button").css("color", "white");
    $("button").css("background-color", "black");
    $("a").css("color", "whitesmoke");
    $("p").css("color", "whitesmoke");
    $("#console").css("color", "whitesmoke");
  }

  else if (skin == 1) {
    skin = 2;
    $("body").css("background-image", "url(redscape.png)");
    $("body").css("background-size", "cover");
  }

  else if (skin == 2) {
    skin = 3;
    $("body").css("background-image", "url(indigoscape.png)");
    $("body").css("background-size", "cover");
  }

  else if (skin == 3) {
    skin = 4;
    $("body").css("background-image", "url(whitescape.png)");
    $("body").css("background-size", "cover");
    $("button").css("color", "whitesmoke");
    $("button").css("background-color", "black");
    $("a").css("color", "black");
    $("p").css("color", "black");
    $("#console").css("color", "black");
  }
  else {
    skin = 0;
    $("body").css("background-image", "url(silverscape.png)");
    $("body").css("background-size", "cover");
  }
  
})