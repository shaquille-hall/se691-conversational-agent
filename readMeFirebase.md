# FIREBASE 

- # AUTHENTICATION
  - follow the link to the console (https://console.firebase.google.com/u/0/project/kobe-atmt/overview)
  - Under "BUILD" select "Authentication" and you can view the different accounts that have signed in and whether they are "A" (Apple) or "G" (Android)
  - ## User Manipulation
    - Scroll Over the User and next to User UID you can copy the User UID.   
    - Scroll Over the User and on the far right click on the three dots (...) and you can "Delete account", "Disable account", or "Reset password".
- # DATABASE 
  - follow the link to the console (https://console.cloud.google.com/firestore)
  - Under "BUILD" select "Firestore Database"
  - Conversations are stored under the Agent Name -> User -> MESSAGES.  
  - MESSAGES has the fields created/message_from/message_to/role_model/text
  -  # Delete Message or User Storage
      - To delete a message click on the message id and clikc on the three dots and select "Delete document" and then select "Start Delete"
      - To delete a user click on the three dots under the user and select "Delete Document"
      - DO NOT DELETE AN AGENT.  IF PROMPTED "DELETE COLLECTION" DO NOT SELECT IT
   - # Export Data for Analysis
      - follow the link to the console (https://console.firebase.google.com/u/0/project/kobe-atmt/overview)
      - select "Import/Export" on the left side
      - click on the blue "Export"
      - select "Export one or more collection groups"
      - Select "MESSAGES"
      - # Create a new bucket
        - Select "Browse"
        - Click on the + next to the search icon
        - Name Bucket and press Continue
        - Select region as us-central (there are different options but any will work) pres Continue
        - Select Standard then press "continue", "continue", and create.
      - Select bucket by pressing "Select" at bottom 
      - Press "EXPORT" to export database 
      - Once created Follow next instructions
    - # View Database
      - follow the link to BigQuery https://console.cloud.google.com/bigquery  

Video Demonstration (https://www.youtube.com/watch?v=3J1M1bSwgV8)
