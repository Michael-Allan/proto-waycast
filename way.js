/**
  * way.js - My personal configuration script for way declaration documents (way.xht)
  */
'use strict';
( function()
{


    /** Appends a *script* element to the document *body*.
      *
      *     @param src (string) The value of the *src* attribute.
      */
    function appendScript( src )
    {
        const s = document.createElementNS( NS_HTML, 'script' );
        s.setAttribute( 'src', src );
        document.body.appendChild( s );
    }



    /** Configures the present document.
      */
    function configure()
    {
        const dirWP = 'http://reluk.ca/project/wayic/'; // wayic projects directory
        appendScript( dirWP + 'read/readable.js' );
    }



    /** The XML namespace of HTML.
      */
    const NS_HTML = 'http://www.w3.org/1999/xhtml';



////////////////////

    configure();

}() );
