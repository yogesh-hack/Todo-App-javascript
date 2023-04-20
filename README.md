# Todo-App-javascript

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## Preview 

![Screenshot 2023-04-19 195710](https://user-images.githubusercontent.com/83384315/233151057-d05edf29-88bf-42fd-a8d9-3e843359ef35.png)

# Local Storage
Local storage is a web browser feature that allows you to store key-value pairs of data locally, on the user's device. The data stored in local storage is persistent, meaning it remains available even if the user closes their browser or restarts their device.

# Benefits of using local storage in web applications:

- `Data persistence`: Local storage allows you to store data in the user's browser, which means that the data persists even after the user closes the browser or navigates away from the site. This is useful for storing user preferences, shopping cart items, or other data that you want to preserve between visits.

- `Faster performance`: Local storage is generally faster than making a network request to fetch data from a server. This is because the data is stored locally on the user's computer, which means it can be retrieved much more quickly than data that needs to be fetched over the internet.

- `Improved user experience`: By storing data locally, web applications can provide a smoother and more responsive user experience. This is because the application can access data more quickly and doesn't need to wait for network requests to complete.

- `Reduced server load`: By storing data locally, web applications can reduce the load on their servers. This is because the application can retrieve data from local storage rather than making a request to the server every time it needs data.

- `Improved security`: Local storage is generally considered to be more secure than cookies, which can be easily intercepted and modified by attackers. Local storage is also subject to same-origin policy, which means that data can only be accessed by scripts from the same domain that created the data.

Overall, local storage is a useful tool for web developers that can help improve the performance and user experience of web applications. However, it's important to use local storage responsibly and to be mindful of the security implications of storing data locally on the user's computer.

```js
// Load tasks from local storage on page load
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
```

Here's what each part of the code does:

`localStorage.getItem('tasks')`: This retrieves the tasks item from the local storage. localStorage is a global object in the browser that allows you to store key-value pairs locally on the user's computer. 

`getItem()` is a method of the localStorage object that retrieves a value from the local storage based on a given key.

`JSON.parse()`: This converts the retrieved value from a JSON string to a JavaScript object. The getItem() method retrieves values from local storage as strings, so we need to convert it to an object using JSON.parse().

`|| []`: This returns an empty array if JSON.parse() returns a falsy value (e.g., null, undefined, or an empty string). This is useful when there are no tasks stored in the local storage, so we can initialize the tasks variable with an empty array instead of null or undefined.
