# This-Place-in-History
Navigate the streets with your cyber historian and discover areas near you that hold historical significance.

#### Overview
*This Place in History* is a mobile app that uses historical data pulled from the Internet to teach the user a brief history about the place they are standing.

#### Minimum viable product

- Presents a timeline you can scroll through highlighting historical events that took place near you
- View a heat map highlighting areas that have been more historically significant
- Can filter events by category, search for the nearest historical event, and save event timelines for later
- Keeps track of historical markers you have visited

#### Stretch Goals

- Add support for locations outside of Texas
- Users can "add themselves to history." A user can add a "historical event" that would be viewable by other users (but users could choose to filter out user-submitted events).
    - Set up user authentication and the ability for the user to add to the database, rather than just query it

#### Historic Sites Datasets
##### [Texas Historic Sites Atlas](https://atlas.thc.texas.gov/)

- Contains lists of courthouses, national register properties, state antiquities landmarks, historical markers, cemeteries, and museums in Texas
- More than 16,000 people, events and places have been thus commemorated with historical markers in Texas
- Has useful tags, like “Civil War” and “scientific topics,” as well as detailed descriptions (they come from the historical markers at each point)
- Data includes coordinates
- Raw data is available for download on their website by county

##### [National Register of Historic Places](https://www.nps.gov/subjects/nationalregister/data-downloads.htm)

- Contains data for all of U.S., but the data is not as interesting as detailed as the Texas Historic Sites Database

##### State-specific databases

- Google "<State Name> Historic Sites Database"
- The quality and format of databases varies, so I recommend starting with one state before moving on to others

#### Potential Mobile Application Frameworks

- [React Native](https://facebook.github.io/react-native/)
    - Uses JavaScript
    - Released by Facebook in 2015
- [Flutter](https://flutter.dev/)
    - Uses Dart
    - Released by Google in 2017

#### Potential NoSQL Databases

- [MongoDB](mongodb.com)
    - More advanced querying than Firebase
- [Firebase](https://firebase.google.com/)
    - Google's database solution
    - Works especially well with Flutter apps

#### Potential Map APIs

- [react-native-maps](https://github.com/react-native-community/react-native-maps)
    - Easy way to create maps with React Native apps, and includes many features, such as heat maps
- [Google Maps API](https://codelabs.developers.google.com/codelabs/google-maps-in-flutter/#0)
    - Easy to integrate into Flutter apps using the Google Maps Flutter plugin, but it also works for React Native apps
-	[Mapbox API](https://docs.mapbox.com/api/)
    - Very customizable, used by applications like Snapchat

#### Software

- [Git Bash](https://git-scm.com/downloads)
    - Necessary for working with command line Git on a Windows computer
- [Figma](https://www.figma.com/)
    - Free UX design tool that is completely web-based
- [Adobe XD](https://www.adobe.com/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAjwkdL6BRAREiwA-kiczGlKOD6-DASI9BUGIwQBgdAt33vydE4YxCgvMX5TDh2T5m9Trjq-jBoCFugQAvD_BwE:G:s&s_kwcid=AL!3085!3!315233774139!e!!g!!adobe%20xd!1641846436!65452675151)
    - More sophisticated UX tool, you can have one project for free
- [Visual Studio Code](https://code.visualstudio.com/)
    - Useful IDE with lots of plugins to make your development easier
- [Android Studio](https://developer.android.com/studio)
    - IDE for developing mobile applications
    - Includes Android emulator that you can run on your computer
#### Learning Resources
Look through all of these resources at the beginning of the semester!
- [How to be successful in ACM Projects](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit?usp=sharing)
-   [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
-	[Choosing between React Native and Flutter](https://hackr.io/blog/react-native-vs-flutter)
-	[Getting started with React](https://facebook.github.io/react-native/docs/getting-started)
-	[Getting started with Flutter](https://flutter.dev/docs/get-started/install)
-	[Comparing top databases](https://dzone.com/articles/firebase-vs-mongodb-which-database-to-use-for-your)
-	[Choosing between Map APIs](https://madappgang.com/blog/mapbox-vs-google-maps-choosing-a-map-for-your-app)
-	[Overview of making API calls](https://snipcart.com/blog/apis-integration-usage-benefits)
