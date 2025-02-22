# React Router Dom v6 - useParams undefined in nested routes

This repository demonstrates a common, yet subtle, error encountered when using the `useParams` hook in nested routes within React Router Dom v6.  The error occurs because `useParams` returns `undefined` before the component mounts.  Attempting to access route parameters before the component is fully mounted results in a runtime error.  This example shows how to effectively handle this scenario to avoid errors and ensure smooth data fetching.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`. 
4. Navigate to a route like `/users/1/profile`.  Observe the initial error and subsequent success after the component mounts.

## Solution

The solution involves properly checking if `useParams` returns a value before accessing any parameters.  This typically involves a conditional check within the `useEffect` hook with an empty dependency array to ensure the check occurs only once after the component mounts.