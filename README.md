# WDI 34 Students & Activities API

A JSON API for data about students and activities!

Each student can have many activities. Each activity can be done by many students.

Creation videos on youtube:
- [Part 1](https://www.youtube.com/watch?v=cw7vobpWAvs) - server setup, student schema and model, routes to get all students and to create a student
- [Part 2](https://www.youtube.com/watch?v=9jJNr2OIGAY) - routes to get one student by id and to update a student

## Data Brainstorm

### Students

- first name
- last name
- months of coding experience
- education level
- favorite clothing
- hometown
- current town
- class
- age
- coffee (likes coffee - true or false)
- num meals per day
- profile:
  - height, weight, hair color
- likesOutdoorActivities

### Activities
- name
- years of experience
- location address
- category (hobby, leisure)
- isOutdoor

## Routes  (Endpoints)

- `GET /api` list all routes

### RESTful Routes for Students

- `GET	/students`	 	  display a list of all students
- `POST	/students`	    create a new student
  - request body should include:
    - firstName
    - lastName
    - monthsOfCoding
    - hometown
    - currentTown
    - coffee
- `GET	/students/1`	  display a specific student
- `PUT	/students/1`	  update a specific student
- `DELETE	/students/1`  delete a specific student


### Restful routes for activities


- `GET	/activities`	 	  display a list of all activities
- `POST	/activities`	    create a new activity
- `GET	/activities/1`	  display a specific activity
- `PUT	/activities/1`	  update a specific activity
- `DELETE	/activities/1`  delete a specific activity

### Relationship Planning

1. Reference vs embedded?
  - reference so that there's one file for each thing
  - makes sense with many to many because we don't want to repeat embedded data a ton
  - and both have complex data
  - note that activities have information that might be student-specific (location address)

2. Will it be students first or activities?
  - GET /students/12/activities
    - more useful if looking by student more often
    - winning because of votes (particularly Brianna's) and activities not super specific
  - GET /activities/3294/students
    - more useful if looking by activity/team more often
    
### Nested Routes 

- `GET	/students/1/activities`	 	  display a list of all activities for a specific student
- `POST	/students/1/activities`	    create a new activity for a specific student
- `GET	/students/1/activities/1`	  display a specific activity for a specific student
- `PUT	/students/1/activities/1`	  update a specific activity for a specific student
- `DELETE	/students/1/activities/1`  delete a specific activity for a specific student
