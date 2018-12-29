# Powder-Pal
Ski Resort Companion App

### Name of Student: Daniel Mace

### Name of Project: Powder Pal

### Project’s Purpose or Goal: 

Powder Pal is an interface that gives you real-time views of snow reports for ski resorts in your areas, lift deals you can purchase in advance and provide messaging for riders and drivers in your area looking to visit the same ski resort as you in order to promote carpooling, group deals and creating new friendships.

### Basic Development Specs:

- Enter a location and return a list of ski resorts with snow report information near that location (completed).
- Create and log into the site with a profile
- Post a message offering or looking for a ride to the ski resort.

### Resources

 - React, Create React App, Redux, React-Router, React-Materialize
 - Firebase, Google Geolocation API, Google Places API, Liftie.info API
 - oAuth support, potentially will integrate other packages for messaging

## Perspective

Powder Pal was envisioned originally as a way to car pool, but as I thought about potential users, I felt like people would rarely use the system to get or provide rides.  I decided the development plan didn't need to change to adjust to that as the system could still be used to help people negotiate meeting up at the resort to get discounted group deals.

#### Who is this app for?

Anyone who loves to ski but doesn't know enough people to save with group discounts every time they go.

### Concept

A user is greeted with a landing page that prompts for their location.  The query is sent to Google's Geolocation API which returns the user's coordinates.  These coordinate's are checked against a list stored in Firebase of the top 120+ resorts in the world and their coordinates using a routine developed by GeoDataSource.  By default, the list is filtered down to resorts within 300 miles of the user.  This new filtered list is dispatched and a chain of API calls are made to Liftie.info and Google Places to gather current information about the resorts presented as well as images.  A user can click on a resort to view finer details.

In further development, the resort-specific view will be the area that users can post for meeting up at a resort on a given day.

## Setup/Installation

```$git clone https://github.com/swampcamel/chatnoir
$npm i
$npm run start
```

### Support & Contact

Please contact dmacebeta@gmail.com with any questions or requests.

## License This software is licensed under the MIT License.
