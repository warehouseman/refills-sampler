# refills-sampler
A compendium of pattern, component and type system examples to showcase the functionality of [warehouseman:meteor-refills](https://github.com/warehouseman/meteor-refills).  Derived from [thoughtbot's](http://thoughtbot.com/) [Refills sampler](http://refills.bourbon.io/)

## Installation

     cd /home/yourself/projects
     git clone https://github.com/warehouseman/meteor-refills
     git clone https://github.com/warehouseman/refills-sampler
     #
     cd refills-sampler
     mkdir -p packages
     meteor                            #  **Will fail!**   Hit <ctrl-c>
     ln -s /home/yourself/projects/meteor-refills packages/warehouseman\:meteor-refills
     meteor add  warehouseman:meteor-refills
     meteor

