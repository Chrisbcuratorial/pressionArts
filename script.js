var skin = 0;

/////

//Setting up the category references

  //ideally I would be able to sort through the existing files automatically and determine how many images are in each without any 
  //extensive preparation, yet at this early stage I decided to use a linked list to make sure the application functioned as intended

  //names of various folders
var categories = ['ActualInstruments', 
                  //'CommonBeauty',
                  'Ddd', 
                  'Essence', 
                  'FertileCoasts', 
                  'FeudalChambers', 
                  'JewelryWindow', 
                  'LITHOgraphs', 
                  'MoneyWalls', 
                  'OfRunways', 
                  'PrintedEditions', 
                  'Shock', 
                  'SpecialPhotos', 
                  'TextileCarpetRugs', 
                  'Tower100', 
                  'World'];

var phrases = ['The instrument itself as art', 
                //'You are not the one',
                '3-dimensional art', 
                'Opression > impression > expression',
                'Foundational urban art', 
                'Noble society, feudal society', 
                'Just admiring', 
                'Etchings, prints, lithographs', 
                'Posters, advertisements, frames', 
                'Art as fashion and/or fashion as art', 
                'From books, newspapers & texts', 
                'This section is forbidden', 
                'Photos with some added value', 
                'Bazaar tents line the streets', 
                'Something special about these', 
                'Real art world art'];

  //linked list with number of images per folder updated before each commit
var tally = [
            //ActualInstruments
            36, 
            //CommonBeauty
            ////75,
            //Ddd
            86, 
            //Essence
            240, 
            //FertileCoasts
            29, 
            //FeudalChambers
            47, 
            //JewelryWindow
            17, 
            //LITHOgraphs
            20, 
            //MoneyWalls
            55, 
            //OfRunways
            18, 
            //PrintedEditions
            108, 
            //Shock
            18, 
            //SpecialPhotos
            36, 
            //TextileCarpetRugs
            17, 
            //Tower100
            72, 
            //World
            41];

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
    $("body").css("background-color", "black");
    $("button").css("color", "white");
    $("button").css("background-color", "black");
    $("#console").css("color", "white");
  }
  else {
    skin = 0;
    $("body").css("background-color", "white");
    $("button").css("color", "black");
    $("button").css("background-color", "white");
    $("#console").css("color", "black");
  }
})