# uber-clone
This is a small uber-clone. It was made to practice react-native. I used the following tools for this project:
* Google Places Api
* Directions API
* Distance Matric API
* React native elements toolkit
* Tailwind css
* Redux Toolkit

In the home screen, you will find an input that uses the Google Places API, to fetch the data of the places similar to the user input (autocomplete). This input value sets the origin of the user.
It also has validation (if you do not input a place, you can not select from the possible options):

![homescreen](https://user-images.githubusercontent.com/84020433/196061108-65b2f13d-6a86-4d1f-85df-9b21ce39faff.jpg)
![validationhome](https://user-images.githubusercontent.com/84020433/196061115-1292ed9c-1f50-4d5d-b719-cfbad8167c18.jpg)
![googleplacesautocomplete](https://user-images.githubusercontent.com/84020433/196061112-4fdc36bf-b45e-408f-bed3-b7875ad77415.jpg)

If you click on the "Get a ride" option button, you will navigate to the next screen, where you will find a fully functional map, provided by the react-native-maps API. 

In this screen you have another input that also uses the google places api to autocomplete the destination value.
There is also a hamburguer icon that allows you to navigate back to the home screen.

Finally when you select a destination, the map is updated with the distance calculation, as well as the price is shown in the screen.

![mapview](https://user-images.githubusercontent.com/84020433/196061162-4b915f04-fe4b-4728-ada0-0c7760775bf3.jpg)
![distance](https://user-images.githubusercontent.com/84020433/196061165-75abfb61-03c6-4ffa-942e-67c9d74ee79a.jpg)
![distancexl](https://user-images.githubusercontent.com/84020433/196061167-e071bcf0-de73-48af-bc2e-0f5db41ea09b.jpg)
