/** way_declaration_document.js - Personal presentation program for way declaration documents
  *
  *   “Summoned by a `script` element in each way declaration document of the waycast,
  *   this program runs on the client side — in the waycast reader’s Web browser —
  *   where it manipulates the DOM of the way declaration.”
  *     — http://reluk.ca/project/proto-wayic/web/doc.task § configuration of a waycast
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


    let wasRequestFileSchemed = false;

    let wasRequestViaLAN = false;

        {
            const docLoc = document.URL;
            if( docLoc.startsWith( 'file:' )) wasRequestFileSchemed = true;
            else if( docLoc.startsWith( 'http://' )
              && (   docLoc.startsWith( 'halfpenny/',7 )
                  || docLoc.startsWith( 'server/',   7 ))) wasRequestViaLAN = true;
        }



    /** Runs this program.
      *
      *     @param relukDir (string) Location of the `reluk.ca` projects directory in URI reference
      *       form.  See `URI-reference`, https://tools.ietf.org/html/rfc3986#section-4.1
      */
    function run( relukDir )
    {
        // http://reluk.ca/project/proto-wayic/read/manual.task § basic use § personal presentation program
        summonScript( relukDir + 'proto-web/client_side.js', ( _Event ) =>
        {
            const CSide = window.ca_reluk_web_CSide; // [WA]
            if( CSide === undefined ) return; // Script failed

          // ? With constraints enforced
          // ---------------------------
            CSide.setEnforceConstraints(
                // true                  // Yes
                   wasRequestFileSchemed // Only for me, testing via my local file system
                // wasRequestViaLAN      // Only for me, testing via my local area network
                // false                 // No
              );

          // -----
            summonScript( relukDir + 'proto-wayic/read/readable.js', ( _Event ) =>
            {
                const WayDecDoc = window.ca_reluk_wayic_read_WayDecDoc; // [WA]
                if( WayDecDoc === undefined ) return; // Script failed

                start_layout( WayDecDoc );
            });
        });
    }



    /** Starts showing the way clearly using `proto-wayic.read` as the Web presenter.
      *
      *     @param WayDecDoc (Object) The public interface of the presentation program.
      *       http://reluk.ca/project/proto-wayic/read/readable.js
      */
    function start_layout( WayDecDoc )
    {
      // ? With dark lighting for my Chrome test browser
      // --------------------
        const toDarkenChrome =
            // true                  // Yes
            // wasRequestFileSchemed // Only for me, testing via my local file system
            // wasRequestViaLAN      // Only for me, testing via my local area network
               false                 // No
          ;
        if( toDarkenChrome ) WayDecDoc.setLightingStyle( 'neon' );
          // Till I learn how to darken Chrome more directly, e.g. by its own settings

      // -----
        WayDecDoc.start();
    }



    /** Requests the loading of another JavaScript program or library into the present document.
      *
      *     @param loc (string) Location of the program or library in URI reference form.
      *       See `URI-reference`, https://tools.ietf.org/html/rfc3986#section-4.1
      *     @param callback (Function) What to call when the script loads, or null to call nothing.
      */
    function summonScript( loc, callback = null )
    {
        const s = document.body.appendChild(
          document.createElementNS( 'http://www.w3.org/1999/xhtml', 'script' ));
        s.setAttribute( 'src', loc );
        if( callback !== null ) s.addEventListener( 'load', callback );
    }



////////////////////

    run(
      'http://reluk.ca/project/'
   // '/home/mike/var/deploy/test/' // TEST purposes only
      );

}() );


/** NOTE
  * ----
  *  [WA] · Without the `window.` accessor, the attempt to reference an undefined property would itself
  *         throw an exception, needlessly cluttering up the console.
  */


// This file has been dedicated by its author(s) to the public domain.  To the extent possible
// by law, the author(s) have waived all of their copyright and related or neighbouring rights to
// this file under the terms of CC0 1.0.  http://creativecommons.org/publicdomain/zero/1.0/
// The author(s) are:
//
//     Michael Allan, mike@reluk.ca, http://reluk.ca/
//
// Other authors who make further, substantial contributions to this file, and who wish to dedicate
// their contributions to the public domain, should append their names to the list above.
