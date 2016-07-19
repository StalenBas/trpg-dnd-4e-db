# Offline 4e Database #

This app can be used to reterives and locally stores entries from online 4e [D&D Compendium](http://www.wizards.com/dndinsider/compendium/database.aspx).
 <br/>
Stored entries can be exported, then browsed and searched using a Google-like index with multi-word term search, wildcast, exclusion, inclusion ("OR"), and even regular expression.

This is a fan-made project and does not come with copyrighted data.

## How To Download Data ##

1. You need an active [Dungeons & Dragons Insider subscription](http://ddi.wizards.com/) to retrieve data.
2. [Download](http://www.java.com/) and install Java (latest version 8 or above).
3. [Download](https://github.com/Sheep-y/trpg-dnd-4e-db/releases/) the downloader exe (Windows) or downloader jar (Linux/Mac).
4. Open a folder for the downloader, put it in, and run it.
   5. (Jar version) If the file is opened by a compression program, change system settings to let Java handles it, or open console and run "java -jar 4e_compendium_downloader.jar".
6. In the downloader, fill in DDI username and password, then click "Download".
   7. Download can be stopped and resumed any time.
   8. See in-downloader help for more details.
9. Once all data is downloaded, you can export the data to an HTML file, which can be opened in any browser.

## Development ##

A built script is included to compile everything into an executable jar.
Part of the build process uses the [CocoDoc](https://github.com/Sheep-y/CocoDoc/) app builder, which is bundled and must run in GUI.
Try to use 64 bits java runtime; 32 bits may stackoverfow on js minify, but won't affect functionality.

If you use an IDE, becareful not to export data to project folder.
Otherwise, it can take a long time for the IDE to scan all the data files.

<small>
Code, documentations, and related resources are open source and licensed under <a href="www.gnu.org/licenses/agpl.html‎">GNU AGPL v3</a>. <br/>
D&D and Dungeons & Dragons are trademarks of Wizards of the Coast LLC.
</small>