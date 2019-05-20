Rand1 and Rand2 from the js file are a MD5 hash collision.

To get the first part of the flag you need to have two hidden input fields come to the same value when salted and hashed.

To get the second part, the username and password concatonated needs to equal itself MD5 Hashed.

To get the third part, the username and password concatonated and MD5 hashed needs to equal 'ba6e12df1edab45f11f70b547dba9959'

The source code for this can be found at: https://cherryblog.in/create_challenge/challenges/bug-hunter/index.php?source=1

There may be hints on the other pages. I have used an OCR to grab the text from the image on the "Other than hacking" page.

base page for challenge is: https://cherryblog.in/create_challenge/challenges/bug-hunter/index.php
