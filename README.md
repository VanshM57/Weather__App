
### Key Files

- **`index.html`**: The main HTML file containing the structure of the app.
- **`style.css`**: Contains the styling for the app, including animations and responsive design.
- **`app.js`**: The main JavaScript file that handles API calls, DOM manipulation, and event handling.
- **`apikey.mjs`**: Stores the OpenWeatherMap API key (ignored by Git).
- **`apiurl.mjs`**: Stores the base URL for the OpenWeatherMap API.
- **`geoapikey.mjs`**: Stores the GeoDB Cities API key (ignored by Git).
- **`geoapiurl.mjs`**: Stores the base URL for the GeoDB Cities API.

## APIs Used

1. **OpenWeatherMap API**: Provides real-time weather data.
   - [API Documentation](https://openweathermap.org/api)

2. **GeoDB Cities API**: Provides city suggestions for user input.
   - [API Documentation](https://rapidapi.com/wirefreethought/api/geodb-cities)

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather
   ```

2. Add your API keys:
   - Create the following files in the project root:
     - `apikey.mjs`: Add your OpenWeatherMap API key.
       ```javascript
       const apikey = "your_openweathermap_api_key";
       export default apikey;
       ```
     - [apiurl.mjs](http://_vscodecontentref_/9): Add the OpenWeatherMap API base URL.
       ```javascript
       const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
       export default apiurl;
       ```
     - [geoapikey.mjs](http://_vscodecontentref_/10): Add your GeoDB Cities API key.
       ```javascript
       const geoapikey = "your_geodb_api_key";
       export default geoapikey;
       ```
     - [geoapiurl.mjs](http://_vscodecontentref_/11): Add the GeoDB Cities API base URL.
       ```javascript
       const geoapiurl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=";
       export default geoapiurl;
       ```

3. Open [index.html](http://_vscodecontentref_/12) in your browser to view the app.

## Usage

1. Enter a city name in the input field.
2. Select a city from the suggestions or press the "Get Weather" button.
3. View the weather details, including temperature, weather condition, humidity, and wind speed.
4. If the city is not found, an error message will be displayed.

## Screenshots

### Main Interface
![Main Interface](images/background.jpg)

### Weather Details
![Weather Details](images/clear.png)

### Error Message
![Error Message](images/404.png)

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/)
- [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities)
- Icons and images used in the project are for educational purposes.