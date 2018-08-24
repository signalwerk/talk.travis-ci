#!/bin/sh

 if grep "fuck" deck.mdx
 then
     # code if found
      exit 1
 else
     # code if not found
      exit 0
 fi
