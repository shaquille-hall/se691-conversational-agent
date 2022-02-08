# Text Mining
Files in this directory manage our ability to scrape data from the web to use as responses in the conversational agent. We parse the data sentence by sentence, extracting useful keywords from each sentence. Then we convert each sentence to first person point of view if necessary before dumping to a csv file of keywords:sentence. Barack_Obama.csv is an example file.

### web_scraper.py
This is the entry point of the folder. It executes the scraper functionality and converter when necessary. At present it only handles Wikipedia articles, but can be extended to handle other raw html content. 


### pov_converter.py
This module converts third person text to first person text. It is a manual conversion due to current lack of open source tooling to handle this problem. 

### articles.py
The list of urls to scrape. Conventional standards likely would have been to use a ,json file, but this was easier at the time. 

## Build and Run
Because this is a standalone python3 command line program, execution is one line. **Note** this module makes external api calls, and internet connection is required.

To enable pov conversion (default behaviour): ```python3 web_scraper.py``` 

To disable pov conversion: ```python3 web_scraper.py --no-enable-pov-converter``` 

## Dependencies
Python3 - I ran Python 3.9.9 and can only confirm that version works. As such, when installing the below dependencies prefer pip3 **not** pip.

* [Inflect](https://pypi.org/project/inflect/)
* [Spacy](https://spacy.io/)
* [Numpy](https://numpy.org/doc/stable/index.html)
* [Gender Guesser](https://pypi.org/project/gender-guesser/)
* [Wikipedia](https://pypi.org/project/wikipedia/)



## Future Work
Some tools may have been helpful while building this module but unfortunately they weren't available at the time. It be useful to reevaluate them at a later date. 

*[Grammarly](https://developer.grammarly.com/docs/)
*[Sapling](https://sapling.ai/)
*[Google LaMDA](https://blog.google/technology/ai/lamda/)

