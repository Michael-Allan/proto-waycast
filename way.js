/** way.js - Personal configuration program for my way declaration documents
  *
  *   This program runs once for each way declaration document (way.xht) in my waycast.
  *   Together with the style sheet way.css, it configures the web view of the document.
  *   Details: http://reluk.ca/project/wayic/cast/doc.task § Personal configuration
  */
'use strict';
( function()
{


    /** Runs this program, configuring the view of the document.
      *
      *     @param dirWayic (string) Location of the wayic projects directory in URL form,
      *       with a trailing slash '/'.
      */
    function run( dirWayic )
    {
      // Make the document readable on the web, transforming it with wayic.read.readable
      // -------------------------------------
        loadProgram( dirWayic + 'read/readable.js', ( _Event ) =>
        {
            let wasRequestFileSchemed = false;
            let wasRequestViaLocalWeb = false;
            const docLoc = document.URL;
            if( docLoc.startsWith( 'file:' )) wasRequestFileSchemed = true;
            else if( docLoc.startsWith( 'http://obsidian/' )) wasRequestViaLocalWeb = true;

          // ? With constraints enforced
          // ---------------------------
            wayic.read.readable.setEnforceConstraints(
                // true                  // Yes
                   wasRequestFileSchemed // Only for me, testing locally via the file system
                // wasRequestViaLocalWeb // Only for me, testing locally via the web server
                // false                 // No
              );

          // ? With dark lighting for my Chrome test browser
          // --------------------
            const toDarkenChrome =
                // true                  // Yes
                // wasRequestFileSchemed // Only for me, testing locally via the file system
                // wasRequestViaLocalWeb // Only for me, testing locally via the web server
                   false                 // No
              ;
            if( toDarkenChrome ) wayic.read.readable.setLightingStyle( 'neon' );
              // Till I learn how to darken Chrome more directly, e.g. by its own settings

          // Start the transformer
          // ---------------------
            wayic.read.readable.start();
        });
    }



/// ====================================================================================================


    /** Requests that another program load.
      *
      *     @param loc (string) Location of the program in URL form.
      *     @param callback (Function) What to call when the program loads, or null to call nothing.
      */
    function loadProgram( loc, callback = null )
    {
        const s = document.body.appendChild(
          document.createElementNS( 'http://www.w3.org/1999/xhtml', 'script' ));
        s.setAttribute( 'src', loc );
        if( callback !== null ) s.addEventListener( 'load', callback );
    }



/// ================

    run(
      'http://reluk.ca/project/wayic/'
   // '/home/mike/var/deploy/wayic/test/' // TEST purposes only
      );

}() );
