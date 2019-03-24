/** way_declaration_document.js - Personal presentation program for way declaration documents
  *
  *   “Summoned by a `script` tag in each way declaration document of the waycast,
  *   this program runs on the client side — in the waycast reader’s Web browser —
  *   where it manipulates the DOM of the way declaration.”
  *     — http://reluk.ca/project/wayic/web/doc.task § configuration of a waycast
  *
  *   This file has been dedicated to the public domain under a CC0 licence.  Further details at bottom.
  */
'use strict';
console.assert( (eval('var _tmp = null'), typeof _tmp === 'undefined'),
  'Failed assertion: Strict mode is in effect' );
  // http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code
  // Credit Noseratio, https://stackoverflow.com/a/18916788/2402790
( function()
{


    /** Runs this program.
      *
      *     @param dirWayic (string) Location of the wayic projects directory in URL form,
      *       with a trailing slash '/'.
      */
    function run( dirWayic )
    {
      // Show the way clearly, using `wayic.read` as the Web presenter
      // http://reluk.ca/project/wayic/read/manual.task § installation § personal presentation program
      // --------------------
        loadProgram( dirWayic + 'read/readable.js', ( _Event ) =>
        {
            const readable = wayic_read_readable;
            if( readable === undefined ) return; // Program failed

            let wasRequestFileSchemed = false;
            let wasRequestViaLocalWeb = false;
            const docLoc = document.URL;
            if( docLoc.startsWith( 'file:' )) wasRequestFileSchemed = true;
            else if( docLoc.startsWith( 'http://' )
              && (   docLoc.startsWith( 'halfpenny/',7 )
                  || docLoc.startsWith( 'server/',   7 ))) wasRequestViaLocalWeb = true;

          // ? With constraints enforced
          // ---------------------------
            readable.setEnforceConstraints(
                // true                  // Yes
                   wasRequestFileSchemed // Only for me, testing locally via the file system
                // wasRequestViaLocalWeb // Only for me, testing locally via the Web server
                // false                 // No
              );

          // ? With dark lighting for my Chrome test browser
          // --------------------
            const toDarkenChrome =
                // true                  // Yes
                // wasRequestFileSchemed // Only for me, testing locally via the file system
                // wasRequestViaLocalWeb // Only for me, testing locally via the Web server
                   false                 // No
              ;
            if( toDarkenChrome ) readable.setLightingStyle( 'neon' );
              // Till I learn how to darken Chrome more directly, e.g. by its own settings

          // -----
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


// This file has been dedicated by its author(s) to the public domain.  To the extent possible
// by law, the author(s) have waived all of their copyright and related or neighbouring rights to
// this file under the terms of CC0 1.0.  http://creativecommons.org/publicdomain/zero/1.0/
// The author(s) are:
//
//     Michael Allan, mike@reluk.ca, http://reluk.ca/
//
// Other authors who make further, substantial contributions to this file, and who wish to dedicate
// their contributions to the public domain, should append their names to the list above.
