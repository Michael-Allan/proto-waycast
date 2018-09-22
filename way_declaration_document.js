/** way_declaration_document.js - Personal configuration program for my way declaration documents
  *
  * This program, together with style sheet way_declaration_document.css,
  * configures the web view of each way declaration document in my waycast.
  * Details: http://reluk.ca/project/wayic/cast/doc.task § Configuration of the waycast
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
      // Make the document readable on the Web, transforming it with wayic.read
      // -------------------------------------
        loadProgram( dirWayic + 'read/readable.js', ( _Event ) =>
        {
            const readable = wayic_read_readable;
            if( readable === undefined ) return; // Program failed

            let wasRequestFileSchemed = false;
            let wasRequestViaLocalWeb = false;
            const docLoc = document.URL;
            if( docLoc.startsWith( 'file:' )) wasRequestFileSchemed = true;
            else if( docLoc.startsWith( 'http://obsidian/' )) wasRequestViaLocalWeb = true;

          // ? With constraints enforced
          // ---------------------------
            readable.setEnforceConstraints(
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
            if( toDarkenChrome ) readable.setLightingStyle( 'neon' );
              // Till I learn how to darken Chrome more directly, e.g. by its own settings

          // Start transforming
          // ------------------
            readable.start();
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
