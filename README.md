# mapTilingProgram


## Instructions for Downloading Satellite Imagery
* Visit [this website](http://www.sasgis.org/download/) on Google Chrome or firefox and translate the page (On Chrome, click on the icon at the top left of your search bar, to the left of the the star icon used for bookmarking pages)
* Download the latest stable version by clicking on the link below the first bold header
* Extract the program and open the folder after downloading and run the program by clicking on `SASPlanet.exe` (No need to install)
* Once the program has launched, switch the imagery source by clicking the drop down menu at the top (the one that currently says `Satellite (Google Maps)` and switching it to `Bing Maps - satellite`
* On the toolbar at the top, below the operations drop down menu, click the box icon to use the region selection tool. You can click the little arrow beside it to choose the type of selection (rectangular, polygonal, etc.)
* Click once to start the selection, click a second time in a different location to stop the region selection. A pop up menu will appear, close this pop up menu.
* Zoom in to a closer zoom level and "explore" your rectangular selection at this zoom level (click and drag around the map). This will ensure the full quality images are downloaded to your computer. 
* Once you are done, click on the arrow beside the box icon, and select the `last selection` option. This should bring up a pop-up menu.
* In the window that just appeared, click on the `Stitch` option at the toolbar at the top. 
  * Select the folder you want your download to save to
  * Make sure the map is set to `Bing Maps - satellite`
  * Select an appropriate zoom level from the drop down menu. The total image size will be updated below the `Projection` drop down menu
  * Select `.dat` in the `Create georeferencing file` section
  * In the `Split Image` section, choose an appropriate number of tiles you would like to create. If you leave it as 1x1, only a single large image file will be exported.
* Once you are done selecting options, click the `start` button
* In the folder you exported to, there will be .dat files containing the four corner coordinates for each image tile. Note that latitude and longitude might be switched in these coordinates
