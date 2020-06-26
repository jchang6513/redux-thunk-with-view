This project is a practice of using extra arguments to control view state.

### Problem
In redux, we will dispatch actions to control our state. But once we put the state related to view components such as loading, toast message or pop-up modal, the event log will become very complex and lengthy. How to reduce the lengthy log?

### My idea
Of course we can simply use tools filtering the log, but this is not what we are going to do here. We will declare a object named `viewStates` to store states that are only related to view and independent with business logic. We then pass the `viewStates` throw the redux-thunk middleware, thus every action creators can modified the view states without dispatch action.

This project is a simple attempt. To make `viewStates` more operational, there should be a getter and setter for each state. And also need to make sure there will be only one instance of `viewStates`. ...
