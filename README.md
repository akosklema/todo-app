# Frontend Mentor - Todo app

This is a solution to the [Todo app on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW) challange.

## Project description

A simple todo web app, where the users can create and manage their todos.

### **Roles**

#### **User**
Every user has the same privileges, there are no authentication methods.
  - UI related functionalities
    - view the optimal layout for the app depending on their device's screen size
    - toggle between light and dark mode
  - Todo related functionalities
    - create a todo
    - delete a todo
    - change the status of a todo
    - delete all completed todo
    - filter the todos based on status
    - drag and drop the todos to reorder them

### **Entities**
#### **Todo**
  - id: integer (based on the creation date)
  - content: string
  - status: enum(active, completed)
  - place: integer

### **Technical details**

The project is JavaScript single page application, but it was built without a client-side library or framework. I created two [Webpack](https://webpack.js.org/) configuration, one for develpoment, which sets up a development server, and one for production, which optimizes the bundle of the source code. For styling I used CSS Modules, so the CSS classes are scoped to the given component. To handle the state of the todos, a simple JavaScript array was used as a global in-memory store. The UI theme and the todos are stored in the browser's local storage.

### **Links**

- Live Site URL: [https://todo-app-99432.firebaseapp.com/](https://todo-app-99432.firebaseapp.com/)

### **To run it locally**

1. Clone or download this repository
2. Install the dependecies:
```sh
$ npm install
```
3. Run the application in development mode:
```sh
$ npm start
```
The app will start on port: 3000, but You can change it in the Webpack config.