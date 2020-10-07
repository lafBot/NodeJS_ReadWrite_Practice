Accepts statements and console.logs them or adds to another file based on user inputted path.

### Step 1:
ex:
$ node step1.js one.txt
returns: This is file one.

ex:
$ node step1.js huh.txt
Error Err msg

### Step 2:
ex:
$ node step2.js one.txt
This is file one.

ex:
$ node step2.js https://www.google.com
<!doctype html><html ...

ex:
$ node step2.js https://www.rithmschool.com/no-such-path
Error: Err msg

### Step 3:
ex:
$ node step3.js one.txt
This is file one.

ex:
$ node step3.js https://www.google.com
<!doctype html><html ...

ex:
$ node step3.js --out new.txt one.txt
$ # no output, but new.txt contains contents of one.txt

ex:
$ node step3.js --out new.txt  https://www.google.com
$ # no output, but new.txt contains google's HTML

ex:
$ node step3.js --out /no/dir/new.txt one.txt
$ Error: Err msg